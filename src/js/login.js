$(function() {
    $('.ipt-wrap>input').on('focus', function() {
        $(this).siblings().hide()
    })
    $('.ipt-wrap>input').on('blur', function() {
        if ($(this).val() === '') {
            $(this).siblings().show()
        }
    })

    $('.back-title>a').hover(function() {
        $(this).css('text-decoration', 'underline')
    }, function() {
        $(this).css('text-decoration', 'none')
    })
    $('.sm-btn').hover(function() {
        $(this).css('box-shadow', ' 0 0 10px #00de76')
    }, function() {
        $(this).css('box-shadow', 'none')
    })
})