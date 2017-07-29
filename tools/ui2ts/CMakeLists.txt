cmake_minimum_required(VERSION 3.5)

project(base)

ADD_DEFINITIONS(
    -DMACOS -g -Wunused-variable -Wunused-parameter -Wunused-function -Wunused
    -Wno-deprecated -Woverloaded-virtual -Wwrite-strings
)

add_executable(ui2ts ui2ts.cc pugixml.cpp)
target_link_libraries(ui2ts ${SYS_LIBS}) 
