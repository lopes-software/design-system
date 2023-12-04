import TextAreaField from '@/components/TextAreaField/TextAreaField.vue'

export default {
  title: 'Form/TextAreaField',
  component: TextAreaField
}

export const Base = () => ({
  components: { TextAreaField },
  template: '<text-area-field label="Observation" />'
})

export const WithError = () => ({
  components: { TextAreaField },
  template: '<text-area-field label="Observation" errorMessage="Observation is required" />'
})

export const WithValue = () => ({
  components: { TextAreaField },
  template: '<text-area-field label="Observation" value="This is a really important observation!"/>'
})
