import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone,
});

let msg=`dashboard-spa => Ejecutado mEtodo`;

export function bootstrap(props) {
  console.log(`${msg} @bootstrap`);
  return lifecycles.bootstrap;
}

export function mount(props) {
  console.log(`${msg} @mount`);
  return lifecycles.mount;
}

export function unmount(props) {
  console.log(`${msg} @unmount`);
  return lifecycles.unmount;
}
