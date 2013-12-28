var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","/conf/navigation.xml",false);
xmlhttp.send();
var xmlDoc=xmlhttp.responseXML;
document.write("<div id='navigation'>");
document.write("<div id='btn'>");
document.write("<div class='line'></div>");
document.write("<div class='line'></div>");
document.write("<div class='line'></div>");
document.write("<div class='text'>MENU</div>");
document.write("</div>");
document.write("<div id='list'>");
document.write("<ul>");
var naviList = xmlDoc.getElementsByTagName("navigation")[0].getElementsByTagName('name');
for (var i=0;i<naviList.length;i++){
	document.write("<li><a href='");
	document.write(xmlDoc.getElementsByTagName("navigation")[0].getElementsByTagName('link')[i].childNodes[0].nodeValue);
	document.write("'>");
	document.write(naviList[i].childNodes[0].nodeValue);
	document.write("</a></li>");
}
document.write("</ul>");
document.write("</div>");
document.write("</div>");
$(document).ready(function(){
	$("#body").css({
		position: "absolute",
		width: window.innerWidth,
		height: window.innerHeight,
	});
	var ns = 0;
	$("#navigation #btn").click(function(){
		if (ns == 0){
			$("#body").animate({left:300},300).addClass("box-shadow");
			$("#navigation").animate({width:300,height:window.innerHeight},300);
			$("#navigation .text").css({display:"block"});
			$("#navigation #list").css({display:"block"});
			ns = 1;
		}else{
			$("#navigation").animate({width:50,height:50},300);
			$("#body").removeClass("box-shadow").animate({left:0},300);
			$("#navigation .text").css({display:"none"});
			$("#navigation #list").css({display:"none"});
			ns = 0;
		}
	});
	$("#body").click(function(){
		if (ns == 1){
			$("#navigation").animate({width:50,height:50},300);
			$("#body").removeClass("box-shadow").animate({left:0},300);
			$("#navigation .text").css({display:"none"});
			$("#navigation #list").css({display:"none"});
			ns = 0;
		}
	});
});