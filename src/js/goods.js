// 入口函数
window.onload = function() {
    let oUl = document.querySelector('ul')
    let str = ''

    // 解析地址栏
    let keyword = window.location.search
    keyword = keyword.substr(1)
    sendAjax(1)
    let ulHeight = 0;
    // $(window).on('scroll', function() {
    //     ulHeight = oUl.offsetHeight
    //     console.log(pages);
    //     // console.log(window.scrollY, $('ul').height());
    //     // if (window.scrollY > ulHeight - 100 || page < 5)
    //     let flag = true
    //     if (window.scrollY > $('ul').height() - 600 && pages < 5) {
    //         if (flag) {
    //             flag = false
    //             sendAjax(pages)
    //         }
    //     }
    // })

    // 用循环获取多次数据
    for (let i = 2; i < 5; i++) {
        sendAjax(i)
    }

    function sendAjax(page) {
        // ajax请求渲染页面 
        $.ajax({
            // data: 'style_id: 20840&goods_id: 27054',
            url: "http://www.shihuo.cn/sports/getNews?page=" + page + "&type=" + keyword + "&page_size=20",
            type: 'get',
            dataType: 'json',
            success: function(res) {
                console.log(res);
                let datas = res.data;
                // 动态生成页面
                datas.forEach((value, key) => {
                        // 其中other-value数组的解析
                        str += ` <li>
                                        <a href="${value.url}" target="_blank">
                                            <div class="img"> <img src="../images/loading.gif" data-src="${value.pic}" _hover-ignore="1"> </div>
                                            <div class="msg">
                                                <div class="title">${value.goodsName}</div>
                                                <div class="tips"> <s class="i1"></s>${value.content}<s class="i2"></s> </div>
                                                <div class="price">¥${value.price}</div>
                                            </div>
                                        </a>
                                    </li>`
                    })
                    //     // 将str放到页面
                $('#guess_js').html(str)
                flag = true;

                // 实现懒加载
                // 获取图片列表，即img标签列表
                var imgs = document.querySelectorAll('img');
                // 获取到浏览器顶部的距离
                function getTop(e) {
                    return e.offsetTop;
                }

                // 懒加载实现
                function lazyload(imgs) {
                    // 可视区域高度
                    var h = window.innerHeight;
                    //滚动区域高度
                    var s = document.documentElement.scrollTop || document.body.scrollTop;
                    for (var i = 0; i < imgs.length; i++) {
                        //图片距离顶部的距离大于可视区域和滚动区域之和时懒加载
                        if ((h + s) > getTop(imgs[i])) {
                            // 真实情况是页面开始有2秒空白，所以使用setTimeout定时2s
                            (function(i) {
                                setTimeout(function() {
                                    // 不加立即执行函数i会等于9
                                    // 隐形加载图片或其他资源，
                                    //创建一个临时图片，这个图片在内存中不会到页面上去。实现隐形加载
                                    var temp = new Image();
                                    temp.src = imgs[i].getAttribute('data-src'); //只会请求一次
                                    // onload判断图片加载完毕，真是图片加载完毕，再赋值给dom节点
                                    temp.onload = function() {
                                        // 获取自定义属性data-src，用真图片替换假图片
                                        imgs[i].src = imgs[i].getAttribute('data-src')
                                    }
                                }, 2000)
                            })(i)
                        }
                    }
                }
                lazyload(imgs);

                // 滚屏函数
                window.onscroll = function() {
                    lazyload(imgs);
                }
            }
        });
    }


}