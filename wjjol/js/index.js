//const $ = ele => typeof ele === "string" ? document.querySelector(ele): "";
const con = $("#title-fold");
const cov = $(".cover");

var nowActive = 1;


let plugins = [$("#plugin_1"),$('#plugin_2')]


plugins.forEach((i)=>{
		i.hide()
	})
	
window.onload = function() {


	$('#_home').css("color", "skyblue");
	activate($("#_home")[0]);

	var s = nowActive + "_pic";
	document.getElementById(s).className = "img-cur";


	if ("loading" in HTMLImageElement.prototype) {
		console.log("支持懒加载");

	} else {
		console.log("不支持懒加载");
	}

	var h1 = document.getElementById("1_pic").clientHeight + "px";
	/* console.log(h1); */

	document.getElementsByClassName("slider")[0].style.height = h1;
	document.getElementsByClassName("slider")[1].style.height = h1;


	$('#loading').css("display", "none");
	
	
	/* document.getElementById('colorInput').click() */


}

function activate(element) {

	$(element).parent().siblings().each(function() {
		$(this).children().css("color", "#aaa");
	});
	$(element).css("color", "skyblue");

	var s = $(element).attr("id").slice(1);
	var x = $("#" + s);

	x.siblings(".content-item-active").removeClass("content-item-active").addClass("content-item");

	x.removeClass("content-item").addClass("content-item-active");
	/* 
	console.log(element) */
	if(element.id.indexOf('github')>-1){
		
		startGlitch();
	}
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

let copy_tip_1 = $('#copy_tip_1')

function copyContent1(targetEle,ElementObj) {
	//获取点击的值
	var clickContent = document.getElementById(ElementObj).innerText;

	//获取要赋值的input的元素
	var inputElement = document.getElementById("copy_content_1");
	//给input框赋值
	inputElement.value = clickContent;
	//选中input框的内容
	inputElement.select();
	// 执行浏览器复制命令
	document.execCommand("Copy");
	
	$(targetEle).after(copy_tip_1)
	//提示已复制
	showToast1()

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

function showToast1() { //消息弹出框
	var tip = document.getElementById('copy_tip_1')
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
/* 
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
) */

//github
let gitFlexBox = $('.git-content')[0]
let gitNowActive = 1
let gitSub = [0, $('#gitSub1'), $('#gitSub2'), $('#gitSub3'), $('#gitSub4')]

/* document.addEventListener('DOMMouseScroll',handler,false)
    document.addEventListener('mousewheel',handler,false) */
document.addEventListener('DOMMouseScroll', throttle(realFunc, 0, 200), false)
document.addEventListener('mousewheel', throttle(realFunc, 0, 200), false)


function handler(event) {
	var detail = event.wheelDelta || event.detail;
	var moveForwardStep = 1;
	var moveBackStep = -1;
	var step = 0;
	if (detail > 0) {
		step = moveForwardStep * 600;
	} else {
		step = moveBackStep * 600;
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
		if (curTime - startTime >= mustRun) {
			func.apply(context, args);
			startTime = curTime;
			// 没达到触发间隔，重新设定定时器
		} else {
			//timeout = setTimeout(func, wait);
		}
	};
};
// 实际想绑定在 scroll 事件上的 handler
function realFunc() {
	var detail = event.wheelDelta || event.detail;
	var moveForwardStep = 1;
	var moveBackStep = -1;
	var step = 0;
	if (detail > 0) {
		step = moveForwardStep * 400;
	} else {
		step = moveBackStep * 400;
	}
	let str = gitFlexBox.scrollLeft - step
	gitFlexBox.scrollTo({
		left: str,
		behavior: 'smooth'
	});

	if ((str > 0) && (str <= 1000)) {
		gitNowActive = 1

	} else if ((str > 1000) && (str <= 1700)) {
		gitNowActive = 2

	} else if ((str > 1700) && (str <= 2700)) {
		gitNowActive = 3

	} else if (str > 2700) {
		gitNowActive = 4

	} else {
		console.log(gitNowActive + 'gna')
	}

	gitSub[gitNowActive].siblings('.sub-active').removeClass('sub-active')
	gitSub[gitNowActive].addClass('sub-active');

}
// 采用了节流函数
//window.addEventListener('scroll',throttle(realFunc,500,1000));



function scrollGit(n) {
	gitFlexBox.scrollTo({
		left: n === 1 ? 0 : n === 2 ? 1350 : n === 3 ? 2400 : n === 4 ? 3600 : 0,
		behavior: 'smooth'
	});

	gitNowActive = n;
	gitSub[n].siblings('.sub-active').removeClass('sub-active')
	gitSub[n].addClass('sub-active');
}



let gitContent = $('#github')

$(document).keydown((event) => {

	let kc = event.keyCode
	if (gitContent.hasClass('content-item-active')) {
		if ((kc === 37) || (kc === 65)) {
			if (gitNowActive != 1) {
				gitNowActive--;
				scrollGit(gitNowActive)
				gitSub[gitNowActive].siblings('.sub-active').removeClass('sub-active')
				gitSub[gitNowActive].addClass('sub-active');
			}
		} else if ((kc === 39) || (kc === 68)) {
			if (gitNowActive != 4) {
				gitNowActive++;
				scrollGit(gitNowActive)
				gitSub[gitNowActive].siblings('.sub-active').removeClass('sub-active')
				gitSub[gitNowActive].addClass('sub-active');
			}
		} else {}


	}

});


let leftSub = $('#leftSub'),
	rightSub = $('#rightSub')

function displaySub() {
	leftSub.css("opacity", 0.9)
	rightSub.css("opacity", 0.9)
}

function hiddenSub() {
	leftSub.css("opacity", 0)
	rightSub.css("opacity", 0)
}




function pluginFold(e){
	//activate(e)
	plugins.forEach((i)=>{
		i.toggle(160)
	})
}


let colorInfoHEX = $("#colorInfoHEX"),colorInfoRGB = $("#colorInfoRGB"),colorInfoHSL = $("#colorInfoHSL")
let copyIcon = $(".copy-icon")


function changeColor(val){
	val = val.value
	let HEX,RGB,HSL;
	if(val.indexOf('#') >= 0){
		//hex
		HEX=val.toUpperCase()
		
		let {R,G,B} = hex2rgb(val);
		
		RGB='('+[R,G,B].join(", ")+')'
		
		HSL=rgb2Hsl(R,G,B)
		HSL='('+[HSL.h,HSL.s,HSL.l].join(", ")+')'
		
	}
	
	copyIcon.css("color",val)
	
	colorInfoHEX.text(HEX)
	colorInfoRGB.text(RGB)
	colorInfoHSL.text(HSL)
}

 //将rgb转换为hsl对象
      function rgb2Hsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var diff = max - min;
        var twoValue = max + min;
        var obj = {h:0, s:0, l:0};
        if(max == min) {
          obj.h = 0;
        } else if(max == r && g >= b) {
          obj.h = 60 * (g - b) / diff;
        } else if(max == r && g < b) {
          obj.h = 60 * (g - b) / diff + 360;
        } else if(max == g) {
          obj.h = 60 * (b - r) / diff + 120;
        } else if(max == b) {
          obj.h = 60 * (r - g) / diff + 240;
        }
        obj.l = twoValue / 2;
        if(obj.l == 0 || max == min) {
          obj.s = 0;
        } else if(0 < obj.l && obj.l <= 0.5) {
          obj.s = diff / twoValue;
          //obj.s = diff / (2 * obj.l);
        } else {
          obj.s = diff / (2 - twoValue);
          //obj.s = diff / (2 - 2 * obj.l);
        }
        obj.h = Math.round(obj.h)+'°';
		obj.s = Math.round(obj.s * 100)+'%';
		obj.l = Math.round(obj.l * 100)+'%';
        return obj;
      }
 
 function hex2rgb(val){
	 let obj={};
	 obj.R = ('0x'+val[1]+val[2]-0).toString(10)
	 //console.log(R)
	 obj.G = ('0x'+val[3]+val[4]-0).toString(10)
	 //console.log(G)
	 obj.B = ('0x'+val[5]+val[6]-0).toString(10)
	 //console.log(B)
	 return obj;
	 
 }
