import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonButtons, IonBackButton, IonNav } from '@ionic/angular/standalone';
import { MainComponent } from './main/main.component';
 
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonButtons, IonBackButton, IonNav],
})
export class Tab4Page implements OnInit {

  component = MainComponent

  constructor() { }

  ngOnInit() {
  }

}
