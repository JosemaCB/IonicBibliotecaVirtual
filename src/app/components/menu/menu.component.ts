import {Component, inject, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Componente} from "../../common/interfaces";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink
  ]
})
export class MenuComponent  implements OnInit {
  private dataService: DataService = inject(DataService);
  componentes: Componente[] = [];

  constructor() { }

  ngOnInit() {
    this.loadComponentes();
  }

  private loadComponentes() {
    this.dataService.getComponentesMenu().subscribe(
      {
        next: (value: Componente[]) => this.componentes = value,
        error: error => console.log(error),
        complete: () => console.log('Componentes cargados correctamente.'),
      }
    )
  }
}
