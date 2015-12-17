var app = angular.module('angularIntroApp', []);

app.factory('myAuth', ['$http', function($http) {

  var myAuth = {};

  var myAuth_base64 = {
    _keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=_base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},
    decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=_base64._utf8_decode(t);return t},
    _utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},
    _utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}
  }

app.controller('MainCtrl', ['$http', function ($http) {
  var self = this;
  self.items = [];
  var promise = $http.get('http://jsonplaceholder.typicode.com/posts');
  promise.then(function (response) {
    self.items = response.data;
  }, function (errResponse) {
    console.error(errResponse.data + "WTF");
  });
}]);


app.controller('MainCtrl2', ['$http', function ($http) {
  var self = this;
  self.items = [];
  $http.get('http://jsonplaceholder.typicode.com/posts').then(function (response) {
    self.items = response.data;
  }, function (errResponse) {
    console.error('Error while fetching notes');
  });
}]);


app.controller('MemberController', ['$http', function ($http) {
  var self = this;
  self.items = [];

  var url = 'http://localhost:8082/trucare-api/6.1/api/member-list';

  //$http.defaults.headers.common['Authorization'] = 'Basic ' + 'trumobile' + ':' + 'Password2';

  //$http.defaults.headers.common.Authorization = 'trumobile Password2' ;
  //var promise = $http.get('http://localhost:8082/trucare-api/6.1/api/member-list',
  //  {
  //    headers: {
  //      'Authorization': 'Basic dHJ1bW9iaWxlOlBhc3N3b3JkMg=='
  //    }
  //  });

  var promise = $http({
    method: 'GET',
    url: url,
    headers: {'Authorization': 'Basic dHJ1bW9iaWxlOlBhc3N3b3JkMg=='}});

  promise.then(function (response) {
    self.items = response.data;
    console.log("Items:" + self.items)
  }, function (errResponse) {
    console.error(errResponse.data + "WTF");
  });
}]);
