$(function() {
    var swiper1 = new Swiper('.swiper-container1', {
        spaceBetween: 30,
        centeredSlides: true,
        effect: 'fade',

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,

    });


    let swipers = document.querySelectorAll('.swiper-slide')
    setInterval(function() {
        // 遍历swiper-slide，谁有swiper-slide-duplicate-active,然后获取其子级li的bgcolor属性值
        swipers.forEach((value, key) => {
            let oLi = $(value).find('li')[0];
            if ($(value).hasClass('swiper-slide-active')) {
                $('.banner_box').css('background-color', '#' + $(oLi).attr('bgcolor'))
            }
        })
    }, 100)

    // 每日好价 箭头点击的轮播图
    var swiper2 = new Swiper('.swiper-container2', {
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        loop: true,

    });

    // 欲望清单 轮播图
    var swiper3 = new Swiper('.swiper-container3', {
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
    });

    // 热门文章区域 轮播图
    var swiper4 = new Swiper('.swiper-container4', {
        navigation: {
            nextEl: '.swiper-button-next4',
            prevEl: '.swiper-button-prev4',
        },
    });


    // 头部input框的js
    $('.input>input').on('focus', function() {
        $(this).attr('placeholder', '输入海外商品链接或关节词');
        $('.tags>a').hide();
    })
    $('.input>input').on('blur', function() {
        $(this).attr('placeholder', '');
        $('.tags>a').show();
    })
    $('.menu_nav>li').hover(function() {
        $(this).addClass('nav_li_active').siblings().removeClass('nav_li_active')
    }, function() {
        $('.menu_nav>li').removeClass('nav_li_active')
    })

    $('.name').hover(function() {
        // $('.name>ul').css({ 'opacity': 1, 'visibility': 'visible' })
        $('.name>ul').stop().slideDown(300)
    }, function() {
        // $('.name>ul').css({ 'opacity': 0, 'visibility': 'hidden' })
        $('.name>ul').stop().slideUp(300)

    })
    $('.top-nva-list-small dd>a').hover(function() {
        $(this).css('color', 'red')
    }, function() {
        $(this).css('color', '#666')
    })


    window.addEventListener('scroll', function() {
        console.log(window.scrollY);
        if (window.scrollY > 850) {
            $('.backTop').fadeIn(200)
        } else {
            $('.backTop').fadeOut(200)
        }
    })

    // 点击回到顶部
    $('.backTop').on('click', function() {
        $('html').stop().animate({
            scrollTop: 0
        }, 500)
    })


})