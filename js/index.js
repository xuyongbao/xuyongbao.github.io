require(['main'],function(main){



    var common = new Vue({
        el:"#vueDemo",
        data:{
            modifyBorderWidth:0,
            modifyOpacity:1.0,
            modifyHeight:100,
            modifyWidth:100,
            modifyBackground:"#000",
            modifyBorderStyle:"solid",
            modifyBorderColor:"#333",
            modifyFontColor:"#fff",
            strHtml:""
        },
        methods:{
            reduceBorderWidth:function(){
                this.modifyBorderWidth --;
                if(this.modifyBorderWidth <= 0){
                    this.modifyBorderWidth = 0;
                }
            },
            plusBorderWidth:function () {
                this.modifyBorderWidth ++;
            },
            reduceOpacity:function(){
                this.modifyOpacity -= 0.1;
                if(this.modifyOpacity <= 0){
                    this.modifyOpacity = 0;
                }
                this.modifyOpacity = this.modifyOpacity.toFixed(1);
            },
            plusOpacity:function () {
                this.modifyOpacity = this.modifyOpacity - 0 + 0.1;
                this.modifyOpacity = this.modifyOpacity.toFixed(1);
                if(this.modifyOpacity >= 1){
                    this.modifyOpacity = 1;
                }
            },
            pintBColor:function ($event) {
                console.log($event.currentTarget.value);
                this.modifyBackground = $event.currentTarget.value;
            },
            pintFColor:function ($event) {
                console.log($event.currentTarget.value);
                this.modifyFontColor = $event.currentTarget.value;
            },
            createDiv:function(){
                var str = ' <div :style="{\
                    height:modifyHeight + \'px\',\
                    width:modifyWidth + \'px\',\
                    background:modifyBackground,\
                    border:modifyBorderWidth + \'px\' +\' \' +modifyBorderStyle+\' \'+modifyBorderColor,\
                    opacity:modifyOpacity,\
                    color:modifyFontColor\
                    }" >555555</div>';
                this.strHtml = str;
            }
        }
    });


main.drag($("#title"));
    main.go(2);
});
