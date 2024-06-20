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
  title: 'IanaIO',
  tagline: ' A hybrid AI-Human software. Provides the best quality and a unique data not only for global community but also for governments and corporations. ',
  url: 'https://marketing.iana.io',
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
  favicon: 'img/ianaio-logo.ico',
  organizationName: 'rustwasm',
  projectName: 'ianaio',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    }, 
    navbar: {
      title: 'IanaIO',
      logo: {
        alt: 'AI <3 IanaIO',
        src: 'img/ianaio-logo.webp',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://security.iana.io',
          label: 'Security',
          position: 'left',
        },
        {
          href: 'https://docs.iana.io',
          label: 'Docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Follow us',
          items: [
            {
              alt: 'AI <3 IanaIO Logo',
              label: 'X',
              href: 'https://x.com/_ianaio', 
              width: 25,
              height: 25,
            },
          ],
	},
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/channels/1247475712001314857/1247475712001314860',
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
              label: 'GitHub',
              href: 'https://github.com/ianaio/ianaio',
            },
          ],
        },
      ],
      logo: {
        alt: 'IanaIO logo',
        src: 'img/ianaio-logo.webp',
        href: 'https://www.iana.io',
        width: 27.83,
        height: 32,
      },
      copyright: `Copyright © ${new Date().getFullYear()} IanaIO, Inc.`, // You can also put own HTML here
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

