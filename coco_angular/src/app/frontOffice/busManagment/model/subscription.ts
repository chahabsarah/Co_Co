export class subscription {
  id!: number;
  status!: string ;
  subscriptionPrice!: number;
  tripStops!: number;
  remainingTrips!: number;
  subscriptionPaymentMethod!: string;
  qrCodeData!: string;
  qrCodeImageUrl?: string;
  // Ajoutez cette propriété
}
