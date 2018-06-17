<template>
<div>
  <mu-appbar color="primary" title="Muse-UI-Message"></mu-appbar>
  <div style="padding: 16px">
    <mu-button @click="$alert('Hello world', 'Alert')">Alert</mu-button>
    <mu-button @click="$confirm('Write Hello world ??', 'Confirm')" color="primary">confirm</mu-button>
    <mu-button @click="$prompt('Please Input Some', 'Prompt')" color="secondary">prompt</mu-button>
  </div>
  <div style="padding: 16px">
    <mu-button color="success" @click="$alert('Hello world Success !', 'Alert', { type: 'success', okLabel: 'I Know' })">Alert Options</mu-button>
    <mu-button color="warning" @click="$confirm('Write Hello World Warning ??', 'Confirm', { type: 'warning', okLabel: 'Get out', cancelLabel: 'RUNING' })">confirm</mu-button>
    <mu-button color="error" @click="$confirm('Please Input Some', 'Prompt', { type: 'error', icon: 'notifications_paused', iconSize: 32 })">Custom Icon</mu-button>
  </div>

  <div style="padding: 16px">
    <mu-button color="success" @click="input">Input Some</mu-button>
  </div>
</div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    input () {
      this.$prompt('', 'Input', {
        inputPlaceholder: 'Input some things',
        validator (val) {
          return {
            valid: !!val && val.length > 6 && val.length < 12,
            message: 'value length between 6 and 12'
          }
        }
      }).then(({ result, value }) => {
        if (result) {
          this.$alert('input: ' + value);
        } else {
          this.$alert('click cancel !');
        }
      });
    }
  }
};
</script>

