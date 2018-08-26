import Vue from 'vue'

export default (Vue)=>{
    // Vue.directive('tooltip',{//工具气泡提示
    //     inserted: function (el,binding){
    //         var defaultOpts = {
    //             container: 'body',
    //             dalay: 0,
    //             html: false,
    //             placement: "top",
    //             title: '',
    //             trigger: 'hover focus'
    //         }
    //         if(binding.value)
    //             $.extend(defaultOpts,binding.value);
    //         $(el).tooltip(defaultOpts);
    //     }
    // });

    Vue.directive('contextmenu',{//工具气泡提示
        inserted: function (el,binding){
            $(el).on("contextmenu",function(e){
                e.preventDefault();
                e.stopPropagation();
                setTimeout(function(){
                    var menus = binding.value && $(binding.value.target);//下拉菜单面板
                    if(!menus)return;//不存在则return;
                    if($(menus).data("params"))
                        $(menus).trigger("setParams",[$(menus).data("params")]);//设置下拉面板参数
                    else if(binding.value.params)//是否有配置额外参数
                        $(menus).trigger("setParams",[binding.value.params]);//设置下拉面板参数
                    $(menus).addClass("hide").removeClass("show");//隐藏
                    var windowHeight = document.body.clientHeight;//屏幕高度
                    var top = e.pageY;//触发元素距上距离
                    var left = e.pageX;//触发元素距左距离
                    if(top+$(menus).height()>windowHeight){//若菜单底部超出屏幕底部
                        top = top - $(menus).height();//原本高度减去菜单高度和元素高度
                    }
                    $(menus).trigger("show",[top,left]);//显示菜单
                    $(el).addClass("show");
                    $(document).on("click",function(e){//点击其他地方隐藏
                        $(menus).trigger("hide");
                        $(el).removeClass("show");
                    });
                    $(menus).data("trigger",$(el));
                },0);
            });
        }
    });
}