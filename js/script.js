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
// form send

//popup





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
$(".popup1").on("click", function () {
  $(".hover1").toggleClass("show");
  $('body').toggleClass('locked');

});
$(".close").on("click", function () {
  $(".hover1").removeClass("show");
  $('body').removeClass('locked');

});

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

$('.form1').submit(function (e) {
  let shows = document.querySelector(".form1__btn-last");
  var empty = $(this).parent().find("input").filter(function () {
        return this.value === "";
  });
  if (!empty.length) {
        shows.classList.toggle("change");


        shows.textContent = shows.textContent.replace('Отправить', 'Отправлено');
        setTimeout(function () {


              shows.classList.remove('change');
              shows.textContent = shows.textContent.replace('Отправлено', 'Отправить');
        }, 3000);
        $('body').addClass('overlock');
        //Если все графы заполнены, то показываем popup

        $('form input').removeClass('input_filled');
        //очищаем все данные текстовых полей, кроме кнопок
        $('form input').not(':button, :submit').val('');
        $('form textarea').not(':button, :submit').val('');

  }
  e.preventDefault();
});

$('.form__first').submit(function (e) {
  let show = document.querySelector(".form1__first");
  var empty = $(this).parent().find("input").filter(function () {
        return this.value === "";
  });
  if (!empty.length) {
    show.classList.toggle("change");


    show.textContent = show.textContent.replace('Отправить', 'Отправлено');
        setTimeout(function () {


          show.classList.remove('change');
          show.textContent = show.textContent.replace('Отправлено', 'Отправить');
        }, 3000);
        $('body').addClass('overlock');
        //Если все графы заполнены, то показываем popup

        $('form input').removeClass('input_filled');
        //очищаем все данные текстовых полей, кроме кнопок
        $('form input').not(':button, :submit').val('');
        $('form textarea').not(':button, :submit').val('');

  }
  e.preventDefault();
});
$('.form3').submit(function (e) {
  let show = document.querySelector(".form3__btn");
  var empty = $(this).parent().find("input").filter(function () {
        return this.value === "";
  });
  if (!empty.length) {
    show.classList.toggle("change");


    show.textContent = show.textContent.replace('Отправить', 'Отправлено');
        setTimeout(function () {


          show.classList.remove('change');
          show.textContent = show.textContent.replace('Отправлено', 'Отправить');
        }, 3000);
        $('body').addClass('overlock');
        //Если все графы заполнены, то показываем popup

        $('form input').removeClass('input_filled');
        //очищаем все данные текстовых полей, кроме кнопок
        $('form input').not(':button, :submit').val('');
        $('form textarea').not(':button, :submit').val('');

  }
  e.preventDefault();
});
$('.form4').submit(function (e) {
  let show = document.querySelector(".form4__btn");
  var empty = $(this).parent().find("input").filter(function () {
        return this.value === "";
  });
  if (!empty.length) {
    show.classList.toggle("change");


    show.textContent = show.textContent.replace('Отправить', 'Отправлено');
        setTimeout(function () {


          show.classList.remove('change');
          show.textContent = show.textContent.replace('Отправлено', 'Отправить');
        }, 3000);
        $('body').addClass('overlock');
        //Если все графы заполнены, то показываем popup

        $('form input').removeClass('input_filled');
        //очищаем все данные текстовых полей, кроме кнопок
        $('form input').not(':button, :submit').val('');
        $('form textarea').not(':button, :submit').val('');

  }
  e.preventDefault();
});
$('.form5').submit(function (e) {
  let show = document.querySelector(".form5__btn");
  var empty = $(this).parent().find("input").filter(function () {
        return this.value === "";
  });
  if (!empty.length) {
    show.classList.toggle("change");


    show.textContent = show.textContent.replace('Отправить', 'Отправлено');
        setTimeout(function () {


          show.classList.remove('change');
          show.textContent = show.textContent.replace('Отправлено', 'Отправить');
        }, 3000);
        $('body').addClass('overlock');
        //Если все графы заполнены, то показываем popup

        $('form input').removeClass('input_filled');
        //очищаем все данные текстовых полей, кроме кнопок
        $('form input').not(':button, :submit').val('');
        $('form textarea').not(':button, :submit').val('');

  }
  e.preventDefault();
});
$('.form6').submit(function (e) {
  let show = document.querySelector(".form6__btn");
  var empty = $(this).parent().find("input").filter(function () {
        return this.value === "";
  });
  if (!empty.length) {
    show.classList.toggle("change");


    show.textContent = show.textContent.replace('Отправить', 'Отправлено');
        setTimeout(function () {


          show.classList.remove('change');
          show.textContent = show.textContent.replace('Отправлено', 'Отправить');
        }, 3000);
        $('body').addClass('overlock');
        //Если все графы заполнены, то показываем popup

        $('form input').removeClass('input_filled');
        //очищаем все данные текстовых полей, кроме кнопок
        $('form input').not(':button, :submit').val('');
        $('form textarea').not(':button, :submit').val('');

  }
  e.preventDefault();
});
$('.form7').submit(function (e) {
  let show = document.querySelector(".form7__btn");
  var empty = $(this).parent().find("input").filter(function () {
        return this.value === "";
  });
  if (!empty.length) {
    show.classList.toggle("change");


    show.textContent = show.textContent.replace('Отправить', 'Отправлено');
        setTimeout(function () {


          show.classList.remove('change');
          show.textContent = show.textContent.replace('Отправлено', 'Отправить');
        }, 3000);
        $('body').addClass('overlock');
        //Если все графы заполнены, то показываем popup

        $('form input').removeClass('input_filled');
        //очищаем все данные текстовых полей, кроме кнопок
        $('form input').not(':button, :submit').val('');
        $('form textarea').not(':button, :submit').val('');

  }
  e.preventDefault();
});



         
     
