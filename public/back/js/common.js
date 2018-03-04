/**
 * Created by DELL on 2018/3/4.
 */
$(function () {
    // 进度条加载效果
    NProgress.configure({
        showSpinner:false  // 去掉进度条加载的小圈圈
    });

    $(document).ajaxStart(function () {
        NProgress.start();// 进度条开始
    });
    $(document).ajaxStop(function () {
        setTimeout(function () {
            NProgress.done();
        },500);
    });



})