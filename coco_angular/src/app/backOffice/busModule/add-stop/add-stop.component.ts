import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StopServiceService } from '../service/stop-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stop',
  templateUrl: './add-stop.component.html',
  styleUrls: ['./add-stop.component.scss']
})
export class AddStopComponent {

  constructor(private ss: StopServiceService, private router: Router) {}

  stopForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    gpscoordinates: new FormControl('', Validators.required)
    
  });

  save() {
    console.log(this.stopForm.value);
    this.ss.addStop(this.stopForm.value).subscribe(
      () => this.router.navigateByUrl('/stop')
    );
  }
}
