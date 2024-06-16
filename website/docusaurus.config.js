// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IanaIO',
  tagline: ' A modular toolkit for building fast, reliable Web applications and libraries with Rust language and Web Assembly',
  url: 'https://www.iana.io',
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
    navbar: {
      title: 'IanaIO',
      logo: {
        alt: 'Ferris <3 IanaIO',
        src: 'img/ianaio-logo.webp',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'dropdown',
          label: 'docs.rs',
          position: 'right',
          items: [
            {
              label: 'ianaio',
              href: 'https://docs.rs/ianaio',
            },
            {
              label: 'dialogs',
              href: 'https://docs.rs/ianaio-dialogs/',
            },
            {
              label: 'events',
              href: 'https://docs.rs/ianaio-events/',
            },
            {
              label: 'file',
              href: 'https://docs.rs/ianaio-file/',
            },
            {
              label: 'history',
              href: 'https://docs.rs/ianaio-history/',
            },
            {
              label: 'net',
              href: 'https://docs.rs/ianaio-net/',
            },
            {
              label: 'render',
              href: 'https://docs.rs/ianaio-render/',
            },
            {
              label: 'storage',
              href: 'https://docs.rs/ianaio-storage/',
            },
            {
              label: 'timers',
              href: 'https://docs.rs/ianaio-timers/',
            },
            {
              label: 'utils',
              href: 'https://docs.rs/ianaio-utils/',
            },
            {
              label: 'worker',
              href: 'https://docs.rs/ianaio-worker/',
            }
          ],
        },
        {
          href: 'https://github.com/ianaio/ianaio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/channels/1247475712001314857/1247475712001314860', // #IanaIO in Yew server
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
