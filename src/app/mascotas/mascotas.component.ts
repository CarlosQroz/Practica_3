import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  @Input() hola:String="";
  
  nombre: String = 'Peluza'
  edad: number = 2
  array = ['Hola el/ella es '+ this.nombre + ' y tiene  ' + this.edad+ ' años']
  constructor() { }

  ngOnInit(): void {
  }

}
