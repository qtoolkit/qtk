var g_ui_mainwindow = {
  "ui": {
   "version":"4.0",
   "class":"MainWindow",
    "layoutdefault": {
     "spacing":"6",
     "margin":"11",
    },
    "resources": {
    },
    "connections": {
    },
   "widgets" : [
    {
     "class":"QMainWindow",
     "name":"MainWindow",
      "geometry": {
        "rect": {
         "x":0,
         "y":0,
         "width":484,
         "height":329,
        },
      },
      "windowTitle": {
       "string":"MainWindow",
      },
     "actions" : [
      {
       "name":"actionSave",
        "text": {
         "string":"Save",
        },
        "binding.command": {
         "stdset":"0",
         "string":"{Save}",
        },
      },
      {
       "name":"actionExit",
        "text": {
         "string":"Exit",
        },
        "binding.command": {
         "stdset":"0",
         "string":"{xxx,CloseWindow=True}",
        },
      },
      {
       "name":"actionEnglish",
        "text": {
         "string":"English",
        },
        "binding.command": {
         "stdset":"0",
         "string":"{SetLanguage, Args=en}",
        },
      },
      {
       "name":"actionChanese",
        "text": {
         "string":"Chinese",
        },
        "binding.command": {
         "stdset":"0",
         "string":"{SetLanguage, Args=zh}",
        },
      },
     ],
     "widgets" : [
      {
       "class":"QWidget",
       "name":"centralwidget",
       "widgets" : [
        {
         "class":"QLineEdit",
         "name":"lineEdit_2",
          "geometry": {
            "rect": {
             "x":250,
             "y":70,
             "width":200,
             "height":32,
            },
          },
          "text": {
           "string":"{path}",
          },
        },
        {
         "class":"QPushButton",
         "name":"pushButton",
          "geometry": {
            "rect": {
             "x":80,
             "y":200,
             "width":90,
             "height":36,
            },
          },
          "styleSheet": {
            "string": {
             "notr":"true",
            },
          },
          "text": {
           "string":"OK",
          },
          "binding.command": {
           "stdset":"0",
           "string":"{Save, CloseWindow=True}",
          },
        },
        {
         "class":"QLineEdit",
         "name":"lineEdit_4",
          "geometry": {
            "rect": {
             "x":249,
             "y":10,
             "width":191,
             "height":32,
            },
          },
          "text": {
           "string":"{name}",
          },
        },
        {
         "class":"QLabel",
         "name":"label_path",
          "geometry": {
            "rect": {
             "x":50,
             "y":70,
             "width":128,
             "height":32,
            },
          },
          "text": {
           "string":"Project Path",
          },
        },
        {
         "class":"QLineEdit",
         "name":"lineEdit_3",
          "geometry": {
            "rect": {
             "x":250,
             "y":130,
             "width":200,
             "height":32,
            },
          },
          "text": {
           "string":"{fullpath}",
          },
        },
        {
         "class":"QPushButton",
         "name":"pushButton_2",
          "geometry": {
            "rect": {
             "x":330,
             "y":200,
             "width":91,
             "height":36,
            },
          },
          "text": {
           "string":"Cancel",
          },
          "binding.command": {
           "stdset":"0",
           "string":"{cancel, CloseWindow=True}",
          },
        },
        {
         "class":"QLabel",
         "name":"label_name",
          "geometry": {
            "rect": {
             "x":50,
             "y":20,
             "width":128,
             "height":32,
            },
          },
          "text": {
           "string":"Project Name",
          },
        },
        {
         "class":"QLabel",
         "name":"label_fullpath",
          "geometry": {
            "rect": {
             "x":50,
             "y":120,
             "width":128,
             "height":32,
            },
          },
          "text": {
           "string":"Full Path",
          },
        },
       ],
      },
      {
       "class":"QMenuBar",
       "name":"menubar",
        "geometry": {
          "rect": {
           "x":0,
           "y":0,
           "width":484,
           "height":28,
          },
        },
        "addaction": {
         "name":"menuFile",
        },
        "addaction": {
         "name":"menuLanguage",
        },
       "widgets" : [
        {
         "class":"QMenu",
         "name":"menuFile",
          "title": {
           "string":"File",
          },
          "addaction": {
           "name":"separator",
          },
          "addaction": {
           "name":"actionSave",
          },
          "addaction": {
           "name":"actionExit",
          },
        },
        {
         "class":"QMenu",
         "name":"menuLanguage",
          "title": {
           "string":"Language",
          },
          "addaction": {
           "name":"separator",
          },
          "addaction": {
           "name":"actionEnglish",
          },
          "addaction": {
           "name":"actionChanese",
          },
        },
       ],
      },
      {
       "class":"QStatusBar",
       "name":"statusbar",
        "binding.value": {
         "stdset":"0",
         "string":"{\"Full Path Is: \"+path($path+$name)}",
        },
      },
      {
       "class":"QToolBar",
       "name":"toolBar",
        "windowTitle": {
         "string":"toolBar",
        },
        "attribute": {
         "name":"toolBarArea",
         "enum":"TopToolBarArea",
        },
        "attribute": {
         "name":"toolBarBreak",
         "bool":false,
        },
        "addaction": {
         "name":"actionSave",
        },
        "addaction": {
         "name":"actionExit",
        },
      },
     ],
    },
   ],
  },
};

function onReady(app) {
  var loader = new qtk.UILoader();
  var win = loader.load(app, g_ui_mainwindow);
  
	win.open();
}

