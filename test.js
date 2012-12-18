console.log("Hello world from page context..........");

console.log(location.href);

if(location.href=="http://news.baidu.com/"){
		var t=document.querySelector("#ww");
		var qs=encodeToGB("中国移动");
		    t.value=qs;

		var s=document.querySelector("[name=fbaidu]");
			console.log(decodeFromGb(s.innerText));

			s.submit();
}else{
		var t=document.querySelector("#ww");
		console.log(t.value);
		var body=document.querySelector("body");
		var text=decodeFromGb(body.innerText);
			console.log(text);
}



