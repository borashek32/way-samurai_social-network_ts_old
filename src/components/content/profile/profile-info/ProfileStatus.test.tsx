import React, {useState} from "react"
import {ProfileStatus} from "./ProfileStatus"
import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'


describe("ProfileStatus component", () => {

  test("status from props should be in state", () => {
    render(<ProfileStatus status={"1234"} updateStatus={(status) => {}}/>)
    const status = screen.getByTestId("status")

    expect(status).toHaveTextContent("1234")
  });

  test("input shouldn't be seen if status is set", async () => {
    render(<ProfileStatus status={"1324"} updateStatus={(status) => {}}/>)

    expect(await screen.findByTestId("Enter status")).not.toBeInTheDocument()
  });


});