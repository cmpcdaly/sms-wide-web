import template from './client.html';
import './client.scss';

class ClientController {
  constructor() { 'ngInject'; }

  public $onInit() {
    console.log('client');
  }
}

export const ClientComponent: ng.IComponentOptions = {
  controller: ClientController,
  template
};
