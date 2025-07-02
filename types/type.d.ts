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
