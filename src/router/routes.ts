import { RouteRecordRaw } from 'vue-router';
import { pagePath } from '@paths/page.path';

// Template
import DefaultTemplate from '@components/Layout/Layout.vue';

// Pages
import Page404 from '@pages/404/404.vue';
import Home from '@pages/Home/Home.vue';
import HelloWorld from '@pages/HelloWorld/HelloWorld.vue';

const routes: RouteRecordRaw[] = [
  // outside
  {
    path: pagePath.base,
    component: DefaultTemplate,
    children: [
      {
        path: pagePath.base,
        redirect: pagePath.helloWorld,
      },
      {
        path: pagePath.home,
        name: 'home',
        component: Home,
      },

      {
        path: pagePath.helloWorld,
        name: 'helloWorld',
        component: HelloWorld,
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: Page404,
  },
];

export default routes;
