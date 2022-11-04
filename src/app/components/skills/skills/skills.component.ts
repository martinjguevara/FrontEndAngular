import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsData: any;

  constructor(private datosPortafolio: PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data=> {this.skillsData= data})
  }

}
