import { shallowMount } from "@vue/test-utils";

import MainPage from "@/components/MainPage.vue";

describe("MainPage", () => {
  it("should,when the page is mounted, display the title of the page `Home` ", () => {

    const wrapper = shallowMount(MainPage);
    const expected = "Toddler shop";
    const actual = wrapper.find('.title').text()
    
    expect(actual).toBe(expected)
  });

  it('shoud, when the page is mounted, shows all of the elements card-item ', () => {
    
    const wrapper = shallowMount(MainPage);
    const cardItem = wrapper.find(".card-item");

    expect(cardItem.exists()).toBe(true);

  })
  it('show, when the page is mounted, shows 10 elements card-item', () => {
    const wrapper = shallowMount(MainPage)
    const expected = 88;
    const cardItems = wrapper.findAll('.card-item')
    const actualAmount = cardItems.length
    
    expect(actualAmount).toBe(expected) 
  })

});
