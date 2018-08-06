<template>
    <div :id="id" class="numberbox" :style="myStyle">
        <input class="formatBox" :placeholder="placeholder" :value="formatValue" @input="checkInputNumber" />
        <input class="normalBox" type="hidden" :name="name" :placeholder="placeholder" :value="defaultValue" />
    </div>
</template>

<script>
import util from '../modules/util'
export default {
    props: {
        id: {
            default: 'numberbox_' + util.getRandom(8)
        },
        placeholder: {
            default: '请输入'
        },
        name: {
            type: String
        },
        width: {
            type: String,
            default: "auto"
        },
        height: {
            type: String,
            default: "28px"
        },
        value: {//初始值
            type: String,
            default: ""
        },
        min: {//允许最小值
            type: String,
            default: null
        },
        max: {//允许最大值
            type: String,
            default: null
        },
        precision: {//小数点后的显示位数
            type: [String,Number],
            default: 0
        },
    },
    computed: {
        myStyle: function(){
            return {
                width: this.width,
                height: this.height
            }
        }
    },
    data: () => {
        return {
            formatValue: {},
            defaultValue: {},
        }
    },
    methods: {
        checkInputNumber : function(e){//只能输入数字和小数点
            e.currentTarget.value = e.currentTarget.value.replace(/[^\d|.]/g, '').replace(/\.{2,}/g,".").replace(".","$#$").replace(/\./g,"").replace("$#$",".");
        },
        thousandFormat : function(s){//设置千分位格式
            if(s != ""){
                if(typeof s == "string"){
                    s = Number(s);
                }
                s = s.toFixed(this.precision);
                if(String(s).indexOf(".") != -1){
                    return s.split(".")[0].replace(/(?=(?!(\b))(\d{3})+$)/g, ",")+"."+s.split(".")[1];
                }else{
                    return s.replace(/(?=(?!(\b))(\d{3})+$)/g, ",");
                }
            }
        },
        defaultNumber : function(num){//把千分位数值还原成数字
            if(num != undefined){
                num=num.replace(/,/gi,'');
                num = Number(num).toFixed(this.precision);
                return String(num);
            }
        }
    },
    mounted: function(){
        const _this = this;
        this.formatValue = this.thousandFormat(this.value);
        this.defaultValue = this.defaultNumber(this.formatValue);
        $(".formatBox").on("mousedown",function(){
            _this.formatValue = _this.defaultNumber(_this.formatValue);
        }).on("blur",function(){
            _this.formatValue = _this.thousandFormat(this.value);
            _this.defaultValue = _this.defaultNumber(_this.formatValue);
        });
    }
}
</script>

<style lang="less" scoped>
.numberbox{
    display: inline-block;
    border: 1px solid #aaa;
    border-radius: 4px;
    input{
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0px 8px;
        margin: 0px;
        font-size: 14px;
        color: #444;
        border: none;
        outline: none;
        border-radius: 4px;
        box-sizing: border-box;
    }
}
</style>


