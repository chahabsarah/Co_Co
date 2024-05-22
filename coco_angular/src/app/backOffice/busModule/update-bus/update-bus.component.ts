import { Component, OnInit } from '@angular/core';
import { bus } from '../model/bus'; // Ensure your model class names are capitalized
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BusServiceService } from '../service/bus-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.scss']
})
export class UpdateBusComponent implements OnInit {
  busForm: FormGroup;
  id!:number
  b!:bus

  constructor(private busService: BusServiceService, private router: Router, private route: ActivatedRoute) {
    this.busForm = new FormGroup({
      availability: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      gpsCoordinates: new FormControl('', Validators.required),
      licensePlateNumber: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      seatingCapacity: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.busService.getDetailbus(this.id).subscribe((bus: bus) => {
      this.busForm.patchValue(bus);
    });
  }


  updateBus(): void {
    if (this.busForm.valid) {
      const updatedBus = { ...this.busForm.value, id: this.id } as bus;
      this.busService.UpdateBus(updatedBus).subscribe({
        next: (response) => {
          console.log('Bus updated successfully', response);
          this.router.navigate(['/bus']);
        },
        error: (error) => console.error('Error updating bus', error)
      });
    }
  }
}
