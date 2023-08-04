import TextAreaField from '@/components/TextAreaField/TextAreaField.vue'

export default {
  title: 'Form/TextAreaField',
  component: TextAreaField
}

export const base = () => ({
  components: { TextAreaField },
  template: '<text-area-field label="Observation" />'
})

export const withError = () => ({
  components: { TextAreaField },
  template: '<text-area-field label="Observation" errorMessage="Observation is required" />'
})

export const withValue = () => ({
  components: { TextAreaField },
  template: '<text-area-field label="Observation" value="This is a really important observation!"/>'
})
