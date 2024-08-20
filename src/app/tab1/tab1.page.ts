import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonInput, IonButton, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

 /* 1. Importe el módulo con la directiva @ngFor */
 import { CommonModule } from '@angular/common'

 /* 3. Importe del método http */
 import { HttpClientModule } from  '@angular/common/http';

 /* 4. Importe de la interfaz */
 import { Data } from '../interfaces/data';

 /* 5. Importe del servicio */
 import { ProviderService } from '../services/provider.service';

 /* 6. Importe lo constructores de formulario */
 import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HttpClientModule, ReactiveFormsModule, CommonModule,  IonLabel, IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent
  ],
  /* 8. Proveedor de servicios */
  providers: [ProviderService],
})
export class Tab1Page {

  /* 9. Atributo con el tipo de dato de la interfaz */
  public data : Data[] = [];

  /* 10. Formulario reactivo */
  checkoutForm = this.formBuilder.group({
    texto: ''
  });
   /* 11. Inyección de dependencia del servicio */
   constructor(private dataProvider: ProviderService , private formBuilder: FormBuilder) { }
/* 12. Ejecución de la petición y suscripción de la respuesta */
ngOnInit() {
  this.loadData()
}

loadData() {
  this.dataProvider.getResponse().subscribe( response => {
    if( response != null) {
      this.data = Object.values(response) as Data[]
    }
      
  })
}
/* 13. Callback para el envío de datos */
onSubmit(): void {
  this.dataProvider.postResponse(this.checkoutForm.value).subscribe( (response) => {
          this.checkoutForm.reset();
          this.loadData()
  })
}

}