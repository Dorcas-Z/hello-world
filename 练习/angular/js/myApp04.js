/**��ǰSPAӦ�õ���ģ��**/
var app = angular.module('myApp04', [
  'myApp04.filter',
  'myApp04.service',
  'myApp04.controller',
  'ng']);
app.run(function($rootScope){
  $rootScope.age = 20;
});