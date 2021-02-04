import { shallowMount } from "@vue/test-utils";
import AddButton from "@/components/AddButton.vue";



describe('AddButton.vue', () => {

		it('should display button element when component mounted', () => {
			// arrange
			const wrapper = shallowMount(AddButton)
			const btn = wrapper.find('button')

			// act
			const actual = btn.exists()
			
			// assert
			expect(actual).toBeTruthy()
		})

		it('should display a button with text "Add to cart" when component mounted', () => {
			// arrange
			const wrapper = shallowMount(AddButton)
			wrapper.setData({ btnText: "Add to cart"})
			const btn = wrapper.find('button')
			const expected = wrapper.vm.btnText

			// act
			const actual = btn.text()
			
			// assert
			expect(actual).toBe(expected)
		})
		
		it('it should display "Added to cart" when button clicked', async () => {
			// arrange
			const wrapper = shallowMount(AddButton)
			const btn = wrapper.find('button')
			const expected = 'Added to cart'
			
			// act
			await wrapper.trigger('click')
			const actual = btn.text()

			// assert
			expect(actual).toBe(expected)
		})

		it('should show a button element not disabled when component mounted', () => {
	   	// arrange
		const wrapper = shallowMount(AddButton)
		const btn = wrapper.find(".add-button")

		// act
		let actualBtnAttributes = JSON.stringify(btn.attributes())
		
		// assert
		expect(actualBtnAttributes).not.toMatch(/disabled/);
	})

		it('should disable the button element when it is clicked', async () => {
		// arrange
		const wrapper = shallowMount(AddButton)
		const btn = wrapper.find(".add-button")
		
		// act
		await wrapper.trigger('click')
		let actualBtnAttributes = JSON.stringify(btn.attributes())
		
		// assert
		expect(actualBtnAttributes).toMatch(/disabled/);
	})
	
		it('should emit the value when button has been clicked once', async () => {
		//arrange
		const wrapper = shallowMount(AddButton, {
			props: {
				dog: [
				{
					"name": "Molly",
					"sex": "female",
					"breed": "briard",
					"img": "https://images.dog.ceo/breeds/briard/n02105251_6840.jpg",
					"present": false,
					"age": 4,
					"chipNumber": "IEH455006",
					"price": 10000,
					"owner": {
						"name": "Wilmer",
						"lastName": "Svensson",
						"phoneNumber": "0769239356"
					}
				}],
			},
			});

		// act 
		const actualCartOrder = wrapper.vm.dog
		wrapper.vm.$emit('addToCart', actualCartOrder)	
		await wrapper.vm.$nextTick()	  

		// assert
  		expect(wrapper.emitted().addToCart).toBeTruthy()
		expect(wrapper.emitted().addToCart.length).toBe(1)
		expect(wrapper.emitted().addToCart[0]).toEqual([actualCartOrder])
		})

		it('should not be able to hande more than one click', async () => {
			// arrange
			const wrapper = shallowMount(AddButton)
			const btn = wrapper.find('.add-button')
			const expected = 1
				
			// act


			// arrange
		})
})
