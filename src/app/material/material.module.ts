import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';

const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  
})
export class MaterialModule { }
