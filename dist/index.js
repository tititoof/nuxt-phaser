import VuePhaserPlugin from './vue.index';
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VuePhaserPlugin);
});
