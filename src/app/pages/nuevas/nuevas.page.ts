import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-nuevas',
  templateUrl: './nuevas.page.html',
  styleUrls: ['./nuevas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class NuevasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
