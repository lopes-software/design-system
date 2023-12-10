import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import TableItems from '@/components/TableItems/TableItems.vue'

describe('TableItems', () => {
  const fields = ['Name', 'Age']
  const items = [
    {
      name: 'Asuka',
      age: 20,
    },
    {
      name: 'Rei',
      age: 19,
    }
  ]

  it('renders all given rows', () => {
    const wrapper = shallowMount(TableItems, { propsData: { fields, items }})
    expect(wrapper.findAll('[data-test="table-items-row"]').length).toEqual(2)
  })

  it('renders number column when prop is received', () => {
    const wrapper = shallowMount(TableItems, { propsData: { fields, items, hasRowNumber: true }})
    expect(wrapper.findAll('[data-test="table-items-number-row"]').length).toEqual(2)
  })

  it('do not render number column by default', () => {
    const wrapper = shallowMount(TableItems, { propsData: { fields, items }})
    expect(wrapper.findAll('[data-test="table-items-number-row"]').length).toEqual(0)
  })

  it('renders all object columns', () => {
    const wrapper = shallowMount(TableItems, { propsData: { fields, items }})
    expect(wrapper.find('[data-test="table-items-column-name"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="table-items-column-age"]').exists()).toBeTruthy()
  })

  it('renders the given values', () => {
    const wrapper = shallowMount(TableItems, { propsData: { fields, items }})
    const nameCells = wrapper.findAll('[data-test="table-items-column-name"]')
    const ageCells = wrapper.findAll('[data-test="table-items-column-age"]')

    expect(nameCells.at(0).text()).toMatch('Asuka')
    expect(nameCells.at(1).text()).toMatch('Rei')
    expect(ageCells.at(0).text()).toMatch('20')
    expect(ageCells.at(1).text()).toMatch('19')
  })
})
