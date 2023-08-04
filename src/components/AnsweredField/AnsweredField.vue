<template>
  <div class="mb-3">
    <label data-test="answered-field-label">{{ label }}</label>
    <input
      :value="value"
      class="form-control"
      disabled
      :data-test="dataTest"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    dataTest: {
      type: String,
      default: 'answered-field-value'
    }
  }
}
</script>
