const util = {
    getRandom : function(len,radix){// 获取随机数
        len = len || 16;
        radix = radix || 16;
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;
        if (len) {
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
        } else {
            var r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random()*16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    },
    myAjax: function(options){
        var success = $.Callbacks();
		var beforeSend = $.Callbacks();
		var error = $.Callbacks();
		var defaultSuccess = function(data){
		};
		var defaultBeforeSend = function(){
		};
		var defaultError = function(xhr,status,err){
			console.log(xhr.status);
        }
        success.add(defaultSuccess);
		beforeSend.add(defaultBeforeSend);
		error.add(defaultError);
		if(typeof options.success == 'function'){
			success.add(options.success);
		}
		if(typeof options.beforeSend == 'function'){
			beforeSend.add(options.beforeSend);
		}
		if(typeof options.error == 'function'){
			beforeSend.add(options.error);
        }
        options.beforeSend = beforeSend.fire;
        options.error = error.fire;
        options.success = success.fire;
        var defaultOpt = {
			'type': 'post',
			'dataType': 'json'
        }
		$.extend(defaultOpt,options);
		$.ajax(options);
    }
}

module.exports = util;