$(function () {

    /*=================================================
    ハンバーガーメニュー
    ===================================================*/

    $('.toggle-btn, .mask').on('click', function (e) {
        e.preventDefault && e.preventDefault();
        $('header').toggleClass('open');    //.toggle-btn, .maskをクリックしたとき開く　openを追加する
    });

    $('nav').on('click', function () {
        $('header').removeClass('open');   //navをクリックしたとき閉じる　openを外す
    });


    /*=================================================
    featureのアニメーション
    ===================================================*/

    $(window).on('scroll', function () {
        $('.feature-img, .about-img').each(function () {
            var elementTop = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var speed = 0.1; // 動きの強さ

            var offset = (scroll - elementTop) * speed;
            $(this).find('img').css('--parallax-offset', offset + 'px');
        });
    });


    /*=================================================
    aboutのスライド
    ===================================================*/
    $(function () {
        function fadeInElements() {
            $('.item-right, .item-left').each(function () {
                const elemTop = $(this).offset().top;
                const scrollTop = $(window).scrollTop();
                const windowHeight = $(window).height();

                if (scrollTop > elemTop - windowHeight + 100) {
                    $(this).addClass('show');
                }
            });
        }

        $(window).on('scroll', fadeInElements);
        fadeInElements(); // 読み込み時も実行
    });


    /*=================================================
    トップに戻る
    ===================================================*/
    let pagetop = $(".page_top");
    pagetop.hide();

    // スクロールイベント（スクロールされた際に実行）
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) { // スクロール位置が700pxを超えた場合 トップに戻るボタンを表示する
            pagetop.fadeIn();
        } else {                          // スクロール位置が700px未満の場合 トップに戻るボタンを非表示にする
            pagetop.fadeOut();
        }
    });

    // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function () {
        $("body,html").animate({ scrollTop: 0 }, 500);   // 0.5秒かけてページトップへ移動
        return false;
    });


    /*=================================================
    faqのアコーディオンメニュー
    ===================================================*/
    $('.faq-question').on('click', function () {
        $(this).next('.faq-answer').stop().slideToggle(300);
        $(this).toggleClass('open');
    });


    /*=================================================
    カーソルライト
    ===================================================*/
    document.addEventListener("mousemove", function (e) {
        const cursor = document.querySelector(".cursor");
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

});
