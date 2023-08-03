import InputField from '@/components/InputField/InputField.vue'

export default {
  title: 'Form/InputField',
  component: InputField
}

export const base = () => ({
  components: { InputField },
  template: '<input-field label="Name" />'
})

export const withError = () => ({
  components: { InputField },
  template: '<input-field label="Name" errorMessage="Name is required" />'
})

export const withValue = () => ({
  components: { InputField },
  template: '<input-field label="Name" value="Steve Jobs" />'
})

export const rounded = () => ({
  components: { InputField },
  template: '<input-field variant="rounded" />'
})

export const withPlaceholder = () => ({
  components: { InputField },
  template: '<input-field placeholder="Search for projects..." />'
})

export const disable = () => ({
  components: { InputField },
  template: '<input-field label="Country" value="Brasil" :disabled="true" />'
})
