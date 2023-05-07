import { Props as CheckboxGroupProps } from 'src/components/molecules/CheckboxGroup';
import { Props as ItemCardProps } from 'src/components/molecules/ItemCard';

export const categories = [
  'Букеты из гипсофил',
  'Букеты из ромашек',
  'Букеты из хризантем',
  'Комнатные цветы в горшках',
  'Монобукеты',
  'Сборные букеты',
  'Букет на праздник',
  'Композиции из цветов',
  'Конверты',
  'Открытки',
  'Подарки',
  'Букеты из сухоцветов',
  'Шары',
  'Популярное',
  'Букеты роз',
  'Цветы на похороны',
  'Упаковка подарков',
];

export const listOfCategories: CheckboxGroupProps[] = [
  { checkboxes: ['нежные', 'яркие'], title: 'По свету' },
  {
    checkboxes: [
      'белый',
      'желтый',
      'зеленый',
      'красный',
      'оранжевый',
      'розовый',
      'синий',
    ],
    title: 'По цвету',
  },
  {
    checkboxes: [
      'букет',
      'в вазе',
      'в конверте',
      'в корзине',
      'в шляпной коробке',
      'в ящике',
    ],
    title: 'по формату',
  },
  {
    checkboxes: [
      'Альстромерия (2)',
      'Антуриум (1)',
      'Аспарагус (1)',
      'Астильба (7)',
      'Астранция (1)',
      'Бегония (4)',
      'Гвоздика (5)',
      'Герань (2)',
      'Гербера (4)',
      'Гипсофила (2)',
      'Гладиолус (1)',
      'Гортензия (1)',
      'Лаванда (3)',
      'Пион (4)',
      'Роза (6)',
      'Хризантема (4)',
    ],
    title: 'по цветку',
  },
];

export const items: ItemCardProps[] = [
  {
    imageSrc: 'https://i.ibb.co/3CYf6Mn/image-114.png',
    price: 120,
    title: 'лучший день',
  },
  {
    imageSrc: 'https://i.ibb.co/nkc4zHN/image-130.png',
    price: 120,
    title: 'лучший день',
    type: 'new',
  },
  {
    imageSrc: 'https://i.ibb.co/FmctFzN/image-131.png',
    price: 120,
    title: 'лучший день',
  },
  {
    imageSrc: 'https://i.ibb.co/ZhRQGhM/image-132.png',
    price: 120,
    title: 'лучший день',
    type: 'sale',
    sale: 100,
  },
  {
    imageSrc: 'https://i.ibb.co/pwC5mFY/image-133.png',
    price: 120,
    title: 'лучший день',
  },
  {
    imageSrc: 'https://i.ibb.co/myLZ3wr/image-134.png',
    price: 120,
    title: 'лучший день',
    sale: 110,
    type: 'sale',
  },
  {
    imageSrc: 'https://i.ibb.co/bFf2s5T/image-135.png',
    price: 120,
    title: 'лучший день',
  },
  {
    imageSrc: 'https://i.ibb.co/TrwRGC5/image-136.png',
    price: 120,
    title: 'лучший день',
  },
  {
    imageSrc: 'https://i.ibb.co/H78nbWM/image-137.png',
    price: 120,
    title: 'лучший день',
    sale: 110,
    type: 'sale',
  },
  {
    imageSrc: 'https://i.ibb.co/TwS0nxt/image-138.png',
    price: 120,
    title: 'лучший день',
  },
  {
    imageSrc: 'https://i.ibb.co/r3Dr1g4/image-139.png',
    price: 120,
    title: 'лучший день',
    sale: 100,
    type: 'sale',
  },
  {
    imageSrc: 'https://i.ibb.co/vY01XCG/image-140.png',
    price: 120,
    title: 'лучший день',
  },
];
