const child_pro=require("child_process");//利用node的子进程
//执行命令，且把命令行窗口隐藏
child_pro.exec("npm start",{
    windowsHide:true
});