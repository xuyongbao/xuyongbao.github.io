
function doMove(obj, num, attr, target, endFn) {

	clearInterval(obj.timer);
	
	num = parseInt( getStyle(obj, attr) ) < target ? num : -num;
	
	obj.timer = setInterval(function() {
		
		var speed = parseInt( getStyle(obj, attr) ) + num;
		
		if (speed > target && num > 0 || speed < target && num < 0) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval(obj.timer);
			endFn && endFn();
		}
		
	}, 30);
	
}

function getStyle(obj, attr) {
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj, 0)[attr];
}

function opacity(obj, num, target, endFn) {	
	clearInterval( obj.opacity );	
	num=Math.floor(getStyle(obj,'opacity')*100)<target?num:-num;	
	obj.opacity = setInterval(function () {	
		var speed=Math.floor(getStyle( obj,'opacity')*100)+num;		
		if (speed>target&&num>0||speed<target&&num< 0) {
			speed = target;
		}		
		obj.style.filter = 'alpha(opacity='+ speed +')';
		obj.style.opacity = speed/100;		
		if ( speed == target ) {
			clearInterval(obj.opacity);
			endFn && endFn();
		}		
	}, 30);	
}