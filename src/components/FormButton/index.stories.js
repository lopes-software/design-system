import FormButton from '@/components/FormButton/FormButton.vue'

export default {
  title: 'Form/FormButton',
  component: FormButton
}

export const Primary = () => ({
  components: { FormButton },
  template: '<form-button variant="primary">Save</form-button>'
})

export const PrimaryDisabled = () => ({
  components: { FormButton },
  template: '<form-button variant="primary" disabled>Save</form-button>'
})

export const Secondary = () => ({
  components: { FormButton },
  template: '<form-button variant="secondary">Save</form-button>'
})

export const Alternate = () => ({
  components: { FormButton },
  template: '<form-button variant="alternate">Save</form-button>'
})

export const OutlinePrimary = () => ({
  components: { FormButton },
  template: '<form-button variant="outline-primary">Save</form-button>'
})

export const OutlineSecondary = () => ({
  components: { FormButton },
  template: '<form-button variant="outline-secondary">Save</form-button>'
})
