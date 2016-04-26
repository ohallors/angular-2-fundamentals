import {Component} from 'angular2/core';
import {TodoService} from "./todo-service";
import {TodoItemRenderer} from "./todo-item-render";
import {SearchPipe} from "./search-pipe";
import {StartedPipe} from "./started-pipe";

@Component({
    selector: 'todo-list',
    pipes: [StartedPipe],
    directives: [TodoItemRenderer],
    template: `<div>
        <ul>
            <li *ngFor="#todo of todoService.todos | started">
            <todo-item-render
            [todo]="todo"
            (toggle)="todoService.toggleTodo($event)"></todo-item-render>
            </li>
        </ul>
    </div>`
})
export class TodoList {
    constructor(public todoService:TodoService) {

    }
}