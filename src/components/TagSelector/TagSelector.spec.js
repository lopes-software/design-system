import { mount } from '@vue/test-utils'

import TagSelector from '@/components/TagSelector/TagSelector.vue'
import SelectField from '@/components/SelectField/SelectField.vue'
import FormTag from '@/components/FormTag/FormTag.vue'

describe('TagSelector', () => {
  const label = 'Pilots'
  const items = [
    { label: 'Rei Ayanami', value: '1' },
    { label: 'Asuka Langley', value: '2' },
    { label: 'Shinji Icari', value: '3' }
  ]

  describe('Tags', async () => {
    const wrapper = mount(TagSelector, { propsData: { label, items } })
    const childSelect = await wrapper.findComponent(SelectField)

    it('add new tag when option is select emit a event', async () => {
      childSelect.vm.$emit('input', '1')

      expect(wrapper.find('[datatest="1"]').exists()).toBeTruthy()
    })

    it('remove tag when tag emit a event', async () => {
      childSelect.vm.$emit('input', '1')
      await wrapper.vm.$nextTick()

      const formTag = wrapper.findComponent(FormTag)
      formTag.vm.$emit('tag', '1')

      expect(wrapper.text()).toBeFalsy()
    })
  })

  it('renders select-field', () => {
    const wrapper = mount(TagSelector, { propsData: { label, items } })
    expect(wrapper.find('[datatest="tag-select-field"]').exists()).toBeTruthy()
  })
})
