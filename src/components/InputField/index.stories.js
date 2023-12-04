import InputField from '@/components/InputField/InputField.vue'

export default {
  title: 'Form/InputField',
  component: InputField
}

export const Base = () => ({
  components: { InputField },
  template: '<input-field label="Name" />'
})

export const WithError = () => ({
  components: { InputField },
  template: '<input-field label="Name" errorMessage="Name is required" />'
})

export const WithValue = () => ({
  components: { InputField },
  template: '<input-field label="Name" value="Steve Jobs" />'
})

export const Rounded = () => ({
  components: { InputField },
  template: '<input-field variant="rounded" />'
})

export const WithPlaceholder = () => ({
  components: { InputField },
  template: '<input-field placeholder="Search for projects..." />'
})

export const Disable = () => ({
  components: { InputField },
  template: '<input-field label="Country" value="Brasil" :disabled="true" />'
})
