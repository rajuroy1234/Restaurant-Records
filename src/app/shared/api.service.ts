import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  //We define Post, Get, Put, Delete

  //Create restaurants using Post Method
  postRestaurant(data:any){
    return this._http.post<any>(
      "http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
      }))
  }
  //Get Restaurant data using GET method
  getRestaurant(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>
    {
      return res;
    }))
  }

  //Update Restaurant using PUT method
  updateRestaurant(data:any, id: number){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>
    {
      return res;
    }))
  }

  //Delete
  deleteRestaurant(id:number)
  {
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>
    {
      return res;
    }))
  }
}
