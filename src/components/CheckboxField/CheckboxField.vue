<template>
  <div class="form-check">
    <input
      type="checkbox"
      :name="name"
      :id="name"
      :checked="modelValue"
      :disabled="disabled"
      class="form-check-input"
      :data-test="dataTest"
      @change="(event) => this.$emit('update:modelValue', event.target.checked)"
    >

    <label :for="name" class="form-check-label" data-test="checkbox-field-label">
      {{ label }}
    </label>
  </div>

  <span
    v-if="errorMessage != undefined"
    class="text-danger"
    data-test="checkbox-field-error-message"
  >
    {{ errorMessage }}
  </span>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String
    },

    name: {
      required: true,
      type: String
    },

    disabled: {
      type: Boolean
    },

    modelValue: {
      type: Boolean,
      default: false
    },

    errorMessage: {
      type: String,
      default: undefined
    },

    dataTest: {
      type: String,
      default: 'checkbox-field-input'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/constants.scss';

.form-check-input:checked {
  background-color: $secondary-color;
  border-color: $secondary-color;
}
</style>
