import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Shoes } from './shoes';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9200/shoes";
  }

  public addShoes(shoes:Shoes):Observable<Shoes>{
    return this.http.post<Shoes>(this.url,shoes);
  }

  public getAllShoes():Observable<Shoes[]>{
    return this.http.get<Shoes[]>(this.url);
  }

  // public getShoesById(id:number):Observable<Shoes>{
  //   return this.http.get<Shoes>(this.url+"/"+id);
  // }

  public getShoesById(id){
    return this.http.get<Shoes>(this.url+"/"+id);
  }

  public deleteShoes(id:number){
   return this.http.delete<Shoes>(this.url+"/"+id);
  }

  // public deleteShoes(id){
  //   return this.http.delete<Shoes>(this.url+"/"+id);
  //  }

  public updateShoes(shoes:Shoes):Observable<Shoes>{
    return this.http.put<Shoes>(this.url,shoes);
  }
}
