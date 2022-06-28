import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor() { }
  listAlumno:Alumno[]=[
    {nombres: "Jose", apellidos: "Ramirez", correo: "joseas@asda.com", estado: "Aprobado", telefono: 93453364},
    {nombres: "Maria ", apellidos: "Guzman", correo: "mariasd@asd.was", estado: "Aprobado", telefono: 91375784},
    {nombres: "Juana ", apellidos: "Rojas", correo: "juwnneas@sdfe.de", estado: "Desaprobado", telefono: 97845344},
    {nombres: "Katherine ", apellidos: "Ponce ", correo: "kenasdkk@asdasd.ew", estado: "Aprobado", telefono: 9745384},
    {nombres: "Cesar", apellidos: " Rodríguez ", correo: "wewad@sadas.ea", estado: "Desaprobado", telefono: 9778684}
  ];
  getAlumnos() {
    return this.listAlumno.slice();
  }

  eliminarAlumno(index: number) {
    this.listAlumno.splice(index, 1);
  }

  agregarAlumno(Alumno: Alumno) {
    this.listAlumno.unshift(Alumno);
  }

  getAlumno(index: number) {
    return this.listAlumno[index];
  }

  editAlumno(Alumno: Alumno, idAlumno: number){
    this.listAlumno[idAlumno].nombres = Alumno.nombres;
    this.listAlumno[idAlumno].correo = Alumno.correo;
    this.listAlumno[idAlumno].apellidos = Alumno.apellidos;
    this.listAlumno[idAlumno].telefono = Alumno.telefono;
    this.listAlumno[idAlumno].estado = Alumno.estado;
  }
}
