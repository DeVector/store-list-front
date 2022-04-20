import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hardware } from '../model/hardware';

@Injectable({
  providedIn: 'root'
})
export class HardwareServiceService {

  baseURL = "http://localhost:8080/api/hardware";

  httpOption = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get(this.baseURL);
  }

}
