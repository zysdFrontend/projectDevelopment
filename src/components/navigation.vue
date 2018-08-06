<template>
    <ol class="breadcrumb">
        <li v-for="x in naviData" :key="x.id" :class="{active:x.isActive}"><a @click="myClick(x.id,x.name)" v-text="x.name"></a></li>
    </ol>
</template>

<script>
import util from '../modules/util'
export default {
    props: {
        id: {
            default: function(){
                return 'navigation_' + util.getRandom(8)
            }
        },
        naviData: {
            default: function(){return []}
        },
        click: {
            
        }
    },
    computed: {
    },
    data: () => {
        return {
            
        }
    },
    methods: {
        myClick: function(id,name){
            if(typeof this.click){
				this.click(id,name);
			}
        }
    },
    mounted: function(){
    }
}
</script>

<style lang="less" scoped>
.breadcrumb{
    li{
        a{
            cursor: pointer;
        }
    }
}
</style>


