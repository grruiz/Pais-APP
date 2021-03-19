import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
  li{
    cursor:pointer;
  }
  `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  mostrarSugerencias: boolean = false;

  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  placeholder: string = 'Introduce Pais'
  constructor(private paisService: PaisService) { }


  buscar(pais: string): void {
    this.hayError = false;
    this.termino = pais;
    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 3),
    (err)=>this.paisesSugeridos =[]);
  }

  buscarSugerido(termino:string) {
    this.buscar(termino);
  }
}
