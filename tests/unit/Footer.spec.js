import { shallowMount,mount } from '@vue/test-utils'
import Footer from "@/components/Footer";

describe('Footer.vue', () => {
  //should to be able to contact the owners of the site
  it('should have owners of the site', () => {
    const wrapper =  shallowMount(Footer,{
      propsData: {
        owner: mockedOwnerData()
        }
    })
    const owner = wrapper.find('.owner').exists();
    expect(owner).toBeTruthy();
  });

  it('should has the owners name', () => {
    const wrapper =  shallowMount(Footer,{
      propsData: {
        owner: mockedOwnerData()
        }
    });
    const expected=wrapper.vm.owner.name;//"Humpty Dumpty";
    const actual = wrapper.find('.owner-name').text();
    expect(actual).toMatch(expected);
  });

  it('should has the owners mobile', () => {
    const wrapper =  mount(Footer,{
      propsData: {
        owner: mockedOwnerData()
        }
    });
    const expected = wrapper.vm.owner.mobile.intro+wrapper.vm.owner.mobile.nr;
    const actual = wrapper.find('.owner-mobile').text();
    expect(actual).toBe(expected);
  });

  it('should has the owners epost', () => {
    const wrapper =  mount(Footer,{
      propsData: {
        owner: mockedOwnerData()
        }
    });
    const expected = wrapper.vm.owner.epost;
    const actual = wrapper.find('.owner-epost').text();
    expect(actual).toMatch(expected);
  });

});


const mockedOwnerData =()=> {
  return {
    "name": "Hump Dump",
    "email":"test@test.com",
    "mob":"0000"
  }
}