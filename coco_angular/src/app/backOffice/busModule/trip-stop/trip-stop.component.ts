import { Component } from '@angular/core';
import { TripStop } from '../model/TripStop';
import { TripStopServiceService } from '../service/trip-stop-service.service';

@Component({
  selector: 'app-trip-stop',
  templateUrl: './trip-stop.component.html',
  styleUrls: ['./trip-stop.component.scss']
})
export class TripStopComponent {
  search: number = 0;
  listTripStop: TripStop[] = [];
  dates: Date[] = [];

  constructor(private tripStopService: TripStopServiceService) {}

  ngOnInit() {
    this.loadTrips();

  }

  loadTrips() {
    this.tripStopService.getAllTripStop().subscribe({
      next: (data) => this.listTripStop = data,
      error: (error) => console.log(error),
      complete: () => console.log('Trips loaded successfully')
    });
    
  }

  supp(id:number){
    this.tripStopService.removetrip(id).subscribe(
     ()=>this.ngOnInit()
    )
  }
  tri(){
    this.tripStopService.tri().subscribe(TripStop => {
      this.listTripStop = TripStop;
      console.log('tri success');
    },
    (error) => {
      // Gestion des erreurs : Affichez ou traitez les erreurs ici
      console.error('Erreur lors de l\'enregistrement de la réponse : ', error);
    }
  );
  }

}
