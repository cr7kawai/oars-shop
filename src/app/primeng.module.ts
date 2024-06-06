import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule} from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';

//Módulos PrimeNG
const modPrime: any =[
  AvatarModule,
  ButtonModule,
  MenubarModule,
  ToolbarModule,
  TooltipModule,
  MenuModule,
  CardModule,
  InputTextModule,
  ToastModule,
  InputTextareaModule,
  ConfirmPopupModule,
  DialogModule,
  ImageModule,
  FileUploadModule,
  TableModule,
  TagModule,
  RatingModule
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
