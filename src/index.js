import { default as DsFormButton } from '@/components/FormButton/FormButton.vue'
import { default as DsAnsweredField } from '@/components/AnsweredField/AnsweredField.vue'
import { default as DsCheckboxField } from '@/components/CheckboxField/CheckboxField.vue'
import { default as DsDateField } from '@/components/DateField/DateField.vue'
import { default as DsFormSession } from '@/components/FormSession/FormSession.vue'
import { default as DsFormTag } from '@/components/FormTag/FormTag.vue'
import { default as DsInputField } from '@/components/InputField/InputField.vue'
import { default as DsSelectField } from '@/components/SelectField/SelectField.vue'
import { default as DsTagSelector } from '@/components/TagSelector/TagSelector.vue'
import { default as DsTextAreaField } from '@/components/TextAreaField/TextAreaField.vue'
import { default as DsModalDialog } from '@/components/ModalDialog/ModalDialog.vue'
import { default as DsListPagination } from '@/components/ListPagination/ListPagination.vue'
import { default as DsTableItems } from '@/components/TableItems/TableItems.vue'
import { default as DsMultiCheckboxField } from '@/components/MultiCheckboxField/MultiCheckboxField.vue'

const components = {
  DsFormButton,
  DsAnsweredField,
  DsCheckboxField,
  DsDateField,
  DsFormSession,
  DsFormTag,
  DsInputField,
  DsSelectField,
  DsTagSelector,
  DsTextAreaField,
  DsModalDialog,
  DsListPagination,
  DsTableItems,
  DsMultiCheckboxField,
}

export default {
  install: (app) => {
    Object.keys(components).forEach(name => {
      app.component(components[name])
    })
  }
}

export {
  DsFormButton,
  DsAnsweredField,
  DsCheckboxField,
  DsDateField,
  DsFormSession,
  DsFormTag,
  DsInputField,
  DsSelectField,
  DsTagSelector,
  DsTextAreaField,
  DsModalDialog,
  DsListPagination,
  DsTableItems,
  DsMultiCheckboxField,
}
