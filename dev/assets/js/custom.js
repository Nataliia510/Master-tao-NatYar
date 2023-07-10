
$(document).ready(function() {
  $('.first-screen-slider').slick({
      dots: true,
      speed: 1000,
      appendArrows: ".container-arrows",
      responsive: [{
              breakpoint: 991,
              settings: {
                  arrows: false,
              }
          },
      ]
  });

  Fancybox.bind('[data-fancybox]', {
});

});

mobileOnlySlider(".advantages-slider", true, false, 991);

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
      var slider = $($slidername);
      var settings = {
        mobileFirst: true,
        dots: $dots,
        arrows: $arrows,
        responsive: [
          {
            breakpoint: $breakpoint,
            settings: "unslick"
          }
        ]
      };
    
      slider.slick(settings);
    
      $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
        }
      });
    }
    
    // Mobile Only Slider

    // $('.navbar-toggler').on('click', function(){
    // $('.navbar').toggleClass('margin-bottom')
    // });

function checkboxContainerPadding() {
    const checkButton1 = document.querySelector('.check-button');
    const checkButton2 = document.querySelectorAll('.check-button');
    console.log(checkButton1);
    console.log(checkButton2);


    checkButton2.forEach(item => {
        item.closest('[class*=col]').classList.add('padding-top');
    });

}

if (document.querySelector(".calculation-form")) {
    checkboxContainerPadding()
} else {
    null
}

document.getElementById('fileInput').onchange = function() {
    //short name
    document.getElementById('file-name').innerHTML = this.files[0].name;
    
    //long name
    // document.getElementById('file-name').innerHTML = this.value;
};