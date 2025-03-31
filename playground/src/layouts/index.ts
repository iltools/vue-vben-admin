const BasicLayout = () => import('./basic.vue');
const AuthPageLayout = () => import('./auth.vue');

const IFrameView = () => import('@vben/layouts').then((m) => m.IFrameView);
const WujieSimple = () => import('@vben/layouts').then((m) => m.WujieSimple);

export { AuthPageLayout, BasicLayout, IFrameView, WujieSimple };
