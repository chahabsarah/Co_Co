import {Component, Input} from '@angular/core';
import {CdkStepper} from "@angular/cdk/stepper";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers:[{provide:CdkStepper,useExisting:StepperComponent}]
})
export class StepperComponent extends CdkStepper {
  @Input() linearModeSelected = true;

  onClick(index:number){
    this.selectedIndex = index;
  }

}
