export const SITE_TITLE = "Keigo's Blog";
export const SITE_DESCRIPTION =
  "Keigo's Blog 是一个关于编程、读书笔记和个人随笔的博客。";

export type Social = {
  name?: string;
  url?: string;
  icon?: string;
  color?: string;
};

export const socials: Social[] = [
  {
    name: 'Github',
    url: 'https://github.com/SliverKeigo',
    icon: 'brand-github',
    color: '#6cc644',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/SliverKeigo1024',
    icon: 'brand-twitter',
    color: '#14171a',
  },
  {
    name: 'Email',
    url: 'SliverKeigo343@gmail.com',
    icon: 'mail',
    color: '#4285f4',
  },
  {
    name: 'RSS',
    url: '/rss.xml',
    icon: 'rss',
    color: '#f26522',
  },
  {
    name: 'Blog',
    url: 'https://astro.sliverkeigo.top/',
    icon: 'home',
    color: '#404041',
  },
];
