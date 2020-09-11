import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shoes } from '../shoes';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-update-shoes',
  templateUrl: './update-shoes.component.html',
  styleUrls: ['./update-shoes.component.css']
})
export class UpdateShoesComponent implements OnInit {

  private shoes:Shoes;
  constructor(private shoesService:ShoesService, private router:Router) {
    this.shoes=new Shoes(); //Creating new obj so that the form fields are refreshed
   }
   public updateShoes():void{
    this.shoesService.updateShoes(this.shoes).subscribe(res=>{
      this.shoes=new Shoes();
      this.router.navigate(['/shoesList']);
    })
  }

  ngOnInit() {
  }

}
