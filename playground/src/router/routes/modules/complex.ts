import type { RouteRecordRaw } from 'vue-router';

import { WujieSimple } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: "综合应用",
    },
    name: 'Complex',
    path: '/complex',
    children: [
      {
        meta: {
          icon: 'ic:round-settings-input-composite',
          title: "微前端",
        },
        name: 'ComplexMicro',
        path: '/complex/micro',
        children: [
          {
            name: 'MicroWujie',
            path: '/complex/micro/wujie',
            meta: {
              icon: 'mdi:newspaper-variant-multiple-outline',
              title: "无界",
            },
            children: [
              {
                name: 'MicroWujieSimple',
                path: '/complex/micro/wujie/loadThirdWeb',
                component: WujieSimple,
                meta: {
                  icon: 'devicon:tailwindcss',
                  title: '加载第三方网页',
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
