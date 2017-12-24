/**
 * Created by ThinkPad on 2017/10/18.
 */
/*
$(document).ready(function(){
    console.log($('p'));
})*/

jQuery.noConflict();
/*$(function(){
    console.log($('p'));
}) */ //$()跟$(document).ready一样

jQuery(function(){
    console.log(jQuery('p'));
})
jQuery(function($){
    console.log($('p'));
})//这个里面的$指向jquery