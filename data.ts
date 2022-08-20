export interface INavbarIcons {
  id: number;
  name: string;
  icon: string;
}

export const navbarIcons: INavbarIcons[] = [
  {
    id: 1,
    name: "search",
    icon: "/assets/navbarIcons/search.svg",
  },
  {
    id: 2,
    name: "map",
    icon: "/assets/navbarIcons/map.svg",
  },
  {
    id: 3,
    name: "profile",
    icon: "/assets/navbarIcons/profile.svg",
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
}

export const menuIcons: IMenuIcons[] = [
  {
    id: 1,
    text: "Купить",
    icon: "/assets/menuIcons/buy.svg",
  },
  {
    id: 2,
    text: "Аренда",
    icon: "/assets/menuIcons/rent.svg",
  },
  {
    id: 3,
    text: "Оценка",
    icon: "/assets/menuIcons/evaluation.svg",
  },
  {
    id: 4,
    text: "Новостройки",
    icon: "/assets/menuIcons/newBuildings.svg",
  },
  {
    id: 5,
    text: "Подбор риэлтора",
    icon: "/assets/menuIcons/realtorSelection.svg",
  },
  {
    id: 6,
    text: "Ипотека",
    icon: "/assets/menuIcons/mortgage.svg",
  },
  {
    id: 7,
    text: "Проверка жилья",
    icon: "/assets/menuIcons/housingChecking.svg",
  },
  {
    id: 8,
    text: "Оформление сделок",
    icon: "/assets/menuIcons/dealsRegistration.svg",
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
