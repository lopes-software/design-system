<template>
  <div class="modal fade" :class="[{active: show}, {show: show}]" tabindex="-1" role="dialog" @click.self="close" data-test="modal-dialog-background">
    <div :class="largeClasses" role="document" data-test="modal-content">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">
            <h3 class="modal-title" data-test="modal-dialog-background-title">
              {{ title }}
            </h3>
          </slot>
          <div class="close" data-dismiss="modal" aria-label="Close" @click="close" data-test="modal-dialog-close-button">
            <i class="bi-x-lg" />
          </div>
        </div>
        <div class="modal-body">
          <slot name="content" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
    }
  },

  computed: {
    largeClasses () {
      if (this.size === 'large') {
        return ['col-6', 'offset-3', 'mt-5']
      }

      return ['modal-dialog']
    }
  },

  methods: {
    close () {
      this.$emit('modal-close')
    }
  }
}
</script>

<style lang="scss" scoped>


.modal.show.active {
  display: block;
}

.modal-dialog {
  .modal-content {
    border-radius: 0;
    padding: 5px;
  }

  .modal-header, .modal-footer {
    border: 0;
  }

  .modal-body {
    padding: 0 30px;
  }

  .modal-header {
    .modal-title {
      font-weight: 400;
    }

    .close {
      cursor: pointer;
      & i {
        font-size: 1.5em;
      }
    }
  }
}

</style>
