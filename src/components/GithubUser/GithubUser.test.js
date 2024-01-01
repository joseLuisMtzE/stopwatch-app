import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import GithubUser from "./GithubUser";
import { Linking } from "react-native";

let component;

describe("<GithubUser /> ", () => {
  beforeEach(() => {
    component = render(<GithubUser />);
  });

  it("Renderiza correctamente", () => {
    expect(component).toBeDefined();
    expect(component.getByTestId("github-button")).toBeDefined();
  });

  it("Renderiza boton", () => {
    const button = component.getByTestId("github-button");
    fireEvent(button, "press");
    expect(Linking.openURL).toHaveBeenCalledWith(
      "https://github.com/joseLuisMtzE"
    );
  });
});
