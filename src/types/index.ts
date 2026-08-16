
export interface CardCursoProps {
  textSpanBold?: string;
  textSpan?: string;
  textP?: string;
  linkImg?: string;
  linkPages?: string;
  linkGit?: string;
  linkUrl?: string;
  onClick?: () => void;
}

export interface GitLink {
  name: string;
  avatar: string;
  reposURL: string;
}