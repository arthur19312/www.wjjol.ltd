//const $ = ele => typeof ele === "string" ? document.querySelector(ele): "";
const con = $("#title-fold");
const cov = $(".cover");

var nowActive = 1;




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


	$('#loading').css("display", "none");


}

function activate(element) {

	$(element).parent().siblings().each(function() {
		$(this).children().css("color", "#aaa");
	});
	$(element).css("color", "black");

	var s = $(element).attr("id").slice(1);
	var x = $("#" + s);

	x.siblings(".content-item-active").removeClass("content-item-active").addClass("content-item");

	x.removeClass("content-item").addClass("content-item-active");
}

function activateMobile(element) {


	var s = $(element).attr("id").slice(2);
	var x = $("#" + s);

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
		if (nowActive == 9) {
			nowActive = 1
		}
		s = nowActive + "_pic"
		var elee = document.getElementById(s)
		elee.className = "img-cur"

	} else {
		nowActive--;
		if (nowActive == 0) {
			nowActive = 8
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
	function() {
		con.addClass("container-hover")
	},
	function() {
		con.removeClass("container-hover")
	}
);

con.click(function() {
	con.toggleClass("container-click");
	cov.toggleClass("invisible");
})

function sendEmail(ele) {
	//let email = $("#contact-email").val()encodeURI
	let title = encodeURI($("#contact-title").val())
	let content = encodeURI($("#contact-content").val())

	$(ele).attr("href", "mailto:blodcell@163.com?subject=" + title + "&body=" + content)

}


function copyContentParent(ev) {
	ev = ev || window.event;
	let tg = ev.target || ev.srcElement
	let txt = tg.innerText
	if (txt.length === 2) {
		let tmp = $("#contact-content").val()
		$("#contact-content").val(tmp + txt)
	}
}

let emojiSwitch = $("#emojiSwitch"),
	emojiBoard = $("#emojiBoard"),
	emojiActive = false

$('body').click((event) => {
	if (!(($.contains(emojiBoard[0], event.target)) || ($.contains(emojiSwitch[0], event.target)))) {
		emojiBoard.hide()
		if (emojiActive) {
			emojiActive = !emojiActive
			console.log(emojiActive)
			emojiSwitch.toggleClass("icon-emoji-off icon-emoji-on")
		}
	}
})

emojiBoard.hide()

emojiSwitch.hover(
	() => {
		emojiSwitch.css("color", "rgb(255,200,61)")
	}
)

emojiSwitch.click(
	() => {
		event.stopPropagation()
		emojiActive = !emojiActive
		console.log(emojiActive)
		emojiSwitch.toggleClass("icon-emoji-off icon-emoji-on")
		setTimeout(() => {
			emojiBoard.toggle()
		}, 100)
	}

)

emojiBoard.hover(
	() => {
		emojiBoard.show()
	}
)

//github
let gitFlexBox = $('.git-content')[0]
let gitNowActive = 1
let gitSub = [0,$('#gitSub1'), $('#gitSub2'), $('#gitSub3'), $('#gitSub4')]

/* document.addEventListener('DOMMouseScroll',handler,false)
    document.addEventListener('mousewheel',handler,false) */
	document.addEventListener('DOMMouseScroll',throttle(realFunc,0,200),false)
	    document.addEventListener('mousewheel',throttle(realFunc,0,200),false)
	
	
	function handler(event){
			var detail = event.wheelDelta || event.detail;
			var moveForwardStep = 1;
			var moveBackStep = -1;
			var step = 0;	
			if(detail > 0){
					step = moveForwardStep*600;
			}else{
				step = moveBackStep *600;
			}
		} 
		
		
		function throttle(func, wait, mustRun) {
		    var timeout,
		        startTime = new Date();
		 
		    return function() {
		        var context = this,
		            args = arguments,
		            curTime = new Date();
		 
		        clearTimeout(timeout);
		        // 如果达到了规定的触发时间间隔，触发 handler
		        if(curTime - startTime >= mustRun){
		            func.apply(context,args);
		            startTime = curTime;
		        // 没达到触发间隔，重新设定定时器
		        }else{
		            //timeout = setTimeout(func, wait);
		        }
		    };
		};
		// 实际想绑定在 scroll 事件上的 handler
		function realFunc(){
			var detail = event.wheelDelta || event.detail;
			var moveForwardStep = 1;
			var moveBackStep = -1;
			var step = 0;	
			if(detail > 0){
					step = moveForwardStep*400;
			}else{
				step = moveBackStep *400;
			}
			let str = gitFlexBox.scrollLeft - step
		    gitFlexBox.scrollTo({
		      left: str,
		      behavior: 'smooth'
		    });
			
			if((str > 0 ) && (str <= 1000)){
				gitNowActive = 1
				
			}else if((str > 1000 ) && (str <= 1700)){
				gitNowActive = 2
				
			}else if((str > 1700 ) && (str <= 2700)){
				gitNowActive = 3
				
			}else if(str > 2700){
				gitNowActive = 4
				
			}else{
				console.log(gitNowActive+'gna')
			}
			
			gitSub[gitNowActive].siblings('.sub-active').removeClass('sub-active')
			gitSub[gitNowActive].addClass('sub-active');
			
		}
		// 采用了节流函数
		//window.addEventListener('scroll',throttle(realFunc,500,1000));
		
		
		
		function scrollGit(n){
			gitFlexBox.scrollTo({
			  left: n===1?0:n===2?1350:n===3?2400:n===4?3600:0,
			  behavior: 'smooth'
			});
			
			gitNowActive = n;
			gitSub[n].siblings('.sub-active').removeClass('sub-active')
			gitSub[n].addClass('sub-active');
		}
		
		
		
		let gitContent = $('#github')
		
		$(document).keydown((event)=>{
			let kc = event.keyCode
			if(gitContent.hasClass('content-item-active')){
				if((kc === 37) || (kc === 65)){
					if(gitNowActive != 1){
						gitNowActive--;
						scrollGit(gitNowActive)
						gitSub[gitNowActive].siblings('.sub-active').removeClass('sub-active')
						gitSub[gitNowActive].addClass('sub-active');
					}
				}else if((kc === 39)||(kc === 68)){
					if(gitNowActive != 4){
						gitNowActive++;
						scrollGit(gitNowActive)
						gitSub[gitNowActive].siblings('.sub-active').removeClass('sub-active')
						gitSub[gitNowActive].addClass('sub-active');
					}
				}else{}
				
				
			}
		});
		
		
		let leftSub = $('#leftSub'),rightSub = $('#rightSub')
		function displaySub(){
			leftSub.css("opacity",0.9)
			rightSub.css("opacity",0.9)
		}
		function hiddenSub(){
			leftSub.css("opacity",0)
			rightSub.css("opacity",0)
		}