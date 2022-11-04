import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationData: any;

  constructor(private datosPortafolio: PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.educationData=data;
    });
  }

}
