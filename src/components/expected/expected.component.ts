import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    imports: [RouterLink],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
    <a routerLink="../todo-list">Back to Todo List Component</a>
    <h2>Expected Outcome</h2>
    <img style="outline: 1px solid black" src="assets/todos.gif" alt="Expected Output"/>

    `
})
export class ExpectedComponent {}