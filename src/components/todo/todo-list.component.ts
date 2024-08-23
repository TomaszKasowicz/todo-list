import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

//--------------------------- TODO ITEM MODEL -------------------------
export type TodoItem = {
    task: string;
    isDone: boolean
  }
//---------------------------------------------------------------------

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [RouterLink],
    styles: [`.done { text-decoration: line-through;}`],
    template: `
    <a routerLink="../expected">Show expected outcome</a>
    
    <form style="padding-top: 1rem">
        <input type="text" placeholder="Todo Name"/>
        <button type="button">Add</button>
    </form>

    <section #Todos>
      <h4>N remaining out of X Tasks</h4>
      <h1>Tasks List</h1>
      <ul>
        <li>Dummy Item (it should be deleted when implementing this task)</li>
        <li class="done">Dummy Done Item</li>
      </ul>
    </section>
    `
})
export class TodoListComponent {
    items: TodoItem[] = [];
}