# JS-Learning-log

<script type="text/javascript">
//Math 数学对象

//1.Math.random()  用来返回一个0~1之间的随机数
//可以取到0 但取不到1  [0,1) 0 <= x <1
console.log(Math.random())

//2.获取一个0~10之间的随机数
var num = Math.random()*10;
console.log(parseInt(num));//parseInt 去掉小数点取整数

//3.获取10~15之间的随机整数
var num2 = Math.random()*(5+1) + 10;
console.log(parseInt(num2));

//4.获取20~30之间的随机整数
var num3 = Math.random()*(10+1)+20;
console.log(parseInt(num3));

//5.获取min~max之间的随机整数
//parseInt(Math.random()*(max-min+1)+min)  -----常用的随机数公式
var min = 2
var max = 6
var text = parseInt(Math.random()*(max-min+1)+min);
console.log(text);

//6.Math.floor（）  表示向下取整,直接取整数，不会四舍五入直接舍弃掉小数点之后的数
var num3 = Math.floor(4.6);
console.log(num3);

//7.Math.ceil()  向上取整--无论小数位的数多小  都直接加一位取整；
var num4 = Math.ceil(3.001);
console.log(num4);

//8.Math round（）四舍五入；
var num6 = Math.round(2.5);
console.log(num6);

//9.Math.min()  区多个数之间的最小值；
var num7 = Math.min(10,3,5,2);
console.log(num7);

//10.Math.max()  区多个数之间的最大值；
var num8 = Math.max(10,3,5,2);
console.log(num8);

//11.Math.abs()  求绝对值
var num9 = Math.abs(-5);
console.log(num9);

Math.abs();//Math数学对象下面的取绝对值的方法

var person = {};
person.sing = function(name){
	alert(name);
}
person.test = add;

person.sing("test");

function add(x,y){
	console.log(x + y);
}

person.test(1,9);
</script>
