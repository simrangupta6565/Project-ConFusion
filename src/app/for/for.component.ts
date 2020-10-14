import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  courses:string[];
  students : object[];
  fontSize: string;
  useTdata

  constructor() { 
    this.courses = ["Angular", "React", "Node"];
    this.students=[{fName: "Jone", lName:"Bailey", score: 90},
    {fName: "Bob", lName:"Wang", score: 10}];
  
  }

  ngOnInit(): void {
  }

}
