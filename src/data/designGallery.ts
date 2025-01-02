export interface DesignItem {
  id: number;
  title: string;
  category: string;
  image: string;
  size?: 'default' | 'large' | 'tall' | 'wide';
}

export const designGalleryData: DesignItem[] = [
  {
    id: 1,
    title: "Bollywood Party Poster",
    category: "Social Media",
    image: "7.jpg",
    size: "large"
  },
  {
    id: 2,
    title: "Bollywood Party ",
    category: "Social Media",
    image: "22.jpg",
    size: "tall"
  },
  {
    id: 3,
    title: "Diwali party Poster",
    category: "Social Media",
    image: "ee.jpg"
  },
  {
    id: 4,
    title: "Blogger Intro Grid Design",
    category: "Social Media",
    image: "hhh.jpg",
    size: "wide"
  },
  {
    id: 5,
    title: "DJ Intro Poster",
    category: "Social Media",
    image: "4.jpg"
  },
  {
    id: 6,
    title: "Saturday Night Party",
    category: "Social Media",
    image: "rr.jpg",
    size: "tall"
  },
  {
    id: 7,
    title: "Club Intro Grid Design",
    category: "Social Media",
    image: "gg.png",
    size: "wide"
  },
  {
    id: 8,
    title: "Bollywood Party Post",
    category: "Social Media",
    image: "lo 2.jpg"
  }
];