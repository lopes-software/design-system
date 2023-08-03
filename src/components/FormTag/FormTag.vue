<template>
  <span
    class="form-tag"
    :class="variantClasses"
    data-test="form-tag"
  >
    <button
      v-if="closable"
      type="button"
      class="btn-close"
      :class="closeClasses"
      aria-label="Close"
      data-test="form-tag-close-button"
      @click="$emit('tag', value)"
    />
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    value: {
      require: true,
      type: String
    },

    variant: {
      type: String,
      default: 'basic'
    },

    closable: {
      type: Boolean,
      default: false
    },

    dataTest: {
      type: String,
      default: 'form-tag'
    }
  },

  computed: {
    variantClasses () {
      return `form-tag__${this.variant}`
    },
    closeClasses () {
      return this.variant === 'basic' ? 'btn-close' : 'btn-close-white'
    }

  }
}
</script>

<style scoped lang="scss">
@import '@/styles/constants.scss';

  .form-tag {
    font-weight: medium;
    padding: 7px 20px;
    border-radius: 40px;
    font-size: .8rem;
    display: inline-flex;
    margin-right:auto;
    text-align: center;

    &__basic {
      color: $gray-color;
      background-color: #E4E6EF;
    }

    &__primary {
      color: white;
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
  }

  .btn-close {
    margin-right: 10px;
  }
</style>
