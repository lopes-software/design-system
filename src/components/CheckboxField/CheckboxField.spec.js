import { shallowMount } from '@vue/test-utils'
import CheckboxField from '@/components/CheckboxField/CheckboxField.vue'

describe('CheckboxField', () => {
  const label = 'Are you sure?'
  const name = 'sure'

  it('render label received as prop', () => {
    const wrapper = shallowMount(CheckboxField, { propsData: { label, name } })
    expect(wrapper.find('[data-test="checkbox-field-label"]').text()).toMatch(label)
  })

  it('emit an checked event on check', async () => {
    const wrapper = shallowMount(CheckboxField, { propsData: { label, name } })
    wrapper.find('[data-test="checkbox-field-input"]').trigger('change', true)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('input')).toBeTruthy()
  })

  describe('errorMessage', () => {
    it('renders error message when errorMessage prop has a value', () => {
      const errorMessage = 'You have to check.'
      const wrapper = shallowMount(CheckboxField, { propsData: { label, name, errorMessage } })
      expect(wrapper.find('[data-test="checkbox-field-error-message"]').exists()).toBeTruthy()
      expect(wrapper.find('[data-test="checkbox-field-error-message"]').text()).toBe(errorMessage)
    })

    it('don\'t render error message when errorMessage prop is undefined', () => {
      const wrapper = shallowMount(CheckboxField, { propsData: { label, name } })
      expect(wrapper.find('[data-test="checkbox-field-error-message"]').exists()).toBeFalsy()
    })
  })
})
