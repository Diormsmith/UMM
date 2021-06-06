import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './home/about/about.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { HazteVoluntarioComponent } from './home/hazte-voluntario/hazte-voluntario.component';
import { ProyectosComponent } from './home/proyectos/proyectos.component';
import { ServiciosComponent } from './home/servicios/servicios.component';


  const routes: Routes = [
    {path: '', component: AppComponent },
    {path: 'about', component: AboutComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'hazteVoluntario', component:HazteVoluntarioComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'ayuda', component:ProyectosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
