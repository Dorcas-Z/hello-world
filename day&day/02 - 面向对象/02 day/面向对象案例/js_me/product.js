/**
 * Created by ThinkPad on 2017/11/11.
 */
/*������Ʒ����*/
function Product(){
    /*��Ʒ����*/
    this.name='';
    /*��������*/
    this.saled=0;
   /* ԭ��*/
   this.oldPrice=0;
   /* �ּ�*/
   this.nowPrice=0;
   /* ��Ʒ����*/
   this.des='';
   /* �ߴ�*/
   this.size=[];
    /*����*/
    this.long=[];
    /*ͼƬ*/
    this.images=[{small:'',big:''},{small:'',big:''},{small:'',big:''}]
}
Product.prototype={
    /*��ҳ��Ԫ��*/
    bindDOM:function(){
        $('#pname').html(this.name);
        $('#buyCount').html(this.saled);/*�󶨹�������*/
        $('#price').html(this.oldPrice);
        $('#groupPrice').html(this.nowPrice);
        $('#description').html(this.des);
        /*�󶨳ߴ�*/
        var chicun='';
        var fixed='<h3>�ߴ�</h3>';
        for(var i=0;i<this.size.length;i++){
           chicun+='<li><a href="#">'+this.size[i]+'</a></li>';
        }
        $('#size-js').html(fixed+chicun)
        /*�󶨳ߴ�*/
        var leng='';
        var fixedlength='<h3>����</h3>';
        for(var j=0;j<this.long.length;j++){
            leng+='<li><a href="#">'+this.long[j]+'</a></li>';
        }
        $('#long').html(fixedlength+leng);
        /*��ͼƬ*/
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