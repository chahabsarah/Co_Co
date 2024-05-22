import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BusServiceService } from '../service/bus-service.service';
import { Router } from '@angular/router';
import { bus } from '../model/bus';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.scss']
})
export class AddBusComponent {

  constructor(private bs: BusServiceService, private route:Router) {}
busForm:FormGroup=new FormGroup({
  availability: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      gpsCoordinates: new FormControl('', Validators.required),
      licensePlateNumber: new FormControl('', [Validators.required, Validators.minLength(6)]),
      model: new FormControl('', Validators.required),
      seatingCapacity: new FormControl('', Validators.required),
})

save(){console.log(this.busForm.value)
this.bs.addBus(this.busForm.value as any).subscribe(
  ()=>this.route.navigateByUrl('/bus')
)
}
}
