import { Component, OnInit } from '@angular/core';
import { Shoes } from '../shoes';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent implements OnInit {
  private shoesList:Shoes[];
  constructor(private shoesService:ShoesService) { }

  ngOnInit() {
    this.shoesService.getAllShoes().subscribe(res=>{
      this.shoesList=res;
    })
  }

}
