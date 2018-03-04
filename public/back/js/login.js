/**
 * Created by DELL on 2018/3/4.
 */
$(function () {
    //1- 使用表单校验插件
    $('form').bootstrapValidator({
        // 1. 指定校验规则
        // 用户名不能为空
        // 密码不能为空 密码长度6-12位
        fields: {
            // 校验用户名 对应name表单的name属性
            username: {
                validators: {
                    // 不能为空
                    notEmpty: {
                        message: '用户名不能为空！'
                    },
                    // 长度校验
                    stringLength: {
                        min:2,
                        max:6,
                        message:'用户名长度应该在2~6位！'
                    },
                    // 转门用来提示信息
                    callback: {
                        message:'用户名错误！'
                    }
                }
            },
            // 校验密码
            password: {
                validators: {
                    // 不能为空
                    notEmpty: {
                        message: '密码不能为空！'
                    },
                    // 长度校验
                    stringLength: {
                        min:6,
                        max:12,
                        message:'密码长度应该在6~12位！'
                    },
                    callback: {
                        message:'密码错误！'
                    }
                }
            }
        },
        // 2.配置小图标
        //指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }

    });
    //2- 注册校验成功事件 成功时阻止表单的默认提交 使用ajax进行
    $('form').on('success.form.bv', function (e) {
        // 阻止默认事件
        e.preventDefault();
        //console.log('哈哈哈');
        // 发送ajax请求
        //$('form').serialize();// 拼接表单中name属性的值
        $.ajax({
            type:'POST',
            url:'/employee/employeeLogin',
            data: $('form').serialize(),
            // jQuery会自动识别   如果返回的是contentType：text,需要些json，返回text/json则不用写
            //dataType:'json',
            success: function (info) {
                //console.log(info);
                if(info.error===1000) {
                    // 把username这个字段改成校验失败
                    $("form").data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
                }
                if(info.error===1001) {
                    $("form").data("bootstrapValidator").updateStatus("password", "INVALID", "callback");
                }
                if(info.success) {
                    location.href = "index.html";
                }
            }
        })

    })
    //3- 充值表单，清除所有样式
    $("[type='reset']").on("click", function () {
        $('form').data("bootstrapValidator").resetForm(true);
    })


})