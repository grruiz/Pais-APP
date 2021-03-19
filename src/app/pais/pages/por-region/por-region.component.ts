import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right:5px;
    }
  `
  ]
})
export class PorRegionComponent {


  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  constructor(private paisService: PaisService) { }

  paises: Country[] = [];

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = []; //Clean array
    this.paisService.buscarRegion(region)
      .subscribe((pais) => {
        this.paises = pais;
      });
    console.log('region activa: ', this.regionActiva);
  }
}
