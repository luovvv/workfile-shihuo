$(function() {
    window.addEventListener('scroll', function() {
        console.log(window.scrollY);
        if (window.scrollY > 380) {
            $('.proImg_block').css({ 'position': 'fixed', 'top': '226px' })
                // 顶部固定栏显示出来
            $('.top-fixed').addClass('show')
        } else {
            $('.proImg_block').css({ 'position': 'absolute', 'top': '380px' })
            $('.top-fixed').removeClass('show')
        }
    })
})