var countiblock=0
const bg="../../static/img/jgq/jgq.png"
const bg1="../../static/gif/jgq/mo1.gif"
const bg2="../../static/gif/jgq/mo2.gif"
const bg3="../../static/gif/jgq/mo3.gif"
const bg4="../../static/gif/jgq/mo4.gif"
const bg5="../../static/gif/jgq/mo5.gif"
const bg6="../../static/gif/jgq/mo6.gif"
var bglist=new Array(bg,bg1,bg2,bg3,bg4,bg5,bg6)

const blc="../../static/img/jgq/jgqws.png"
const blc1="../../static/gif/jgq/mo11.gif"
const blc2="../../static/gif/jgq/mo21.gif"
const blc3="../../static/gif/jgq/mo31.gif"
const blc4="../../static/gif/jgq/mo41.gif"
const blc5="../../static/gif/jgq/mo51.gif"
const blc6="../../static/gif/jgq/mo61.gif"
var blclist=new Array(blc,blc1,blc2,blc3,blc4,blc5,blc6)


window.onload=function () {
    document.ondragstart=function() {return false;}

    countiblock=0
    document.getElementById("tiblock").innerHTML="<img src=\"../../static/gif/jgq/mo11.gif\" style=\"height: 100%\">"
    document.getElementById("bg").src="../../static/img/jgq/jgq.png"



};

function changeBG(){

    countiblock=(countiblock+1)%7;

    switch (countiblock) {
        case 1:{
            document.getElementById("tiblock").innerHTML="<img src=\"../../static/gif/jgq/mo21.gif\" style=\"height: 100%\">"
            document.getElementById("bg").src="../../static/gif/jgq/mo1.gif"

            break
        }
        case 2:{
            document.getElementById("tiblock").innerHTML="<img src=\"../../static/gif/jgq/mo31.gif\" style=\"height: 100%\">"
            document.getElementById("bg").src="../../static/gif/jgq/mo2.gif"

            break
        }
        case 3:{
            document.getElementById("tiblock").innerHTML="<img src=\"../../static/gif/jgq/mo41.gif\" style=\"height: 100%\">"
            document.getElementById("bg").src="../../static/gif/jgq/mo3.gif"
            break
        }
        case 4:{
            document.getElementById("tiblock").innerHTML="<img src=\"../../static/gif/jgq/mo51.gif\" style=\"height: 100%\">"
            document.getElementById("bg").src="../static/gif/jgq/mo4.gif"
            break
        }
        case 5:{
            document.getElementById("tiblock").innerHTML="<img src=\"../../static/gif/jgq/mo61.gif\" style=\"height: 100%\">"
            document.getElementById("bg").src="../../static/gif/jgq/mo5.gif"
            break
        }
        case 6:{
            document.getElementById("tiblock").innerHTML="<img src=\"../../static/img/jgq/jgqws.png\" style=\"height: 100%\">"
            document.getElementById("bg").src="../../static/gif/jgq/mo6.gif"
            break
        }
        case 0:{
            document.getElementById("tiblock").innerHTML="<img src=\"../../static/gif/jgq//mo11.gif\" style=\"height: 100%\">"
            document.getElementById("bg").src="../../static/img/jgq/jgq.png"
            break
        }
        default:{

            document.getElementById("tiblock").innerHTML="<img src=\"../../static/gif/jgq/mo11.gif\" style=\"height: 100%\">"
            document.getElementById("bg").src="../../static/img/jgq/jgq.png"
            break
        }

    }


}
