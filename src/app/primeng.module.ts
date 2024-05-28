import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule} from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';


//Módulos PrimeNG
const modPrime: any =[
  AvatarModule,
  ButtonModule,
  MenubarModule,
  ToolbarModule,
  TooltipModule,
  MenuModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrime
  ],
  exports:[
    modPrime //Agregar arreglo de componentes
  ]
})
export class PrimengModule { }
