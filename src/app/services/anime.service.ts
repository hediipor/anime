import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../Models/anime';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

    apiUrl : string = "https://api.jikan.moe/v4/anime";

  constructor( private http : HttpClient) { }
  
  getAnimes():Observable<ListResponseModel<Anime>>{
    return this.http.get<ListResponseModel<Anime>>(this.apiUrl);
  }

  getAnime(id:number):Observable<ResponseModel>{
    const url = `${this.apiUrl}/${id}`;
    console.log(url);
    return this.http.get<ResponseModel>(url).pipe();
  }
   
}
