import FormButton from '@/components/FormButton/FormButton.vue'

export default {
  title: 'Form/FormButton',
  component: FormButton
}

export const primary = () => ({
  components: { FormButton },
  template: '<form-button variant="primary">Save</form-button>'
})

export const primaryDisabled = () => ({
  components: { FormButton },
  template: '<form-button variant="primary" disabled>Save</form-button>'
})

export const secondary = () => ({
  components: { FormButton },
  template: '<form-button variant="secondary">Save</form-button>'
})

export const alternate = () => ({
  components: { FormButton },
  template: '<form-button variant="alternate">Save</form-button>'
})

export const outlinePrimary = () => ({
  components: { FormButton },
  template: '<form-button variant="outline-primary">Save</form-button>'
})

export const outlineSecondary = () => ({
  components: { FormButton },
  template: '<form-button variant="outline-secondary">Save</form-button>'
})
