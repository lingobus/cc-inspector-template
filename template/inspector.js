Vue.component("{{camelize name}}", {
  template: `
    <ui-prop v-prop="target.propName"></ui-prop>
  `,
  props: {
    target: {
      twoWay: true,
      type: Object
    }
  }
});
