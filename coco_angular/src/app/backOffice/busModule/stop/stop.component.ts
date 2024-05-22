import { Component } from '@angular/core';
import { stop } from '../model/stop';
import { StopServiceService } from '../service/stop-service.service';



@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.scss']
})
export class StopComponent {
  liststop: stop[] = [];

  constructor(private ss: StopServiceService) {}

  ngOnInit() {
    this.loadstopes();
  }

  loadstopes() {
    this.ss.getAllStop().subscribe({
      next: (data) => this.liststop = data,
      error: (error) => console.log(error),
      complete: () => console.log('done')
    });
  }
  supp(id:number){
    this.ss.removeStop(id).subscribe(
     ()=>this.ngOnInit()
    )
  }

}
