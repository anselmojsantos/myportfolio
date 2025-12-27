export interface CardCursoProps {
  bgColor?: string;
  borderCol?: string;
  linkImg?: string;
  linkUrl?: string;
  textSpan?: string;
  textSpanBold?: string;
  textP?: string;
  linkPages?: string;
  textColor?: string;
  linkGit?: string; 
}

export interface CardSkillProps {
    list: string[];
    titleH2: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  icon?: string; // Para ícones futuros
  color?: string; // Para cores personalizadas
}

export interface SkillItem {
  name: string;
  level?: number; // 1-5 para nível de proficiência
  years?: number; // Anos de experiência
}

export interface GitHubUser {
  name: string;
  avatar_url: string;
  repos_url: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  html_url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}
