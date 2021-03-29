import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { Material } from '../Material';
import { FooterComponent } from './footer/footer.component'



@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    Material
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class ComunModule { }
