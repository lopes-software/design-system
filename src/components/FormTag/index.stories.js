import FormTag from '@/components/FormTag/FormTag.vue'

export default {
  title: 'Form/FormTag',
  component: FormTag
}

export const basic = () => ({
  components: { FormTag },
  template: '<form-tag>Basic</form-tag>'
})

export const secondary = () => ({
  components: { FormTag },
  template: '<form-tag variant=\'secondary\'>Secondary</form-tag>'
})

export const closable = () => ({
  components: { FormTag },
  template: '<form-tag variant=\'secondary\' :closable=\'true\'>Secondary</form-tag>'
})

export const basicAndClosable = () => ({
  components: { FormTag },
  template: '<form-tag :closable=\'true\'>Secondary</form-tag>'
})
