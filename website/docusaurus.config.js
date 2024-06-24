// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config


// See: https://github.com/facebook/docusaurus/issues/8940 
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Proud America',
  tagline: ' American Made American Owned - Top Quality American Patriotic Clothes ',
  url: 'https://www.proudamerica.us',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  favicon: 'img/proudamericaus.ico',
  organizationName: 'rustwasm',
  projectName: 'proudamerica',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    }, 
    navbar: {
      title: 'Proud America',
      logo: {
        alt: 'AI <3 Proud America',
        src: 'img/proudamericaus.png',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'}, 
	{to: '/shop', label: 'Shop', position: 'left'},
        {to: '/patriots', label: 'Patriots', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Follow us',
          items: [
            {
              alt: 'AI <3 Proud America',
              label: 'X',
              href: 'https://x.com/proudamericaus', 
              width: 25,
              height: 25,
            },
          ],
	},
        {
          title: 'Shop',
          items: [
            {
              label: '#',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: '#',
              href: '#',
            },
          ],
        },
      ],
      logo: {
        alt: 'IanaIO logo',
        src: 'img/proudamericaus.png',
        href: 'https://www.proudamerica.us',
        width: 27.83,
        height: 32,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Proud America ★ American Made ★ American Owned, Inc.`, // You can also put own HTML here
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['rust', 'toml'],
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ianaio/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ianaio/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;

