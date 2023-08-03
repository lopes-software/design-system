import { mount } from '@vue/test-utils'
import DateField from '@/components/DateField/DateField.vue'

describe('DateField', () => {
  const label = 'Start at ?'

  it('renders label received as prop', () => {
    const wrapper = mount(DateField, { propsData: { label } })
    expect(wrapper.find('[data-test="date-field-label"]').text()).toMatch('Start at ?')
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
})
