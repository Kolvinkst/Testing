/*let viewport = $("#viewport").width(); // Ширина видимой части
let slider = $("div.slider"); // Весь слайдер
let viewSlide = 0; // Номер слайда
// Событие клика на кнопку вперёд
$(".next").click(function () { 
    // Проверяем, если номер слайда который сейчас показывается меньше 5
    if (viewSlide < 6) {
        // То номер слайда увеличивается на 1
        viewSlide++;
    } else {
        // Иначе он будет равен 0
        viewSlide = 0;
    }
    // Задаём слайду значение позиции left через анимацию
    slider.animate({'left': -viewSlide * 0.3 * viewport + "px"}, {'duration': 500})
});
// Обработка события клик
$(".prev").click(function () { 
    // Проверяем что номер слада больше нуля
    if (viewSlide > 0) {
        // То уменьшаем номер слада на один
        viewSlide--;
    } else {
        // Иначе присваиваем 5
        viewSlide = 6;
    }
    // Меняем позицию left с анимацией
    slider.animate({'left': -viewSlide * viewport + "px"}, {'duration': 500})  
});*/
$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true
});