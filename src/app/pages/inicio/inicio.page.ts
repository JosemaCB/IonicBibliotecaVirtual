import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader, IonIcon, IonItem, IonLabel,
  IonList, IonListHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Componente} from "../../common/interfaces";
import {DataService} from "../../services/data.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonList, IonListHeader, IonItem, RouterLink, IonIcon, IonLabel]
})
export class InicioPage implements OnInit {
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
