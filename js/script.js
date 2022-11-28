 //Header burger     
      let header__burger = document.querySelector('.burger');
        let header_menu = document.querySelector('.header__menu');
        let back = document.querySelector('body');


        header__burger.onclick = function(){
            header__burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            back.classList.toggle('locked');
        }
//Header burger close

//popup
var popup = document.querySelector('.popup-wrapper');
var btn = document.querySelector(".popup-btn");
var span = document.querySelector(".close");
btn.onclick = function() {
  back.classList.add('locked');
    popup.classList.add('show');
}
span.onclick = function() {
  back.classList.remove('locked');
    popup.classList.remove('show');
}

window.onclick = function(event) {
    if (event.target == popup) {
      back.classList.remove('locked');
        popup.classList.remove('show');
    }
}




var popup = document.querySelector('.popup-wrapper2');
var btn = document.querySelector(".popup-btn2");
var span = document.querySelector(".close2");
btn.onclick = function() {
  back.classList.add('locked');
    popup.classList.add('show');
}
span.onclick = function() {
  back.classList.remove('locked');
    popup.classList.remove('show');
}

window.onclick = function(event) {
    if (event.target == popup) {
      back.classList.remove('locked');
        popup.classList.remove('show');
    }
}


//popup close

//add class ( add and remove if it has classes)
$(".know__wrapper .know__wrap").click(function() {
  const $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass("active");
  } else {
    $this.removeClass('active');
  }
  $this.siblings().removeClass("active");
});

// add class close

// input change
const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value !== '') {
      input.classList.add('input_filled');
    } else {
      input.classList.remove('input_filled');
    }
  });
});
// input change close

var swiper = new Swiper(".mySwiper", {
  watchOverflow:true,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 36,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 36,
    },
  },
});
document.addEventListener("click", e => {
  let anchorlink = e.target.closest('a[href^="#"]');
  
  if (anchorlink) {
     e.preventDefault();
     let hashval = anchorlink.getAttribute('href')
     let target = document.querySelector(hashval)
     const yOffset = -100;
     const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
     window.scrollTo({ top: y, behavior: 'smooth' });

     history.pushState(null, null, hashval)
     e.preventDefault();
  }
})

function removeCls() {
  $('.burger').removeClass('active');
  $('.nav').removeClass('active');
  $('body').removeClass('locked');
}
// modal
$(".popup4").on("click", function () {
  $(".hover4").toggleClass("show");
  $('body').toggleClass('locked');

});
$(".close").on("click", function () {
  $(".hover4").removeClass("show");
  $('body').removeClass('locked');

});
$(".popup3").on("click", function () {
  $(".hover3").toggleClass("show");
  $('body').toggleClass('locked');

});
$(".close").on("click", function () {
  $(".hover3").removeClass("show");
  $('body').removeClass('locked');

});

$(".popup5").on("click", function () {
  $(".hover5").toggleClass("show");
  $('body').toggleClass('locked');

});
$(".close").on("click", function () {
  $(".hover5").removeClass("show");
  $('body').removeClass('locked');

});

$(".popup6").on("click", function () {
  $(".hover6").toggleClass("show");
  $('body').toggleClass('locked');

});
$(".close").on("click", function () {
  $(".hover6").removeClass("show");
  $('body').removeClass('locked');

});



jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".popup-content"); // тут указываем ID элемента
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
          $(".popup-container").removeClass("show");
          $('body').removeClass('locked');
    }
  });
});



         
     
