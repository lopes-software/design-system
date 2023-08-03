import CheckboxField from '@/components/CheckboxField/CheckboxField.vue'

export default {
  title: 'Form/CheckboxField',
  component: CheckboxField
}

export const basic = () => ({
  components: { CheckboxField },
  template: '<checkbox-field label="I read and agree to the terms and conditions" name="terms-of-use" value="true"/>'
})

export const disabled = () => ({
  components: { CheckboxField },
  template: '<checkbox-field label="I read and agree to the terms and conditions" name="terms-of-use" value="true" :disabled="true"/>'
})

export const withError = () => ({
  components: { CheckboxField },
  template: '<checkbox-field label="I read and agree to the terms and conditions" name="terms-of-use" errorMessage="You need to agree with our terms to continue"/>'
})
