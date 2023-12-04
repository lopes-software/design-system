import ListPagination from '@/components/ListPagination/ListPagination.vue'

export default {
  title: 'ListPagination',
  component: ListPagination
}

export const Base = () => ({
  components: { ListPagination },
  template: '<list-pagination :totalPages="10" :currentPage="2" />'
})

export const FirstPage = () => ({
  components: { ListPagination },
  template: '<list-pagination :totalPages="10" :currentPage="1" />'
})

export const LastPage = () => ({
  components: { ListPagination },
  template: '<list-pagination :totalPages="10" :currentPage="10" />'
})

export const CustomVisiblePages = () => ({
  components: { ListPagination },
  template: '<list-pagination :totalPages="10" :currentPage="10" :maxVisiblePageButtons="8" />'
})
