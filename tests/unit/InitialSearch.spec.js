import { shallowMount, createLocalVue } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";
import store from "@/store";
import router from "@/router";
import InitialSearch from "../../src/views/InitialSearch.vue";
import Search from "../../src/components/Search.vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe("InitialSearch.vue", () => {
  const wrapper = shallowMount(InitialSearch, {
    localVue,
    router,
    store,
  });

  const wrapperSearch = shallowMount(Search, {
    localVue,
    router,
    store,
  });

  it("render InitialSearch", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("correct view at InitialSearch", () => {
    expect(wrapper.text()).toMatch("Video-Search");
  });

  it("empty search at InitialSearch", async () => {
    const form = wrapperSearch.find("b-form-stub");
    await wrapperSearch.setData({ text: "" });
    await form.trigger("submit");
    expect(wrapperSearch.vm.isValid).toBe(false);
  });

  it("search at InitialSearch", async () => {
    const form = wrapperSearch.find("b-form-stub");
    await wrapperSearch.setData({ text: "hola" });
    await form.trigger("submit");
    expect(wrapperSearch.vm.isValid).toBe(true);
  });
});
