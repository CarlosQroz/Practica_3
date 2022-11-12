import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yo',
  templateUrl: './yo.component.html',
  styleUrls: ['./yo.component.css']
})
export class YoComponent implements OnInit {
  nombre: String = 'Carlos Quiroz'
  edad: number = 19
  educacion: string ='soy estudiante tecnico'
  mascotas: number = 2
  array = ['Hola me llamo '+ this.nombre+ ' tengo '+ this.edad +' de edad']

  constructor() { }

  ngOnInit(): void {
  }
  

}
