/**
 * Created by ThinkPad on 2017/11/11.
 */
window.onload=function() {
    var product = new Product;
    product.name = 'õ���iphone9';
    /*��������*/
    product.saled = 8888;
    /* ԭ��*/
    product.oldPrice = 6000;
    /* �ּ�*/
    product.nowPrice = 2222;
    /* ��Ʒ����*/
    product.des = '�����ĸ����ظ������գ�һ��ͨ�������ݸ����Ӧ��';
    /* �ߴ�*/
    product.size = ['4.5Ӣ��', '5Ӣ��', '5.5Ӣ��', '6Ӣ��', '6.5Ӣ��'];
    /*����*/
    product.long = ['128mm', '168mm'];
    /*ͼƬ*/
    product.images = [
        {small: 'images/s11.jpg', big: 'images/s11.jpg'},
        {small: 'images/s12.jpg', big: 'images/s12.jpg'},
        {small: 'images/s13.jpg', big: 'images/s13.jpg'}
    ];



    product.bindDOM();

    /*��ʼ�����ﳵ*/
    var cart=new Cart();
    cart.bindBasic();
    cart.bindList();

    $('#btnaddcart').click(function(){
        /*���²�Ʒ�б�*/
        cart.products.push(product);
        /*���»�����Ϣ*/
        cart.bindBasic();
        /*�����б�*/
        cart.bindList();
        $(window).scrollTop(0);
    })

}
