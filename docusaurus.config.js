module.exports = {
  title: 'Impress.org Handbooks',
  tagline: 'Where we document our company practices.',
  url: 'https://handbooks.impress.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/impress-icon.svg',
  organizationName: 'impress-org', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Impress.org Handbooks',
      logo: {
        alt: 'Impress Logo',
        src: 'img/impress-icon.svg',
      },
      items: [
        {to: 'support', activeBasePath: 'support', label: 'Support', position: 'left'},
        {to: 'dev', activeBasePath: 'dev', label: 'Development', position: 'left'},
        {to: 'marketing', activeBasePath: 'marketing', label: 'Marketing', position: 'left'},
        {
          href: 'https://givewp.com',
          label: 'GiveWP',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'dev',
        path: "./dev", // Path to data on filesystem, relative to site dir.
        routeBasePath: "dev", // URL Route.
        include: ["**/*.md"],
        sidebarPath: require.resolve('./sidebarsDev.js'),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'support',
        path: "./support", // Path to data on filesystem, relative to site dir.
        routeBasePath: "support", // URL Route.
        include: ["**/*.md"],
        sidebarPath: require.resolve('./sidebarsSupport.js'),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'marketing',
        path: "./marketing", // Path to data on filesystem, relative to site dir.
        routeBasePath: "marketing", // URL Route.
        include: ["**/*.md"],
        sidebarPath: require.resolve('./sidebarsMarketing.js'),
      },
    ],
  ],
};
