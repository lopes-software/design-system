import FormButton from '@/components/FormButton/FormButton.vue'
import AnsweredField from '@/components/AnsweredField/AnsweredField.vue'
import CheckboxField from '@/components/CheckboxField/CheckboxField.vue'
import DateField from '@/components/DateField/DateField.vue'
import FormSession from '@/components/FormSession/FormSession.vue'
import FormTag from '@/components/FormTag/FormTag.vue'
import InputField from '@/components/InputField/InputField.vue'
import SelectField from '@/components/SelectField/SelectField.vue'
import TagSelector from '@/components/TagSelector/TagSelector.vue'
import TextAreaField from '@/components/TextAreaField/TextAreaField.vue'
import ModalDialog from '@/components/ModalDialog/ModalDialog.vue'
import ListPagination from '@/components/ListPagination/ListPagination.vue'
import TableItems from '@/components/TableItems/TableItems.vue'
import MultiCheckboxField from '@/components/MultiCheckboxField/MultiCheckboxField.vue'

const components = {
  DsFormButton: FormButton,
  DsAnsweredField: AnsweredField,
  DsCheckboxField: CheckboxField,
  DsDateField: DateField,
  DsFormSession: FormSession,
  DsFormTag: FormTag,
  DsInputField: InputField,
  DsSelectField: SelectField,
  DsTagSelector: TagSelector,
  DsTextAreaField: TextAreaField,
  DsModalDialog: ModalDialog,
  DsListPagination: ListPagination,
  DsTableItems: TableItems,
  DsMultiCheckboxField: MultiCheckboxField,
}

export { components }

export default {
  install: (app) => {
    Object.keys(components).forEach(name => {
      app.component(components[name])
    })
  }
}
