import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Rivercory',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'ko-KR',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: 'https://avatars.githubusercontent.com/u/116472903?v=4',
    name: 'Hyeonho Kang',
    status: '😊',
    bio: 'Middle school student, Programmer'
  },
  themeColor: '#3D4451'
}
