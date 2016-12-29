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


 console.log('b file');

