import ListPagination from '@/components/ListPagination/ListPagination.vue'

export default {
  title: 'ListPagination',
  component: ListPagination
}

export const base = () => ({
  components: { ListPagination },
  template: '<list-pagination :totalPages="10" :currentPage="2" />'
})

export const firstPage = () => ({
  components: { ListPagination },
  template: '<list-pagination :totalPages="10" :currentPage="1" />'
})

export const lastPage = () => ({
  components: { ListPagination },
  template: '<list-pagination :totalPages="10" :currentPage="10" />'
})

export const customVisiblePages = () => ({
  components: { ListPagination },
  template: '<list-pagination :totalPages="10" :currentPage="10" :maxVisiblePageButtons="8" />'
})
