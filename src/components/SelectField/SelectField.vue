<template>
  <form-session>
    <label v-if="!!label" data-test="select-field-label">{{ label }}</label>

    <select
      class="form-select"
      @change="(event) => this.$emit('change', event.target.value)"
      @input="(event) => this.$emit('update:modelValue', event.target.value)"
      :value="modelValue"
      :class="[hasError(errorMessage), variant]"
      :data-test="dataTest"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="option.value === modelValue ? 'selected' : false"
      >
        {{ option.label }}
      </option>
    </select>

    <span
      v-if="errorMessage != undefined"
      class="text-danger"
      data-test="select-field-error-message"
    >
      {{ errorMessage }}
    </span>
  </form-session>
</template>

<script>
import FormSession from '@/components/FormSession/FormSession.vue'

export default {
  components: {
    FormSession
  },

  emits: ['update:modelValue', 'change'],

  props: {
    label: {
      require: true,
      type: String
    },

    modelValue: {
      type: [String, Boolean],
      default: ''
    },

    errorMessage: {
      type: String,
      default: undefined
    },

    dataTest: {
      type: String,
      default: 'select-field'
    },

    options: {
      type: Array,
      required: true
    },

    variant: {
      type: String,
      default: ''
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
