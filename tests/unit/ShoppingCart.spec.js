import { shallowMount } from '@vue/test-utils'
import ShoppingCart from "../../src/components/ShoppingCart";

describe('ShoppingCart.vue', () => {
  it('Should show text "shopping cart is empty" if no items are added', () => {
    const wrapper = shallowMount(ShoppingCart, {
      propsData: {
        cartItems: []
      }
    });
    expect(wrapper.find('.emptyCartText').exists()).toBe(true);
  });

  it('Should not show text "shopping cart is empty" if items are added', () => {
    const wrapper = shallowMount(ShoppingCart, {
      propsData: {
        cartItems: getCartItemsFakeData()
      }
    });

    expect(wrapper.find('.emptyCartText').exists()).toBe(false);
  });

  it('Should show product list if it is not empty', () => {
    const wrapper = shallowMount(ShoppingCart, {
      propsData: {
        cartItems: getCartItemsFakeData()
      }
    });
    expect(wrapper.find('.shopping-cart-list').exists()).toBe(true);
  });

  it('Should not show product list if it is empty', () => {
    const wrapper = shallowMount(ShoppingCart, {
      propsData: {
        cartItems: []
      }
    });
    expect(wrapper.find('.shopping-cart-list').exists()).toBe(false);
  });
});


function getCartItemsFakeData() {
  return [{
    "name": "DOGE",
    "sex": "unknown",
    "breed": "Shiba Inu",
    "img": "https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg",
    "present": false,
    "age": 4,
    "chipNumber": "IEH1337",
    "price": 1337,
  }];
}