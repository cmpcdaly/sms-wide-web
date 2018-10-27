import { bootstrap } from 'angular';
import { MAIN_MODULE } from 'main/main.module';

console.log('Bootstrapping app...');
bootstrap(document, [MAIN_MODULE]);