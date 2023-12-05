import { mount } from "@vue/test-utils"
import MultiCheckBoxField from '@/components/MultiCheckboxField/MultiCheckboxField.vue'
import CheckboxField from '@/components/CheckboxField/CheckboxField.vue'

describe('MultiCheckboxField', () => {
  it('renders all received options', () => {
    const propsData = {
      label: 'Languages',
      options: [{
        value: 1,
        label: 'Ruby'
      },
      {
        value: 2,
        label: 'JS',
      },
      {
        value: 3,
        label: 'Go'
      }],
      value: []
    }
    const wrapper = mount(MultiCheckBoxField, { propsData: {...propsData} })
    expect(wrapper.findAllComponents(CheckboxField)).toHaveLength(3)
  })

  it('check options received on value prop', () => {
    const propsData = {
      label: 'Languages',
      options: [{
        value: 1,
        label: 'Ruby'
      },
      {
        value: 2,
        label: 'JS',
      },
      {
        value: 3,
        label: 'Go'
      }],
      value: [1, 3]
    }
    const wrapper = mount(MultiCheckBoxField, { propsData: {...propsData} })
    const components = wrapper.findAllComponents(CheckboxField)
    expect(components.at(0).attributes('label')).toBe("Ruby")
    expect(components.at(0).attributes('value')).toBe("true")
    expect(components.at(1).attributes('label')).toBe("JS")
    expect(components.at(1).attributes('value')).toBe(undefined)
    expect(components.at(2).attributes('label')).toBe("Go")
    expect(components.at(2).attributes('value')).toBe("true")
  })

  describe('error message', () => {
    
    it('renders error message when errorMessage prop has a value', () => {
      const propsData = {
        label: 'Languages',
        options: [{
          value: 1,
          label: 'Ruby'
        },
        {
          value: 2,
          label: 'JS',
        },
        {
          value: 3,
          label: 'Go'
        }],
        value: [],
        errorMessage: 'Field invalid'
      }

      const wrapper = mount(MultiCheckBoxField, { propsData: { ...propsData } })
      expect(wrapper.find('[data-test="multi-checkbox-field-error-message"]').exists()).toBeTruthy()
      expect(wrapper.find('[data-test="multi-checkbox-field-error-message"]').text()).toBe("Field invalid")
    })

    it('don\'t render error message when errorMessage prop is undefined', () => {
      const propsData = {
        label: 'Languages',
        options: [{
          value: 1,
          label: 'Ruby'
        },
        {
          value: 2,
          label: 'JS',
        },
        {
          value: 3,
          label: 'Go'
        }],
        value: [],
      }
      const wrapper = mount(MultiCheckBoxField, { propsData: { ...propsData } })
      expect(wrapper.find('[data-test="multi-checkbox-field-error-message"]').exists()).toBeFalsy()
    })
  })
  
})
