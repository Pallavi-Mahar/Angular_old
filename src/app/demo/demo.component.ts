import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show=true;
  title='Hello World';

players:any[]=[{'name':'john','age':22},
{'name':'jake','age':24},
{'name':'jimmy','age':23}
];

add(){
this.players.push({'name':'Hello','age':25});
}
delete(){
this.players.pop();
}




}
