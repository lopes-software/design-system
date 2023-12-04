import ModalDialog from '@/components/ModalDialog/ModalDialog.vue'

export default {
  title: 'ModalDialog',
  component: ModalDialog
}

export const Base = () => ({
  components: { ModalDialog },
  template: `<modal-dialog title="Some basic title" :show="true">
    <template v-slot:content> A basic example of modal content.</template>
  </modal-dialog>`
})

export const WithFooter = () => ({
  components: { ModalDialog },
  template: `<modal-dialog title="Some basic title" :show="true">
    <template v-slot:content> A basic example of modal content.</template>
    <template v-slot:footer> <b>Also a example, but of a footer this time</b></template>
  </modal-dialog>`
})

export const Hidden = () => ({
  components: { ModalDialog },
  template: `<modal-dialog title="Some basic title" :show="false">
    <template v-slot:content> A basic example of modal content.</template>
  </modal-dialog>`
})
