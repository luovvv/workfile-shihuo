$(function() {
    $('.protocol .radio-box').on('click', function() {
        console.log(111);
        $(this).toggleClass('has-agreed')
    })

    //输入框
    $('.ipt-wrap>input').on('focus', function() {
        $(this).siblings().hide()
    })
    $('.ipt-wrap>input').on('blur', function() {
        let val = ($(this).val() + '').trim();
        if (val == '') {
            $(this).siblings().show().html('请输入手机号')
        }

        /* 
        失去焦点时的正则判断
        1.获取表单内容
        2.正则判断
        3.改变提示信息
        */
        let reg = /^1[3|4|5|7|8][0-9]{9}$/;
        if (val !== '' && reg.test(val)) {
            $('.error-tips').html('可以使用').show().css({ 'border': '1px solid skyblue', 'backgroundColor': '#00de76' })
        } else if (val !== '') {
            $('.error-tips').show().html('号码格式不对，请检查重新输入')

        }
    })

    // 验证框的hover
    $('.sm-btn').hover(function() {
        $(this).css('box-shadow', ' 0 0 10px #00de76')
    }, function() {
        $(this).css('box-shadow', 'none')
    })

    // 获取验证码和注册按钮的hover
    $('.get-vercode').hover(function() {
        $(this).css('backgroundColor', 'red')
    }, function() {
        $(this).css('backgroundColor', '#e42837')
    })
    $('.reg-btn').hover(function() {
        $(this).css('backgroundColor', 'red')
    }, function() {
        $(this).css('backgroundColor', '#e42837')
    })

    // 返回上一页的hover
    $('.back-title>a').hover(function() {
        $(this).css('text-decoration', 'underline')
    }, function() {
        $(this).css('text-decoration', 'none')
    })



})