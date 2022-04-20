import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardwareServiceService {

  baseURL = "localhost:8080/hardware";

  constructor(private httpClient: HttpClient) { }

  findAll() {
    this.httpClient.get(this.baseURL);
  }
}
