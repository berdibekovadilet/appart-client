export interface INavbarIcons {
  id: number;
  name: string;
  icon: string;
  link: string;
}

export const navbarIcons: INavbarIcons[] = [
  {
    id: 1,
    name: "search",
    icon: "/assets/navbarIcons/search.svg",
    link: "/search",
  },
  {
    id: 2,
    name: "map",
    icon: "/assets/navbarIcons/map.svg",
    link: "/map",
  },
  {
    id: 3,
    name: "profile",
    icon: "/assets/navbarIcons/profile.svg",
    link: "/login",
  },
];

export interface IStoriesCard {
  id: number;
  image: string;
  description: string;
}

export const storiesCard: IStoriesCard[] = [
  {
    id: 1,
    description: "Lorem Ipsum akldkadlnaldn",
    image: "/assets/stories/covers/1.webp",
  },
  {
    id: 2,
    description: "Lorem Ipsum akldkadlnaldn",
    image: "/assets/stories/covers/2.webp",
  },
  {
    id: 3,
    description: "Lorem Ipsum akldkadlnaldn",
    image: "/assets/stories/covers/3.webp",
  },
  {
    id: 4,
    description: "Lorem Ipsum akldkadlnaldn",
    image: "/assets/stories/covers/4.webp",
  },
  {
    id: 5,
    description: "Lorem Ipsum akldkadlnaldn",
    image: "/assets/stories/covers/5.webp",
  },
  {
    id: 6,
    description: "Lorem Ipsum akldkadlnaldn",
    image: "/assets/stories/covers/6.webp",
  },
  {
    id: 7,
    description: "Lorem Ipsum akldkadlnaldn",
    image: "/assets/stories/covers/7.webp",
  },
  {
    id: 8,
    description: "Lorem Ipsum akldkadlnaldn",
    image: "/assets/stories/covers/8.webp",
  },
];

export interface IMenuIcons {
  id: number;
  text: string;
  icon: string;
  link: string;
}

export const menuIcons: IMenuIcons[] = [
  {
    id: 1,
    text: "Купить",
    icon: "/assets/menuIcons/buy.svg",
    link: "/buy",
  },
  {
    id: 2,
    text: "Аренда",
    icon: "/assets/menuIcons/rent.svg",
    link: "/rent",
  },
  {
    id: 3,
    text: "Оценка",
    icon: "/assets/menuIcons/evaluation.svg",
    link: "/appraisal",
  },
  {
    id: 4,
    text: "Новостройки",
    icon: "/assets/menuIcons/newBuildings.svg",
    link: "/newbuildings",
  },
  {
    id: 5,
    text: "Подбор риэлтора",
    icon: "/assets/menuIcons/realtorSelection.svg",
    link: "/realtors",
  },
  {
    id: 6,
    text: "Ипотека",
    icon: "/assets/menuIcons/mortgage.svg",
    link: "/mortgage",
  },
  {
    id: 7,
    text: "Проверка жилья",
    icon: "/assets/menuIcons/housingChecking.svg",
    link: "/checking",
  },
  {
    id: 8,
    text: "Оформление сделок",
    icon: "/assets/menuIcons/dealsRegistration.svg",
    link: "/dealregistration",
  },
];

export interface IVipCard {
  id: number;
  image: string;
  description: string;
}

export const vipCard: IStoriesCard[] = [
  {
    id: 1,
    description: "Браво",
    image: "/assets/vipCottages/1.webp",
  },
  {
    id: 2,
    description: "Ницца",
    image: "/assets/vipCottages/2.webp",
  },
  {
    id: 3,
    description: "Ачакей",
    image: "/assets/vipCottages/3.webp",
  },
];

export interface IRecommendedCard {
  id: number;
  image: string;
  title: string;
  room: string;
  square: string;
  floor: string;
  longDesc: string;
}

export const recommendedCard: IRecommendedCard[] = [
  {
    id: 1,
    image: "/assets/recommendedFlats/1.webp",
    title: "45 000$",
    room: "1-ком, кв",
    square: "53 м2",
    floor: "9/12",
    longDesc: "Бишкек, 6-мкр, дом 95",
  },
  {
    id: 2,
    image: "/assets/recommendedFlats/2.webp",
    title: "38 000$",
    room: "1-ком, кв",
    square: "43 м2",
    floor: "5/12",
    longDesc: "Бишкек, 12-мкр, дом 5",
  },
  {
    id: 3,
    image: "/assets/recommendedFlats/3.webp",
    title: "47 000$",
    room: "2-ком, кв",
    square: "62 м2",
    floor: "6/9",
    longDesc: "Бишкек, 6-мкр, дом 95",
  },
  {
    id: 4,
    image: "/assets/recommendedFlats/4.webp",
    title: "45 000$",
    room: "1-ком, кв",
    square: "53 м2",
    floor: "9/12",
    longDesc: "Бишкек, 6-мкр, дом 95",
  },
  {
    id: 5,
    image: "/assets/recommendedFlats/5.webp",
    title: "45 000$",
    room: "1-ком, кв",
    square: "53 м2",
    floor: "9/12",
    longDesc: "Бишкек, 6-мкр, дом 95",
  },
  {
    id: 6,
    image: "/assets/recommendedFlats/6.webp",
    title: "45 000$",
    room: "1-ком, кв",
    square: "53 м2",
    floor: "9/12",
    longDesc: "Бишкек, 6-мкр, дом 95",
  },
];

export interface IHouseComplex {
  id: number;
  image: string;
  title: string;
  status: string;
  price: string;
  location: string;
}

export const AvangardComplex: IHouseComplex[] = [
  {
    id: 1,
    image: "/assets/housingComplexes/avangard/1.webp",
    title: "Монреаль",
    status: "Сдан в эксплуатацию",
    price: "от 1300$ за м2",
    location: "мкр. Асанбай",
  },
  {
    id: 2,
    image: "/assets/housingComplexes/avangard/2.webp",
    title: "Avangard City",
    status: "Сдача ПСО в 2023г, 4 квартал",
    price: "от 850$ за м2",
    location: "мкр. Асанбай",
  },
  {
    id: 3,
    image: "/assets/housingComplexes/avangard/3.webp",
    title: "Манхэттен",
    status: "Сдан в эксплуатацию",
    price: "от 1100$ за м2",
    location: "мкр. Асанбай",
  },
];

export const RoyalComplex: IHouseComplex[] = [
  {
    id: 1,
    image: "/assets/housingComplexes/royal/1.webp",
    title: "Royal",
    status: "Сдача ПСО в 2023г, 4 квартал",
    price: "от 850$ за м2",
    location: "мкр. Асанбай",
  },
  {
    id: 2,
    image: "/assets/housingComplexes/royal/2.webp",
    title: "Дипломат",
    status: "Сдан в эксплуатацию",
    price: "от 950$ за м2",
    location: "мкр. Асанбай",
  },
  {
    id: 3,
    image: "/assets/housingComplexes/avangard/3.webp",
    title: "Кожомкул",
    status: "Сдача ПСО в 2023г, 4 квартал",
    price: "от 850$ за м2",
    location: "мкр. Асанбай",
  },
];

export interface ICreateObjectIcons {
  id: number;
  title: string;
  icon: string;
}

export const adType: ICreateObjectIcons[] = [
  {
    id: 1,
    title: "Продать",
    icon: "/assets/objectCreateIcon/key.svg",
  },
  {
    id: 2,
    title: "Сдать длительно",
    icon: "/assets/objectCreateIcon/calendar.svg",
  },
  {
    id: 3,
    title: "Сдать посуточно",
    icon: "/assets/objectCreateIcon/watch.svg",
  },
];

export const propertyType: ICreateObjectIcons[] = [
  {
    id: 1,
    title: "Квартира",
    icon: "/assets/objectCreateIcon/building.svg",
  },
  {
    id: 2,
    title: "Комната",
    icon: "/assets/objectCreateIcon/keyhole.svg",
  },
  {
    id: 3,
    title: "Дом",
    icon: "/assets/objectCreateIcon/house.svg",
  },
  {
    id: 4,
    title: "Участок",
    icon: "/assets/objectCreateIcon/dig.svg",
  },
  {
    id: 5,
    title: "Коммерческая",
    icon: "/assets/objectCreateIcon/shop.svg",
  },
];

export const comfortItems: ICreateObjectIcons[] = [
  {
    id: 1,
    title: "Интернет",
    icon: "/assets/objectCreateIcon/watch.svg",
  },
  {
    id: 2,
    title: "Холодильник",
    icon: "/assets/objectCreateIcon/shop.svg",
  },
  {
    id: 3,
    title: "Кондиционер",
    icon: "/assets/objectCreateIcon/house.svg",
  },
  {
    id: 4,
    title: "Лифт",
    icon: "/assets/objectCreateIcon/watch.svg",
  },
  {
    id: 5,
    title: "Мебель на кухне",
    icon: "/assets/objectCreateIcon/house.svg",
  },
  {
    id: 6,
    title: "Мебель в квартире",
    icon: "/assets/objectCreateIcon/shop.svg",
  },
  {
    id: 7,
    title: "Охрана",
    icon: "/assets/objectCreateIcon/house.svg",
  },
  {
    id: 8,
    title: "Балкон",
    icon: "/assets/objectCreateIcon/shop.svg",
  },
  {
    id: 9,
    title: "Закрытая территория",
    icon: "/assets/objectCreateIcon/watch.svg",
  },
];
