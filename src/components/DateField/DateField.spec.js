import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import DateField from '@/components/DateField/DateField.vue'
import DatePicker from 'vue-datepicker-next';

vi.mock('vue-datepicker-next/index.css')

describe('DateField', () => {
  const label = 'Start at ?'
  it('renders label received as prop', () => {
    const wrapper = mount(DateField, { propsData: { label } })
    expect(wrapper.find('[data-test="date-field-label"]').text()).toMatch('Start at ?')
  })

  it('emit update event', async () => {
    const wrapper = mount(DateField, { propsData: { label, value: '30/10/2023 10:50', type: 'datetime' } })
    const datePicker = wrapper.findComponent(DatePicker)
    datePicker.find('input').setValue('31/10/2023')
    
    expect(wrapper.emitted('input', '31/10/2023')).toBeTruthy()
  })

  describe('errorMessage', () => {
    it('renders error message when errorMessage prop has a value', () => {
      const errorMessage = 'Start at can\'t be blank.'
      const wrapper = mount(DateField, { propsData: { label, errorMessage } })
      expect(wrapper.find('[data-test="date-field-error-message"]').exists()).toBeTruthy()
      expect(wrapper.find('[data-test="date-field-error-message"]').text()).toBe(errorMessage)
    })

    it('don\'t render error message when errorMessage prop is undefined', () => {
      const wrapper = mount(DateField, { propsData: { label } })
      expect(wrapper.find('[data-test="date-field-error-message"]').exists()).toBeFalsy()
    })
  })

  describe('when type prop is date', () => {
    it('component value is formatted to a date', () => {
      const wrapper = mount(DateField, { propsData: { label, value: '30/10/2023 10:50' } })
      const datePicker = wrapper.findComponent(DatePicker)
      expect(datePicker.find('input').element.value).toEqual('30/10/2023')
    })
  })

  describe('when type prop is date time', () => {
    it('component value is formatted to a date', () => {
      const wrapper = mount(DateField, { propsData: { label, value: '30/10/2023 10:50', type: 'datetime' } })
      const datePicker = wrapper.findComponent(DatePicker)
      expect(datePicker.find('input').element.value).toEqual('30/10/2023 10:50')
    })
  })
})
