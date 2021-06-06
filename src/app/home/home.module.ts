import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material} from '../Material'
import { EstructuraComponent } from './estructura/estructura.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AboutComponent } from './about/about.component';
import {HazteVoluntarioComponent} from './hazte-voluntario/hazte-voluntario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AlianzasComponent } from './alianzas/alianzas.component';
import { SedesComponent } from './sedes/sedes.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { JornadaComponent } from './jornada/jornada.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ImagenesComponent } from './imagenes/imagenes.component'



@NgModule({
  declarations: [ EstructuraComponent, ServiciosComponent, AboutComponent,HazteVoluntarioComponent,
    ContactoComponent, AlianzasComponent, SedesComponent, JornadasComponent, JornadaComponent,
     ProyectosComponent, ImagenesComponent],
  imports: [
    CommonModule,
    Material
  ],
  exports: [

    EstructuraComponent,
    ServiciosComponent,
    AboutComponent,
    HazteVoluntarioComponent,
    ContactoComponent,
    AlianzasComponent,
    SedesComponent,
    JornadasComponent,
    JornadaComponent,
    ProyectosComponent,
    ImagenesComponent
  ]
})
export class HomeModule { }
