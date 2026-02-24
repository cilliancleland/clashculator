import { shallowMount } from "@vue/test-utils";
import TopButtons from "@/components/TopButtons.vue";
import { vi } from "vitest";

const baseProps = {
  armyUnchanged: false,
  showFaq: vi.fn(),
  showOptions: vi.fn(),
  reset: vi.fn(),
  saveLocally: vi.fn(),
  deleteLocally: vi.fn(),
};

describe("TopButtons.vue", () => {
  it("renders faq, reset, print and options buttons and calls events on click", async () => {
    const wrapper = shallowMount(TopButtons as any, {
      props: { ...baseProps },
    });
    const faqButton = wrapper.find('button[title="FAQ"]');
    expect(faqButton.exists()).toBe(true);
    await faqButton.trigger("click");
    expect(baseProps.showFaq).toHaveBeenCalled();

    const optionsButton = wrapper.find('button[title="Options"]');
    expect(optionsButton.exists()).toBe(true);
    await optionsButton.trigger("click");
    expect(baseProps.showOptions).toHaveBeenCalled();

    const resetButton = wrapper.find('button[title="Reset"]');
    expect(resetButton.exists()).toBe(true);
    await resetButton.trigger("click");
    expect(baseProps.reset).toHaveBeenCalled();

    const printButton = wrapper.find('button[title="Print"]');
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});
    expect(printButton.exists()).toBe(true);
    await printButton.trigger("click");
    expect(printSpy).toHaveBeenCalled();
  });
});

it("renders save and delete buttons with correct disabled state and calls events on click", async () => {
  const wrapper = shallowMount(TopButtons as any, {
    props: { ...baseProps, armyUnchanged: true },
  });
  const saveButton = wrapper.find('button[title="Save locally"]');
  const deleteButton = wrapper.find('button[title="Delete army from device"]');
  // local army exists
  expect(saveButton.exists()).toBe(true);
  expect(deleteButton.exists()).toBe(true);
  expect(saveButton.attributes("disabled")).toBeDefined();
  expect(deleteButton.attributes("disabled")).toBeUndefined();
  await saveButton.trigger("click");
  expect(baseProps.saveLocally).not.toHaveBeenCalled();
  await deleteButton.trigger("click");
  expect(baseProps.deleteLocally).toHaveBeenCalled();

  // local army does not exist
  await wrapper.setProps({ armyUnchanged: false });
  vi.clearAllMocks();

  expect(saveButton.attributes("disabled")).toBeUndefined();
  await saveButton.trigger("click");
  expect(baseProps.saveLocally).toHaveBeenCalled();
  expect(deleteButton.attributes("disabled")).toBeDefined();
  await deleteButton.trigger("click");
  expect(baseProps.deleteLocally).not.toHaveBeenCalled();
});
