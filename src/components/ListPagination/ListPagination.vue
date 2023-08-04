<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li
        v-if="!isInFirstPage"
        class="page-item previous"
        @click="onClickPreviousPage"
        data-test="pagination-previous-button"
        >
        <i class="bi bi-chevron-left" />
      </li>

      <li
        v-for="page in pages"
        :key="page.number"
        :class="{ active: active(page.number)}"
        class="page-item"
        @click="onClickPage(page.number)"
        data-test="pagination-button"
      >
        {{ page.number }}
      </li>

      <li
        class="page-item next"
        v-if="!isInLastPage"
        @click="onClickNextPage"
        data-test="pagination-next-button"
      ><i class="bi bi-chevron-right" /></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    maxVisiblePageButtons: {
      type: Number,
      default: 5
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },

  computed: {
    startPage () {
      if (this.currentPage === 1) return 1

      if (this.currentPage === this.totalPages) return Math.abs(this.totalPages - this.maxVisiblePageButtons)

      return this.currentPage - 1
    },
    pages () {
      const range = []
      const pageButtonAmount = Math.min(this.startPage + this.maxVisiblePageButtons - 1, this.totalPages)

      for (let i = this.startPage; i <= pageButtonAmount; i++) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage
        })
      }

      return range
    },
    isInFirstPage () {
      return this.currentPage === 1
    },
    isInLastPage () {
      return this.currentPage === this.totalPages
    }
  },

  methods: {
    active (pageNumber) {
      return this.currentPage === pageNumber
    },
    onClickPreviousPage () {
      this.$emit('changed', this.currentPage - 1)
    },
    onClickNextPage () {
      this.$emit('changed', this.currentPage + 1)
    },
    onClickPage (page) {
      this.$emit('changed', page)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/styles/constants.scss';

  .page-item {
    padding: .375rem .75rem;
    margin-right: 15px;
    color: #A4A5B2;
    cursor: pointer;

    background: #FFFFFF;
    box-shadow: 0px 1px 4px #E5E9F2;
    border-radius: 5px;
  }

  .page-item.active,
  .page-item.previous:not(.disabled),
  .page-item.next:not(.disabled) {
    color: $secondary-color;
  }

  .page-item.disabled {
    background-color: darken($color: #FFFFFF, $amount: 5%);
    cursor: not-allowed;
  }
</style>
