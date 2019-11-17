import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // This is what we need for routing

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';
import { LoggingService } from './logging.service';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'directory/:ninja', component: DirectoryComponent},
  { path: 'directory', component: DirectoryComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) // Add here array with paths and components
  ],
  exports: [

  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
