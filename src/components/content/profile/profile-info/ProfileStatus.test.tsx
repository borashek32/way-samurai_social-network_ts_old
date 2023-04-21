import React, {useState} from "react"
import {ProfileStatus} from "./ProfileStatus"
import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'


describe("ProfileStatus component", () => {

  test("status from props should be in state", () => {
    render(<ProfileStatus status={"1234"} isOwner={false} updateStatus={(status) => {}}/>)
    const status = screen.getByTestId("status")

    expect(status).toHaveTextContent("1234")
  });
});