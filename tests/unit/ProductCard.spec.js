import { shallowMount, mount } from "@vue/test-utils";
import Product from "@/components/ProductCard.vue";
import ProductCard from "@/components/ProductCard.vue";



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

    
    it("should display price with a font css class", async () => {
        const wrapper = await shallowMount(Product, {
            propsData: {
                dog: {
                    price: 1337
                }
             
            }
          })
        // takes the price element
        const actual = wrapper.find('.dog-price');
        const acualExist = actual.exists()
        //checks if 
        expect(acualExist).toBeTruthy;
        expect(actual.attributes("class")).toMatch("price-font")
    })
})

    it('should emit the dog chosen ', async () => {
        
        // //arrange
    //   const wrapper = mount(ProductCard, {
    //     propsData: {
    //       name: "Molly",
    //     },
    //   })
     const wrapper = shallowMount(ProductCard)
        // //act
         wrapper.vm.$emit('dogToEmit')


         await wrapper.vm.$nextTick()
        // //assert

       expect(wrapper.emitted().dogToEmit).toBeTruthy();
       //expect(wrapper.emitted().dogToEmit[0]).toEqual([{name:'Molly'}]);
    })

})

