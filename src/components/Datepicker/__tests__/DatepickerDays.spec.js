import { mount } from '@vue/test-utils'
import dayjs from 'dayjs'

import SbDatepickerDays from '../components/DatepickerDays.vue'

describe('SbDatepickerDays component', () => {
  const wrapper = mount(SbDatepickerDays)

  describe('Test component props', () => {
    it('Should emit date for input on click', async () => {
      const internalDate = dayjs().format()
      await wrapper.setProps({ internalDate })
      await wrapper.find('.sb-datepicker-day').trigger('click')
      expect(wrapper.emitted().input.length).toBe(1)
    })
  })
})
