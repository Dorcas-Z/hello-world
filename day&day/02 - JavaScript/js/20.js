/**
 * Created by ThinkPad on 2017/12/1.
 */
//导航nav固定到顶部


    //窗口滚动，固定导航
var nav=$('nav');
var navTop=nav.offsetTop;  //得到导航栏距离顶部的距离
var olTop=$('ol').offsetTop;
window.onscroll=function(){
    //导航固定，ol,ul随着固定调整位置
    if(scroll().top>navTop){
        nav.className='fixed';
        $('ol').style.top=olTop-navTop+'px';
        $('ul').style.paddingTop=nav.offsetHeight+'px';
    }else{
        nav.className='';
        $('ol').style.top=olTop-scroll().top+'px';
        $('ul').style.paddingTop=0+'px';
    }
    //返回顶部---火箭小图标
    huojian.show();
    huojian.leader=scroll().top;
}

    //滑动效果
var ulList=$('ul').children;
var olList=$('ol').children;


var leader=0,target=0,timer;
for(let i=0;i<olList.length;i++){
    olList[i].onclick=function(){
        clearInterval(timer);
        target=ulList[i].offsetTop-nav.offsetHeight;
        timer=setInterval(function(){
            leader=leader+(target-leader)/10;
            window.scrollTo(0,leader);
            if(Math.abs(leader-target)<0.001){
               clearInterval(timer);
            }
        },10)

    }
}

//返回顶部---火箭小图标

function Top(obj){
    this.leader=0;
    this.target=0;
    this.show=function(){
        if(scroll().top>500){
            obj.style.display='block';
        }else{
            obj.removeAttribute('style');
        }

    };
    this.toTop=function(){
        let peak;
        peak=setInterval(function(){
            this.leader=this.leader+(this.target-this.leader)/10;
            window.scrollTo(0,this.leader);
            if(this.leader==this.target){
                clearInterval(peak);
            }
        }.bind(this),10);
    };
    obj.addEventListener('click',this.toTop.bind(this));
}
var huojian=new Top($('top'));


//小滑块滑动
$('btn1').onclick=function(){
    console.log(1);
    animate($('move1'),{top:100,left:300,borderRadius:50,opacity:40});
    animate($('move2'),{top:100,left:300,borderRadius:50,opacity:40},function(){
        animate($('move3'),{top:100,left:300,borderRadius:50,opacity:40})
    })
}

//手风琴
var imgList=$('piano').children;
for(let i=0;i<imgList.length;i++){
    imgList[i].onmouseover=function(){
        for(let j=0;j<imgList.length;j++){
            animate(imgList[j],{width:50})
        }
        animate(this,{width:600})
    }
    imgList[i].onmouseout=function(){
        for(let j=0;j<imgList.length;j++){
            animate(imgList[j],{width:160})
        }
    }
}



