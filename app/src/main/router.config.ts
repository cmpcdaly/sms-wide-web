import { UrlService } from '@uirouter/angularjs';

export function RouterConfig($urlServiceProvider: UrlService, $locationProvider: ng.ILocationProvider) {
  'ngInject';

  $locationProvider.html5Mode({ enabled: false, requireBase: false }).hashPrefix('!');
  $urlServiceProvider.rules.otherwise({ state: 'main' });
}
