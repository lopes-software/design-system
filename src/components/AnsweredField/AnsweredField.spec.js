import AnsweredField from '@/components/AnsweredField/AnsweredField'
import { shallowMount } from '@vue/test-utils'

describe('AnsweredField', () => {
  it('renders a disabled input with received label and value', () => {
    const wrapper = shallowMount(AnsweredField, { propsData: { label: 'Name', value: 'Frodo' } })
    expect(wrapper.find('[data-test="answered-field-label"]').text()).toBe('Name')
    expect(wrapper.find('[data-test="answered-field-value"]').element.value).toBe('Frodo')
    expect(wrapper.find('input').attributes().disabled).toBe('disabled')
  })

  it('renders a disabled input with number values', () => {
    const wrapper = shallowMount(AnsweredField, { propsData: { label: 'Age', value: 50 } })
    expect(wrapper.find('[data-test="answered-field-label"]').text()).toBe('Age')
    expect(wrapper.find('[data-test="answered-field-value"]').element.value).toBe('50')
    expect(wrapper.find('input').attributes().disabled).toBe('disabled')
  })
})
