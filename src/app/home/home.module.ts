import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material} from '../Material'
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { EstructuraComponent } from './estructura/estructura.component';



@NgModule({
  declarations: [MisionComponent, VisionComponent, EstructuraComponent],
  imports: [
    CommonModule,
    Material
  ],
  exports: [
    MisionComponent,
    VisionComponent,
    EstructuraComponent
  ]
})
export class HomeModule { }
