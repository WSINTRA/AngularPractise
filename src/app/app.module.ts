import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
//Services
import {NewRecipe} from './recipe.service';
import {SailsService} from './sailsBackEnd.service';
import {RecipeStep} from './recipeStep.service';
//Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeStepComponent } from './recipe-step/recipe-step.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { StepComponent } from './recipe-step/step/step.component';
import { StepListComponent } from './recipe-step/step-list/step-list.component';
import { RecipeInfoComponent } from './recipe/recipe-info/recipe-info.component';
import { GetVideoID } from './videoStringPipe';

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
    GetVideoID
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
  ],
  providers: [NewRecipe, SailsService, RecipeStep],
  bootstrap: [AppComponent]
})
export class AppModule { }
