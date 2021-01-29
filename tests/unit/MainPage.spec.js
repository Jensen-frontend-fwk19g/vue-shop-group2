import { mount, shallowMount } from "@vue/test-utils";

import MainPage from "@/components/MainPage.vue";
import ProductCard from "@/components/ProductCard.vue";

describe("MainPage", () => {
  it("should,when the page is mounted, display the title of the page `Home` ", () => {
    const wrapper = shallowMount(MainPage);
    const expected = "Toddler shop";
    const actual = wrapper.find(".title").text();

    expect(actual).toBe(expected);
  });

  it("shoud, when the page is mounted, shows all of the elements card-item ", () => {
    const wrapper = mount(MainPage);
    const cardItem = wrapper.findComponent(ProductCard);
    expect(cardItem).toBeTruthy;
  });

  it("show, when the page is mounted, shows 78 elements card-item", () => {
    const wrapper = mount(MainPage);
    const expected = 78;
    const cardItems = wrapper.findComponent(ProductCard).findAll('.card');
    const actualAmount = cardItems.length;
    
    expect(actualAmount).toBe(expected);
  });
});
