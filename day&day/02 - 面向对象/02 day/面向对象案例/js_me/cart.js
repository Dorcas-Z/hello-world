/**
 * Created by ThinkPad on 2017/11/11.
 */
function Cart(){
    /*产品个数*/
    this.sum=0;
    /*产品列表*/
    this.products=[];
   /* 产品总价格*/
   this.totalprice=0;
}
Cart.prototype={
    /*获取产品个数*/
    getSum:function(){
        this.sum=this.products.length;
        return this.sum;
    },
    /*获取产品总价格*/
    getPrice:function(){
        var sum=0;
        for(var i=0;i<this.products.length;i++){
            sum+=this.products[i].nowPrice;
        }
        this.totalprice=sum;
        return this.totalprice;
    },
    /*绑定产品列表*/
    bindList:function(){
        var str='';
        for(var i=0;i<this.products.length;i++){
            str+='<div class="cart_box">'
            str+='<div class="message">'
            str+='<div class="alert-close"> </div>'
            str+='<div class="list_img"> <img src="'+this.products[i].images[0].small+'" class="img-responsive" alt=""/> </div>'
            str+='<div class="list_desc"><h4><a href="#">'+this.products[i].name+'</a></h4><span class="actual">'+ this.products[i].nowPrice+'</span></div>'
            str+='<div class="clearfix"></div>'
            str+='<div class="clearfix"></div>'
            str+='</div>'
            str+='</div>'
        }

        $('.shopping_cart').html(str);

    },
    /*绑定基本信息*/
    bindBasic:function(){
        $('.cartsum').html(this.getSum());
        $('#cartprice').html(this.getPrice());
    }
}