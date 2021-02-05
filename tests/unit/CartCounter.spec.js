import { shallowMount } from "@vue/test-utils";
import CartCounter from "@/components/CartCounter.vue";
import AddButton from "@/components/AddButton.vue";

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

  it("should, when is mounted, display the value of 0 ", () => {
    //arrange
    const wrapper = shallowMount(CartCounter, {
      propsData: {
        dogCart: [],
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
    const wrapper = shallowMount(AddButton, {
      propsData: {
        dog: fakeData()[0],
      },
    });

    //act
    const btnAdd = wrapper.find("button");
    await btnAdd.trigger("click");

    // //assert
    expect(wrapper.emitted().addToCart).toBeTruthy();
  });

  it("should display the numbers of items bought in the cardCounter", async () => {
    const wrapper = shallowMount(CartCounter, {
			props: {
				cartItems: [
				{
					"name": "Molly",
					"sex": "female",
					"breed": "briard",
					"img": "https://images.dog.ceo/breeds/briard/n02105251_6840.jpg",
					"present": false,
					"age": 4,
					"chipNumber": "IEH455006",
					"price": 10000,
					"owner": {
						"name": "Wilmer",
						"lastName": "Svensson",
						"phoneNumber": "0769239356"
					}
				}],
			},
      });
    
    const expected = "1"

		// act 
    const actualCartOrder = wrapper.find(".counter").text()
    console.log("actual", actualCartOrder)

    // Assert
    expect(actualCartOrder).toBe(expected)
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
