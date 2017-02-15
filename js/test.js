/**
 * Created by admin on 2017/2/15.
 */
window.onload = function(){
    var oDiv = document.getElementById("div1");
    var oDiv2 = document.getElementById("div2");
    var oLogo = document.getElementById("logo");
    // 拖拽层级
    zIndex = 1;

    drag(oDiv);
    drag(oDiv2);
    drag(oLogo);
    //选中提示
    //chang( $('#title'))

    
    $('#title').click(function(){
        $('#title').css("zIndex",zIndex++);
        $('.modify-options').css("zIndex",zIndex++);
        $('.modify-options').animate({
            bottom:'0'
        },800);
        txt_edit($('#title'));
    });
};

/*拖拽封装函数*/
//拖拽函数
function drag(oDiv){
    $(oDiv).on("touchstart",function(ev){

        var disX = ev.targetTouches[0].pageX - oDiv.offsetLeft;
        var disY = ev.targetTouches[0].pageY - oDiv.offsetTop;
        $(oDiv).css("zIndex",zIndex++);
        function fnMove(ev){
            //位置
            var l = ev.targetTouches[0].pageX - disX;
            var t = ev.targetTouches[0].pageY - disY;
            //位置限制
            if(t <= 0 ){
                t = 0;
            }
            if(t >= $(window).height() - $('#div1').height()){
                t = $(window).height() - $('#div1').height()
            }
            if(l <= 0){
                l = 0
            }
            if(l >= $(window).width() - $('#div1').width()){
                l = $(window).width() - $('#div1').width()
            }
            oDiv.style.left = l + "px";
            oDiv.style.top = t + "px";
        }
        function fnEnd(){
            //释放资源
            $(oDiv).off("touchmove",fnMove);
            $(oDiv).off("touchend",fnEnd);
        }

        $(oDiv).on("touchmove",fnMove);
        $(oDiv).on("touchend",fnEnd);

        //ev.preventDefault();
    });
}
//点击修改---出现选择框
function chang(obj) {
    obj.on("click",function(){
        console.log("111")
        if(obj.hasClass("border_add")) {
            obj.removeClass("border_add");
        }else{
            obj.addClass("border_add");
        }
    });
};

/*文字编辑封装函数*/
function txt_edit(obj){
    var border = obj.css("borderWidth");
    var opacity = obj.css("opacity");
    var bColor = obj.css("backgroundColor");
    var color = obj.css("color");

    //初始化
    var arr = [border,opacity,bColor,color]
    $('.modify-options li span i').each(function (index) {
        $(this).html(arr[index]);
    });
    //修改
    $('.modify-options li').eq(0).find('button').on("click",function () {
        var type = $(this).html();
        var num = parseFloat($('.modify-options li span i').eq(0).html())
        if(type == "-"){
            $('.modify-options li span i').eq(0).html(--num + "px");
        }else{
            $('.modify-options li span i').eq(0).html(++num + "px");
        }
        obj.css("border",num+"px #000 solid");
    })
    $('.modify-options li').eq(1).find('button').on("click",function () {
        var type = $(this).html();
        var num = parseFloat($('.modify-options li span i').eq(1).html())
        if(type == "-"){
            num -= 0.1
            if(num <= 0){
                num = 0;
            }
            $('.modify-options li span i').eq(1).html(num.toFixed(1) );
        }else{
            num += 0.1
            if(num >= 1){
                num = 1;
            }
            $('.modify-options li span i').eq(1).html(num.toFixed(1));
        }
        obj.css("opacity",num);
    })
    $('.modify-options li').eq(2).find('input').on("change",function () {
        console.log($(this).val());
        $('.modify-options li span i').eq(2).html($(this).val());
        obj.css("backgroundColor",$(this).val());
    })
    $('.modify-options li').eq(3).find('input').on("change",function () {
        console.log($(this).val());
        $('.modify-options li span i').eq(3).html($(this).val());
        obj.css("color",$(this).val());
    })
    $('.modify-options li').eq(4).on("click",function () {
        $('.modify-options').css('bottom','-100%')
    })


}






















