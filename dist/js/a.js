Array.prototype.unique1=function(){for(var r=[this[0]],t=1;t<this.length;t++){for(var a=!1,e=0;e<r.length;e++)if(this[t]==r[e]){a=!0;break}a||r.push(this[t])}return r};var arr=[1,"a","a","b","d","e","e",1,0];alert(arr.unique1());