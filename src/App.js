import React from "react";
import CounterComponent from "./CounterComponent";
import { Provider } from "react-redux";
import store from "./redux/store"
const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;
