import { shallowMount } from '@vue/test-utils'
import CartItem from "@/components/CartItem";

 /**
   * As a customer I want to be able to delete a product in for the cart
   * ==============================================
   */
describe('CartItem.vue', () => {
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
  };
}