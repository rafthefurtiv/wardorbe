import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-capo',
  templateUrl: './capo.component.html',
  styleUrls: ['./capo.component.scss'],
})
export class CapoComponent implements OnInit {

  @Input() imageData: string;
  @Input() selected: boolean;
  @Input() checkVisible: boolean;

  @Output() selectedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  selectThis(){
    if(this.checkVisible){
      this.selected = !this.selected;
      this.selectedChange.emit(this.selected);
    }
  }

}
