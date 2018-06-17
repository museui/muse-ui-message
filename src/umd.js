import Vue from 'vue';
import Dialog from 'muse-ui/lib/Dialog';
import Button from 'muse-ui/lib/Button';
import Icon from 'muse-ui/lib/Icon';
import Message from './index';
import 'muse-ui/lib/styles/theme.less';

Vue.use(Dialog);
Vue.use(Button);
Vue.use(Icon);

if (typeof window !== undefined && window.Vue) window.Vue.use(Message);

export default Message;
