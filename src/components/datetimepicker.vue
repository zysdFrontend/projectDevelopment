<template>
    <div :id="id" class="input-group datetimepicker" :class="['input-group-'+size,myClass]">
        <span class="input-group-addon" :id="'label_'+id" v-text="label"></span>

        <flat-pickr :config="defaultConfig" class="form-control" placeholder="请选择" :name="name" :value="value"></flat-pickr>

        <span v-if="allowClear" class="input-group-btn">
            <button class="btn btn-default" type="button" title="Clear" data-clear>
                <i class="fa fa-trash-o">
                    <span aria-hidden="true" class="sr-only">Clear</span>
                </i>
            </button>
        </span>
    </div>
</template>

<script>
import util from '../modules/util'
import {
    Mandarin
} from "flatpickr/dist/l10n/zh";

export default {
    name: "datetimepicker",
    props: {
        // 组件id
        id: {
            type: String,
            default: 'combobox_' + util.getRandom(8)
        },
        // 表单name
        name: {
            type: String,
            default: ''
        },
        validate: {
            type: String
        },
        myClass: {
            type: [String, Object]
        },
        label: {
            type: String
        },
        placeholder: {
            type: String
        },
        size: {
            default: ''
        },
        allowClear: {
            type: Boolean,
            default: true
        },
        dateFormat: {
            type: String,
            default: 'Y-m-d'
        },
        config: {
            type: Object,
            default: () => {}
        },
        value: {
            type: String
        },
        minDate: {
            type: String,
            default: null
        },
        maxDate: {
            type: String,
            default: null
        },
        disable: {
            type: Array,
            default: () => []
        },
        enable: {
            type: Array,
            default: () => []
        },
        mode: {
            type: String,
            default: 'single'
        },
        enableTime: {
            type: Boolean,
            default: false
        },
        enableSeconds: {
            type: Boolean,
            default: false
        },
        time_24hr: {
            type: Boolean,
            default: false
        },
        noCalendar: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            defaultConfig: {
                wrap: true,
                altInput: true,
                altFormat: this.dateFormat,
                dateFormat: this.dateFormat,
                enableTime: this.enableTime,
                minDate: this.minDate,
                maxDate: this.maxDate,
                disable: this.disable,
                enable: this.enable,
                mode: this.mode,
                noCalendar: this.noCalendar,
                time_24hr: this.time_24hr,
                enableSeconds: this.enableSeconds,
                locale: Mandarin
            }
        };
    },
    mounted: function(){
        Object.assign(this.defaultConfig, this.config);
    }
};
</script>

<style lang="less">
.datetimepicker{
    margin-bottom: 15px;
    .form-control{
        background-color: #fff;
    }
}
</style>
