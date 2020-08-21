const $ = ele => typeof ele === "string" ? document.querySelector(ele): "";
		const con = $(".title-fold");
		const cov = $(".cover");

		var nowActive = 1

		document.onreadystatechange = function() {
			if (document.readyState == "complete") {
				loading();
			}
		}

		function loading() {
			$('#loading').style.display = "none";
		}


		window.onload = function() {
			document.getElementById("_home").style.color = "black";
			activate(document.getElementById("_home"));

			var s = nowActive + "_pic";
			document.getElementById(s).className = "img-cur";


			if ("loading" in HTMLImageElement.prototype) {
				console.log("支持懒加载");

			} else {
				console.log("不支持懒加载");
			}

			var h1 = document.getElementById("1_pic").clientHeight + "px";
			console.log(h1);

			document.getElementsByClassName("slider")[0].style.height = h1;
			document.getElementsByClassName("slider")[1].style.height = h1;

		}

		function activate(element) {

			var a = document.getElementsByClassName("title-item")
			var b = a.length
			for (var i = 0; i < b; i++) {
				a[i].querySelector("a").style.color = "#aaa"
			}
			element.style.color = "black"

			var s = element.id.slice(1)
			var x = document.getElementById(s)
			var p = x.parentNode.children
			var n = p.length
			for (var i = 0; i < n; i++) {
				p[i].className = "content-item"
			}
			x.className = "content-item-active"
		}

		function activateMobile(element) {

			var s = element.id.slice(1)
			var x = document.getElementById(s)
			var p = x.parentNode.children
			var n = p.length
			for (var i = 0; i < n; i++) {
				p[i].className = "content-item"
			}
			x.className = "content-item-active"

			cov.classList.remove("visible");
			cov.classList.add("invisible");
			con.classList.remove("container-click");
		}

		function slide(flag) {
			var s = nowActive + "_pic"
			var ele = document.getElementById(s)

			ele.className = "home-img"

			if (flag > 0) {
				nowActive++;
				if (nowActive == 8) {
					nowActive = 1
				}
				s = nowActive + "_pic"
				var elee = document.getElementById(s)
				elee.className = "img-cur"

			} else {
				nowActive--;
				if (nowActive == 0) {
					nowActive = 7
				}
				s = nowActive + "_pic"
				var elee = document.getElementById(s)
				elee.className = "img-cur"
			}
		}

		function copyContent(ElementObj) {
			//获取点击的值
			var clickContent = ElementObj.innerText;
			//获取要赋值的input的元素
			var inputElement = document.getElementById("copy_content");
			//给input框赋值
			inputElement.value = clickContent;
			//选中input框的内容
			inputElement.select();
			// 执行浏览器复制命令
			document.execCommand("Copy");
			//提示已复制
			showToast()

		}

		function showToast() { //消息弹出框
			var tip = document.getElementById('copy_tip')
			setTimeout(function() {
				tip.className = "tip-appear"
			}, 50);

			setTimeout(function() {
				tip.className = "tip-disappear"
			}, 300);
			tip.className = "tip-rest"


		}


		con.onmouseenter = () => con.classList.add("container-hover");
		con.onmouseleave = () => con.classList.remove("container-hover");

		con.onclick = () => {

			if (con.classList.contains("container-click")) {
				con.classList.remove("container-click");
			} else {
				con.classList.remove("container-hover");
				con.classList.add("container-click");
			}

			if (cov.classList.contains("visible")) {
				cov.classList.remove("visible");
				cov.classList.add("invisible");
			} else {
				$(".title-fold").style.zIndex = "11";
				cov.style.zIndex = "10";
				cov.classList.remove("invisible");
				cov.classList.add("visible");
			}
		}
