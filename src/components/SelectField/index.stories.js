import SelectField from '@/components/SelectField/SelectField.vue'

export default {
  title: 'Form/SelectField',
  component: SelectField
}

export const primary = () => ({
  components: { SelectField },
  template: '<select-field :options="[{label: \'Ruby\', value: \'42\'}]" label="Best programing language" />'
})

export const rounded = () => ({
  components: { SelectField },
  template: '<select-field variant="rounded" :options="[{label: \'Ruby\', value: \'42\'}]" label="Best programing language" />'
})
