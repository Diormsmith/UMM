import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { Material } from '../Material';
import { FooterComponent } from './footer/footer.component'
//import { ImagenesComponent} from '../home/imagenes/imagenes.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    Material
   // ImagenesComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class ComunModule { }
