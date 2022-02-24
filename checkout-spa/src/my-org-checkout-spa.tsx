import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return (
      <div>Error !!</div>
    );
  },
});

let msg=`checkout-spa => Ejecutado mEtodo`;

export function bootstrap(props) {
  console.log(`${msg} @bootstrap`);
  return lifecycles.bootstrap(props);
}

export function mount(props) {
  console.log(`${msg} @mount`);
  return lifecycles.mount(props);
}

export function unmount(props) {
  console.log(`${msg} @unmount`);
  return lifecycles.unmount(props);
}


