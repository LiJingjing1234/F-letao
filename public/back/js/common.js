/**
 * Created by DELL on 2018/3/4.
 */
$(function () {
    // ����������Ч��
    NProgress.configure({
        showSpinner:false  // ȥ�����������ص�СȦȦ
    });

    $(document).ajaxStart(function () {
        NProgress.start();// ��������ʼ
    });
    $(document).ajaxStop(function () {
        setTimeout(function () {
            NProgress.done();
        },500);
    });



})