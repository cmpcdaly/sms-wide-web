import template from './server.html';
import './server.scss';

class ServerController {
  constructor() { 'ngInject'; }

  public $onInit() {
    console.log('server');
  }
}

export const ServerComponent: ng.IComponentOptions = {
  controller: ServerController,
  template
};
