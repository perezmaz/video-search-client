import { shallowMount, createLocalVue } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";
import store from "@/store";
import router from "@/router";
import Result from "../../src/views/Results.vue";
import Header from "../../src/components/Header.vue";
import List from "../../src/components/List.vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe("Result.vue", () => {
  const wrapper = shallowMount(Result, {
    localVue,
    router,
    store,
  });

  const wrapperHeader = shallowMount(Header, {
    localVue,
    router,
    store,
  });

  const wrapperList = shallowMount(List, {
    localVue,
    router,
    store,
  });

  it("render Result", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("correct view at Result", () => {
    expect(wrapperHeader.text()).toMatch("Video-Search");
    expect(wrapperList.text()).toMatch("Resultados de búsqueda");
  });

  it("empty search at Header", async () => {
    const form = wrapperHeader.find("b-form-stub");
    await wrapperHeader.setData({ text: "" });
    await form.trigger("submit");
    expect(wrapperHeader.vm.isValid).toBe(false);
  });

  it("search at Header", async () => {
    const form = wrapperHeader.find("b-form-stub");
    await wrapperHeader.setData({ text: "hola" });
    await form.trigger("submit");
    expect(wrapperHeader.vm.isValid).toBe(null);    
  });
});
