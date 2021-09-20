import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


    options: any;

    overlays: any[];

  constructor() { }

  ngOnInit(): void {


    
        this.options = {
            center: {lat: 4.050257, lng: 9.807417},
            zoom: 12
        };
    

  }

}
