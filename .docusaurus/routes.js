import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'db6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '65a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '26f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '800'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9c4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a46'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '4ba'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'fba'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'aaa'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '854'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ad6'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bfe'),
    routes: [
      {
        path: '/docs/category/componentes',
        component: ComponentCreator('/docs/category/componentes', '7ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/redux',
        component: ComponentCreator('/docs/redux', '25f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/',
        component: ComponentCreator('/docs/tutorial-basics/', '92f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/app',
        component: ComponentCreator('/docs/tutorial-basics/app', '521'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/detail',
        component: ComponentCreator('/docs/tutorial-basics/detail', '4cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/edittask',
        component: ComponentCreator('/docs/tutorial-basics/edittask', '52c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/navbar',
        component: ComponentCreator('/docs/tutorial-basics/navbar', 'cb9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/removetask',
        component: ComponentCreator('/docs/tutorial-basics/removetask', '581'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/resumetable',
        component: ComponentCreator('/docs/tutorial-basics/resumetable', '2a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/styles',
        component: ComponentCreator('/docs/tutorial-basics/styles', '0e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/taskform',
        component: ComponentCreator('/docs/tutorial-basics/taskform', '9a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c29'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
