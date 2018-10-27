import { default as uiRouter, StateRegistry } from '@uirouter/angularjs';
import { module } from 'angular';

import { ClientComponent } from 'client/client.component';
import { MainComponent } from 'main/main.component';
import { ServerComponent } from 'server/server.component';
import { SettingsComponent } from 'settings/settings.component';
import { ClientState, MainState, ServerState, SettingsState } from './main.states';
import { NavComponent } from './nav/nav.component';
import { RouterConfig } from './router.config';

const MAIN_MODULE_DEPENDENCIES = [
  uiRouter
];

export const MAIN_MODULE = module('smsww', MAIN_MODULE_DEPENDENCIES)
  .component('main', MainComponent)
  .component('settings', SettingsComponent)
  .component('client', ClientComponent)
  .component('server', ServerComponent)
  .config(RouterConfig)

  .component('swwNav', NavComponent)

  .config(($stateRegistryProvider: StateRegistry) => {
    'ngInject';
    $stateRegistryProvider.register(MainState);
    $stateRegistryProvider.register(SettingsState);
    $stateRegistryProvider.register(ClientState);
    $stateRegistryProvider.register(ServerState);
  })
  .name;
