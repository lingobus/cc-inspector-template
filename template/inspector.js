Vue.component('{{compName}}', {
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