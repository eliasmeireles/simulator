import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileSaveService} from './file-save.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ FileSaveService ]
})
export class FileSaveModule { }
