import { shallowMount, mount } from "@vue/test-utils";

import MainPage from "@/components/MainPage.vue";
import dogs from '@/assets/dogs.json'


describe("MainPage", () => {
  it("should,when the page is mounted, display the title of the page `Home` ", () => {

    const wrapper = shallowMount(MainPage);
    const expected = "Toddler shop";
    const actual = wrapper.find('.title').text()
    
    expect(actual).toBe(expected)
  });

  it('shoud, when the page is mounted, shows all of the elements card-item ', async () => {
    
    const wrapper = await shallowMount(MainPage, {
      propsData: {
          dogs: [ 
            {
              name:"DogName",
              sex:"testSex",
              breed:"someBreed",
              img:"https://images.dog.ceo/someCoolDog.jpg",
              present:false,
              age:10,
              chipNumber:"QAH994994",
              price: 1337
           }
          ]
       
      }
    })
    const cardItem = wrapper.find(".card-item");

    expect(cardItem.exists()).toBe(true);

  })
  it('show, when the page is mounted, shows 10 elements card-item', async () => {
    const wrapper = await shallowMount(MainPage, {
      propsData: {
          dogs: dogs
       
      }
    })
    const expected = dogs.length;
    const cardItems = wrapper.findAll('.card-item')
    const actualAmount = cardItems.length
    
    expect(actualAmount).toBe(expected) 
  })

});
