import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Shoes } from '../shoes';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-delete-shoes',
  templateUrl: './delete-shoes.component.html',
  styleUrls: ['./delete-shoes.component.css']
})
export class DeleteShoesComponent implements OnInit {

  private shoes:Shoes;
  private id:number;
  constructor(private shoesService:ShoesService, private router:Router) {
    this.shoes=new Shoes(); //Creating new obj so that the form fields are refreshed
   }

   public deleteShoes():void{
     this.shoesService.deleteShoes(this.id).subscribe(res=>{
       //this.shoes=res;
      // this.shoes=new Shoes();
       this.router.navigate(['/shoesList']);
     })
    }
  ngOnInit() {
  }
}
