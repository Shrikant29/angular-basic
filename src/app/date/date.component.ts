import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {


  dateMessage:string;
  somenumber:number=10;
  constructor() {
    setInterval(()=>{
      let currentDate=new Date();
      this.dateMessage=currentDate.toDateString()+' '+currentDate.toLocaleTimeString();
    },1000);
 
   }

  ngOnInit(): void {
  }


  addToNumber(a :number,b:number){
    return a+b;
  }
}
