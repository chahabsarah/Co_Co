import { Component, OnInit } from '@angular/core';
import { stop } from '../model/stop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StopServiceService } from '../service/stop-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-stop',
  templateUrl: './update-stop.component.html',
  styleUrls: ['./update-stop.component.scss']
})
export class UpdateStopComponent implements OnInit {
  stopForm: FormGroup;
  id!: number;
  stop!: stop;

  constructor(private stopService: StopServiceService, private router: Router, private route: ActivatedRoute) {
    this.stopForm = new FormGroup({
      name: new FormControl('', Validators.required),
      gpscoordinates: new FormControl('', Validators.required)
    });
  }


   ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.stopService.getDetailStop(this.id).subscribe((stop: stop) => {
      this.stopForm.patchValue(stop);
    });
  }

  updateStop(): void {
    if (this.stopForm.valid) {
      const updatedStop = { ...this.stopForm.value, idStop: this.id } as stop;
      this.stopService.updateStop(updatedStop).subscribe({
        next: (response) => {
          console.log('Stop updated successfully', response);
          this.router.navigate(['/stop']);
        },
        error: (error) => console.error('Error updating stop', error)
      });
    }
  }


}
