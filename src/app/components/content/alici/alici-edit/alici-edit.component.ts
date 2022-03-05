import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { aliciModel } from 'src/app/models/aliciModel';



@Component({
  selector: 'app-alici-edit',
  templateUrl: './alici-edit.component.html',
})
export class AliciEditComponent implements OnInit {
  
  id:number;
  aliciObj:aliciModel["alicilar"] = {aliciID:0,address:'',aliciName:'',aliciTelNo:''}; //Instance

  constructor(private httpClient:HttpClient,private router:Router,private route:ActivatedRoute) { }
  
  singleAliciUrl = 'https://localhost:44350/api/Alicilar/SingleAlici/';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.httpClient.get<aliciModel["alicilar"]>(this.singleAliciUrl+this.id).subscribe(data => {
      this.aliciObj = data;
      console.log(this.aliciObj)
    })
    
  }

  updateAlici(aliciModel){
    this.aliciObj = {
      'aliciID':aliciModel.aliciID,
      'aliciName': aliciModel.aliciName,
      'address': aliciModel.address,
      'aliciTelNo':aliciModel.aliciTelNo
    };

    this.httpClient.put<aliciModel>('https://localhost:44350/api/Alicilar/AliciGuncelle/'+this.id,aliciModel).subscribe(data => {
      this.router.navigate(['/alicilar']);
    })
  }

}
