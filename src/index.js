import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import { BodyContainer } from "./styles/Container/Mainbody.style";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <BodyContainer> */}
          <Main />
        {/* </BodyContainer> */}
      </Router>
    </Provider>
  </React.StrictMode>
);
