import FormTag from '@/components/FormTag/FormTag.vue'

export default {
  title: 'Form/FormTag',
  component: FormTag
}

export const Basic = () => ({
  components: { FormTag },
  template: '<form-tag>Basic</form-tag>'
})

export const Secondary = () => ({
  components: { FormTag },
  template: '<form-tag variant=\'secondary\'>Secondary</form-tag>'
})

export const Closable = () => ({
  components: { FormTag },
  template: '<form-tag variant=\'secondary\' :closable=\'true\'>Secondary</form-tag>'
})

export const BasicAndClosable = () => ({
  components: { FormTag },
  template: '<form-tag :closable=\'true\'>Secondary</form-tag>'
})
