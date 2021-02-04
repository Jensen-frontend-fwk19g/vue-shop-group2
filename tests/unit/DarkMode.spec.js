import { mount, shallowMount } from "@vue/test-utils";
import DarkMode from "@/components/DarkMode.vue";

describe("DarkMode.vue", () => {
    
    it("should display a button when mounted", () => {
    //mounts the darkMode-vue component    
    const wrapper = shallowMount(DarkMode);

    //checks if button is there when mounted
    expect(wrapper.html()).toBeTruthy(); 
  });

  it("must return the inverse result of the initial value",async () => {

    const wrapper = shallowMount(DarkMode);

    expect(wrapper.vm.darkMode).toBe(false);
    const button = wrapper.find('a')
    await button.trigger('click');
    
    expect(wrapper.vm.darkMode).toBe(true);
    });
    
    /*
        // const actual =  wrapper.find("#dark-button");
      // const expected = '<a href="" id="dark-button"></a>';
  */
});