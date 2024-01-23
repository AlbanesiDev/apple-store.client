export interface FooterSection {
  sections: FooterCategory[];
  text: string;
  copyright: string;
  links: string[];
}

export interface FooterCategory {
  title: string;
  items: string[];
}
