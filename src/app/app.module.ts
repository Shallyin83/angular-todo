import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { todo } from './reducers/todo';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from 'app/shared/shared.module';
import { TodoEffects } from "app/effects/todoEffects";
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './shared/guard/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,    
    HttpModule,
    FormsModule,
    AppRoutes,
    StoreModule.provideStore({ todo }),
    EffectsModule.run(TodoEffects),
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
