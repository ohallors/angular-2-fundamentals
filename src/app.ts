import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {SeedApp} from './app/seed-app';
import {TodoService} from "./app/components/todo/todo-service";
import {TodoList} from "./app/components/todo/todo-list";
import {SearchPipe} from "./app/components/todo/search-pipe";
import {StatusSelector} from "./app/components/about/status-selector";
import {SearchBox} from "./app/components/about/search-box";

bootstrap(SeedApp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  TodoService,
  TodoList,
  SearchPipe,
  StatusSelector,
  SearchBox
])
.catch(err => console.error(err));
