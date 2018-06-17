import Vue from 'vue';
import MuseUI from 'muse-ui';
import Message from '../src';
Vue.use(MuseUI);

test('Test config', () => {
  const config = Message.config({
    iconSize: 32,
    width: 300
  });
  expect(config.iconSize).toBe(32);
  expect(config.width).toBe(300);
});

test('Test install', () => {
  Vue.use(Message, {
    width: 320
  });

  expect(Message.config().width).toBe(320);
  expect(Vue.prototype.$message).toBe(Message);
});
