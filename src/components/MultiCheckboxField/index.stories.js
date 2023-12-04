import MultiCheckboxField from '@/components/MultiCheckboxField/MultiCheckboxField.vue'

export default {
  title: 'Form/MultiCheckboxField',
  component: MultiCheckboxField
}

const options = [
  {
    value: 1,
    label: 'Ruby'
  },
  {
    value: 2,
    label: 'JS',
  },
  {
    value: 3,
    label: 'Go'
  }
]
export const Base = () => ({
  components: { MultiCheckboxField },
  data () {
    return { 
      value: [1,2],
      options: options,
    }
  },
  template: `<main> <multi-checkbox-field label="Languages" name="languages" :options=options v-model="value" /> {{ value }}</main>`,
})

export const WithError = () => ({
  components: { MultiCheckboxField },
  data () {
    return { 
      value: [],
      options: options,
    }
  },
  template: `<multi-checkbox-field label="Languages" name="languages" :options=options v-model="value" errorMessage="Cannot be blank" />`,
})
