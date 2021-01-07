import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../component.modules';

@Component({
  selector: 'app-capo',
  templateUrl: './capo.component.html',
  styleUrls: ['./capo.component.scss'],
})
export class CapoComponent implements OnInit {

  public vuoto: string;

  constructor() { }

  ngOnInit() {}

}
