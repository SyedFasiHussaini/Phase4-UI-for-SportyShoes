import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShoesComponent } from './add-shoes/add-shoes.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { UpdateShoesComponent } from './update-shoes/update-shoes.component';
import { SearchShoesComponent } from './search-shoes/search-shoes.component';
import { DeleteShoesComponent } from './delete-shoes/delete-shoes.component';
import { ShoesService } from './shoes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddShoesComponent,
    ShoesListComponent,
    UpdateShoesComponent,
    SearchShoesComponent,
    DeleteShoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
