import { shallowMount } from '@vue/test-utils'
import CartItem from "@/components/CartItem";


describe('CartItem.vue', () => {
  /**
   * As a customer I want to be able to delete a product in for the cart
   * ==============================================
   */
  it('should display delete Btn', () => {
    // arrange
    const wrapper =  shallowMount(CartItem, {
      propsData: {
        dog: mockedDogData()
      }
    })
    const itemInCart = wrapper.find('.deleteBtn').exists();
    expect(itemInCart).toBeTruthy();
  });

  it("should the btn be visible inside the cart ", () => {
    const wrapper   = shallowMount(CartItem, {
      propsData: {
        dog: mockedDogData()
      }
    });
    const expected  = '<button class="deleteBtn">✗</button>';
    const actualI   = wrapper.find(".deleteBtn").html();
    expect(actualI).toBe(expected);
  });

  /**
   * As a customer I would like to see the cart page with all the items the I want to buy.
   * ===================================================== 
   */
  
  it('should contain the item of the chosen-dog ', () => {
    const wrapper   = shallowMount(CartItem, {
      propsData: {
        dog: mockedDogData()
      }
    });
    const actual    = wrapper.find('.item-row').exists();
    expect(actual).toBe(true);
  });

  it("should display price with a font css class", async () => {
    const wrapper = await shallowMount(CartItem, {
        propsData: {
          dog: {
            price: 14000
          }
        }
      })
      const actual = wrapper.find('.dog-price').exists();
      expect(actual).toBeTruthy();
  });

  it('should display the description of the item as the same to every item in the cart', () => {
    const wrapper   = shallowMount(CartItem,{
      propsData: {
        dog: {
          "name":"Bella",
          "sex":"female",
          "breed":"labrador",
          "description":"Dog name is Bella, breed is labrador...etc",
          }
        }
    });

		const expected  = "Dog name is Bella, breed is labrador...etc";
		const actual    = wrapper.find('.desc-item').text();
		expect(actual).toMatch(expected);
  });

});


function mockedDogData() {
  return {
    "name":"Bella",
    "sex":"female",
    "breed":"labrador",
    "img":"https://images.dog.ceo/breeds/labrador/n02099712_3947.jpg",
    "present":false,
    "age":1,
    "chipNumber":"HPF367168",
    "price": 14000,
    "owner":{
      "name":"Tina",
      "lastName":"Ahlberg",
      "phoneNumber":"0732303484"
    }
  }
}