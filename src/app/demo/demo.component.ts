import { Component, OnInit } from '@angular/core';

import { ArithmeticService } from './../service/arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  add:number = 0
  sub:number = 0

  constructor(private service:ArithmeticService) 
  { 
     this.add = this.service.add(50,25)
      this.sub = this.service.sub(50,25)
  }



  ngOnInit() {
  }

}