/***add��������ƴ��Ա������������***/
function add(empName, empBirthday){
  var result = empName + empBirthday;
  var obj = {
    ename: 'Tom',  /**Ա������**/
    work: function(computer, desk){
      var temp = desk + computer;
      return temp;  //�˴����ڷ���
    }
  };
  return result;
}

/***��ʼ����**/
var  ename = 'John';
var  ebithday = new Date();
add(ename, ebithday, document);

app.controller('myCtrl1',  ['$scope', '$rootScope', '$http',function( $scope,  $rootScope,  $http){
  $scope.show = function(msg1, msg2){
    var result = msg1 + msg2;
    console.log( result );
  }
}]);
