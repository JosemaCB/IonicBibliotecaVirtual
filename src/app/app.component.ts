import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {MenuComponent} from "./components/menu/menu.component";
import {addIcons} from "ionicons";
import {book, star, thumbsUp} from "ionicons/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, MenuComponent],
})
export class AppComponent {
  constructor() {
    addIcons({star, book, thumbsUp})
  }
}
