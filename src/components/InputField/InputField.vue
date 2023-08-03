<template>
  <form-session class="input-field">
    <label v-if="label" data-test="input-field-label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      @input="(event) => this.$emit('input', event.target.value)"
      @keyup.enter="(event) => $emit('enter')"
      :value="value"
      :class="[hasError(errorMessage), variant]"
      :disabled="disabled"
      :data-test="dataTest"
      :placeholder="placeholder"
      :step="step"
    />
    <span
      v-if="errorMessage != undefined"
      class="text-danger"
      data-test="input-field-error-message"
    >
      {{ errorMessage }}
    </span>
  </form-session>
</template>

<script>
import FormSession from '@/components/FormSession/FormSession.vue'
export default {
  components: { FormSession },
  props: {
    label: {
      type: String,
      default: undefined
    },

    value: {
      type: [String, Number],
      default: ''
    },

    errorMessage: {
      type: String,
      default: undefined
    },

    type: {
      type: String,
      default: 'text'
    },

    step: {
      type: String,
      default: undefined
    },

    disabled: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: ''
    },

    variant: {
      type: String,
      default: ''
    },

    dataTest: {
      type: String,
      default: 'input-field-input'
    }
  },

  methods: {
    hasError (errorMessage) {
      if (errorMessage === undefined) return ''

      return 'is-invalid'
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/form.scss';
</style>
