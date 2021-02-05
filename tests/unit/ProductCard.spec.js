import { shallowMount, mount } from "@vue/test-utils";
import {fakeData} from "./fakeData"
import Product from "@/components/ProductCard.vue";
import MainPage from "@/components/MainPage.vue";

describe("ProductCard.vue", () => {
  it("it should display a name", async () => {
    // arrange
    const wrapper = await shallowMount(Product, {
      propsData: {
        dog: fakeData()
      }
    });
    console.log(fakeData())
    const expected = "DOGE";
    // act
    const actual = await wrapper.find(".dog-name");
    const actualText = await actual.text();

    // assert
    expect(actualText).toMatch(expected);
    console.log(actualText)
  });

  it("it should display a age", async () => {
    // arrange
    const wrapper = await shallowMount(Product, {
      propsData: {
        dog: fakeData()
      }
    });
    const expected = "4";
    // act
    const actual = await wrapper.find(".dog-age");
    const actualText = await actual.text();

    // assert
    expect(actualText).toMatch(expected);
  });

  it("it should display a breed", async () => {
    // arrange
    const wrapper = await shallowMount(Product, {
      propsData: {
        dog: fakeData()
      }
    });
    const expected = "Shiba Inu";
    // act
    const actual = await wrapper.find(".dog-breed");
    const actualText = await actual.text();

    // assert
    expect(actualText).toMatch(expected);
  });

  it("it should display a sex", async () => {
    // arrange
    const wrapper = await shallowMount(Product, {
      propsData: {
        dog: fakeData()
      }
    });
    const expected = "unknown";
    // act
    const actual = await wrapper.find(".dog-sex");
    const actualText = await actual.text();

    // assert
    expect(actualText).toMatch(expected);
  });

  it("should display a image", async () => {
    // arrange
    const wrapper = await shallowMount(Product, {
      propsData: {
        dog: fakeData()
      }
    });
    const expected = "https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg";
    // act
    const actual = await wrapper.find(".dog-image");

    // assert
    expect(actual.attributes("src")).toBe(expected);
  });

  it("should display price with a font css class", async () => {
    const wrapper = await shallowMount(Product, {
      propsData: {
        dog: fakeData()
      }
    });
    // takes the price element
    const actual = wrapper.find(".dog-price");
    const acualExist = actual.exists();
    //checks if
    expect(acualExist).toBeTruthy;
    expect(actual.attributes("class")).toMatch("price-font");
  });
});

it("should emit the dog chosen ", async () => {
  // //arrange

  const wrapper = mount(MainPage);
  // //act
  wrapper.vm.$emit("addToCart");
  wrapper.vm.$emit("addToCart", "Molly");

  await wrapper.vm.$nextTick();
  await wrapper.vm.$nextTick();
  // //assert
  expect(wrapper.emitted().addToCart).toBeTruthy();
  expect(wrapper.emitted().addToCart[1][0]).toEqual("Molly");
});