// 一. SASS基于什么环境?
// 	ruby
// 二. 如何测试ruby是否安装成功?
// 	ruby -v
// 三. 如何安装sass?
// 	gem install sass
// 四. 如何测试sass是否安装成功?
// 	sass -v
// 五. 如何更新sass?  
// 	gem update sass
// 六. 如何删除sass?
// 	gem uninstall sass
// 七. 什么是sass? 是css的扩展语言,用于编写css
// 八. 如何导入其它sass文件?
// 	@import '文件名';
// 九. 创建一个不被自动编译的sass文件?
// 	_文件名.scss
// 十. sass嵌套有哪些?
// 	1. 选择器嵌套
// 	2. 属性嵌套
// 	3. 伪类嵌套
// 十一. 如何找到其父选择器?
// 	&
// 十二. 如何声明sass变量?
// 	$变量名 : 值;
// 	1. 引用变量?
// 		1.. 一般引用:  $变量名
// 		2.. 特殊引用:  #{$变量名}
// 十三. 选择:
// 	@if  条件{
		
// 	}
	
// 	@if 条件{
		
// 	}@else if 条件{
		
// 	}@else{
		
// 	}
// 十四. 循环:
// 	@for $变量 from start through end{
		
// 	}
// 	@for $变量 from start to end{
		
// 	}
// 十五. 混合器(宏)
// 	@mixin 宏名($变量名){
		
// 	}
// 	导入宏:
// 	@include 宏名();
// 十六. 函数
// 	@function 函数名(){
// 		@return ...;
// 	}
// 十七. 数组
// 	$变量名: 值 值 值;
// 十八. map
// 	$变量名 : (key : value,key : value);
// 	1. length()
// 	2. map-get()
// 	3. map-has-key()
// 	4. map-keys()
// 	5. map-values()
// 	6. map-merge()
// 	7. map-remove()
// 十九. 遍历数组
// 	@each $变量 in 数组{
		
// 	}
// 二十. 继承
// 	@extend 选择器




// requirejs
// 一. 页面中:
// 	<script src="js/require.js" defer async="true" data-main="js/main">
// 二. 主模块 main.js
// 	1. 配置模块路径
// 		require.config({
// 			paths : {
// 				"别名" : "模块路径"
// 			}
// 		})
// 	2. 导入模块
// 		require([模块别名],function(形参){
// 			....
// 		})
// 三. 子模块 
// 	define(function(){
// 		//定义模块功能
		
		
// 		return {
			
// 		}
// 	})
