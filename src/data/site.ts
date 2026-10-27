// Все факты о студии — в одном месте. Источник: content/notes.md.

export const links = {
  booking: 'https://n923998.yclients.ru/',
  certificateBuy: 'https://o3632.yclients.com/loyalty',
  telegram: 'https://t.me/hygge_photostudios',
  max: 'https://max.ru/u/f9LHodD0cOKB_lCiODKIkMJM8mk3jhA0feKn38sTOQ2BfrPZEMmD_hKt8NA',
  vk: 'https://vk.ru/hygge.photostudios',
  gis: 'https://2gis.ru/tyumen/firm/70000001076935631',
  yandex: 'https://yandex.ru/maps/-/CXbiQAid',
};

export const phone: { display: string; tel: string } | null = { display: '+7 999 366-88-80', tel: '+79993668880' };

export const address = {
  city: 'Тюмень',
  street: 'ул. Щорса, 2 к1',
  floor: 'цокольный этаж',
  howToFind: 'Вход со стороны двора, большая белая вывеска HYGGE.',
  hours: 'Ежедневно с 10:00 до 22:00, по предварительной записи',
  email: 'hygge.tmn@gmail.com',
};

export const rating = { value: 5, votes: 284, reviews: 245 };

export const slots = [
  { minutes: 45, photos: '200–300' },
  { minutes: 90, photos: '400–600' },
];

export const prices = [
  { format: 'GAMMA', note: 'свет меняете сами', p45: 4500, p90: 6500 },
  { format: 'CLASSIC', note: 'цветные фото', p45: 3700, p90: 5200 },
  { format: 'CLASSIC ч/б', note: 'чёрно-белые фото', p45: 3700, p90: 5200 },
];

export const extras = [
  { name: 'ИИ-кадрирование', price: 300, folders: ['оригиналы', 'кадрированные ч/б версии'] },
  { name: 'Ч/б фильтр', price: 300, folders: ['оригиналы', 'ч/б версии без кадрирования'] },
  { name: 'Кадрирование + ч/б', price: 500, folders: ['оригиналы', 'кадрированные ч/б', 'ч/б без кадрирования'] },
];

export const extraPerson = 900;

// Пресеты для интерактивного блока GAMMA — похожи на плитки на планшете в студии.
export const gammaPresets = [
  { name: 'Белый', bg: 'radial-gradient(120% 90% at 50% 35%, #ffffff 0%, #e9e9e9 70%, #d6d6d6 100%)', ink: 'dark' },
  { name: 'Розовый', bg: 'radial-gradient(110% 90% at 70% 30%, #ff8ad8 0%, #c36bff 55%, #8a5cff 100%)', ink: 'dark' },
  { name: 'Синий', bg: 'radial-gradient(120% 90% at 40% 30%, #4a52ff 0%, #2326e6 60%, #1215a8 100%)', ink: 'light' },
  { name: 'Красный', bg: 'radial-gradient(120% 90% at 50% 30%, #ff5a4a 0%, #e0262b 55%, #a3141c 100%)', ink: 'light' },
  { name: 'Голубой', bg: 'radial-gradient(120% 90% at 50% 30%, #c9f1ff 0%, #7fd3f5 60%, #4aa7d6 100%)', ink: 'dark' },
  { name: 'Ретро', bg: 'radial-gradient(60% 45% at 50% 42%, #e8c9a0 0%, #c79c6c 60%, #6d4a2c 100%)', ink: 'dark' },
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

export const audience = [
  'Пары', 'Подружки на девичник', 'Родители с малышами', 'Будущие мамы',
  'Влюблённые, которые хотят сделать предложение', 'Бабушки и дедушки', 'Те, кто приходит один',
];

export const rub = (n: number) => n.toLocaleString('ru-RU').replace(/ /g, ' ') + ' ₽';
