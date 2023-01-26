import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) { }

  async getRaceWinners() {
    let url = "http://ergast.com/api/f1/2008/results/1.json";
    let output = await this.http.post(url, JSON.parse);
   
    return output;
  }

  async getChampionships() {
    let url = "http://ergast.com/api/f1/driverstandings/1.json?limit=100&offset=30";
    let output = await this.http.post(url, JSON.parse);

    return output;
  }


  }

  
