import { shallowMount } from '@vue/test-utils'
import FormButton from '@/components/FormButton/FormButton.vue'

describe('FormButton', () => {
  it('set class form-button__primary when receive variant primary', () => {
    const wrapper = shallowMount(FormButton, { propsData: { variant: 'primary' } })
    expect(wrapper.find('[data-test="form-button"]').classes()).toContain('form-button__primary')
  })

  it('set class form-button__secondary when receive variant secondary', () => {
    const wrapper = shallowMount(FormButton, { propsData: { variant: 'secondary' } })
    expect(wrapper.find('[data-test="form-button"]').classes()).toContain('form-button__secondary')
  })

  it('set class form-button__alternate when receive variant alternate', () => {
    const wrapper = shallowMount(FormButton, { propsData: { variant: 'alternate' } })
    expect(wrapper.find('[data-test="form-button"]').classes()).toContain('form-button__alternate')
  })

  it('set class form-button__outline-primary when receive variant outline-primary', () => {
    const wrapper = shallowMount(FormButton, { propsData: { variant: 'outline-primary' } })
    expect(wrapper.find('[data-test="form-button"]').classes()).toContain('form-button__outline-primary')
  })

  it('set class form-button__outline-secondary when receive variant outline-secondary', () => {
    const wrapper = shallowMount(FormButton, { propsData: { variant: 'outline-secondary' } })
    expect(wrapper.find('[data-test="form-button"]').classes()).toContain('form-button__outline-secondary')
  })
})
