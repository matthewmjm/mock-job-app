import { render, screen } from "@testing-library/vue";

import TheHeadline from "@/components/TheHeadline.vue";
import { nextTick } from "vue";

describe("TheHeadline", () => {
  it("displays introductory action verb", () => {
    vi.useFakeTimers();
    render(TheHeadline);

    const actionPhrase = screen.getByRole("heading", {
      name: /build for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("changes action verb at a specific interval", () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    vi.stubGlobal("setInterval", mock);

    render(TheHeadline);

    expect(mock).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it("swaps action verb after interval", async () => {
    vi.useFakeTimers();
    render(TheHeadline);
    vi.advanceTimersToNextTimer();

    await nextTick();
    const actionPhrase = screen.getByRole("heading", {
      name: /create for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();
  });

  it("removes interval when component disappears", () => {
    vi.useFakeTimers();
    const clearInterval = vi.fn();
    vi.stubGlobal("clearInterval", clearInterval);

    const { unmount } = render(TheHeadline);
    unmount();

    expect(clearInterval).toHaveBeenCalled();
    vi.useRealTimers();
  });
});
