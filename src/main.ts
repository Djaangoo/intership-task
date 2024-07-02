import { createApp } from 'vue';
import App from './App.vue';

import './styles/global.less';

// Vue Packages
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';

// dayjs
import dayjs from 'dayjs';
import locale_pl from 'dayjs/locale/pl';

dayjs.locale(locale_pl);

// internal imports
import router from '@router/index';
import i18n from '@resources';

const app = createApp(App);

//#region region plugins/extensions
app.use(Antd);
app.use(VueQueryPlugin);
app.use(createPinia());
app.use(router);
app.use(i18n);
//#endregion

app.mount('#app');
