import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Faceplace Careers");
    expect(companyName).toBeInTheDocument();
    screen.debug();
  });
  it("displays menu items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuText = navigationMenuItems.map(
      (item) => item.textContent
    );
    console.log(navigationMenuText);
    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at Faceplace Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
