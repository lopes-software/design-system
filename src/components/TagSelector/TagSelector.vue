<template>
  <form-session>
    <select-field :options="items" :label="label" @input="addTag" v-model="currentValue" data-test="tag-select-field" :errorMessage="errorMessage"/>

    <form-tag
      v-for="(item, index) in mutableSelectedItems"
      :value="item.value"
      :key="index"
      :closable="true"
      :data-test="`form-tag-${item.value}`"
      @tag="removeItem"
      class="me-2"
    >{{ item.label }}</form-tag>
  </form-session>
</template>

<script>
import FormTag from '@/components/FormTag/FormTag.vue'
import SelectField from '@/components/SelectField/SelectField.vue'
import FormSession from '@/components/FormSession/FormSession.vue'

export default {
  data () {
    return {
      currentValue: undefined,
      mutableSelectedItems: []
    }
  },

  props: {
    label: {
      require: true,
      type: String
    },

    items: {
      require: true,
      type: Array
    },

    value: {
      type: Array
    },

    dataTest: {
      type: String,
      default: 'tag-selector'
    },

    errorMessage: {
      type: String,
      default: undefined
    }
  },

  methods: {
    addTag (itemValue) {
      const repeatedItem = this.mutableSelectedItems.some((item) => item.value === itemValue)

      if (repeatedItem) return

      const item = this.items.find((item) => item.value === itemValue)
      if (item === undefined) return

      this.mutableSelectedItems.push(item)
      this.$emit('input', this.mutableSelectedItems)
    },

    removeItem (itemValue) {
      this.mutableSelectedItems = this.mutableSelectedItems.filter((item) => item.value !== itemValue)
      this.$emit('input', this.mutableSelectedItems)
      // reset the select option
      this.currentValue = undefined
    }
  },

  watch: {
    value: function (items) {
      this.mutableSelectedItems = items
    }
  },

  components: {
    FormTag,
    SelectField,
    FormSession
  }
}
</script>
