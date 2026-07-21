import { Component, provideZoneChangeDetection, ChangeDetectionStrategy } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
    <h1>TODO List</h1>
    <router-outlet/>
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideZoneChangeDetection(),provideRouter(routes)]
});
