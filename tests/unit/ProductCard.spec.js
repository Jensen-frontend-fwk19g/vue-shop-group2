


import { shallowMount, mount } from "@vue/test-utils";
import Product from "@/components/ProductCard.vue";


describe('ProductCard.vue', () => {

	it('it should display a name', async () => {
		// arrange
		const wrapper = await shallowMount(Product, {
            propsData: {
                dog: {
                    name: "Molly"
                }
             
            }
          })
		const expected = "Molly";
		// act
        const actual = await wrapper.find('.dog-name')
        const actualText = await actual.text()
        
        // assert
        expect(actualText).toMatch(expected)

    })
    
    it('it should display a age', async () => {
		// arrange
		const wrapper = await shallowMount(Product, {
            propsData: {
                dog: {
                    age: 10
                }
             
            }
          })
		const expected = "10";
		// act
        const actual = await wrapper.find('.dog-age')
        const actualText = await actual.text()
        
        // assert
        expect(actualText).toMatch(expected)

	})

    it('it should display a breed', async () => {
		// arrange
		const wrapper = await shallowMount(Product, {
            propsData: {
                dog: {
                    breed: "WrongBreed"
                }
             
            }
          })
		const expected = "WrongBreed";
		// act
        const actual = await wrapper.find('.dog-breed')
        const actualText = await actual.text()
        
        // assert
        expect(actualText).toMatch(expected)

    })
    
    it('it should display a sex', async () => {
		// arrange
		const wrapper = await shallowMount(Product, {
            propsData: {
                dog: {
                    sex: "female"
                }
             
            }
          })
		const expected = "female";
		// act
        const actual = await wrapper.find('.dog-sex')
        const actualText = await actual.text()
        
        // assert
        expect(actualText).toMatch(expected)

    })
    
    it('should display a image', async () => {
		// arrange
		const wrapper = await shallowMount(Product, {
            propsData: {
                dog: {
                    img: "https://images.dog.ceo/breeds/briard/n02105251_6840.jpg"
                }
             
            }
          })
		const expected = "https://images.dog.ceo/breeds/briard/n02105251_6840.jpg";
		// act
        const actual = await wrapper.find('.dog-image')
        
        // assert
        expect(actual.attributes('src')).toBe(expected)

	})

})

/*



*/