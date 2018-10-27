import template from './main.html';
import './main.scss';

class MainController {
  constructor() { 'ngInject'; }

  public $onInit() {
    console.log('$onInit');
  }
}
export const MainComponent: ng.IComponentOptions = {
  controller: MainController,
  template
};
