import { Component, OnInit } from '@angular/core';

import { IonNav, IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [IonNav, IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonButtons, IonBackButton]
})
export class MainComponent  implements OnInit {

  modal = ModalComponent

  constructor() { }

  ngOnInit() {}

}
