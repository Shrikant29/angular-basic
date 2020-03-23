import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  @Input('name') userName:string;
  constructor() {
    
  }

  ngOnInit(): void {
    this.user = {
      name: this.userName,
      title: 'Software Developer',
      address: '1234 Andheri,West Andheri,Mumbai',
      phone: [
        '789 - 123 - 1234',
        '241 - 496 - 4567',
        '216 - 865 - 1256'
      ]
    };
  
  }

}
