window.onload = function() {
	var ShowArea = document.getElementById("calculator").getElementsByClassName("show")[0];
	var Key = document.getElementById("calculator").getElementsByTagName("span");
	var length = Key.length;
	//为每一个键位注册单击事件
	var flag = true;
	for(var i = 0; i < length; i++) {
		Key[i].onclick = function() {
			var ShowAreaVal = ShowArea.innerHTML;//输入区原本有的内容给ShowAreaVal
			var KeyValue = this.innerHTML;//将相应的键位值给KeyValue
			//判断按键
			if(KeyValue == "c") {
				ShowArea.innerHTML = "";//清空
			} else if(KeyValue == "=") {
				var Result = eval(ShowAreaVal);//计算相应的结果
				if((String(Result).indexOf(".")+1)>0){
					Result = Result.toFixed(8);//保留四位小数
				}
				ShowArea.innerHTML = Result;
				flag  = false;
			} else if(KeyValue == "+" || KeyValue == "-"||KeyValue == "*"||KeyValue == "/"){
				ShowArea.innerHTML += KeyValue;//实现字符串的拼接
				flag = true;
			}else{
				if(flag==false){
					ShowArea.innerHTML = "";//清空
					ShowArea.innerHTML += KeyValue;//实现字符串的拼接
					flag = true;
				}else{
					ShowArea.innerHTML += KeyValue;//实现字符串的拼接
				}
			}
		}
	}
}
