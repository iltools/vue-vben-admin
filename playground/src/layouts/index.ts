const BasicLayout = () => import('./basic.vue');
const AuthPageLayout = () => import('./auth.vue');

const IFrameView = () => import('@vben/layouts').then((m) => m.IFrameView);
const WujieSimple = () => import('@vben/layouts').then((m) => m.WujieSimple);
const WujieVue3Main = () => import('@vben/layouts').then((m) => m.WujieVue3Main);

export { AuthPageLayout, BasicLayout, IFrameView, WujieSimple, WujieVue3Main };
