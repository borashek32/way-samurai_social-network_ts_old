import {render, screen, waitFor} from "@testing-library/react";
import React from "react";
import Login from "./Login";
import {Provider} from "react-redux";
import {store} from "./../../redux/redux-store";
import {HashRouter} from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";

describe("Login component", () => {

  test("title Login should be in state", () => {
    render(<HashRouter>
      <Provider store={store}>
        <Login/>
      </Provider>
    </HashRouter>)
    const login = screen.getByTestId("login")

    expect(login).toBeInTheDocument()
  });

  test("password input should be in state in state and empty", () => {
    render(<HashRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </HashRouter>)

    expect(screen.getByTestId("password")).toHaveTextContent("Password")
  });

  test("button should be on login page", async () => {
    render(<HashRouter>
      <Provider store={store}>
        <Login/>
      </Provider>
    </HashRouter>)

    await waitFor(() => {
      expect(screen.getByRole("button")).toBeInTheDocument()
    })
  });

  test("'Remember Me' should be on login page", async () => {
    render(<HashRouter>
      <Provider store={store}>
        <Login/>
      </Provider>
    </HashRouter>)

    await waitFor(() => {
      expect(screen.getByText("Remember Me")).toBeInTheDocument()
    })
  });

  test("checkbox shouldn't be checked", async () => {
    render(<HashRouter>
      <Provider store={store}>
        <Login/>
      </Provider>
    </HashRouter>)
    const el = screen.getByTestId("rememberMe");
    await userEvent.click(el);

    expect(el).not.toBeDisabled();
    expect(el).toBeChecked();
  });
});