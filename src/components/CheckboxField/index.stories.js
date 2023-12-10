import CheckboxField from '@/components/CheckboxField/CheckboxField.vue'

export default {
  title: 'Form/CheckboxField',
  component: CheckboxField
}

export const Basic = () => ({
  components: { CheckboxField },
  template: '<checkbox-field label="I read and agree to the terms and conditions" name="terms-of-use" value="true"/>'
})

export const Disabled = () => ({
  components: { CheckboxField },
  template: '<checkbox-field label="I read and agree to the terms and conditions" name="terms-of-use" value="true" :disabled="true"/>'
})

export const WithError = () => ({
  components: { CheckboxField },
  template: '<checkbox-field label="I read and agree to the terms and conditions" name="terms-of-use" errorMessage="You need to agree with our terms to continue"/>'
})
