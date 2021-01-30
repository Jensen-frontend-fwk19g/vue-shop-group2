import { shallowMount } from "@vue/test-utils";
import TotalSum from "@/components/TotalSum.vue";

describe('TotalSum.vue', () => {

	it('should display "Total sum" when component mounted', () => {
        // arrange
        const wrapper = shallowMount(TotalSum)
		const expected = 'Total sum'

		// act
        const actual = wrapper.find("h1").text()

        // assert
        expect(actual).toBe(expected)
	})

    it('should display total sum value 0 if no products in cart', async () => {
        // arrange
        const expectedCartOrders = 0
        const expectedTotalSum = 0

        const wrapper = shallowMount(TotalSum)
         wrapper.setData({ cart: [], sum : 0       
        })

        // act
        const actualCartOrders = wrapper.vm.cart.length
        const actualTotalSum = wrapper.vm.sum

        // assert
        expect(actualCartOrders).toBe(expectedCartOrders)
        expect(actualTotalSum).toBe(expectedTotalSum)
	})

    it('should display the correct total sum if there is products in cart', () => {
		// arrange
        const wrapper = shallowMount(TotalSum)
        const expectedTotalSum = 1000

        // act
        const actualSum = parseInt(wrapper.find("p").text())

        // assert
        expect(actualSum).toBe(expectedTotalSum);
	})
})