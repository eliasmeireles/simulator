import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiConfigComponent } from './api-config.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ApiConfigComponent ],
  exports: [ ApiConfigComponent ],
  providers: [ ApiConfigComponent ]
})
export class ApiConfigModule { }
