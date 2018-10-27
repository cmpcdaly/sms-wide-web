import { Ng1StateDeclaration } from '@uirouter/angularjs';

export const MainState: Ng1StateDeclaration = {
  name: 'main',
  // url: '',
  component: 'main'
};

export const SettingsState: Ng1StateDeclaration = {
  name: 'settings',
  url: '/settings',
  component: 'settings'
};

export const ClientState: Ng1StateDeclaration = {
  name: 'client',
  url: '/client',
  component: 'client'
};

export const ServerState: Ng1StateDeclaration = {
  name: 'server',
  url: '/server',
  component: 'server'
};
