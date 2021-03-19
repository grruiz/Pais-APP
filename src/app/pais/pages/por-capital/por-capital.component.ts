import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  placeholder: string = 'Introduce Capital'
  constructor(private paisService: PaisService) { }


  buscar(capital: string): void {
    this.hayError = false;
    this.termino = capital;
    this.paisService.buscarCapital(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(palabra: string) {
    this.hayError = false;
    //TODO: crear sugerencias
  }
}
