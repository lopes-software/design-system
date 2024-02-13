export default {
  install: (app) => {
    Object.keys(components).forEach(name => {
      app.component(components[name])
    })
  }
}

export { default as DsFormButton } from '@/components/FormButton/FormButton.vue'
export { default as DsAnsweredField } from '@/components/AnsweredField/AnsweredField.vue'
export { default as DsCheckboxField } from '@/components/CheckboxField/CheckboxField.vue'
export { default as DsDateField } from '@/components/DateField/DateField.vue'
export { default as DsFormSession } from '@/components/FormSession/FormSession.vue'
export { default as DsFormTag } from '@/components/FormTag/FormTag.vue'
export { default as DsInputField } from '@/components/InputField/InputField.vue'
export { default as DsSelectField } from '@/components/SelectField/SelectField.vue'
export { default as DsTagSelector } from '@/components/TagSelector/TagSelector.vue'
export { default as DsTextAreaField } from '@/components/TextAreaField/TextAreaField.vue'
export { default as DsModalDialog } from '@/components/ModalDialog/ModalDialog.vue'
export { default as DsListPagination } from '@/components/ListPagination/ListPagination.vue'
export { default as DsTableItems } from '@/components/TableItems/TableItems.vue'
export { default as DsMultiCheckboxField } from '@/components/MultiCheckboxField/MultiCheckboxField.vue'
