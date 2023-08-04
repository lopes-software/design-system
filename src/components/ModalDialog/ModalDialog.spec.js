import { shallowMount } from '@vue/test-utils'

jest.mock('bootstrap/dist/css/bootstrap.min.css', () => '')
import ModalDialog from '@/components/ModalDialog/ModalDialog.vue'

function modalDialogFactory (params = {}) {
  const propsData = {
    title: params.title || 'Modal',
    show: params.show || true,
    size: params.size || 'medium'
  }
  return shallowMount(ModalDialog, { propsData })
}

describe('ModalDialog', () => {
  it('render default title', () => {
    const wrapper = modalDialogFactory()
    expect(wrapper.find('[data-test="modal-dialog-background-title"]').text()).toBe('Modal')
  })

  describe('emit close events on', () => {
    it('click in close button', async () => {
      const wrapper = modalDialogFactory()
      wrapper.find('[data-test="modal-dialog-background"]').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('modal-close')).toBeTruthy()
    })

    it('click in modal background', async () => {
      const wrapper = modalDialogFactory()
      wrapper.find('[data-test="modal-dialog-close-button"]').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('modal-close')).toBeTruthy()
    })
  })

  describe('size', () => {
    it('set class modal-dialog when don\'t receive a value', () => {
      const wrapper = modalDialogFactory({ size: null })
      expect(wrapper.find('[data-test="modal-content"]').classes()).toContain('modal-dialog')
    })

    it('set class modal-dialog when receive medium value', () => {
      const wrapper = modalDialogFactory({ size: 'medium' })
      expect(wrapper.find('[data-test="modal-content"]').classes()).toContain('modal-dialog')
    })

    it('set class modal-large when receive "large" value', () => {
      const wrapper = modalDialogFactory({ size: 'large' })
      expect(wrapper.find('[data-test="modal-content"]').classes()).toContain("col-6")
      expect(wrapper.find('[data-test="modal-content"]').classes()).toContain("offset-3")
      expect(wrapper.find('[data-test="modal-content"]').classes()).toContain("mt-5")
    })
  })
})
