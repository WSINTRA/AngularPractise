import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatButtonToggleModule,
  MatListModule,
  MatCardModule,
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  
})
export class MaterialModule { }
