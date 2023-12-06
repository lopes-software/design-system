<template>
  <form-session class="multi-checkbox-field">
    <label
      class="w-100"
      data-test="multi-checkbox-field-label"
    >
      {{ label }}
    </label>

    <div class="mx-2">
      <checkbox-field
        v-for="option in options"
        :key="option.value"
        :name="`${name}-${option.value}`"
        :label="option.label"
        data-test="multi-checkbox-input"
        :modelValue="isChecked(option.value)"
        @update:modelValue="handleInput(option.value)"
      />
    </div>
    <span
      v-if="errorMessage != undefined"
      class="text-danger"
      data-test="multi-checkbox-field-error-message"
    >
      {{ errorMessage }}
    </span>
  </form-session>
</template>

<script>
import FormSession from '@/components/FormSession/FormSession.vue'
import CheckboxField from '@/components/CheckboxField/CheckboxField.vue'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'MultiCheckbox',

  components: {
    CheckboxField,
    FormSession
  },

  props: {
    modelValue: {
      type: null,
      default: () => []
    }, 
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      default: () => uuidv4()
    },
    errorMessage: {
      type: String,
      default: undefined
    },
  },

  methods: {
    handleInput (value) {
      if (this.modelValue.includes(value)) {
        this.$emit('update:modelValue', this.modelValue.filter(i => i !== value))
      } else {
        this.$emit('update:modelValue', [...this.modelValue, value])
      }
    },
    isChecked(value) {
      return this.modelValue.includes(value)
    }
  },
}
</script>
