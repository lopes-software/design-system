import DateField from '@/components/DateField/DateField.vue'

export default {
  title: 'Form/DateField',
  component: DateField
}

export const Base = () => ({
  components: { DateField },
  template: '<date-field label="Data de início" />'
})

export const WithError = () => ({
  components: { DateField },
  template: '<date-field label="Data" errorMessage="Data é obrigatório" />'
})

export const WithValue = () => ({
  components: { DateField },
  template: '<date-field label="Data" value="10/10/2010" />'
})

export const DateTimeFormat = () => ({
  components: { DateField },
  template: '<date-field label="Data" type="datetime" />'
})

export const DateTimeWithValue = () => ({
  components: { DateField },
  template: '<date-field label="Data" type="datetime" value="31/10/2010 18:03" />'
})

export const Disable = () => ({
  components: { DateField },
  template: '<date-field label="Data" value="10/10/2010" :disabled="true" />'
})
