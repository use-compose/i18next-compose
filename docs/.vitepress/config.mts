import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
import typedocSidebar from '../typedoc-api/typedoc-sidebar.json';

const sidebar = {
  // This sidebar gets displayed when a user
  // is on `guide` directory.
  '/': [
    {
      text: 'Overview',
      items: [
        { text: 'Motivation', link: '/motivation' },
        { text: 'Features', link: '/guide/features' },
      ],
    },
    {
      text: 'Guide',
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Features', link: '/guide/features' },
      ],
    },
    {
      text: 'Vue',
      items: [
        { text: 'Getting Started', link: '/vue/' },
        { text: 'Components Interpolation', link: '/vue/components-interpolation' },
        { text: 'API', link: '/vue/api' },
      ],
    },
    {
      text: 'API',
      items: [
        { text: 'Utility Functions', link: '/api/utility-functions' },
        { text: 'Types', link: '/api/types' },
      ],
    },
    {
      text: 'TypeDoc API',
      items: typedocSidebar,
    },
  ],
};

// https://vitepress.dev/reference/site-config
const config = defineConfig({
  title: 'i18next-compose',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/use-compose/i18next-compose' }],
  },
  cleanUrls: true,
});

export default withMermaid(config);
