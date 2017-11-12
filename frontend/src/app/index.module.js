/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { AuthController } from './auth/auth.controller';
import { NavbarController } from './components/navbar/navbar.controller';
import { CompareToDirective } from './directives/compareTo.directive';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';


angular.module('myMessageFront', ['ui.router', 'ui.bootstrap', 'toastr', 'satellizer'])
  .constant('API_URL', 'http://localhost:5000/')
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('AuthController', AuthController)
  .controller('NavbarController', NavbarController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('compareTo', CompareToDirective);
