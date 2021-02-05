import { shallowMount } from "@vue/test-utils";
import ShoppingCartItem from "@/components/ShoppingCartItem.vue";

describe("ShoppingCart.vue", () => {
  it("should display a name", async () => {
    // arrange
    const wrapper = await shallowMount(ShoppingCartItem, {
      propsData: {
        dog: getDog(),
      },
    });
    const expected = "DOGE";
    // act
    const actual = await wrapper.find(".dog-name");
    const actualText = await actual.text();

    // assert
    expect(actualText).toMatch(expected);
  });

  it("should display a breed", async () => {
    // arrange
    const wrapper = await shallowMount(ShoppingCartItem, {
      propsData: {
        dog: getDog(),
      },
    });
    const expected = "Shiba Inu";
    // act
    const actual = await wrapper.find(".dog-breed");
    const actualText = await actual.text();

    // assert
    expect(actualText).toMatch(expected);
  });

  it("should display an age", async () => {
    // arrange
    const wrapper = await shallowMount(ShoppingCartItem, {
      propsData: {
        dog: getDog(),
      },
    });
    const expected = "4";
    // act
    const actual = await wrapper.find(".dog-age");
    const actualText = await actual.text();

    // assert
    expect(actualText).toMatch(expected);
  });

  it("should display a sex", async () => {
    // arrange
    const wrapper = await shallowMount(ShoppingCartItem, {
      propsData: {
        dog: getDog(),
      },
    });
    const expected = "unknown";
    // act
    const actual = await wrapper.find(".dog-sex");
    const actualText = await actual.text();

    // assert
    expect(actualText).toMatch(expected);
  });

  it('calls remove() when pressing remove button', () => {
    const wrapper = shallowMount(ShoppingCartItem, {
      props: {
        dog: getDog()
      }
    });
    const removeButton = wrapper.find('.remove-button')
    removeButton.trigger('click')
    const removeDog = wrapper.vm.dog
    expect(wrapper.emitted().removeDog).toBeTruthy()
    expect(wrapper.emitted().removeDog.length).toBe(1)
    expect(wrapper.emitted().removeDog[0]).toEqual([removeDog])
  })

  function getDog() {
    return {
      name: "DOGE",
      sex: "unknown",
      breed: "Shiba Inu",
      img: "https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg",
      present: false,
      age: 4,
      chipNumber: "IEH1337",
      price: 1337,
    };
  }
});