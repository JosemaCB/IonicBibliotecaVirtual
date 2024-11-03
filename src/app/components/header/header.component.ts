import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class HeaderComponent  implements OnInit {

  titulo: ModelSignal<string> = model.required();

  constructor() { }

  ngOnInit() {}

}
