import { Component, OnInit } from '@angular/core';
import { HardwareServiceService } from 'src/app/service/hardware-service.service';

@Component({
  selector: 'app-hardware-list',
  templateUrl: 'hardware-list.component.html',
  styleUrls: [ 'hardware-list.component.css' ]
})
export class HardwareListComponent implements OnInit {

  hardwares: any;
  hardware: any;

  constructor(private service: HardwareServiceService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.hardwares = this.service.findAll().subscribe(data => {
      this.hardwares = data;
      console.log(this.hardwares);
    })
  }

}
