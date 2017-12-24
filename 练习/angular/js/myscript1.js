/***add函数用于拼接员工姓名和生日***/
function add(empName, empBirthday){
  var result = empName + empBirthday;
  var obj = {
    ename: 'Tom',  /**员工姓名**/
    work: function(computer, desk){
      var temp = desk + computer;
      return temp;  //此处用于返回
    }
  };
  return result;
}

/***开始调用**/
var  ename = 'John';
var  ebithday = new Date();
add(ename, ebithday, document);

app.controller('myCtrl1',  ['$scope', '$rootScope', '$http',function( $scope,  $rootScope,  $http){
  $scope.show = function(msg1, msg2){
    var result = msg1 + msg2;
    console.log( result );
  }
}]);
