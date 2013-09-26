


function getIEOPVersion()
// Returns the version of Windows Internet Explorer or a -1
// (indicating the use of another browser).
{
   var rv = -1; // Return value assumes failure.
   if (navigator.appName == 'Microsoft Internet Explorer')
   {
   	var ua = navigator.userAgent;
   	var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
   	if (re.exec(ua) != null)
   		rv = parseFloat( RegExp.$1 );
   }
   return rv;
}


function checkIEVersion()
{
	var ver = getIEOPVersion();
	if ( ver> -1 )
	{
		$('.ie').show();
	}else{
		$('.ie').hide();
		var Opera = /opera/i.test(navigator.userAgent);
		if (Opera) {
			$('.opera').show();
		}
	}
}


var isChrome = window.chrome;

function getDocHeight() {
	var D = document;
	return Math.max(
		D.body.scrollHeight, D.documentElement.scrollHeight,
		D.body.offsetHeight, D.documentElement.offsetHeight,
		D.body.clientHeight, D.documentElement.clientHeight
		);
}


var docW=$(window).width();
var docH=$(window).height();

function updateSize(){
	docW=document.getElementsByTagName('body')[0].offsetWidth;
	docH=document.getElementsByTagName('body')[0].offsetHeight;
	docH=getDocHeight()-8;
}


document.onmouseup = ListenMouseClick

function ListenMouseClick(e) 
{

	var e = e || window.event;
	var btnCode;
	btnCode = e.button;

	if(btnCode==2){
		var right_menu=document.getElementById("contextmenu")
		var x=e.clientX;
		var y=e.clientY;
		right_menu.style.display="block";
		var wid = right_menu.offsetWidth;
		var hei = right_menu.offsetHeight;
		if(x<(docW-wid)){
			right_menu.style.left=x+"px";
		}else{
			right_menu.style.left=x-wid+"px";
		}
		if(y<(docH-hei)){
			right_menu.style.top=y-15+"px";
		}else{
			right_menu.style.top=y-15-hei+"px";
		}
	};
}

setInterval(updateSize,100);
//
//
$(document).mouseup(function (e)
{

	var container = $("#contextmenu");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
    	container.hide();
    }
    var container2 = $("#contextmenu-arrange");

    if (!container2.is(e.target) // if the target of the click isn't the container...
    	&& container2.has(e.target).length === 0)
         // ... nor a descendant of the container
     {
     	container2.hide();
     }
     var container3 = $("#contextmenu-more");

    if (!container3.is(e.target) // if the target of the click isn't the container...
        && container3.has(e.target).length === 0) // ... nor a descendant of the container
    {
    	container3.hide();
    }
    var container4 = $("#contextmenu-more-file");

    if (!container4.is(e.target) // if the target of the click isn't the container...
        && container4.has(e.target).length === 0) // ... nor a descendant of the container
    {
    	container4.hide();
    }
    $('.dock li').click(function(){
    	$(this).addClass("bounce");

    });
    $('.dock li').removeClass("bounce");
    
    var mouseX=e.clientX;
    var mouseY=e.clientY;
    var menu_items = $(".next-menu");
    $('#contextmenu li').click(function(){
    	if(!menu_items.is(e.target)){
    		$('#contextmenu').hide();
    	}else{
    		$('#contextmenu').show();
    	}
    });
    $('#contextmenu-arrange li').click(function(){
    	if(!menu_items.is(e.target)){
    		$('#contextmenu-arrange').hide();
    	}else{
    		$('#contextmenu-arrange').show();
    	}
    });
    $('#contextmenu-more li').click(function(){
    	if(!menu_items.is(e.target)){
    		$('#contextmenu-more').hide();
    	}else{
    		$('#contextmenu-more').show();
    	}
    });
    $('#contextmenu-more-file li').click(function(){
    	if(!menu_items.is(e.target)){
    		$('#contextmenu-more-file').hide();
    		$('#contextmenu').hide();
    	}else{
    		$('#contextmenu-more-file').show();
    		$('#contextmenu').show();
    	}
    });
});



function date(){
	var today=new Date();
	var daynum=today.getDay();
	var day="Sun";
	switch(daynum){
		case 0:
		day="Sun";
		break;
		case 1:
		day="Mon";
		break;
		case 2:
		day="Tue";
		break;
		case 3:
		day="Wed";
		break;
		case 4:
		day="Thu";
		break;
		case 5:
		day="Fri";
		break;
		case 6:
		day="Sat";
		break;
		default:
		day="Sun";
	}
	//
	var hr=today.getHours();
	var min=today.getMinutes();
	if(min<10){
		min="0"+min;
	}
	if(hr>12){
		var ap="PM";
		hr=hr-12;
	}else{
		var ap="AM"
	}
	document.getElementById("date_time").innerHTML=day+" "+hr.toString()+":"+min.toString()+" "+ap;
}

var saved_txt="";

/**Console**/
function evaluate_js(str){
	var form = document.getElementById("form_terminal");
	form.reset();
	//alert("hello");
	//document.innerHTML("<br>"+eval(str));
	//alert(str+" ->");
	eval(str)
	var innermyspan = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML=innermyspan+"<br>"+readline();
}
/**/

function toggle_not(){
	var box = document.getElementById("notification-center");
	var back = document.getElementById("wrapper-back");
	if(isChrome){
		box.style.transition="0.2s linear";
		back.style.transition="0.2s linear";
		if(box.style.right=="0px"){
			box.style.right="-256px"
			back.style.left="0px";
		}else{
			box.style.right="0px"
			back.style.left="-256px";
		}
	}else{
		box.style.transition="0.2s linear";
		back.style.transition="none";
		if(box.style.right=="0px"){
			box.style.right="-256px"
		}else{
			box.style.right="0px"
		}
	}
}


function checkConnection(){
	var wifi_icon = document.getElementById("wifi-icon");
	var a=navigator.onLine;
	if(a){
		document.getElementById('wifi-note-menu').innerHTML="Connected To The Internet";
		wifi_icon.src="files/notifications/wifi.png"
	}else{
		document.getElementById('wifi-note-menu').innerHTML="No Connection Found";
		wifi_icon.src="files/notifications/wifi-not-connected.png"
	}
}

function checkBattery(){
	if(isChrome){
		document.getElementById('battery-note-menu').innerHTML="Battery Status Unavailable";
	}else{
		var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

		battery.addEventListener("chargingchange", function(e) {
			console.warn("Battery charge change: ", battery.charging);
		}, false);
		battery.addEventListener("chargingtimechange", function(e) {
			console.warn("Battery charge time change: ", battery.chargingTime);
		}, false);
		battery.addEventListener("dischargingtimechange", function(e) {
			console.warn("Battery discharging time change: ", battery.dischargingTime);
		}, false);
		battery.addEventListener("levelchange", function(e) {
			console.warn("Battery level change: ", battery.level);
		}, false);
		var battery_icon = document.getElementById("bat-icon");

		if(battery.charging){
			document.getElementById('battery-note-menu').innerHTML="Charging";
			battery_icon.src="files/notifications/battery.png"
		}else{
			var batteryLevel=Math.round(battery.level*100);
			if(batteryLevel>60){
				battery_icon.src="files/notifications/battery-100.png"
			}else if(batteryLevel>30){
				battery_icon.src="files/notifications/battery-40.png"
			}else{
				battery_icon.src="files/notifications/battery-20.png"
			}
			document.getElementById('battery-note-menu').innerHTML="Not Charging "+batteryLevel+"% remaining";
		}
	}
}


function mapshow(){
	var pos=$('.map').position();
	if(pos.left<-850){
		$('.map').css({'left':'200px'});
	}	
}

function initialize() {
	var map_canvas = document.getElementById('map_canvas');
	var map_options = {
		center: new google.maps.LatLng(0.0000, 0.0000),
		zoom: 2,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: false
	}
	var map = new google.maps.Map(map_canvas, map_options)
}

$(function(){
	
	google.maps.event.addDomListener(window, 'load', initialize);
	google.maps.event.trigger(map, "resize");
	checkIEVersion();
	$('.map').resizable({
		maxHeight: 600,
		maxWidth: 900,
		minHeight: 150,
		minWidth: 200,
		handles: {'se': $('.ui-resizable-handle')}
	});
	$('.terminal .title-bar').mousedown(function(){
		$('.terminal').draggable();
	});
	$('.map .title-bar').mousedown(function(){
		$('.map').draggable({disabled:false});
	});
	$('.map .title-bar').mouseup(function(){
		$('.map').draggable({disabled:true});
		$('.map').css({'opacity':'1'})
	});
	$('.about-mac .title-bar').mousedown(function(){
		$('.about-mac').draggable();
	});
	$('#console').click(function(){
		$('#printTB').focus();
	});
	$('#printTB').keyup(function(event){
		if(event.keyCode==38){
			$('#printTB').val(saved_txt)
		}
		if(event.keyCode==13){
			saved_txt=$('#printTB').val();
			var form = document.getElementById("form_terminal");
			form.reset();
		}
	});
	$('#wifi-note').hover(function(){
		$('#wifi-note-menu').fadeIn(200);
	},function(){
		$('#wifi-note-menu').fadeOut(200);
	});
	$('#wifi-note-menu').hover(function(){
		$('#wifi-note-menu').fadeIn(200);
	},function(){
		$('#wifi-note-menu').fadeOut(200);
	});
	$('#battery-note').hover(function(){
		$('#battery-note-menu').fadeIn(200);
	},function(){
		$('#battery-note-menu').fadeOut(200);
	});
	$('#battery-note-menu').hover(function(){
		$('#battery-note-menu').fadeIn(200);
	},function(){
		$('#battery-note-menu').fadeOut(200);
	});
	$('#volume-note').hover(function(){
		$('#volume-note-menu').fadeIn(200);
	},function(){
		$('#volume-note-menu').fadeOut(200);
	});
	$('#volume-note-menu').hover(function(){
		$('#volume-note-menu').fadeIn(200);
	},function(){
		$('#volume-note-menu').fadeOut(200);
	});
	$('#search-note').click(function(){
		$('#search-note-menu').fadeToggle(200);
	});
	$('#date_time').click(function(){
		$('#calendar').fadeToggle(200);
	});

	

	google.maps.event.addListenerOnce(map, 'idle', function(){
		google.maps.event.trigger(map, 'resize');
		map.setCenter(location);
	});

	//
	$(document).mousemove(function(){
		var pos=$('#contextmenu').position();
		if($(window).height()-pos.top<400){
			$('#contextmenu li ul').css({"top":"-86px"});
		}else{
			$('#contextmenu li ul').css({"top":"-5px"});
		}

		if($(window).width()-pos.left<400){
			$('#contextmenu li ul.c-arrange').css({"left":"-190px"});
			$('#contextmenu li ul.c-more').css({"left":"-190px"});
		}else{
			$('#contextmenu li ul.c-arrange').css({"left":"251px"});
			$('#contextmenu li ul.c-more').css({"left":"251px"});
		}
		var posmore=$('ul.c-more').position();
		if($(window).width()-posmore.left<200){
			$('ul.c-file').css({"left":"-190px"});
		}else{
			$('ul.c-file').css({"left":"190px"});
		}

	});
	$('.notif-search-box input').keyup(function(){
		if($(this).val()){
			$('.notif-search-box').css({"height":"300px"});
			$('#search-top').css({"border-radius":"0px"});
			var txt=$('.notif-search-box input').val();
			if(txt.length>25){
				$('#search-text').text('Searching for "' + txt.substring(0,25) + '..."');
			}else{
				$('#search-text').text('Searching for "' + txt + '"');
			}
		}else{
			$('.notif-search-box').css({"height":"25px"});
			$('#search-top').css({"border-radius":"0px 0px 4px 4px"});
		}
	})
});