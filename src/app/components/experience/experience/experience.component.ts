import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceData: any;

  constructor(private datosPortafolio: PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.experienceData=data;
    });
  }

}
