import { shallowMount } from "@vue/test-utils";
import FormSession from '@/components/FormSession/FormSession.vue'

describe('FormSession', () => {
  it('render form session div', () => {
    const wrapper = shallowMount(FormSession, {})
    const formSession = wrapper.find('[data-test="form-session"]')
    expect(formSession.exists()).toBeTruthy()
    expect(formSession.classes()).toEqual(['mb-3'])
  })
})
