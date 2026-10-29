// Тексты, цены и контакты редактируются в админке (/admin) и лежат в JSON рядом.
// Здесь — только то, что меняется вместе с кодом и картинками.
import contacts from './contacts.json';
import priceData from './prices.json';
import textData from './texts.json';
import faqData from './faq.json';

export const links = contacts.links;

// Телефон пишется в админке как удобно читать; для ссылки tel: оставляем цифры и «+»
export const phone = contacts.phone.trim()
  ? { display: contacts.phone, tel: contacts.phone.replace(/[^\d+]/g, '') }
  : null;

export const address = { ...contacts.address, email: contacts.email };
export const rating = contacts.rating;
export const legal = contacts.legal;

export const { slots, prices, extras } = priceData;
export const pricesNote = priceData.note;
export const texts = textData;
export const faq = faqData.items;

// Пресеты для интерактивного блока GAMMA — похожи на плитки на планшете в студии.
// При загрузке выбран пресет с именем gammaDefault.
export const gammaDefault = 'Ретро';
export const gammaPresets = [
  { name: 'Ретро', bg: 'radial-gradient(60% 45% at 50% 42%, #e8c9a0 0%, #c79c6c 60%, #6d4a2c 100%)', ink: 'dark' },
  { name: 'Розовый', bg: 'radial-gradient(110% 90% at 70% 30%, #ff8ad8 0%, #c36bff 55%, #8a5cff 100%)', ink: 'dark' },
  { name: 'Синий', bg: 'radial-gradient(120% 90% at 40% 30%, #4a52ff 0%, #2326e6 60%, #1215a8 100%)', ink: 'light' },
  { name: 'Красный', bg: 'radial-gradient(120% 90% at 50% 30%, #ff5a4a 0%, #e0262b 55%, #a3141c 100%)', ink: 'light' },
  { name: 'Голубой', bg: 'radial-gradient(120% 90% at 50% 30%, #c9f1ff 0%, #7fd3f5 60%, #4aa7d6 100%)', ink: 'dark' },
  { name: 'Белый', bg: 'radial-gradient(120% 90% at 50% 35%, #ffffff 0%, #e9e9e9 70%, #d6d6d6 100%)', ink: 'dark' },
  // Круг-прожектор стоит в правом нижнем углу, чтобы не попадать под текст
  { name: 'Серый с кругом', bg: 'radial-gradient(circle at 100% 100%, #d9d9d9 0 170px, #5e5e5e 171px 100%)', ink: 'light' },
  { name: 'Холодный круг', bg: 'radial-gradient(circle at 100% 100%, #cfeee6 0 170px, #0d1210 171px 100%)', ink: 'light' },
  { name: 'Тёплый круг', bg: 'radial-gradient(circle at 100% 100%, #f1dcc0 0 170px, #3f2d20 171px 100%)', ink: 'light' },
];

export const beforeAfter = [
  { n: 1, alt: 'Девушка на коралловом фоне' },
  { n: 5, alt: 'Девушка в короне-звезде, белый фон' },
  { n: 3, alt: 'Девушка в тёплом круге света' },
  { n: 6, alt: 'Мужчина на чёрном фоне' },
  { n: 2, alt: 'Смеющийся парень на розово-фиолетовом свете' },
  { n: 4, alt: 'Девушка на стуле, красный фон' },
  { n: 7, alt: 'Пара на сером фоне' },
  { n: 8, alt: 'Пара в холодном круге света' },
];

export const rub = (n: number) => n.toLocaleString('ru-RU').replace(/ /g, ' ') + ' ₽';
