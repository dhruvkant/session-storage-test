import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AesService } from './services/aes.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AesService],
  exports: []
})
export class CoreModule { }