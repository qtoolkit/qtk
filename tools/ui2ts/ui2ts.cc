#include <string>
#include "pugixml.hpp"

using std::string;
using namespace pugi;

static int Convert(xml_node& node, FILE* writer, int level);
static const char* spaces = "                            ";

static size_t count_attribute(xml_node& node) {
    size_t count = 0;
    for (xml_attribute attrib = node.first_attribute(); attrib; attrib = attrib.next_attribute()) {
        count ++;
    }
    return count;
}

static const char* get_name_in_attr(xml_node& node) {
    for (xml_attribute attrib = node.first_attribute(); attrib; attrib = attrib.next_attribute()) {
        if(strstr(attrib.name(), "name")) {
            return attrib.value();
        }
    }

    return NULL;
}

static bool has_tag(xml_node& node, const char* tag) {
    for(xml_node iter = node; iter; iter = iter.next_sibling()) {
        if(strcmp(iter.name(), tag) == 0) {
            return true;
        }
    }

    return false;
}

static void ConvertElement(xml_node& node, FILE* writer, int level) {
    const char* name = node.name(); 
    size_t attrs_nr = count_attribute(node);
    xml_node first = node.first_child();

    fwrite(spaces, level, 1, writer);
    if(strcmp(name, "property") == 0) {
        fprintf(writer, "\"%s\": {\n", get_name_in_attr(node));
    } else if(strcmp(name, "widget") == 0 || strcmp(name, "action") == 0) {
        fprintf(writer, "{\n");
    } else {
        fprintf(writer, "\"%s\": {\n", name);
    }
    if(attrs_nr) {
        for (xml_attribute attrib = node.first_attribute(); attrib; 
                attrib = attrib.next_attribute()) {
            if(strcmp(attrib.name(), "name") == 0 && strcmp(name, "property") == 0) {
                continue;
            }
            fwrite(spaces, level+1, 1, writer);
            fprintf(writer, "\"%s\":\"%s\",\n", attrib.name(), attrib.value());
        }
    }

    if(first) {
        Convert(first, writer, level+1); 
    }

    fwrite(spaces, level, 1, writer);
    fprintf(writer, "},\n");
}

static string escape_str(const char* value) {
    string str;
    const char* p = value;
    while(*p) {
        if(*p == '\"') {
            str += '\\';
        }
        str += *p;
        p++;
    }

    return str;
}

static void write_key_value(FILE* writer, const char* key, const char* value) {
    if(strcmp(key, "string") == 0 || strcmp(key, "class") == 0 
            || strcmp(key, "enum") == 0) {
        fprintf(writer, "\"%s\":\"%s\",\n", key, escape_str(value).c_str());
    }else{
        fprintf(writer, "\"%s\":%s,\n", key, value);
    }
}

static int Convert(xml_node& node, FILE* writer, int level) {
    if(!node) {
        return 0;
    }

    for(xml_node iter = node; iter; iter = iter.next_sibling()) {
        if(iter.type() == node_element) {
            const char* name = iter.name();
            if(strcmp(name, "widget") == 0 
                    || strcmp(name, "addaction") == 0
                    || strcmp(name, "attribute") == 0
                    || strcmp(name, "action") == 0) {
                continue;
            }
            if(iter.text()) {
                fwrite(spaces, level, 1, writer);
                write_key_value(writer, iter.name(), iter.text().get());
            } else {
                ConvertElement(iter, writer, level+1);
            }
        }
    }

    if(has_tag(node, "action")) {
        fwrite(spaces, level, 1, writer);
        fprintf(writer, "\"actions\" : [\n");  
        for(xml_node iter = node; iter; iter = iter.next_sibling()) {
            if(iter.type() == node_element) {
                const char* name = iter.name();
                if(strcmp(name, "action") == 0) {
                    ConvertElement(iter, writer, level+1);
                }
            }
        }
        fwrite(spaces, level, 1, writer);
        fprintf(writer, "],\n");
    }
    
    if(has_tag(node, "addaction")) {
        fwrite(spaces, level, 1, writer);
        fprintf(writer, "\"addactions\" : [\n");  
        for(xml_node iter = node; iter; iter = iter.next_sibling()) {
            if(iter.type() == node_element) {
                const char* name = iter.name();
                if(strcmp(name, "addaction") == 0) {
                    fwrite(spaces, level+1, 1, writer);
                    fprintf(writer, "\"%s\",\n", name);
                }
            }
        }
        fwrite(spaces, level, 1, writer);
        fprintf(writer, "],\n");
    }


    if(has_tag(node, "widget")) {
        fwrite(spaces, level, 1, writer);
        fprintf(writer, "\"widgets\" : [\n");  
        for(xml_node iter = node; iter; iter = iter.next_sibling()) {
            if(iter.type() == node_element) {
                const char* name = iter.name();
                if(strcmp(name, "widget") == 0) {
                    ConvertElement(iter, writer, level+1);
                }
            }
        }
        fwrite(spaces, level, 1, writer);
        fprintf(writer, "],\n");
    }

    return 0;
}

int main(int argc, char* argv[]) {
    if(argc != 2) {
        printf("Usage: %s name\n", argv[0]);
        return 0;
    }else{
        xml_document doc;
        string name = argv[1];
        string ui_filename = name + ".ui"; 
        string js_filename = name + ".ts";

        xml_parse_result result = doc.load_file(ui_filename.c_str());

        if(!result.status) {
            FILE* writer = fopen(js_filename.c_str(), "w+");
            xml_node node = doc.first_child();
            if(writer) {
                fprintf(writer, "export var %sJson = {\n", name.c_str());
                Convert(node, writer, 1);
                fprintf(writer, "};\n");
                fclose(writer);
            }
            printf("%s ==> %s\n", ui_filename.c_str(), js_filename.c_str());
        }else{
            printf("load file failed:%s\n", ui_filename.c_str());
        }

        return 0;
    }

    return 0;
}
