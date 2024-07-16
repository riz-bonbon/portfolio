// logoの表示
$(window).on('load', function(){
    if (!sessionStorage.getItem('splashDisplayed')) {
        $("#splash").delay(2000).fadeOut('slow'); // ローディング画面を2秒（2000ms）待機してからフェードアウト
        $("#splash_logo").delay(2000).fadeOut('slow'); // ロゴを2秒（2000ms）待機してからフェードアウト
        sessionStorage.setItem('splashDisplayed', 'true');
    } else {
        $("#splash").hide(); // スプラッシュスクリーンを表示しない
    }

    // ヘッダーアニメーションの制御
    if (!sessionStorage.getItem('headerAnimationDisplayed')) {
        $('header').addClass('header-animation');
        sessionStorage.setItem('headerAnimationDisplayed', 'true');
    } else {
        $('header').addClass('header-no-animation');
    }
});

// メニューの "HOME" リンクをクリックしたときにセッションストレージを設定
$('nav a[href="home.html"]').on('click', function() {
    sessionStorage.setItem('headerAnimationDisplayed', 'true');
});