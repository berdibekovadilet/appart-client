export interface IMenuIcons {
  id: number;
  name: string;
  icon: string;
}

export const menuIcons: IMenuIcons[] = [
  {
    id: 1,
    name: "search",
    icon: "/assets/search.svg",
  },
  {
    id: 2,
    name: "map",
    icon: "/assets/map.svg",
  },
  {
    id: 3,
    name: "profile",
    icon: "/assets/profile.svg",
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
