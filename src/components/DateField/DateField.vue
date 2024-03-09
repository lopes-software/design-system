<template>
  <form-session>
    <label data-test="date-field-label">{{ label }}</label>
      <date-picker
        @update:value="handleInput"
        value-type="format"
        :format="format"
        :type="type"
        :value="datePickerValue"
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
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';

// NOTE: Datepicker doc https://mengxiong10.github.io/vue-datepicker-next/
export default {
  name: 'DateField',

  components: {
    FormSession,
    DatePicker
  },

  emits: ['update:modelValue'],

  data () {
    return {
      datePickerValue: this.modelValue,
    }
  },

  props: {
    label: {
      require: true,
      type: String
    },

    modelValue: {
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
    handleInput (value) {
      this.$emit('update:modelValue', value)
      this.datePickerValue = value
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'vue-datepicker-next/index.css';

  .mx-datepicker {
    width: 100%;
  }
</style>
