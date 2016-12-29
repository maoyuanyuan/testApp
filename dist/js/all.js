//实现数组去重
Array.prototype.unique1 = function(){
 var res = [this[0]];
 for(var i = 1; i < this.length; i++){
  var repeat = false;
  for(var j = 0; j < res.length; j++){
   if(this[i] == res[j]){
    repeat = true;
    break;
   }
  }
  if(!repeat){
   res.push(this[i]);
  }
 }
 return res;
}
var arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0]
alert(arr.unique1());
var objectList = new Array();
function Persion(name,age){
    this.name=name;
    this.age=age;
    }
objectList.push(new Persion('jack',20));
objectList.push(new Persion('tony',25));
objectList.push(new Persion('stone',26));
objectList.push(new Persion('mandy',23));
//按年龄从小到大排序
objectList.sort(function(a,b){
    return a.age-b.age});
for(var i=0;i<objectList.length;i++){
    document.writeln('<br />age:'+objectList[i].age+' name:'+objectList[i].name);
    }