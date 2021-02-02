import { shallowMount } from "@vue/test-utils";
import CartCounter from "@/components/CartCounter.vue";
import ProductCard from "@/components/ProductCard.vue";

describe("CartCounter.vue", () => {
  it("should display,when the page is mounted, the img of the bag inside the cart ", () => {
    //arrange
    const wrapper = shallowMount(CartCounter, {
      propsData: {
        dogArray: [],
      },
    });
    const expectedHtml = '<img class="bag" src="" alt="Cart">';
    //act
    const actualHtml = wrapper.find(".bag").html();
    console.log(actualHtml);
    //assert
    expect(actualHtml).toBe(expectedHtml);
  });

  it("should, when is mounted, disply the value of 0 ", () => {
    //arrange
    const wrapper = shallowMount(CartCounter, {
      propsData: {
        dogArray: [],
      },
    });
    const expected = "0";
    //act
    const counter = wrapper.find(".counter").text();
    const actual = counter;
    //assert
    expect(actual).toBe(expected);
  });

  it("should emit an event when the add button is pressed", async () => {
    //arrange
    const wrapper = shallowMount(ProductCard, {
      propsData: {
        dog: fakeData()[0]
      },
    });


    //act
    const btnAdd = wrapper.find(".buy-button");
    await btnAdd.trigger("click");
    

    //expect(productCard).toBe(true);
    // expect(btnCard).toBe(true);
    
    // //assert
    expect(wrapper.emitted().dogEmit).toBeTruthy();
  });


  it("should display the numbers of items bought in the cardCounter", async () => {
    const wrapper = shallowMount(CartCounter, {
      propsData: {
        dogArray: fakeData(),
      },
    });

    const arrayLength = fakeData().length;

    // Act
    const actualItems = parseInt(wrapper.find(".counter").text());
    // Assert
    expect(actualItems).toBe(arrayLength);
  });
});

function fakeData() {
  return [
    {
      name: "DOGE",
      sex: "unknown",
      breed: "Shiba Inu",
      img: "https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg",
      present: false,
      age: 4,
      chipNumber: "IEH1337",
      price: 1337,
    },
  ];
}
