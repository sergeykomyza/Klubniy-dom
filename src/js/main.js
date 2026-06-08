// ================================================== MOBILE MENU TOGGLE
document.querySelectorAll('.js-menutoggle').forEach(item => {
    item.onclick = ()=> {
        document.querySelector('.header-menu').classList.toggle('is-open');
    }
});



// ================================================== ПРОКРУТКА, ШАПКА
document.addEventListener('DOMContentLoaded', function () {
    // СКРОЛЛ К НУЖНОЙ СЕКЦИИ ПО КЛИКУ НА ПУНКТАХ МЕНЮ
    
        // СКРОЛЛ К НУЖНОЙ СЕКЦИИ ПО КЛИКУ НА ПУНКТАХ МЕНЮ
        $('.js-scrollToSection').click(function () {
            var scroll_elem = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(scroll_elem).offset().top
            }, 1000);
            if(document.documentElement.clientWidth < 992){
                document.querySelector('.header-menu').classList.remove('is-open');
            }
        });
    
    // ДОБАВЛЯЕМ АКТИВНЫЙ КЛАСС ШАПКЕ
    function goTopBtnToggleActive() {
        const goTopBtn = document.querySelector('.go-top')
        const scrollSize = window.pageYOffset
        scrollSize > 300 ? goTopBtn.classList.add('is-active') : goTopBtn.classList.remove('is-active')
    }
    window.addEventListener('load', goTopBtnToggleActive) // ПРИ ПЕРЕЗАГРУЗКЕ СТРАНИЦЫ ЕСЛИ СТРАНИЦА УЖЕ ПРОСКРОЛЛЕНА
    window.addEventListener('scroll', goTopBtnToggleActive) // ПРИ СКРОЛЛЕ
});

// ================================================== МАСКА ДЛЯ ИНПУТОВ (https://github.com/RobinHerbots/Inputmask)
// $(document).ready(function () {
//     $(".js-phoneMask").inputmask({
//         mask: "+7 999 999 99 99",
//         clearIncomplete: true
//     });
//     $('.email').inputmask({
//         mask: "*{1,20}[.*{1,20}]@*{1,20}.*{2,4}",
//         clearIncomplete: true
//         //     greedy: false,
//         //     onBeforePaste: function (pastedValue, opts) {
//         //         pastedValue = pastedValue.toLowerCase();
//         //         return pastedValue.replace("mailto:", "");
//         //     },
//         //     definitions: {
//         //         '*': {
//         //             validator: "[0-9A-Za-z-а-я-]",
//         //             casing: "lower"
//         //         }
//         //     }
//     });
//     $(".date").inputmask({
//         mask: "99/99/9999",
//         clearIncomplete: true,
//         'placeholder': 'dd/mm/yyyy'
//     });
// });


// ================================================== 
function homeSlider() {
    const swiper = new Swiper('.home-slider .swiper', {
        navigation: {
            nextEl: '.js-home-slider--next',
            prevEl: '.js-home-slider--prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function () {
                slidesCount();
            },
        },
        parallax: true
    });
    const slidesCount = () => {
        const slides = document.querySelectorAll('.home-slider .swiper-slide');
        const slidesCurr = document.querySelector('.slider-count__curr');
        const slidesTotal = document.querySelector('.slider-count__total');
        slidesTotal.innerText = slides.length;
        slidesCurr.innerText = swiper.activeIndex + 1;
    }
    slidesCount();
}
homeSlider();

// ================================================== FAQ
document.addEventListener('DOMContentLoaded', function () {
    const accordeons = (accordeonSelector) => {
        const accordeon = document.querySelector(accordeonSelector)
        const accItem = accordeon.querySelectorAll('.faq__item')
        accItem.forEach(item => { // перебираем все блоки аккордеона
            const accHeader = item.querySelector('.js-faq-toggle') // заголовок одного блока
            item.style.height = accHeader.scrollHeight + "px" // делаем высоту всего блока равной заголовку блока, таким образом скрывая контент блока
            item.className = 'faq__item closed' // присваиваем блоку класс closed
            item.addEventListener('click', toggle) // вешаем на блок вызов функции по клику
            accItem[0].className = 'faq__item opened'
            accItem[0].style.height = (accHeader.scrollHeight + accItem[0].querySelector('.faq-body').scrollHeight) + "px"
        });
        function toggle(e) {
            let target = e.target
            e.preventDefault()
            const thisClass = this.className
            const itsAccHeader = target == this.querySelector('.js-faq-toggle') || this.querySelector('.js-faq-toggle').contains(target);
            const accHeader = this.querySelector('.js-faq-toggle')
            const accContent = this.querySelector('.faq-body')
            accItem.forEach(item => {
                const accHeader = item.querySelector('.js-faq-toggle')
                if (itsAccHeader) {
                    item.style.height = accHeader.scrollHeight + "px"
                    item.className = 'faq__item closed'
                }
            });
            if (thisClass == "faq__item closed") {
                this.className = "faq__item opened"
                this.style.height = (accHeader.scrollHeight + accContent.scrollHeight) + "px"
            }
        }
    }
    accordeons('.faq__box');
});
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 

// ================================================== КАРТА, ОТЛОЖЕННАЯ ЗАГРУЗКА (ЧТОБЫ УЛУЧШИТЬ ПОКАЗАТЕЛИ - PageSpeed Insights)
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        const script = document.createElement('script');

        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

        script.onload = () => {
            ymaps.ready(initMap);
        };

        document.body.appendChild(script);
    }, 2000);

    function initMap() {
        const myMap = new ymaps.Map('map', {
            center: [55.942983, 37.960558],
            zoom: 16
        });

        const myPlacemark = new ymaps.Placemark(
            [55.942983, 37.960558],
            {
                hintContent: 'Браварская улица, 46',
                balloonContent: 'Браварская улица, 46'
            },
            {
                iconLayout: 'default#image',
            }
        );

        myMap.geoObjects.add(myPlacemark);
    }
});
