import { Injectable } from '@angular/core';

/* 1. Importe el módulo del HttpClient */
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  /* 2.Atributo URL */
  private URL: string = 'https://dawm-ca66c-default-rtdb.firebaseio.com/collection.json';

  /* 3. Inyección de dependencia del HttpClient */
  constructor(private http:HttpClient) { }

  /* 4. Método con la petición HTTP */
  getResponse() {
      return this.http.get(this.URL);
  }

  /* 5. Método con la petición HTTP */ 
  postResponse(data: any) {
      return this.http.post(this.URL, data);
  }

}
