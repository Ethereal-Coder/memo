/* 
构造函数 new 执行过程
*/

var obj1 = {
    name: 'hello',
    'age': 18,
    str: function(){
        console.log('hahah');
        
    }
}
console.log(obj1.age);
console.log(obj1['name']);
x_str = obj1.str
console.log(obj1.str());


var obj2 = new Object();
obj2.name = 'node';
obj2['age'] = 12;
obj2.say = function(){
    console.log('hello node');
    
}
console.log(obj2);
obj2.say()


// 构造函数
function Singer(name, age, song) {
    this.name = name;
    this.age = age;
    this.sing = function(){
        console.log(song);
        
    }
}
var tww = new Singer('tww', 18, '乌兰巴托的夜');
var ldu = new Singer('ldh', 17, '17岁');
console.log(tww);
tww.sing()
for (var k in tww){
    console.log('key:'+k);
    console.log('value:'+tww[k]);    
}

