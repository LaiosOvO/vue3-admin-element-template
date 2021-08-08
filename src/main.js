import { createApp } from 'vue';
import elementPlus from './plugin/el-comp';
import 'element-plus/packages/theme-chalk/src/base.scss';
import App from './App.vue';

import router from './router/index';
import store from '@/store';

const app = createApp(App);

app.use(router);
app.use(store);

// 注册 elementPlus组件/插件
elementPlus(app);

app.mount('#app');
