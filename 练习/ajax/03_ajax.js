/**
 * Created by ThinkPad on 2017/7/29.
 */
function getXhr(){
    var xhr;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject('Microsoft.XMLHttp');//IE
    }
    return xhr;
}
function getData(methode,url,success,data){
    var xhr=getXhr();
    if(methode.toLowerCase()=="get"){
        xhr.open(methode,url+'?'+data);
        xhr.send();
    }else{
        xhr.open(methode,url);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        send(data);
    }
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var data=xhr.responseText;
            (function(success){
                success(data)
            })(success)
        }
    }
}