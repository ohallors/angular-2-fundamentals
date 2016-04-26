import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {TodoInput} from '../todo/todo-input.ts';
import {TodoList} from "../todo/todo-list";


@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.html',
  styleUrls: ['app/components/about/about.css'],
  providers: [],
  directives: [TodoInput, TodoList],
  pipes: []
})
export class About {

  constructor(http: Http) {

  }

  ngOnInit() {

  }
}
