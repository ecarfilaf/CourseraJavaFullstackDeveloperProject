import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NoteComponent } from './note/note.component';
import { NoteserviceService } from './noteservice.service';
import { AddNoteComponent } from './addnote/add-note.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	MatIconModule,
	MatButtonModule,
	FormsModule
  ],
  providers: [
    provideAnimationsAsync(),
	NoteserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
