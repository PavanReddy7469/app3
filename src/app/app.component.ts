import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TwowaybindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app3';
}
