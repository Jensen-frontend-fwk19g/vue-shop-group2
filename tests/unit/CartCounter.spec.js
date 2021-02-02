import { shallowMount } from "@vue/test-utils";
import CartCounter from "@/components/CartCounter.vue";

describe("CartCounter.vue", () => {
  it("should display,when the page is mounted, the img of the bag inside the cart ", () => {
    //arrange
    const wrapper = shallowMount(CartCounter);
    const expectedHtml = '<img class="bag" src="" alt="Cart">';
    //act
    const actualHtml = wrapper.find(".bag").html();
    console.log(actualHtml)
    //assert
    expect(actualHtml).toBe(expectedHtml);
  });

  it("should, when is mounted, disply the value of 0 ", () => {
    //arrange
    const wrapper = shallowMount(CartCounter);
    const expected = 0;
    //act
    const counter = wrapper.find(".counter").text();
    const actual = parseInt(counter);
    //assert
    expect(actual).toBe(expected);
  });

  it("should display the increment when the add button is pressed", async () => {
    //arrange
    const expected = 0 + 1;
    const wrapper = shallowMount(CartCounter);
    //act
    const addButton = wrapper.find(".add");
    await addButton.trigger("click");
    const actualCounter = parseInt(wrapper.find(".counter").text());
    //assert
    expect(actualCounter).toBe(expected);
  });

  it("should display the decrement when the dec button is pressed", async () => {
    //arrange
    const expected = 0 - 1;
    const wrapper = shallowMount(CartCounter);
    //act
    const addButton = wrapper.find(".dec");
    await addButton.trigger("click");
    const actualCounter = parseInt(wrapper.find(".counter").text());
    //assert
    expect(actualCounter).toBe(expected);
  });

  it("should display the numbers of items bought in the cardCounter", async () => {
    
    
    const wrapper = shallowMount(CartCounter);
    const fakeData =  [
      {
        dogDescription: "Dalmatin ",
        price: 400,
        dataOfBirth: "2015/12/01",
      },
      {
        dogDescription: "Dalmatin ",
        price: 400,
        dataOfBirth: "2015/12/01",
      },
    ]

        const arrayLength = fakeData.length

        // Act
         await wrapper.setData({
            counter: arrayLength
        });

        const actualItems = parseInt(wrapper.find('.counter').text())

        // Assert
        expect(actualItems).toBe(arrayLength);
  
  });

});
