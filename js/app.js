var UI = {
    COMMON: {},
    //HOME: {},
    //LP: {},
    SRP: {},
    MEMBER: {},
    LIFESTYLE: {},
    UTIL: {}
};



UI.COMMON.SmartSwiper = (function () {
    var method = {};
    method.init = function () {
        if($("section.banner-slide").length > 0) method.setBannerSwipeModule();
        if($("section.best-item").length > 0) method.setBestItemSwipeModule();
        if($("section.time-deal").length > 0) method.setCenterSwipeModule();
    };

    method.setBannerSwipeModule = function(){
        $("section.banner-slide").each(function(){
            var target = $(this).find(".swiper-container");

            var bannerSwiper = new Swiper(target, {
                loop: true,
                pagination: {
                    el:  target.find('.swiper-pagination'),
                },
                autoplay: {
                    delay: 2300,
                },
            });

        });
    };

    method.setBestItemSwipeModule = function(){
        $("section.best-item").each(function(){
            var category = $(this).find(".best-item_category .swiper-container");
            var items = $(this).find(".best-item_items .swiper-container");

            var categorySwiper = new Swiper(category, {
                slidesPerView: 'auto',
                paginationClickable: true,
                spaceBetween: 0,
            });

            var itemsSwiper = new Swiper(items, {
                slidesPerView: 2,
                slidesPerGroup: 2,
                slidesPerColumn: 2,
                // slidesPerColumnFill: "row",
                pagination: {
                    el: items.find('.swiper-pagination'),
                    clickable: true,
                },
            });

        });
    };

    method.setCenterSwipeModule = function(){
        $("section.time-deal").each(function(){
            console.log("s");

            var target = $(this).find(".swiper-container");

            var centeSwiper = new Swiper(target, {
                slidesPerView: 'auto',
                centeredSlides: true,
                // spaceBetween: 30,
                navigation: {
                    nextEl: target.find('.swiper-button-next'),
                    prevEl: target.find('.swiper-button-prev'),
                },
            });

        });
    };



    return {
        init: method.init,
        setBannerSwipeModule: method.setBannerSwipeModule ,
        setBestItemSwipeModule: method.setBestItemSwipeModule,
        setCenterSwipeModule: method.setCenterSwipeModule
    };
})();


$(window).load(function () { // makes sure the whole site is loaded

    UI.COMMON.SmartSwiper.init();
    var initHeight = $(".banner-slide").outerHeight();
    $(".nav-main").height(initHeight);
    console.log(initHeight);


});


$( ".uio-view-type .uio-view-type_grid").click(function() {
    console.log("click");
    $(this).closest('.uio-view-type').find('.uio-view-type_list').removeClass("active");
    $(this).addClass("active");
    $(this).closest('.item-list').find('.item-list_items').removeClass("type-list");
    $(this).closest('.item-list').find('.item-list_items').addClass("type-grid");
});

$( ".uio-view-type .uio-view-type_list").click(function() {
    console.log("click");
    $(this).closest('.uio-view-type').find('.uio-view-type_grid').removeClass("active");
    $(this).addClass("active");
    $(this).closest('.item-list').find('.item-list_items').removeClass("type-grid");
    $(this).closest('.item-list').find('.item-list_items').addClass("type-list");
});

$( ".item-list_tab a").click(function() {
    $(this).closest('.item-list_tab').find('li').removeClass("active");
    $(this).closest('li').addClass("active");
});

$( ".menu-trigger.mobile_gnb").click(function() {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
});
