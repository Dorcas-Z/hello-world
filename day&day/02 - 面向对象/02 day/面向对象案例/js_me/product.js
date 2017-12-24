/**
 * Created by ThinkPad on 2017/11/11.
 */
/*创建产品对象*/
function Product(){
    /*产品名称*/
    this.name='';
    /*购买人数*/
    this.saled=0;
   /* 原价*/
   this.oldPrice=0;
   /* 现价*/
   this.nowPrice=0;
   /* 产品描述*/
   this.des='';
   /* 尺寸*/
   this.size=[];
    /*长度*/
    this.long=[];
    /*图片*/
    this.images=[{small:'',big:''},{small:'',big:''},{small:'',big:''}]
}
Product.prototype={
    /*绑定页面元素*/
    bindDOM:function(){
        $('#pname').html(this.name);
        $('#buyCount').html(this.saled);/*绑定购买人数*/
        $('#price').html(this.oldPrice);
        $('#groupPrice').html(this.nowPrice);
        $('#description').html(this.des);
        /*绑定尺寸*/
        var chicun='';
        var fixed='<h3>尺寸</h3>';
        for(var i=0;i<this.size.length;i++){
           chicun+='<li><a href="#">'+this.size[i]+'</a></li>';
        }
        $('#size-js').html(fixed+chicun)
        /*绑定尺寸*/
        var leng='';
        var fixedlength='<h3>长度</h3>';
        for(var j=0;j<this.long.length;j++){
            leng+='<li><a href="#">'+this.long[j]+'</a></li>';
        }
        $('#long').html(fixedlength+leng);
        /*绑定图片*/
        var img='';
        var imgfixed='<div class="clearfix"> </div>';
        for(var y=0;y<this.images.length;y++){
            img+='<li>';
            img+='<img class="etalage_thumb_image" src="'+this.images[y].small+'" class="img-responsive" />';
            img+='<img class="etalage_source_image" src="'+this.images[y].big+'" class="img-responsive" />';
            img+='</li>';
        }
        $('#etalage').html(img);
        $('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,
        })
    }
}