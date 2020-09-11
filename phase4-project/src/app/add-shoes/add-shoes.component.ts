import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shoes } from '../shoes';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-add-shoes',
  templateUrl: './add-shoes.component.html',
  styleUrls: ['./add-shoes.component.css']
})
export class AddShoesComponent implements OnInit {
  private shoes:Shoes;
  constructor(private shoesService:ShoesService, private router:Router) {
    this.shoes=new Shoes(); //Creating new obj so that the form fields are refreshed
   }

   public addShoes():void{
     this.shoesService.addShoes(this.shoes).subscribe(res=>{
       this.shoes=new Shoes();
       this.router.navigate(['/shoesList']);
     })
   }
  ngOnInit() {
  }

}
