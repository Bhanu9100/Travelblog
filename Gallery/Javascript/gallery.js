function colo(){
    var col=["https://images.pexels.com/photos/977738/pexels-photo-977738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/663487/pexels-photo-663487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
    var len=col.length;
    var ran=Math.random()*len;
    var rannum=Math.random(ran);
    document.getElementById("a").style.backgroundImage="URL(https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"+col[rannum]+")"
    var updatethetime=setTimeout(function() {colo()},5000)
}
function imgK(pic,heading,discription){
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imageheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=discription;
    bigscreen.style.display="flex"
    fulimg.src=pic;
}
function imgV(pic,heading,discription){
    document.getElementById("bigscreen").setAttribute("style","display:none")
}