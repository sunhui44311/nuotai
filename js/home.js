$('.owl-carousel').owlCarousel({
    margin:10,
    nav:false,
    pagination:false,
    addClassActive:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var crad_index=0;

$('.btn-list .not-btn').on("click",function(){
    $('.btn-list .not-btn').siblings().removeClass("active");
    this.classList.add("active")
    lunboqie($(this).index());
    crad_index=$(this).index();
})
function lunboqie(val){
    $(".product-lunbo .owl-box").fadeOut();
    $($(".product-lunbo .owl-box")[val]).fadeIn();

}
$(".product-left").on('click',function(){
    let val='.product-box' + crad_index;
    $(val).trigger('prev.owl.carousel',[1000])
})
$(".product-right").on('click',function(){
    let val='.product-box' + crad_index;
    $(val).trigger('next.owl.carousel',[1000])
})


$(document).ready(function(){
  $(window).scroll(function(){
    console.log($(window).scrollTop())
    if($(window).scrollTop()>1800){
        $(".resp-txt").animate({opacity:'1',marginTop:'90px'},2000);
    }
});
});


function languageSwitch(){
 $('.switch-model').slideToggle("slow");
}


function languageYes(){
 let language={
    e:'ENGLISH',
    z:'中文'
};
if ($('.language').text() == language.e) {
    $('.language').text(language.z)
    $('.language-q').text(language.e)
}else{
    $('.language').text(language.e)
    $('.language-q').text(language.z)
}
$('.switch-model').slideUp("slow")
}

function languageNO(){
    $('.switch-model').slideUp("slow")
}

function inputSwitch(){
    $('.input-switch').fadeToggle(500)
}
