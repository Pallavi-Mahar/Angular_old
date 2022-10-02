import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  players=[
    "Sachin",
    "Ricky",
    "Virat",
    "Mehela",
    "Brian",
    "Rahul",
    "AB"
  ]
  selected='---'
  onSubmit(f:NgForm){
    console.log(f.value);
    console.log(f.valid);
  }
  update(event:any){
    console.log(event.target);
    this.selected=event.target;
  }
  posts=[];
  constructor(private http:HttpClient){
    
  }
  post(){
    this.http.get('http://127.0.0.1:5000').subscribe((response)=>{
      console.log(JSON.stringify(response))
    });
    
  }
  get(){
    this.http.post('http://localhost:4200/',this.posts).subscribe((response)=>{
      console.log(JSON.stringify(response))
    });
  }
  ngOnInit(): void {
  }

}
