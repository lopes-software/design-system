import { mount } from '@vue/test-utils'
import InputField from '@/components/InputField/InputField.vue'

describe('InputField', () => {
  const label = 'Age ?'

  it('renders label received as prop', () => {
    const wrapper = mount(InputField, { propsData: { label } })
    expect(wrapper.find('[data-test="input-field-label"]').text()).toMatch('Age ?')
  })

  it('emit an input event on input', async () => {
    const wrapper = mount(InputField, { propsData: { label } })
    wrapper.find('[data-test="input-field-input"]').trigger('input', 'a')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('input')).toBeTruthy()
  })

  describe('errorMessage', () => {
    it('renders error message when errorMessage prop has a value', () => {
      const errorMessage = 'Field name can\'t be blank.'
      const wrapper = mount(InputField, { propsData: { label, errorMessage } })
      expect(wrapper.find('[data-test="input-field-error-message"]').exists()).toBeTruthy()
      expect(wrapper.find('[data-test="input-field-error-message"]').text()).toBe(errorMessage)
    })

    it('don\'t render error message when errorMessage prop is undefined', () => {
      const wrapper = mount(InputField, { propsData: { label } })
      expect(wrapper.find('[data-test="input-field-error-message"]').exists()).toBeFalsy()
    })
  })
})
