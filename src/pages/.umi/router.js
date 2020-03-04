import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/opt/app-root/src/src/pages/.umi/LocaleWrapper.jsx';
import RendererWrapper1 from './apollo/index';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BlankLayout" */ '../../layouts/BlankLayout'),
          LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BlankLayout').default,
    routes: [
      {
        path: '/user',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "layouts__UserLayout" */ '../../layouts/UserLayout'),
              LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                .default,
            })
          : require('../../layouts/UserLayout').default,
        routes: [
          {
            path: '/user',
            redirect: '/user/login',
            exact: true,
          },
          {
            name: 'login',
            icon: 'smile',
            path: '/user/login',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__user__login__model.js' */ '/opt/app-root/src/src/pages/user/login/model.js').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__user__login" */ '../user/login'),
                  LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                    .default,
                })
              : require('../user/login').default,
            exact: true,
          },
          {
            name: 'register-result',
            icon: 'smile',
            path: '/user/register-result',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__user__register-result" */ '../user/register-result'),
                  LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                    .default,
                })
              : require('../user/register-result').default,
            exact: true,
          },
          {
            name: 'new-password-result',
            icon: 'smile',
            path: '/user/new-password-result',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__user__newPassword-result" */ '../user/newPassword-result'),
                  LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                    .default,
                })
              : require('../user/newPassword-result').default,
            exact: true,
          },
          {
            name: 'register',
            icon: 'smile',
            path: '/user/register',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__user__register__model.js' */ '/opt/app-root/src/src/pages/user/register/model.js').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__user__register" */ '../user/register'),
                  LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                    .default,
                })
              : require('../user/register').default,
            exact: true,
          },
          {
            name: 'forgot-result',
            icon: 'smile',
            path: '/user/forgot-result',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__user__forgot-result" */ '../user/forgot-result'),
                  LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                    .default,
                })
              : require('../user/forgot-result').default,
            exact: true,
          },
          {
            name: 'new-password',
            icon: 'smile',
            path: '/user/new-password',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__user__new-password__model.js' */ '/opt/app-root/src/src/pages/user/new-password/model.js').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__user__new-password" */ '../user/new-password'),
                  LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                    .default,
                })
              : require('../user/new-password').default,
            exact: true,
          },
          {
            name: 'forgot-password',
            icon: 'smile',
            path: '/user/forgot-password',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__user__forgot-password__model.js' */ '/opt/app-root/src/src/pages/user/forgot-password/model.js').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__user__forgot-password" */ '../user/forgot-password'),
                  LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                    .default,
                })
              : require('../user/forgot-password').default,
            exact: true,
          },
          {
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__404" */ '../404'),
                  LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                    .default,
                })
              : require('../404').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/opt/app-root/src/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
              LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                .default,
            })
          : require('../../layouts/BasicLayout').default,
        Routes: [require('../Authorized').default],
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
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__dashboard__analysis__model.jsx' */ '/opt/app-root/src/src/pages/dashboard/analysis/model.jsx').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../dashboard/analysis'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../dashboard/analysis').default,
                exact: true,
              },
              {
                name: 'monitor',
                icon: 'smile',
                path: '/dashboard/monitor',
                authority: ['comming'],
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__dashboard__monitor__model.js' */ '/opt/app-root/src/src/pages/dashboard/monitor/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../dashboard/monitor'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../dashboard/monitor').default,
                exact: true,
              },
              {
                name: 'workplace',
                icon: 'smile',
                authority: ['comming'],
                path: '/dashboard/workplace',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__dashboard__workplace__model.js' */ '/opt/app-root/src/src/pages/dashboard/workplace/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../dashboard/workplace'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../dashboard/workplace').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/opt/app-root/src/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'complex',
            icon: 'folder-open',
            authority: ['comming'],
            path: '/complex',
            routes: [
              {
                name: 'complexlist',
                icon: 'team',
                path: '/complex/complex-list',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../complex/complexList'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../complex/complexList').default,
                exact: true,
              },
              {
                name: 'addcomplex',
                icon: 'team',
                path: '/complex/add-complex',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../complex/addComplex'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../complex/addComplex').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/opt/app-root/src/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
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
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../administrative/adminUserList'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../administrative/adminUserList').default,
                exact: true,
              },
              {
                name: 'contractList',
                icon: 'file-text',
                path: '/administrative/contractList',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../administrative/contractList'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../administrative/contractList').default,
                exact: true,
              },
              {
                name: 'contractRegister',
                icon: 'file-add',
                path: '/administrative/contract-register',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../administrative/contractRegister'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../administrative/contractRegister').default,
                exact: true,
              },
              {
                name: 'client',
                icon: 'user',
                path: '/administrative/client-list',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../administrative/clientList'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../administrative/clientList').default,
                exact: true,
              },
              {
                name: 'clientRegister',
                icon: 'smile',
                path: '/administrative/client-register',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../administrative/clientRegister'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../administrative/clientRegister').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/opt/app-root/src/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'adduser',
            icon: 'user-add',
            authority: ['comming'],
            path: '/account/adduser',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__account__adduser" */ '../account/adduser'),
                  LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                    .default,
                })
              : require('../account/adduser').default,
            exact: true,
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
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../account/userList'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../account/userList').default,
                exact: true,
              },
              {
                name: 'addsingular',
                icon: 'user-add',
                path: '/account/singular',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../account/singular'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../account/singular').default,
                exact: true,
              },
              {
                name: 'center',
                icon: 'smile',
                authority: ['comming'],
                path: '/account/center',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__account__center__model.js' */ '/opt/app-root/src/src/pages/account/center/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../account/center'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../account/center').default,
                exact: true,
              },
              {
                name: 'settings',
                icon: 'setting',
                authority: ['comming'],
                path: '/account/settings',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__account__settings__model.js' */ '/opt/app-root/src/src/pages/account/settings/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../account/settings'),
                      LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../account/settings').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/opt/app-root/src/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/',
            redirect: '/dashboard/analysis',
            authority: ['admin', 'user'],
            exact: true,
          },
          {
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__404" */ '../404'),
                  LoadingComponent: require('/opt/app-root/src/src/components/PageLoading/index')
                    .default,
                })
              : require('../404').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/opt/app-root/src/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('/opt/app-root/src/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/opt/app-root/src/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper1>
        <RendererWrapper0>
          <Router history={history}>{renderRoutes(routes, props)}</Router>
        </RendererWrapper0>
      </RendererWrapper1>
    );
  }
}
