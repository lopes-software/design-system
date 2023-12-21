import TagSelector from '@/components/TagSelector/TagSelector.vue'

export default {
  title: 'Form/TagSelector',
  component: TagSelector
}

export const Basic = () => ({
  components: { TagSelector },
  template: `<tag-selector
              :items="[{label: 'Ruby', value: '42'}, {label: 'Elixir', value: '31'}, {label: 'Go', value: '30'}]"
              label="Linguagens"
             />`
})

export const WithValues = () => ({
  components: { TagSelector },
  data () {
    return {
      modelValue: [{label: 'Ruby', value: '42'}]
    }
  },
  template: `<tag-selector
              :items="[{label: 'Ruby', value: '42'}, {label: 'Elixir', value: '31'}, {label: 'Go', value: '30'}]"
              label="Linguagens"
              :modelValue="modelValue"
             />`
})
