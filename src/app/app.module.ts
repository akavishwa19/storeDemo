import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { studentReducer } from './state/student.reducers';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({student:studentReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
