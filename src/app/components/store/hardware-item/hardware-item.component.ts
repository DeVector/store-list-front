import { Component, Input, OnInit } from '@angular/core';
import { Hardware } from 'src/app/model/hardware';

@Component({
  selector: 'app-hardware-item',
  templateUrl: 'hardware-item.component.html',
  styleUrls: [ 'hardware-item.component.css' ]
})
export class HardwareItemComponent implements OnInit {

  @Input() hardware!: Hardware;

  constructor() { }

  ngOnInit(): void {
  }

}
