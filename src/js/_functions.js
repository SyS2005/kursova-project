// Цей файл є лише зібранням підключень готових компонентів.
// Рекомендується створювати окремий файл в папці components і підключати все там

// Визначення операційної системи на мобільних
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())

// Визначення ширини екрану
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлінг функції (для ресайзу, введення в інпут, скролу і т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фікс фулскрін-блоків
// import './functions/fix-fullheight';

// Реалізація бургер-меню
import { burger } from './functions/burger';

// Реалізація зупинки скролу (не забудьте викликати функцію)
// import { disableScroll } from './functions/disable-scroll';

// Реалізація увімкнення скролу (не забудьте викликати функцію)
// import { enableScroll } from './functions/disable-scroll';

// Реалізація модального вікна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реалізація табів
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Отримання висоти шапки сайту (не забудьте викликати функцію)
// import { getHeaderHeight } from './functions/header-height';

// Підключення плагіна кастом-скролу
// import 'simplebar';

// Підключення плагіна для позиціювання тултіпів
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Підключення свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Підключення анімацій по скролу
// import AOS from 'aos';
// AOS.init();

// Підключення паралаксу блоків при скролі
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Підключення плавної прокрутки до якорів
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Підключення подій свайпу на мобільних
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Відправка відбулася, тут можна писати будь-які дії');
// };

// validateForms('.form-1', rules1, afterForm);
