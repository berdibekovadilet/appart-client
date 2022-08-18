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
