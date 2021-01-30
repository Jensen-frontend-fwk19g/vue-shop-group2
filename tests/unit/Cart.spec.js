import { shallowMount} from '@vue/test-utils'
import Cart from '@/components/Cart.vue'

describe('Cart.vue', () => {
//As a customer I want to be able to delete a product in for the cart
  it('should display Cart length', () => {
    const wrapper = shallowMount(Cart);
    const expected = wrapper.vm.cart.length;
    const actual = wrapper.find('.item-in-cart-cls').text();
    expect(parseInt(actual)).toBe(expected);
  });

  it('should show Item/s', async() => {
    const wrapper = shallowMount(Cart);
    const actual = wrapper.find('.item-row').exists();
		expect(actual).toBe(true);
  });

  it("should be visible inside the cart ", () => {
    const wrapper = shallowMount(Cart);
    const expected = '<button class="deleteBtn">✗</button>';
    const actualI = wrapper.find(".deleteBtn").html();
    expect(actualI).toBe(expected);
  });
    //doing the same as above
  it('should contains delete button inside the cart', () => {
      const wrapper = shallowMount(Cart); 
      const actual = wrapper.find('.deleteBtn');
      expect(actual).toBeTruthy();
  });

  it('should contains [✗] as a text inside the btn', () => {
    const wrapper = shallowMount(Cart); 
    const actual = wrapper.find('.deleteBtn').text();
    const expected = '✗';
    expect(actual).toBe(expected);
});


})