import { mount, shallowMount } from "@vue/test-utils";
import DarkMode from "@/components/DarkMode.vue";

describe("DarkMode.vue", () => {
    
    it("should display a button when mounted", () => {
    //mounts the darkMode-vue component    
    const wrapper = shallowMount(DarkMode);
    
    const acutal = wrapper.find(".dark-mode-toggle")
    //checks if button is there when mounted
    expect(acutal).toBeTruthy(); 
  });

  it("should change data value from false to true after click event",async () => {
    
    const wrapper = shallowMount(DarkMode);
    
    //checks if data value is fales from start 
    expect(wrapper.vm.darkMode).toBe(false);

    //finds the button element and click once to trigger event
    const checkbox = wrapper.find('input[type="checkbox"]')
    await checkbox.setChecked()

    //checks if data value is true after click event 
    //expect(wrapper.vm.darkMode).toBe(true);
     
   expect(checkbox.element.checked).toBeTruthy()
   expect(wrapper.vm.darkMode).toBe(true);

    });
  
  it("should change the button icon when switching from light to dark mode", () => {

  })
});