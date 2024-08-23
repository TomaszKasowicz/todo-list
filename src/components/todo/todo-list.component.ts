import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


/**
 * Implement simple todo list with toggling Done/Not Done
 * 
 * FORM:
 * - Implement Input using Reactive Forms
 * - Task Name should be REQUIRED
 * - Task Name should have MINIMUM 3 CHARACTERS
 * - Add button should be enabled on when Task Name is VALID
 * 
 * TODO SECTION:
 * - Todo section should be visible only when there is at least one task
 * 
 * COUNTER:
 * - Counter should calculate number of remaining tasks out of all tasks
 * 
 * TASK LIST:
 * - Iterate over "items"
 * - When NOT DONE task is clicked it should be marked as DONE
 * - When DONE task is clicked it should be marked as NOT DONE
 * - Task marked as DONE should have a strikethrough over text (see CSS)
 */


//--------------------------- TODO ITEM MODEL -------------------------
export type TodoItem = {
    task: string;
    isDone: boolean
  }
//---------------------------------------------------------------------



//------------------------- TODO LIST COMPONENT -----------------------
@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [RouterLink],
    styles: [`.done { text-decoration: line-through;}`],
    template: `
    <a routerLink="../expected">Show expected outcome</a>
    
    <form style="padding-top: 1rem">
        <input type="text" placeholder="Task Name"/>
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
//---------------------------------------------------------------------