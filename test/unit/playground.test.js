import { describe, it, expect } from "vitest";

import { evenOrOdd, multiply } from "@/playground";

describe("basic math", () => {
  it("should add two numbers", () => {
    expect(1 + 1).toBe(2);
  });
  describe("evenOrOdd", () => {
    describe("when number is even", () => {
      it("should return even", () => {
        expect(evenOrOdd(2)).toBe("even");
      });
    });
    describe("when number is odd", () => {
      it("should return odd", () => {
        expect(evenOrOdd(1)).toBe("odd");
      });
    });
  });
  describe("multiply", () => {
    it("should multiply two numbers", () => {
      expect(multiply(2, 2)).toBe(4);
    });
  });
});
