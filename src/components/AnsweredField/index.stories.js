import AnsweredField from '@/components/AnsweredField/AnsweredField.vue'

export default {
  title: 'Form/AnsweredField',
  component: AnsweredField
}

export const Basic = () => ({
  components: { AnsweredField },
  template: '<answered-field label="Name" value="Asuka Langley Soriyu" />'
})
