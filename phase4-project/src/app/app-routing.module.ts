import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddShoesComponent } from './add-shoes/add-shoes.component';
import { DeleteShoesComponent } from './delete-shoes/delete-shoes.component';
import { SearchShoesComponent } from './search-shoes/search-shoes.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { UpdateShoesComponent } from './update-shoes/update-shoes.component';


const routes: Routes = [
  {path:'addShoes', component:AddShoesComponent},
  {path:'removeShoes', component:DeleteShoesComponent},
  {path:'searchShoes', component:SearchShoesComponent},
  {path:'shoesList', component:ShoesListComponent},
  {path:'updateShoes', component:UpdateShoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
