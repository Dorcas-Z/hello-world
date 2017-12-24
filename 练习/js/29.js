/**
 * Created by ThinkPad on 2017/7/22.
 */
var scrArr=['../images/03.jpg','../images/05.jpg','../images/06.jpg','../images/07.jpg'];
var img=document.getElementsByTagName('img')[0];
var li=document.getElementsByTagName('li');
var timg=setInterval(fn1,1000);
var btn1=document.getElementById('btn-l');
var btn2=document.getElementById('btn-r');
btn1.onmouseover=function(){
    clearInterval(timg);
}
btn1.onclick=fnDir;
btn1.methode='L';
btn2.onclick=fnDir;
btn2.methode='R';
btn1.onmouseout=function(){
    timg=setInterval(fn1,1000);
}
btn2.onmouseover=function(){
    clearInterval(timg);
}
btn2.onmouseout=function(){
    timg=setInterval(fn1,1000);
}
function fnDir(){
    if(this.methode.toLowerCase()=='l'){
        n--;
        if(n<0){
            n=3;
        }
    }else{
        n=Math.abs(n);
        n++;
        if(n>3){
            n=0;
        }
    }
    img.src=scrArr[Math.abs(n)];
    clearbg();
    li[Math.abs(n)].className='bg';
}
var n=0;
for(var i=0;i<li.length;i++){
    li[i].i=i;
    li[i].onmouseover=fnStop;
    li[i].onmouseout=fnStart;
}

function fnStop(){
    clearInterval(timg);
    clearbg();
    img.src=scrArr[this.i];
    li[this.i].className='bg';
}
function fnStart(){
    timg=setInterval(fn1,1000);
}
function fn1(){
    n++;
    if(n>3){
        n=0;
    }
    img.src=scrArr[n];
    clearbg();
    li[n].className='bg';
}
function clearbg(){
    for(var i=0;i<li.length;i++){
        li[i].removeAttribute('class');
    }
}
