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


export default {
  install: (app) => {
    Object.keys(components).forEach(name => {
      app.component(components[name])
    })
  }
}

export {default as DsFormButton } from '@/components/FormButton/FormButton.vue'
export {default as DsAnsweredField } from '@/components/AnsweredField/AnsweredField.vue'
export {default as DsCheckboxField } from '@/components/CheckboxField/CheckboxField.vue'
export {default as DsDateField } from '@/components/DateField/DateField.vue'
export {default as DsFormSession } from '@/components/FormSession/FormSession.vue'
export {default as DsFormTag } from '@/components/FormTag/FormTag.vue'
export {default as DsInputField } from '@/components/InputField/InputField.vue'
export {default as DsSelectField } from '@/components/SelectField/SelectField.vue'
export {default as DsTagSelector } from '@/components/TagSelector/TagSelector.vue'
export {default as DsTextAreaField } from '@/components/TextAreaField/TextAreaField.vue'
export {default as DsModalDialog } from '@/components/ModalDialog/ModalDialog.vue'
export {default as DsListPagination } from '@/components/ListPagination/ListPagination.vue'
export {default as DsTableItems } from '@/components/TableItems/TableItems.vue'
export {default as DsMultiCheckboxField } from '@/components/MultiCheckboxField/MultiCheckboxField.vue'
