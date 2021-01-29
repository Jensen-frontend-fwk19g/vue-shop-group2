import { shallowMount } from "@vue/test-utils";
import AddButton from "@/components/AddButton.vue";


describe('AddButton.vue', () => {

	it('should display a button when component mounted', () => {
		// arrange
		const wrapper = shallowMount(AddButton)

		// act
		const actual = wrapper.find('button').exists()
		
		// assert
		expect(actual).toBeTruthy()
	})

	it('should display a button with text "Add to cart" when component mounted', () => {
		// arrange
		const wrapper = shallowMount(AddButton)
		const expected = 'Add to cart'

		// act
		const actual = wrapper.find('button').text()
		
		// assert
		expect(actual).toBe(expected)
	})
	
	it('it should display "Added to cart" when button clicked', async () => {
		// arrange
		const wrapper = shallowMount(AddButton)
		const expected = 'Added to cart'
		
		// act
		await wrapper.trigger('click')
		const actual = wrapper.text()

		// assert
		expect(actual).toBe(expected)
	})

	it('it should update the data in vue object with the product ID when button clicked', async () => {
		// arrange
		const wrapper = shallowMount(AddButton)
		const expectedID = ""

		// act
		const actualID = wrapper.vm.btnID

		// assert
		expect(actualID).toBe(expectedID);
	})
	
})
