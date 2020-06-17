import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MaterialModule} from './material/material.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import {NewRecipe} from './recipe.service';
import {SailsService} from './sailsBackEnd.service';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeStepComponent } from './recipe-step/recipe-step.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { StepComponent } from './recipe-step/step/step.component';
import { StepListComponent } from './recipe-step/step-list/step-list.component';
import { RecipeInfoComponent } from './recipe/recipe-info/recipe-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    RecipeFormComponent,
    PageNotFoundComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeStepComponent,
    RecipeListComponent,
    StepComponent,
    StepListComponent,
    RecipeInfoComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ],
  providers: [NewRecipe, SailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
