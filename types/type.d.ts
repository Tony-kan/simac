declare interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

declare interface ILogin {
  email: string;
  password: string;
}

declare interface INavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

declare interface IEvent {
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
}

declare interface IEventCardProps {
  event: IEvent;
}

declare interface INewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
}

declare interface IStoreBannerProps {
  title?: string;
  subtitle?: string;
}

declare interface IProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
}

interface IProductGridProps {
  products: IProductCardProps[];
  itemsPerPage?: number;
}

interface IFilterSortBarProps {
  sortOption: ISortOption;
  setSortOption: (option: ISortOption) => void;
}

interface IProductImageGalleryProps {
  images: string[] | StaticImageData[];
  productName: string;
}

interface IProductDetailsProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    rating: number;
    reviewCount: number;
  };
}

interface IReview {
  id: string;
  user: string;
  avatar: string | StaticImageData;
  rating: number;
  comment: string;
  date: string;
}

interface ICustomerReviewsProps {
  reviews: Review[];
}

