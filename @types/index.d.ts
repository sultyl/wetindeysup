export interface MainLayoutProps {
  children?: React.ReactNode;
  title: string;
  //   className?: React.ComponentProps<"div">["className"];
}

export interface HeaderProps {
  title: string;
  info: string;
}
export interface EventData {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
}
