import DateField from '@/components/DateField/DateField'

export default {
  title: 'Form/DateField',
  component: DateField
}

export const base = () => ({
  components: { DateField },
  template: '<date-field label="Data de início" />'
})

export const withError = () => ({
  components: { DateField },
  template: '<date-field label="Data" errorMessage="Data é obrigatório" />'
})

export const withValue = () => ({
  components: { DateField },
  template: '<date-field label="Data" value="10/10/2010" />'
})

export const dateTimeFormat = () => ({
  components: { DateField },
  template: '<date-field label="Data" type="datetime" />'
})

export const dateTimeWithValue = () => ({
  components: { DateField },
  template: '<date-field label="Data" type="datetime" value="31/10/2010 18:03" />'
})

export const disable = () => ({
  components: { DateField },
  template: '<date-field label="Data" value="10/10/2010" :disabled="true" />'
})
