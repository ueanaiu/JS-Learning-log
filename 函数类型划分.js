# JS-Learning-log

<script>
	//1.无参数无返回值
	function fn1(){
		alert("hello world");
	}
	fn1();

	//2.无参数有返回值
	var num = 10;
	function fn2(){
		if(num > 5){
			return true;
		}else{
			return false;
		}
	}
	var bool = fn2();
	console.log(bool);

	//3.有参数无返回值
//		function introduce(name,sex,age){
//			alert("hello,my name is"+name+",i am a" +sex+ "i am" + age + "years old")
//		}
//		introduce('小明','男','18');

				//形参
	function fn3(name){
		console.log("hello," + name);
	}
		//实参
	fn3('PHP');
	/*
		函数调用时括号内的参数叫实参
	*/

	//4.有参数有返回值
	function sum(num1,num2){
		return num1 + num2;
	}
	var test = sum(10,2);
	console.log(test);

	//求绝对值函数
	function abs(num){
//			if(num >= 0){
//				return num;
//			}else{
//				return -num;
//			}
		return num >= 0 ? num : -num;
	}
	var num = abs(-9);
	console.log(num);

	//定义一个求四个数中最大值的函数
	var max;//用来保存比较的最大值
	function max(a,b,c,d){
		max = a > b ? a : b;
		max = max > c ? max : c;
		max = max > d ? max : d;
		console.log(max);
	}
	max(2,-1,80,25);
</script>
