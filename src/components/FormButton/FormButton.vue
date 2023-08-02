<template>
  <button
    class="btn"
    :class="cssClasses"
    data-test="form-button"
    @click="(event) => $emit('click', event.target.value)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      require: true
    }
  },

  computed: {
    cssClasses () {
      return `form-button__${this.variant}`
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/constants.scss';

  .form-button {
    font-weight: bold;

    &__primary {
      color: white !important;
      background-color: $primary-color !important;
      &:hover {
        background-color: $primary-dark-color !important;
      }
      &:disabled {
        color: rgba($color: white, $alpha: 0.6);
      }
    }

    &__secondary {
      color: white !important;
      background-color: $secondary-color !important;
      &:hover {
        background-color: $secondary-dark-color !important;
      }
      &:disabled {
        color: rgba($color: white, $alpha: 0.6);
      }
    }

    &__danger {
      color: white !important;
      background-color: $danger-color !important;
      &:hover {
        background-color: $danger-dark-color !important;
      }
      &:disabled {
        color: rgba($color: white, $alpha: 0.6);
      }
    }

    &__alternate {
      color: black !important;
      background-color: transparent !important;
      border: 1px solid $gray-light-color !important;
      &:hover {
        border: 1px solid $gray-dark-color !important;
      }
      &:disabled {
        color: rgba($color: white, $alpha: 0.6);
      }
    }

    &__outline-primary {
      color: #91C332 !important;
      background-color: transparent !important;
      border: 1px solid $primary-color !important;
      &:hover {
        border: 1px solid $primary-dark-color !important;
      }
      &:disabled {
        color: rgba($color: white, $alpha: 0.6);
      }
    }

    &__outline-secondary {
      color: $secondary-color !important;
      background-color: transparent !important;
      border: 1px solid $secondary-dark-color !important;
      &:hover {
        border: 1px solid $secondary-color !important;
      }
      &:disabled {
        color: rgba($color: white, $alpha: 0.6);
      }
    }

    &__outline-danger {
      color: $danger-color !important;
      background-color: transparent !important;
      border: 1px solid $danger-dark-color !important;
      &:hover {
        border: 1px solid $danger-color !important;
      }
      &:disabled {
        color: rgba($color: white, $alpha: 0.6);
      }
    }

  }
</style>
