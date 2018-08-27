<template>
    <b-input-group class="datetimepicker-group" :prepend="label">
        <flat-pickr ref="picker" :config="defaultConfig" class="form-control datetimepicker" placeholder="请选择" :name="name" :value="value"></flat-pickr>
        <b-input-group-append v-if="allowClear">
            <b-btn title="clear" data-clear>×</b-btn>
        </b-input-group-append>
    </b-input-group>
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
            default: 'datetimepicker_' + util.getRandom(8)
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
        config: {
            type: Object,
            default: () => {}
        },
        value: {
            type: String
        },
        dateFormat: {
            type: String,
            default: 'Y-m-d'
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
.datetimepicker-group{
    .form-control{
        background-color: #fff;
    }
    .input-group-append{
        button[data-clear]{
            background-color: #e9ecef;
            border-color: #ced4da;
            color: #495057;
        }
    }
}
</style>
