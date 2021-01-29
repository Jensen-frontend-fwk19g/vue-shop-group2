import { shallowMount } from "@vue/test-utils";
import TotalSum from "@/components/TotalSum.vue";

describe('TotalSum.vue', () => {

	it('it should display "Total sum" when component mounted', () => {
        // arrange
        const wrapper = shallowMount(TotalSum)
		const expected = 'Total sum'

		// act
        const actual = wrapper.find("h1").text()

        // assert
        expect(actual).toBe(expected)
	})

    it('it should display total sum value 0 if no products in cart', () => {
        // arrange
        const expectedCartOrders = 0
        const expectedTotalSum = 0

        const wrapper = shallowMount(TotalSum)
        wrapper.setData({ totalSum: 0,        
        })

        // act
        const actualCartOrders = wrapper.vm.cartOrders.length
        const actualTotalSum = wrapper.vm.totalSum

        // assert
        expect(actualCartOrders).toBe(expectedCartOrders)
        expect(actualTotalSum).toBe(expectedTotalSum)
	})

    it('it should display the correct total sum if there is products in cart', () => {
		// arrange

		// act
		
		// assert
	})
})
