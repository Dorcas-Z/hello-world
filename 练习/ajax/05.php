<?php
    $tabVal=$_REQUEST['tabVal'];
    $arrTeacher='[
      {"name":"王老师","年龄":20},
      {"name":"李老师","年龄":20},
      {"name":"哈老师","年龄":20},
      {"name":"王老师","年龄":20}
    ]';
    $arrStudent='[
                  {"name":"王同学","年龄":20},
                  {"name":"李同学","年龄":20},
                  {"name":"王同学","年龄":20},
                  {"name":"明同学","年龄":20}
                ]';
    if($tabVal=='学生'){
      echo $arrStudent;
    }else if($tabVal=='老师'){
        echo $arrTeacher;
    }else{
     echo 'hello world';
    }
?>