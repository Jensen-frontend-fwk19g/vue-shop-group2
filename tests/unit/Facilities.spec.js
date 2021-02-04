import { shallowMount, mount } from "@vue/test-utils";
import MainFacilities from "@/components/MainFacilities.vue";
import Facilities from "@/views/Facilities.vue";
import { convertToObject } from "typescript";

describe("Facilities.vue & MainFacilities.vue", () => {
  it('should contain a componenente named "MainFacilities"', () => {
    //arrange
    const wrapper = mount(Facilities);
    //act
    const MainFacilitiesComponent = wrapper.findComponent({
      name: "MainFacilities",
    });
    //assert
    expect(MainFacilitiesComponent.exists()).toBe(true);
  });

  it("should, when the component MainFacilities is mounted, exist en header tag", () => {
    const wrapper = shallowMount(MainFacilities);
    const header = wrapper.find(".header");
    expect(header.exists()).toBe(true);
  });

  // it("should, when the component is mounted,to check if there is a class description", () => {
  //   const wrapper = shallowMount(MainFacilities);
  //   const description = wrapper.find(".header").attributes();

  //   expect(wrapper.find(".header").attributes().style).toBe(
  //     'background: url("./../assets/banner.webp")'
  //   );
  // });

  it("should route when btn is clicked and the router should be called", async () => {
    const mockRoute = {
      path: "/MainFacilities/Form/",
    };
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = shallowMount(MainFacilities, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    await wrapper.find(".become").trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/MainFacilities/Form/");
    expect(mockRoute.path).toBe("/MainFacilities/Form/");
  });
});
