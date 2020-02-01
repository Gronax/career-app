import { AppContainer } from 'react-hot-loader';
import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import "./src/styles.scss";

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./src/App', () => render(App));
