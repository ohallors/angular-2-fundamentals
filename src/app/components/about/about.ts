import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {TodoInput} from '../todo/todo-input.ts';
import {TodoList} from "../todo/todo-list";
import {StatusSelector} from "./status-selector";
import {SearchBox} from "./search-box";


@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.html',
  styleUrls: ['app/components/about/about.css'],
  providers: [],
  directives: [TodoInput, TodoList, StatusSelector, SearchBox],
  pipes: []
})
export class About {

  constructor(http: Http) {

  }

  ngOnInit() {

  }
}
