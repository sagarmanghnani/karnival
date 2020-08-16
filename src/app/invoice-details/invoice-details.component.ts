import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

  @Input() count:number;
  @Input() itemHeading:string;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes && changes['count'] && changes['count'].currentValue){
      this.count = changes['count'].currentValue
    }

    if(changes && changes['itemHeading'] && changes['itemHeading'].currentValue){
      this.itemHeading = changes['itemHeading'].currentValue;
    }
  }

}
