import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Alumno } from 'src/app/models/alumno';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-list-alumno',
  templateUrl: './list-alumno.component.html',
  styleUrls: ['./list-alumno.component.css']
})
export class ListAlumnoComponent implements OnInit {
  displayedColumns: string[] = ['nombres', 'apellidos', 'correo', 'estado', 'telefono', 'acciones'];
  dataSource : MatTableDataSource<Alumno> = new MatTableDataSource();


  listAlumno:Alumno[]=[
    {nombres: "Jose Ramirez", apellidos: "Ramirez", correo: "joseas@asda.com", estado: "Aprobado", telefono: 93453364},
  ];
  constructor(private alumnoService : AlumnoService, public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarAlumnos();
    console.log(this.listAlumno);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  cargarAlumnos() {
    this.listAlumno = this.alumnoService.getAlumnos();
    this.dataSource = new MatTableDataSource(this.listAlumno);
  }

  eliminarAlumno(index: number) {

    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Esta seguro que desea eliminar el Alumno?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar') {
        this.alumnoService.eliminarAlumno(index);
        this.cargarAlumnos();
        this.snackBar.open('El Alumno fue eliminado con exito!', '', {
          duration: 3000
        });
      }
    });
  }
}
