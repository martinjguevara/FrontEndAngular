import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectData: any;

  constructor(private datosPortafolio: PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {this.projectData= data})
  }

}
