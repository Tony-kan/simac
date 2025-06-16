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
