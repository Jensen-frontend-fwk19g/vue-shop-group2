import { shallowMount } from "@vue/test-utils";
import TotalSum from "@/components/TotalSum.vue";

describe("TotalSum.vue", () => {

  it('should display "Total sum" when component mounted', () => {
    // Arrange
    const wrapper = shallowMount(TotalSum, {
      propsData: {
        dogs: []
      },
    });

    const expectedText = "Total sum";

    // Act
    const actualText = wrapper.find("h1").text();

    // Assert
    expect(actualText).toBe(expectedText);
  });

  
it("should display total sum value 0 if no products in cart", () => {
    // Arrange
    const wrapper = shallowMount(TotalSum, {
      propsData: {
        dogs: []
      },
    });

    const expectedCartOrders = 0;
    const expectedTotalSum = "0";

    // Act
    const actualSum = wrapper.find("p").text();
    const actualCartOrders = wrapper.vm.dogs.length;
    
    // Assert
    expect(actualCartOrders).toBe(expectedCartOrders);
    expect(actualSum).toBe(expectedTotalSum);
  });
  

  it("should display the correct total sum if there is products in cart",  () => {
    // Arrange
    const wrapper = shallowMount(TotalSum, {
      propsData: {
        dogs: [
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
       },
       {
          "name": "Bella",
          "sex": "female",
          "breed": "labrador",
          "img": "https://images.dog.ceo/breeds/labrador/n02099712_3947.jpg",
          "present": false,
          "age": 1,
          "chipNumber": "HPF367168",
          "price": 14000,
          "owner": {
             "name": "Tina",
             "lastName": "Ahlberg",
             "phoneNumber": "0732303484"
          }
       }]
    }
    });
  
    const expectedTotalSum = "24000"
  
    // Act
    const actualSum = wrapper.find("p").text();
  
    // Assert
    expect(actualSum).toBe(expectedTotalSum);
  });
  
});
