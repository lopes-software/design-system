import { shallowMount } from '@vue/test-utils'

import FormTag from '@/components/FormTag/FormTag.vue'

describe('FormButton', () => {
  it('set class form-tag__primary when receive primary variant', () => {
    const wrapper = shallowMount(FormTag, { propsData: { variant: 'primary' } })
    expect(wrapper.find('[data-test="form-tag"]').classes()).toContain('form-tag__primary')
  })

  it('set class form-tag__secondary when receive secondary variant', () => {
    const wrapper = shallowMount(FormTag, { propsData: { variant: 'secondary' } })
    expect(wrapper.find('[data-test="form-tag"]').classes()).toContain('form-tag__secondary')
  })

  it('set class form-tag__basic when receive basic variant', () => {
    const wrapper = shallowMount(FormTag, { propsData: { variant: 'basic' } })
    expect(wrapper.find('[data-test="form-tag"]').classes()).toContain('form-tag__basic')
  })

  describe('closeButton', () => {
    it('renders close button when receive closable as prop', () => {
      const closable = true
      const wrapper = shallowMount(FormTag, { propsData: { closable } })
      expect(wrapper.find('[data-test="form-tag-close-button"]').exists()).toBeTruthy()
    })

    it('don\'t render close button when closable prop is not received', () => {
      const propsData = { closable: false }
      const wrapper = shallowMount(FormTag, { propsData })
      expect(wrapper.find('[data-test="form-tag-close-button"]').exists()).toBeFalsy()
    })

    it('set class btn-close-white when receive basic variant', () => {
      const propsData = { variant: 'basic', closable: true }
      const wrapper = shallowMount(FormTag, { propsData })
      expect(wrapper.find('[data-test="form-tag-close-button"]').classes()).toContain('btn-close')
    })

    it('set class btn-close-white when receive basic variant', () => {
      const propsData = { variant: 'primary', closable: true }
      const wrapper = shallowMount(FormTag, { propsData })
      expect(wrapper.find('[data-test="form-tag-close-button"]').classes()).toContain('btn-close-white')
    })

    it('emit an click event on click', async () => {
      const propsData = { variant: 'primary', closable: true }
      const wrapper = shallowMount(FormTag, { propsData })

      wrapper.find('[data-test="form-tag-close-button"]').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('tag')).toBeTruthy()
    })
  })
})
