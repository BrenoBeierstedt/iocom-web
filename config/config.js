import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import themePluginConfig from './themePluginConfig';
const { pwa } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'pt-BR',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
          workboxPluginMode: 'InjectManifest',
          workboxOptions: {
            importWorkboxFrom: 'local',
          },
        }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-apollo',
    {
      uri: 'http://api.iocom.com.br/graphql',
      hooksImportFrom: 'react-apollo-hooks',
      options: `${__dirname}/graphql.js`,

    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

if (isAntDesignProPreview) {
  // 针对 preview.pro.ant.design 的 GA 统计代码
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push(['umi-plugin-antd-theme', themePluginConfig]);
}

export default {
  plugins,
  hash: true,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              icon: 'smile',
              path: '/user/login',
              component: './user/login',
            },
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'new-password-result',
              icon: 'smile',
              path: '/user/new-password-result',
              component: './user/newPassword-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
            {
              name: 'forgot-result',
              icon: 'smile',
              path: '/user/forgot-result',
              component: './user/forgot-result',
            },
            {
              name: 'new-password',
              icon: 'smile',
              path: '/user/new-password',
              component: './user/new-password',
            },
            {
              name: 'forgot-password',
              icon: 'smile',
              path: '/user/forgot-password',
              component: './user/forgot-password',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/dashboard',
              name: 'dashboard',
              icon: 'dashboard',
              routes: [
                {
                  name: 'analysis',
                  icon: 'smile',
                  path: '/dashboard/analysis',
                  component: './dashboard/analysis',
                },
                {
                  name: 'monitor',
                  icon: 'smile',
                  path: '/dashboard/monitor',
                  authority:['comming'],

                  component: './dashboard/monitor',
                },
                {
                  name: 'workplace',
                  icon: 'smile',
                  authority:['comming'],

                  path: '/dashboard/workplace',
                  component: './dashboard/workplace',
                },
              ],
            },
            {
              name: 'complex',
              icon: 'folder-open',
              authority:['comming'],
              path: '/complex',
              routes: [
                {
                  name: 'complexlist',
                  icon: 'team',
                  path: '/complex/complex-list',
                  component: './complex/complexList',
                },
                {
                  name: 'addcomplex',
                  icon: 'team',
                  path: '/complex/add-complex',
                  component: './complex/addComplex',
                },
              ]
            },
            {
              name: 'administrative',
              icon: 'folder-open',
              path: '/administrative',
              routes: [
                {
                  name: 'adminuserlist',
                  icon: 'team',
                  path: '/administrative/adminuser-list',
                  component: './administrative/adminUserList',
                },

                {
                  name: 'contractList',
                  icon: 'file-text',
                  path: '/administrative/contractList',
                  component: './administrative/contractList',
                },
                {
                  name: 'contractRegister',
                  icon: 'file-add',
                  path: '/administrative/contract-register',
                  component: './administrative/contractRegister',
                },
                {
                  name: 'client',
                  icon: 'user',
                  path: '/administrative/client-list',
                  component: './administrative/clientList',
                },
                {
                  name: 'clientRegister',
                  icon: 'smile',
                  path: '/administrative/client-register',
                  component: './administrative/clientRegister',
                },

              ]
            },
            {
              name: 'adduser',
              icon: 'user-add',
              authority:['comming'],
              path: '/account/adduser',
              component: './account/adduser'

            },
            {
              name: 'account',
              icon: 'user',
              path: '/account',
              routes: [
                {
                  name: 'list',
                  icon: 'team',
                  path: '/account/list',
                  component: './account/userList',
                },

                {
                  name: 'addsingular',
                  icon: 'user-add',

                  path: '/account/singular',
                  component: './account/singular',
                },
                {
                  name: 'center',
                  icon: 'smile',
                  authority:['comming'],

                  path: '/account/center',
                  component: './account/center',
                },

                {
                  name: 'settings',
                  icon: 'setting',
                  authority:['comming'],

                  path: '/account/settings',
                  component: './account/settings',
                },
              ],
            },
            {
              path: '/',
              redirect: '/dashboard/analysis',
              authority: ['admin', 'user'],
            },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  }, // chainWebpack: webpackPlugin,
  // proxy: {
  //   '/server/api/': {
  //     target: 'https://preview.pro.ant.design/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/server': '' },
  //   },
  // },
};
