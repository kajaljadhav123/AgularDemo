import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  serverdata;
  isError: boolean= false;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe(

    (submitdata)=>{
      this.serverdata= submitdata;

      console.log(submitdata);
    },
    (error)=>{
      this.isError= true;
      console.log(error);

    },
    ()=>{
      console.log("Completed");
    }
    
    );


  }

}
