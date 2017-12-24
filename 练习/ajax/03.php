<?php
    $ename=$_REQUEST['ename'];
    $psd=$_REQUEST['psd'];
    if($ename=='admin'&&$psd=='123'){
        echo 'true';
    }else{
        echo 'false';
    }
?>