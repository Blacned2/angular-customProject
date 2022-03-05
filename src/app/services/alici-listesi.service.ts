import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { aliciModel } from '../models/aliciModel';

@Injectable({
  providedIn: 'root'
})
export class AliciListesiService {

  constructor(private httpClient:HttpClient) { }

  aliciItems: aliciModel[] = [{ alicilar: { address: '', aliciID: 0, aliciName: '', aliciTelNo: '' }, maxPage: 0 }];
  aliciDeleteUrl = 'https://localhost:44350/api/Alicilar/AliciSil/';
  aliciUrl = 'https://localhost:44350/api/Alicilar/AliciList/';

  //Items
  GetCustomers(pageNum:number) {
    this.httpClient.get<aliciModel[]>(this.aliciUrl+pageNum).subscribe(data => {
      console.log(data);
    })
  }
}
