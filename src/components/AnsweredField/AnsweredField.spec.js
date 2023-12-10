import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import AnsweredField from '@/components/AnsweredField/AnsweredField.vue'

describe('AnsweredField', () => {
  it('renders a disabled input with received label and value', () => {
    const wrapper = shallowMount(AnsweredField, { propsData: { label: 'Name', value: 'Frodo' } })
    expect(wrapper.find('[data-test="answered-field-label"]').text()).toBe('Name')
    expect(wrapper.find('[data-test="answered-field-value"]').element.value).toBe('Frodo')
    expect(Object.keys(wrapper.find('input').attributes())).toContain('disabled')
  })

  it('renders a disabled input with number values', () => {
    const wrapper = shallowMount(AnsweredField, { propsData: { label: 'Age', value: 50 } })
    expect(wrapper.find('[data-test="answered-field-label"]').text()).toBe('Age')
    expect(wrapper.find('[data-test="answered-field-value"]').element.value).toBe(50)
    expect(Object.keys(wrapper.find('input').attributes())).toContain('disabled')
  })
})
