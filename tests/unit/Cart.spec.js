import { shallowMount} from '@vue/test-utils'
import Cart from '@/components/Cart.vue'

describe('Cart.vue', () => {
//As a customer I want to be able to delete a product in for the cart
  it('should display item/items in the cart to get delete Btn ', () => {

    const expected = '2';
    const componentWrapper = shallowMount(Cart);
    const spanWrapper = componentWrapper.find('.item-in-cart-cls');
    const actual = spanWrapper.text();
    expect(actual).toBe(expected);

  });

  it('should contains the delete Button:s', () => {
      const wrapper = shallowMount(Cart); 
      const actual = wrapper.findAll('.deleteBtn');
      expect(actual).toBeTruthy();
    
  });

  it('should clicked to delete Item', async() => {
    const wrapper = shallowMount(Cart);
    await wrapper.find('.deleteBtn').trigger('removeItem');
    expect(wrapper.vm.removeItem).toBeTruthy();
  });


})