$(function(){
	var oBox = document.getElementById('box');//最外层盒子
	var oScreenBox = document.getElementById('screenBox');//分屏父级
	var oScreen = oScreenBox.children;//分屏
	var oHeaderOne = document.getElementById('header-one');//导航头
	var aHeaderOneLi = oHeaderOne.getElementsByTagName('li');//导航头的li
	var oSubnav = document.getElementById('subnav');//导航头
	var aSubnavLi = oSubnav.children[0].children;//导航头的li
	var oToggle = document.getElementById('toggle');//换屏剪头
	var oWrite = document.getElementById('writeword');//打字效果
	var oIntr = getByClass(oScreenBox,'introduce');//首屏文字
	var readyMove = true;
	var stepMove = document.getElementById('stepmove');//分步运动ul
	var stepLi = stepMove.children;
	var pageStep = document.getElementById('pagestep');

	var now = 0; //当前屏数
	var readyWheel = true; //滚轮初始运动
	var aHW = 0; //导航头的宽度
	var aSH = 0; //侧导航的初始高度

	//给每屏的高度自适应屏幕的高度
	for(var i=0;i<oScreen.length;i++){
		oScreen[i].style.height = document.documentElement.clientHeight+'px';
	}
	// 创建侧边导航li&&计算高度
	for(var i=0;i<aHeaderOneLi.length;i++){
		aHW += aHeaderOneLi[i].offsetWidth;
		var oSubnavLi = document.createElement('li');
		oSubnavLi.innerHTML = '<a href="javascript:;"></a>';
		oSubnav.children[0].appendChild(oSubnavLi);
	}
	oHeaderOne.style.width = aHW + 'px';
	oHeaderOne.style.marginLeft = -aHW/2+'px';
	oSubnav.style.marginTop = -aSubnavLi[0].offsetHeight*aSubnavLi.length/2+'px';
	// 给header设置宽度 && 点击换屏
	aSubnavLi[0].className = 'cur';
	for(var i=0;i<aSubnavLi.length;i++){
		(function(index){
			aHeaderOneLi[i].onclick = function(){
				screenTab(index);
			}
			aSubnavLi[i].onclick = function(){
				screenTab(index);
			}
		})(i);
	}
	
	//滚屏事件
	addMouseWheel(oBox,function(dir){
		if(!readyMove) return;
		if(dir){//下
			now++;
		}else{//上
			now--;

		}
        now%=oScreen.length;
        screenTab(now);
        if(now==oScreen.length-1){
            oToggle.src="img/prev.png";
        }else{
            oToggle.src="img/next.png";
        }
	});
	//换屏箭头
	(function(){
		var i = 0;
		setInterval(function(){
			i++;
			oToggle.style.top = i%25+'px';
		},30);
		oToggle.onclick  = function(){
			now++;
            now%=oScreen.length;
			screenTab(now);
            if(now==oScreen.length-1){
                oToggle.src="img/prev.png";
            }else{
                oToggle.src="img/next.png";
            }
		}
	})();
	//首屏打字oWrite
	(function(){
		var writeStr = '欢迎访问XYB的个人网站，我是一名前端工程师，热衷于学习前端各种新技术，每天不是在找bug，就是在去找bug的路上...';
		for(var i=0;i<writeStr.length;i++){
			var oSpan = document.createElement('span');
			oSpan.innerHTML = writeStr.charAt(i);
			oWrite.appendChild(oSpan);
		}
		var i=0;
		var timer = null;
		var aSpan = oWrite.children;
		// alert(aSpan.length);
		timer = setInterval(function(){
			aSpan[i].className = "active";
			i++;
			if(i == aSpan.length){
				clearInterval(timer);
			}
		},100)
	})();

	//3d旋转环
    function r3d(){

        var oUl=document.getElementById('rotate3D');
        oUl.innerHTML='';
        var count=11;
        oUl.style.transform="perspective(800px) rotateX(-15deg) rotateY(0deg) translateZ(0px)";
        var x=150;
        var y=0;
        var speedX=0;
        var speedY=0;
        var lastX=0;
        var lastY=0;
        var timer=null;
        var bReady=false;
        for(var i=0; i<count; i++){
            var oLi=document.createElement('li');
            oLi.innerHTML='<img src="img/img1/'+(i+1)+'.jpg" alt=""/>'+'<span></span>';
            oUl.appendChild(oLi);
            oLi.children[1].style.background="url('img/img1/"+(i+1)+".jpg') no-repeat";
        }
        var oLi=document.createElement('li');
        oLi.classList.add('background');
        oUl.appendChild(oLi);
        var aLi=oUl.children;
        setTimeout(function(){
            for(var i=0; i<count; i++){
                aLi[i].style.transition="1s all ease "+(count-1-i)*100+"ms";
                aLi[i].style.transform="rotateY("+i*360/count+"deg) translateZ(350px) ";
                aLi[i].rotate=i*360/count;
            }
        },0);
        aLi[0].addEventListener("transitionend",function(){
            for(var i=0; i<count; i++){
                var opacity=rotate(aLi[i].rotate);
                if(opacity<0.3) opacity=0.3;
                aLi[i].style.opacity=opacity;
                bReady=true;
            }
        },false);
        document.onmousedown=function(ev){
            if(!bReady) return ;
            clearInterval(timer);
            var disX=ev.pageX-y;
            var disY=ev.pageY-x;
            document.onmousemove=function(ev){
                y=ev.pageX-disX;
                x=ev.pageY-disY;

                if(x>600){
                    x=600;
                }
                if(x<-600){
                    x=-600;
                }
                speedX=(x-lastX);
                speedY=(y-lastY);
                lastX=x;
                lastY=y;
                setOpacity();
                oUl.style.transform="perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg) translateZ(0px)";

            };
            document.onmouseup=function(){
                clearInterval(timer);
                document.onmouseup=document.onmousemove=null;
                timer=setInterval(function(){
                    x += speedX;
                    y += speedY;
                    speedX *= 0.95;
                    speedY *= 0.95;
                    if(x>600){
                        x=600;
                    }
                    if(x<-600){
                        x=-600;
                    }
                    if(Math.abs(speedX)<1){
                        speedX=0;
                    }
                    if(Math.abs(speedY)<1){
                        speedY=0
                    }

                    if(speedX==0 && speedY==0){
                        clearInterval(timer);
                    }

                    oUl.style.transform="perspective(800px) rotateX("+-x/10+"deg)  rotateY("+y/10+"deg)  translateZ(0px)";
                    setOpacity();
                },30);

            };
            return false;
        };
        function rotate(n){
            if(n>180){
                n=360-n;
            }
            n=180-n;
            return (n/180);
        }
        function setOpacity(){
            for(var i=0; i<count; i++){
                aLi[i].style.transition="none";
                var opacity=((aLi[i].rotate+(y/10))%360+360)%360;
                opacity=rotate(opacity);
                if(opacity<0.3) opacity=0.3;
                aLi[i].style.opacity=opacity;
            }
        };
    };
	// 分布运动
	(function(){
		var aPos = [];
		var ready = true;
		var count = 0;
		var textArr = ['仿苹果桌面','canvas屏保','canvas时钟','css3时钟','缩略图','拖拽照片墙','谷歌列表','CSS3效果'];
		var imgArr = ['w1','w12','w3','w7','w5','w6','w11','w8'];
		var hrefArr = ['html/apple/apple.html','html/canvas_desk.html','html/canvas_clock.html','html/clock.html','html/thumbnail/thumbnail.html','html/tuozhuai/drug_photo.html','html/chrome/chrome.html','html/css3/css3.html'];

		for(var i=0;i<stepLi.length;i++){
			aPos.push({
				left:stepLi[i].offsetLeft,
				top:stepLi[i].offsetTop,
				width:stepLi[i].offsetWidth,
				height:stepLi[i].offsetHeight,
				opacity:1
			});
			stepLi[i].style.left = aPos[i].left + 'px';
			stepLi[i].style.top = aPos[i].top + 'px';
		}
		for(var i=0;i<stepLi.length;i++){
			stepLi[i].style.position = 'absolute';
			stepLi[i].style.margin = 0;
			stepLi[i].innerHTML = '<img src="img/'+imgArr[i]+'.jpg" alt=""><a href="'+hrefArr[i]+'" target="_blank">'+textArr[i]+'</a>';
			
		}
		// 翻页，位置随机todo
		var pageA = pageStep.children[0];
		pageA.onclick = function(){
			if(!ready) return;
			ready=false;
			down();
		};
		function down(){
			var i=stepLi.length-1;

			var timer = setInterval(function(){
				(function(index){
					move(stepLi[i],{left:stepMove.offsetWidth/2,top:stepMove.offsetHeight,opacity:0,width:0,height:0},{complete:function(){
						if(index == 0){
							for(var i=0;i<stepLi.length;i++){
								stepLi[i].innerHTML='<img src="img/'+imgArr[i]+'.jpg" alt=""><a href="'+hrefArr[i]+'" target="_blank">'+textArr[i]+'</a>';	
							}
							up();
						}
					}});
				})(i);
				i--;
				if(i<0){
					clearInterval(timer);
				}
			}, 100)
		}
		
		function up(){
			var i = stepLi.length-1;
			var timer = setInterval(function(){
				
				(function(index){
					move(stepLi[i],aPos[i],{complete:function(){
						if(index == 0){
							ready = true;
						}
					}});
				})(i)
				i--;
				if(i<0){
					clearInterval(timer);
				}
			},100);
		}
		//判断方向
		for(var i=0;i<stepLi.length;i++){
			lagou(stepLi[i]);
		}
		
		function direction(obj,oEv){

			var x = oEv.clientX - getPos(obj).left - obj.offsetWidth/2;
			var y = obj.offsetHeight/2 + getPos(obj).top - oEv.clientY;
			// 弧度
			var a = Math.atan2(y,x);
			//换成角度，然后除以90度，得到4个方向，0 左  1下 2 右 3 上
			return Math.round((a*180/Math.PI + 180)/90)%4;
		}
		//拉钩鼠标跟随进入进出效果
		function lagou(obj){
			obj.onmouseover = function(ev){
				var oEv = ev || event;
				var oSrc = oEv.fromElement || oEv.relatedTarget;
				if(obj.contains(oSrc)){
					return;
				} 
				var oChild = this.children[1];
				var nd = direction(obj,oEv);
				// w:250px,h:180px
				switch(nd){
					case 0:// 0 左 
						oChild.style.left = "-250px";
						oChild.style.top = "0";
					break;
					case 1://  1下
						oChild.style.left = "0";
						oChild.style.top = "180px";
					break;
					case 2://  2 右 
						oChild.style.left = "250px";
						oChild.style.top = "0";
					break;
					case 3:// 3 上
						oChild.style.left = "0";
						oChild.style.top = "-180px";
					break;
				}
				move(oChild,{left:0,top:0});
			}
			obj.onmouseout = function(ev){
				var oEv = ev || event;
				var oSrc = oEv.toElement || oEv.relatedTarget;
				if(obj.contains(oSrc)) return;
				var oChild = this.children[1];
				var nd = direction(obj,oEv);
				// w:250px,h:180px
				switch(nd){
					case 0:// 0 左 
						move(oChild,{left:250,top:0});
					break;
					case 1://  1下
						move(oChild,{left:0,top:180});
					break;
					case 2://  2 右 
						move(oChild,{left:250,top:0});
					break;
					case 3:// 3 上
						move(oChild,{left:0,top:-180});
					break;
				}
				// move(oChild,{left:0,top:0});
			}
		}
		
	})();
	//项目经验
	(function(){
		var oPre = document.getElementById('progress');
		var aDiv = oPre.children;
		var n = 30;
		var timer = setInterval(function(){
			if(n>50){
				n-=10;
			}else{
				n+=10;
			}
			for(var i=0;i<aDiv.length;i++){
				aDiv[i].style.transition = '1s all ease';

			}
		},300)
		
	})()
	//封装切屏函数
	var oLogo = document.getElementById('sweet');
	function screenTab(index){
		if(!readyMove) return;
		readyMove = false;
		for(var i=0;i<aSubnavLi.length;i++){
			aHeaderOneLi[i].className = 'fl';
			aSubnavLi[i].className = '';
			var oIntrChild = oIntr[i].children;

			if(oIntrChild.length == 2){
				oIntrChild[0].style.animation = 'bg1 2s linear';
				oIntrChild[1].style.animation = 'bg 2s linear';
			}else if(oIntrChild[0].className == 'rotate3D'){
				r3d();
			}
				
			
		}
		oIntrChild = oIntr[index].children;
		for(var j=0;j<oIntrChild.length;j++){
			oIntrChild[j].style.animation = '';
		}
		aHeaderOneLi[index].className = 'active fl';
		aSubnavLi[index].className = 'cur';
		move(oScreenBox,{'top':-oScreen[0].offsetHeight*index},{complete:function(){
			readyMove = true;
		}});
	}

})


