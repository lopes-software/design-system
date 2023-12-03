import AnsweredField from '@/components/AnsweredField/AnsweredField.vue'

export default {
  title: 'Form/AnsweredField',
  component: AnsweredField
}

export const basic = () => ({
  components: { AnsweredField },
  template: '<answered-field label="Name" value="Asuka Langley Soriyu" />'
})
