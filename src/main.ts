import { createApp } from 'vue';
import App from './App.vue';

// @ts-ignore - build error

// style
import 'ant-design-vue/dist/antd.css';

// Vue Packages
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';

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
app.use(createPinia());
app.use(router);
app.use(i18n);
//#endregion

app.mount('#app');
