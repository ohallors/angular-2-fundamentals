import {Component, Input, ViewEncapsulation, Output, EventEmitter} from "angular2/core";

@Component({
    encapsulation: ViewEncapsulation.Native,
    selector: 'todo-item-render',
    template: `
    <style>
        .completed {
            text-decoration: line-through;
        }
     </style>
     <div>
            <span [ngClass]="todo.status">{{todo.title}}</span>
            <button (click)="toggle.emit(todo)">Toggle</button>
    </div>`
})
export class TodoItemRenderer{
    @Input() todo;
    @Output() toggle = new EventEmitter();
}