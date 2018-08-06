<template>
    <div :id="id" class="modal fade" tabindex="-1" role="dialog" :aria-labelledby="id+'Label'">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" :id="id+'Label'" v-text="title"></h4>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <button v-for="x in buttons" :key="x.name" type="button" class="btn" :class="['btn-'+getButtonType(x.buttonType)]" @click="getClick(x.click)">
                        <span v-if="x.icon" :class="x.icon" aria-hidden="true"></span>
                        {{x.name}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import util from "../modules/util";
export default {
    props: {
        id: {
            default: function() {
                return "modal_" + util.getRandom(8);
            }
        },
        title: {},
        buttons: {
            default: function(){
                return [];
            }
        },
        url: {},
        lazyload: {
            default: false
        }
    },
    computed: {},
    data: () => {
        return {
            isLoaded: false
        };
    },
    methods: {
        getButtonType: function(type){
            return type || 'default'
        },
        getClick: function(click){
            if(typeof click == 'string'){
                eval(click);
            }else if(typeof click == 'function'){
                click();
            }
        },
        loadRemotePage: function(){
            var _this = this;
            $(this.$el).find('.modal-body').load(this.url,function(){
                _this.isLoaded = true;
            });
        }
    },
    mounted: function() {
        var _this = this;
        if(this.url && !this.lazyload){
            this.loadRemotePage();
        }
        if(this.lazyload){
            $(this.$el).on('shown.bs.modal',function(){
                if(!_this.isLoaded)
                    _this.loadRemotePage();
            })
        }
    }
};
</script>

<style lang="less" scoped>
.modal{
    .close{
        z-index: 1;
    }
}
</style>


