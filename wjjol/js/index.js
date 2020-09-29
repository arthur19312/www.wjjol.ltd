//const $ = ele => typeof ele === "string" ? document.querySelector(ele): "";
		const con = $("#title-fold");
		const cov = $(".cover");

		var nowActive = 1;

		$(document).ready(function(){
			$('#loading').css("display", "none");
		});


		window.onload = function() {
			$('#_home').css("color", "black");
			activate($("#_home"));

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

			$(element).parent().siblings().each(function(){
				$(this).children().css("color", "#aaa");
			});
			$(element).css("color", "black");

			var s = $(element).attr("id").slice(1);
			var x = $("#"+s);
			
			x.siblings(".content-item-active").removeClass("content-item-active").addClass("content-item");
				
			x.removeClass("content-item").addClass("content-item-active");
		}

		function activateMobile(element) {

			
			var s = $(element).attr("id").slice(2);
			var x = $("#"+s);
			
			x.siblings(".content-item-active").removeClass("content-item-active").addClass("content-item");
				
			x.removeClass("content-item").addClass("content-item-active");
			
			cov.addClass("invisible");
			con.removeClass("container-click");
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


		con.hover(
			function(){con.addClass("container-hover")},
			function(){con.removeClass("container-hover")}
		);
		
		con.click(function(){
			con.toggleClass("container-click");
			cov.toggleClass("invisible");
		})
		
		
		function sendEmail(ele){
			//let email = $("#contact-email").val()
			let title = $("#contact-title").val()
			let content = $("#contact-content").val()
			
			$(ele).attr("href","mailto:blodcell@163.com?subject="+title+"&body="+content)
			
		}

		
