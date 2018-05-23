//获取节点内容
var Mail = document.getElementById('mail');
var PassWord = document.getElementById('password');
var LogIn = document.getElementById('login');


//判断内容是否正确

function panduan()
{
    var val1 =  document.getElementById("mail").value
    var val2 =  document.getElementById("password").value

    if ((val1 === '123') && (val2 === '123')) 
    {
        alert ('登录成功');
    } 
    else 
    {
        alert ('账号或密码错误');
        //清空文本框内容
        document.getElementById("password").value="";
    }
}

