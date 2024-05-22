import { Component, OnInit } from '@angular/core';
import { bus } from '../model/bus';
import { BusServiceService } from '../service/bus-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent  {

  listBus: bus[] = [];

  constructor(private bs: BusServiceService) {}

  ngOnInit() {
    this.loadBuses();
  }

  loadBuses() {
    this.bs.getAllBus().subscribe({
      next: (data) => this.listBus = data,
      error: (error) => console.log(error),
      complete: () => console.log('done')
    });
  }
  supp(id:number){
    this.bs.removeBus(id).subscribe(
     ()=>this.ngOnInit()
    )
  }

}
