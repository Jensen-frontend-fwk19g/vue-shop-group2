import { shallowMount, mount } from "@vue/test-utils";
import MainCart from "@/components/MainCart.vue";
import Cart from "@/components/Cart.vue";
import About from "@/views/About.vue";

describe("MainCart.vue", () => {
  it("should contain, the About view, an header tag", () => {
    const wrapper = shallowMount(About);
    const HtmlHeader = wrapper.find("header").html();

    const expectedHtml =
      "<header><h1>Cart Page you can find all the dogs you are going to pay</h1></header>";
    expect(expectedHtml).toEqual(HtmlHeader);
  });
  it("should, when the page is mounted, find if it exist a child component Cart", () => {
    const wrapper = mount(MainCart, {
      stubs: {
        Cart: true,
      },
    });
    const CartComponent = wrapper.findComponent(Cart);
    expect(CartComponent.exists()).toBe(true);
  });
});
