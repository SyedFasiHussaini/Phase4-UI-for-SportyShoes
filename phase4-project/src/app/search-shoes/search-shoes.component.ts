import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shoes } from '../shoes';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-search-shoes',
  templateUrl: './search-shoes.component.html',
  styleUrls: ['./search-shoes.component.css']
})
export class SearchShoesComponent implements OnInit {
  private shoes:Shoes;
  private id:number;
  constructor(private shoesService:ShoesService, private router:Router) {
    this.shoes=new Shoes();
   }

   public getShoesById(id:number){
     this.shoesService.getShoesById(this.id).subscribe(res=>{
      this.shoes=new Shoes();
      this.router.navigate(['/shoesList']);
   })
  }
  ngOnInit() {
  }

}
