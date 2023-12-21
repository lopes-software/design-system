import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

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
      modelValue: []
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
      modelValue: [1, 3]
    }
    const wrapper = mount(MultiCheckBoxField, { propsData: {...propsData} })
    const components = wrapper.findAllComponents(CheckboxField)
    
    expect(components.at(0).props('label')).toBe('Ruby')
    expect(components.at(0).props('modelValue')).toBe(true)
    expect(components.at(1).props('label')).toBe('JS')
    expect(components.at(1).props('modelValue')).toBe(false)
    expect(components.at(2).props('label')).toBe('Go')
    expect(components.at(2).props('modelValue')).toBe(true)
  })

  describe('handle inputs', () => {
    const options = [{
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
    }]
    it('uncheck if item is checked', async () => {
      const propsData = {
        label: 'Languages',
        options: options,
        modelValue: [1]
      }
      const wrapper = mount(MultiCheckBoxField, { propsData: {...propsData} })
      const rubyCheckbox = wrapper.findAllComponents(CheckboxField).at(0)
      await rubyCheckbox.find('input[type="checkbox"]').setChecked(false)
      expect(wrapper.emitted('update:modelValue', [])).toBeTruthy()
    })

    it('check if item is not selected', async () => {
      const propsData = {
        label: 'Languages',
        options: options,
        modelValue: []
      }
      const wrapper = mount(MultiCheckBoxField, { propsData: {...propsData} })
      const rubyCheckbox = wrapper.findAllComponents(CheckboxField).at(0)
      await rubyCheckbox.find('input[type="checkbox"]').setChecked()
      expect(wrapper.emitted('update:modelValue', [1])).toBeTruthy()
    })
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
        modelValue: [],
        errorMessage: 'Field invalid'
      }

      const wrapper = mount(MultiCheckBoxField, { propsData: { ...propsData } })
      expect(wrapper.find('[data-test="multi-checkbox-field-error-message"]').exists()).toBeTruthy()
      expect(wrapper.find('[data-test="multi-checkbox-field-error-message"]').text()).toBe('Field invalid')
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
        modelValue: [],
      }
      const wrapper = mount(MultiCheckBoxField, { propsData: { ...propsData } })
      expect(wrapper.find('[data-test="multi-checkbox-field-error-message"]').exists()).toBeFalsy()
    })
  })
})
