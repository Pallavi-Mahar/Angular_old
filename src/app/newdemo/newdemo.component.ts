import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-newdemo',
  templateUrl: './newdemo.component.html',
  styleUrls: ['./newdemo.component.css']
})
export class NewdemoComponent implements OnInit {

  constructor(private http:HttpClient) { }
  newdata:any;
  currentItem:any;
  getChanged(event:any):void{
    console.log("inside get Changed");
  }
  ngOnInit():void {

    this.currentItem={
      name:"John"
    }
    
    //this.http.get("http://localhost:5000/course")
      //  .subscribe((data) => {
        // this.newdata=data;
    //})
  }

}
