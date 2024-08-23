import { Routes } from "@angular/router";
import { TodoListComponent } from "./components/todo/todo-list.component";
import { ExpectedComponent } from "./components/expected/expected.component";

export const routes: Routes = [
    {
        path: 'todo-list',
        component: TodoListComponent
    },
    {
        path: 'expected',
        component: ExpectedComponent
    },
    {
        path: '',
        redirectTo: 'todo-list',
        pathMatch: 'full'
    }
]