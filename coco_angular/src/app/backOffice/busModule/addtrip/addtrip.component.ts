import { Component } from '@angular/core';
import { TripServiceService } from '../service/trip-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.scss']
})
export class AddtripComponent {
  constructor(private ts: TripServiceService, private route:Router) {}
  TripForm: FormGroup = new FormGroup({
    departureLocation: new FormControl('', Validators.required),
    arrivalLocation: new FormControl('', Validators.required),
    estimatedDuration: new FormControl('', Validators.required),
    fare: new FormControl('', Validators.required),
  })


save(){console.log(this.TripForm.value)
this.ts.addtrip(this.TripForm.value as any).subscribe(
  ()=>this.route.navigateByUrl('/trip')
)
}
}



