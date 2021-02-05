import { shallowMount} from '@vue/test-utils'
import Cart from '@/components/Cart.vue'

describe('Cart.vue', () => {
  /**
   * As a customer I want to be able to delete a product in for the cart
   * ============================================================================================
   */
  it('should display Cart length', () => {
    const wrapper   = shallowMount(Cart);
    const expected  = wrapper.vm.cart.length;
    const actual    = wrapper.find('.item-in-cart-cls').text();
    expect(parseInt(actual)).toBe(expected);
  });

  it("should the btn be visible inside the cart ", () => {
    const wrapper   = shallowMount(Cart);
    const expected  = '<button class="deleteBtn">✗</button>';
    const actualI   = wrapper.find(".deleteBtn").html();
    expect(actualI).toBe(expected);
  });

  it('should contains delete button inside the cart', () => {
    const wrapper   = shallowMount(Cart); 
    const actual    = wrapper.find('.deleteBtn');
    expect(actual).toBeTruthy();
  });

  it('should contains [✗] as a text inside the btn', () => {
    const wrapper   = shallowMount(Cart); 
    const actual    = wrapper.find('.deleteBtn').text();
    const expected  = '✗';
    expect(actual).toBe(expected);
  });
  it('should decrease the items in cart when the user click on the [X] button.', async () => {
    const wrapper   = shallowMount(Cart);
    const expected  = wrapper.vm.cart.length -2;
    await wrapper.find('.deleteBtn').trigger('click');
    const actual    = wrapper.find('.item-in-cart-cls').text();
    expect(parseInt(actual)).toBe(expected);
  });

  /**
   * As a customer I would like to see the cart page with all the items the I want to buy.
   * ==============================================================================================  
   */
  
  it('should contain the item of the chosen-dog ', () => {
    const wrapper   = shallowMount(Cart);
    const actual    = wrapper.find('.item-row').exists();
    expect(actual).toBe(true);
  });

  it('should has the same chip-number/id of the item in the cart & the displayed item', () => {
    const wrapper   = shallowMount(Cart);
    const actual    = wrapper.find('tr.item-row').element.getAttribute('id');
    const expected  = wrapper.vm.cart[0].chipNumber;
    expect(actual).toBe(expected);
  });

  it('should display the description of the item as the same to every item in the cart', () => {
    const wrapper   = shallowMount(Cart);
		const expected  = `Dog name is ${wrapper.vm.cart[0].name}, breed is ${wrapper.vm.cart[0].breed}...etc`;
		const actual    = wrapper.find('.desc-item').text();
		expect(actual).toMatch(expected);
	})

  it('should display, item-quantity = 1 as a default quantity when mounted', () => {
    const expected    = '1';
    const wrapper     = shallowMount(Cart);
    const spanWrapper = wrapper.find('#item-counts');
    const actual      = spanWrapper.text();
    expect(actual).toBe(expected);
  });

  it('should increase item-quantity by 1 when mounted',async () => {
    const expected       = (1+1) +'';
    const wrapper        = shallowMount(Cart);
    const increaseButton = wrapper.find('.arrow-up-btn');
    await increaseButton.trigger('click');
    const actual         = wrapper.find('#item-counts').text();
    expect(actual).toBe(expected);
  });

  it('should decrease item-quantity by 1 when mounted', async() => {
    const expected       = (1+3-2)+'';
    const wrapper        = shallowMount(Cart);
    const increaseButton = wrapper.find('.arrow-up-btn');
    const decreaseButton = wrapper.find('.arrow-down-btn');
    await increaseButton.trigger('click');//+
    await decreaseButton.trigger('click');//-
    await increaseButton.trigger('click');//+
    await increaseButton.trigger('click');//+
    await decreaseButton.trigger('click');//-
    const actual         = wrapper.find('#item-counts').text();
    expect(actual).toBe(expected);
  });

  it('should contain the item-price', () => {
    const wrapper   = shallowMount(Cart);
    const actual    = wrapper.find('.item-price').exists();
    expect(actual).toBe(true);
  });

  it('should contain the total amount.', () => {
    const wrapper   = shallowMount(Cart);
    const actual    = wrapper.find('.item-total-cost').exists();
    expect(actual).toBe(true);
  });

})
