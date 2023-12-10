import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TextAreaField from '@/components/TextAreaField/TextAreaField.vue'

describe('TextAreaField', () => {
  const label = 'Observation'

  it('renders label received as prop', () => {
    const wrapper = mount(TextAreaField, { propsData: { label } })
    expect(wrapper.find('[data-test="text-area-field-label"]').text()).toMatch('Observation')
  })

  it('emit an input event on input', async () => {
    const wrapper = mount(TextAreaField, { propsData: { label } })
    await wrapper.get('[data-test="text-area-field"]').trigger('input', 'a')
    expect(wrapper.emitted('input')).toBeTruthy()
  })

  describe('errorMessage', () => {
    it('renders error message when errorMessage prop has a value', () => {
      const errorMessage = 'Observation can\'t be blank'
      const wrapper = mount(TextAreaField, { propsData: { label, errorMessage } })
      expect(wrapper.find('[data-test="text-area-field-error-message"]').exists()).toBeTruthy()
      expect(wrapper.find('[data-test="text-area-field-error-message"]').text()).toBe(errorMessage)
    })

    it('don\'t render error message when errorMessage prop is undefined', () => {
      const wrapper = mount(TextAreaField, { propsData: { label } })
      expect(wrapper.find('[data-test="text-area-field-error-message"]').exists()).toBeFalsy()
    })
  })
})
