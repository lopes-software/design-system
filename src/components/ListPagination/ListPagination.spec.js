import { shallowMount } from '@vue/test-utils'

import ListPagination from '@/components/ListPagination/ListPagination.vue'

describe('ListPagination', () => {
  it('renders next page button', () => {
    const wrapper = shallowMount(ListPagination, { propsData: { totalPages: 10, currentPage: 1 } })
    expect(wrapper.find('[data-test="pagination-next-button"]').exists()).toBeTruthy()
  })

  it('renders previous page button', () => {
    const wrapper = shallowMount(ListPagination, { propsData: { totalPages: 10, currentPage: 2 } })
    expect(wrapper.find('[data-test="pagination-previous-button"]').exists()).toBeTruthy()
  })

  it('renders the max amount of buttons received as prop', () => {
    const wrapper = shallowMount(ListPagination, { propsData: { totalPages: 10, currentPage: 1, maxVisiblePageButtons: 8 } })
    expect(wrapper.findAll('[data-test="pagination-button"]')).toHaveLength(8)
  })

  it('renders the last five pages on last page', () => {
    const wrapper = shallowMount(ListPagination, { propsData: { totalPages: 10, currentPage: 10 } })
    expect(wrapper.findAll('[data-test="pagination-button"]')).toHaveLength(5)
  })

  describe('emit events', () => {
    const wrapper = shallowMount(ListPagination, { propsData: { totalPages: 10, currentPage: 2 } })

    it('emit an click event on previous page click', async () => {
      wrapper.find('[data-test="pagination-previous-button"]').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('changed')).toBeTruthy()
    })

    it('emit an click event on next page click', async () => {
      wrapper.find('[data-test="pagination-next-button"]').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('changed')).toBeTruthy()
    })

    it('emit an click event on next click', async () => {
      wrapper.find('[data-test="pagination-button"]').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('changed')).toBeTruthy()
    })
  })
})
