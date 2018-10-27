import template from './settings.html';
import './settings.scss';

class SettingsController {
  constructor() { 'ngInject'; }

  public $onInit() {
    console.log('settings');
  }
}

export const SettingsComponent: ng.IComponentOptions = {
  controller: SettingsController,
  template
};
