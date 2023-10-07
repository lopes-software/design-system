<template>
  <form-session>
    <label data-test="date-field-label">{{ label }}</label>
      <date-picker
        @input="handleInput"
        value-type="format"
        :format="format"
        :type="type"
        :value="value"
        :data-test="dataTest"
      />
    <span
      v-if="errorMessage != undefined"
      class="text-danger"
      data-test="date-field-error-message"
    >
      {{ errorMessage }}
    </span>
  </form-session>
</template>

<script>
import FormSession from '@/components/FormSession/FormSession.vue'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

// NOTE: Datepicker doc https://mengxiong10.github.io/vue2-datepicker/index.html
export default {
  name: 'DateField',

  components: {
    FormSession,
    DatePicker
  },

  props: {
    label: {
      require: true,
      type: String
    },

    value: {
      type: String,
      default: ''
    },

    errorMessage: {
      type: String,
      default: undefined
    },

    disabled: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: 'date',
    },

    dataTest: {
      type: String,
      default: 'date-field-input'
    }
  },

  computed: {
    format () {
      if (this.type === 'date') {
        return 'DD/MM/YYYY'
      }

      return 'DD/MM/YYYY HH:mm'
    }
  },

  methods: {
    hasError (errorMessage) {
      if (errorMessage === undefined) return ''

      return 'is-invalid'
    },

    handleInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~vue2-datepicker/scss/index.scss';

  .mx-datepicker {
    width: 100%;
  }
</style>
