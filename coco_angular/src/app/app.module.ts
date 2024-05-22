import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBackComponent } from './backOffice/home-back/home-back.component';
import { FooterBackComponent } from './backOffice/footer-back/footer-back.component';
import { HeaderBackComponent } from './backOffice/header-back/header-back.component';
import { NavbarBackComponent } from './backOffice/navbar-back/navbar-back.component';
import { FormElementsComponent } from './backOffice/form-back/form-elements/form-elements.component';
import { FormLayoutsComponent } from './backOffice/form-back/form-layouts/form-layouts.component';
import { CarComponent } from './backOffice/carpoolModule/car/car.component';
import { DriversComponent } from './backOffice/carpoolModule/drivers/drivers.component';
import { ProductComponent } from './backOffice/marketPlaceModule/product/product.component';
import { ProductCategoryComponent } from './backOffice/marketPlaceModule/product-category/product-category.component';
import { BusComponent } from './backOffice/busModule/bus/bus.component';
import { StopComponent } from './backOffice/busModule/stop/stop.component';
import { TripComponent } from './backOffice/busModule/trip/trip.component';
import { PostComponent } from './backOffice/forumModule/post/post.component';
import { CommentComponent } from './backOffice/forumModule/comment/comment.component';
import { DataTablesComponent } from './backOffice/data-tables/data-tables.component';
import { ChartJsComponent } from './backOffice/charts/chart-js/chart-js.component';
import { ApexchartsComponent } from './backOffice/charts/apexcharts/apexcharts.component';
import { EchartsComponent } from './backOffice/charts/echarts/echarts.component';
import { ProfileComponent } from './backOffice/userManagement/profile/profile.component';
import { RegisterComponent } from './backOffice/userManagement/register/register.component';
import { LoginComponent } from './backOffice/userManagement/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderFrontComponent } from './frontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './frontOffice/footer-front/footer-front.component';
import { CarouselComponent } from './frontOffice/carousel/carousel.component';
import { ExternalUserComponent } from './frontOffice/external-user/external-user.component';
import { OverviewComponent } from './backOffice/userManagement/overview/overview.component';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { DashboardComponent } from './frontOffice/userModule/dashboard/dashboard.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MyProfileComponent } from './frontOffice/userModule/my-profile/my-profile.component';
import { BusFrontComponent } from './frontOffice/busManagment/bus-front/bus-front.component';
import { TripFrontComponent } from './frontOffice/busManagment/trip-front/trip-front.component';
import { AccessDeniedComponent } from './frontOffice/access-denied/access-denied.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GenderStatsComponent } from './backOffice/userManagement/gender-stats/gender-stats.component';
import { RoleStatsComponent } from './backOffice/userManagement/role-stats/role-stats.component';
import { RegisterRideComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/register-ride/register-ride.component';
import { EditRideComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/edit-ride/edit-ride.component';
import { RideListComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/ride-list/ride-list.component';
import { RegisterCarComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/register-car/register-car.component';
import { EditCarComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/edit-car/edit-car.component';
import { CarListComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/car-list/car-list.component';
import { RegisterImageComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/register-image/register-image.component';
import { ImageListComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/image-list/image-list.component';
import { EditImageComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/edit-image/edit-image.component';
import { AffectCarToRideComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/affect-car-to-ride/affect-car-to-ride.component';
import { RegisterFavorieComponent } from './frontOffice/Carpooling_Front/Components_Front/Favorite_Front/register-favorie/register-favorie.component';
import { EditFavoriteComponent } from './frontOffice/Carpooling_Front/Components_Front/Favorite_Front/edit-favorite/edit-favorite.component';
import { FavoriteListComponent } from './frontOffice/Carpooling_Front/Components_Front/Favorite_Front/favorite-list/favorite-list.component';
import { RegisterReservationComponent } from './frontOffice/Carpooling_Front/Components_Front/Reservation_Front/register-reservation/register-reservation.component';
import { ReservationListComponent } from './frontOffice/Carpooling_Front/Components_Front/Reservation_Front/reservation-list/reservation-list.component';
import { EditReservationComponent } from './frontOffice/Carpooling_Front/Components_Front/Reservation_Front/edit-reservation/edit-reservation.component';
import { EditSecurityComponent } from './frontOffice/Carpooling_Front/Components_Front/Security_Front/edit-security/edit-security.component';
import { SecurityListComponent } from './frontOffice/Carpooling_Front/Components_Front/Security_Front/security-list/security-list.component';
import { RegisterSecurityComponent } from './frontOffice/Carpooling_Front/Components_Front/Security_Front/register-security/register-security.component';
import { DisplayCardComponent } from './frontOffice/Carpooling_Front/Components_Front/display-card/display-card.component';
import { AcceuilComponent } from './frontOffice/Carpooling_Front/Components_Front/Acceuil/acceuil/acceuil.component';
import { FirstAddComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/first-add/first-add.component';
import { InformationComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/information/information.component';
import { ContactComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/contact/contact.component';
import { SecurityComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/security/security.component';
import { DisplayCarddComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/display-cardd/display-cardd.component';
import { StepperComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/stepper/stepper.component';
import { FinishComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/finish/finish.component';
import { ConfirmComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/confirm/confirm.component';
import { LeafletComponent } from './frontOffice/Carpooling_Front/Components_Front/Acceuil/leaflet/leaflet.component';
import { SearchRidesComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/search-rides/search-rides.component';
import { AddImageComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/add-image/add-image.component';
import { AaffichComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/aaffich/aaffich.component';
import { AffectImageToCarComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/affect-image-to-car/affect-image-to-car.component';
import { RideDetailsComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/ride-details/ride-details.component';
import { AddCarComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/add-car/add-car.component';
import { FindRidesComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/find-rides/find-rides.component';
import { FootComponent } from './frontOffice/foot/foot.component';
import { DetailsRideComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/details-ride/details-ride.component';

import { MatCardModule } from '@angular/material/card';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CdkStepperModule } from '@angular/cdk/stepper'
import { AddBusComponent } from './backOffice/busModule/add-bus/add-bus.component';
import { UpdateBusComponent } from './backOffice/busModule/update-bus/update-bus.component';
import { UpdateStopComponent } from './backOffice/busModule/update-stop/update-stop.component';
import { AddStopComponent } from './backOffice/busModule/add-stop/add-stop.component';
import { AddtripComponent } from './backOffice/busModule/addtrip/addtrip.component';
import { UpdateTripComponent } from './backOffice/busModule/updatetrip/updatetrip.component';
import { AddtripStopComponent } from './backOffice/busModule/addtrip-stop/addtrip-stop.component';
import { TripStopComponent } from './backOffice/busModule/trip-stop/trip-stop.component';
import { UpdatetripStopComponent } from './backOffice/busModule/updatetrip-stop/updatetrip-stop.component';
import { UtripComponent } from './frontOffice/busManagment/utrip/utrip.component';
import { SubscriptionComponent } from './frontOffice/busManagment/subscription/subscription.component';
import { AddsubscriptionComponent } from './frontOffice/busManagment/addsubscription/addsubscription.component';
import { StripeComponent } from './frontOffice/busManagment/stripe/stripe.component';
import { CheckSubComponent } from './backOffice/busModule/check-sub/check-sub.component';
import { MapComponent } from './frontOffice/busManagment/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CategoryListComponent } from './MarketPlace/category-list/category-list.component';
import { RegisterCategoryProductComponent } from './MarketPlace/register-category-product/register-category-product.component';
import { EditCategoryComponent } from './MarketPlace/edit-category-product/edit-category.component';
import { SubcategoryListComponent } from './MarketPlace/subcategory-list/subcategory-list.component';
import { RegisterSubcategoryComponent } from './MarketPlace/register-subcategory/register-subcategory.component';
import { EditSubcategoryComponent } from './MarketPlace/edit-subcategory/edit-subcategory.component';
import { ProductListComponent } from './MarketPlace/product-list/product-list.component';
import { RegisterProductComponent } from './MarketPlace/register-product/register-product.component';
import { EditProductComponent } from './MarketPlace/edit-product/edit-product.component';
import { AddSubToCatComponent } from './MarketPlace/add-sub-to-cat/add-sub-to-cat.component';
import { RatingComponent } from './MarketPlace/rating/rating.component';
import { PictureproductComponent } from './MarketPlace/pictureproduct/pictureproduct.component';
import { AddpicturetoproductComponent } from './MarketPlace/addpicturetoproduct/addpicturetoproduct.component';
import { AddprodtosubcatComponent } from './MarketPlace/addprodtosubcat/addprodtosubcat.component';
import { AddpicturetoproductfrontComponent } from './MarketPlace/addpicturetoproductfront/addpicturetoproductfront.component';
import { AddproductfrontComponent } from './MarketPlace/addproductfront/addproductfront.component';
import {NgToastModule} from "ng-angular-popup";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule}  from "ngx-pagination";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {ProductsComponent} from "./frontOffice/products/products.component";
import { FavoriteProductComponent } from './frontOffice/favorite-product/favorite-product.component';
import { PostFrontComponent } from './frontOffice/forum-front/post-front/post-front.component';
import { PostDetailsComponent } from './frontOffice/forum-front/post-details/post-details.component';
import { CommentFrontComponent } from './frontOffice/forum-front/comment-front/comment-front.component';
import { RelativeTimePipe } from './frontOffice/forum-front/post-front/relative-time.pipe.ts';
import { CategoryComponent } from './frontOffice/accommodationModule/accommodationModule/category/category.component';
import { UpdateCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/update-category/update-category.component';
import { SubCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/sub-category/sub-category.component';
import { AddSubCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/add-sub-category/add-sub-category.component';
import { UpdateSubcategoryComponent } from './frontOffice/accommodationModule/accommodationModule/update-subcategory/update-subcategory.component';
import { AddRoomComponent } from './frontOffice/accommodationModule/accommodationModule/add-room/add-room.component';
import { AddAccommodationComponent } from './frontOffice/accommodationModule/accommodationModule/add-accommodation/add-accommodation.component';
import { AddCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/add-category/add-category.component';
import { UpdateRoomComponent } from './frontOffice/accommodationModule/accommodationModule/update-room/update-room.component';
import { UpdateAccommodationComponent } from './frontOffice/accommodationModule/accommodationModule/update-accommodation/update-accommodation.component';
import { DetailsAccomodationComponent } from './frontOffice/accommodationModule/accommodationModule/details-accomodation/details-accomodation.component';
import { DetailsRoomComponent } from './frontOffice/accommodationModule/accommodationModule/details-room/details-room.component';
import { AccomodationBackComponent } from './backOffice/accomodation-back/accomodation-back.component';
import { AddAccBackComponent } from './backOffice/add-acc-back/add-acc-back.component';
import { UpdateAccBackComponent } from './backOffice/update-acc-back/update-acc-back.component';
import { RoomBackComponent } from './backOffice/room-back/room-back.component';
import { AddRoomBackComponent } from './backOffice/add-room-back/add-room-back.component';
import { UpdateRoomBackComponent } from './backOffice/update-room-back/update-room-back.component';
import { CategoryBackComponent } from './backOffice/category-back/category-back.component';
import { AddCatBackComponent } from './backOffice/add-cat-back/add-cat-back.component';
import { UpdateCatBackComponent } from './backOffice/update-cat-back/update-cat-back.component';
import { SubCatBackComponent } from './backOffice/sub-cat-back/sub-cat-back.component';
import { AddSubCatBackComponent } from './backOffice/add-sub-cat-back/add-sub-cat-back.component';
import { UpdateSubCatBackComponent } from './backOffice/update-sub-cat-back/update-sub-cat-back.component';
import { DetailsRoomBackComponent } from './backOffice/details-room-back/details-room-back.component';
import { DetailAccBackComponent } from './backOffice/detail-acc-back/detail-acc-back.component';
import { FilterPipe } from './app-filter.pipe';
import { MappComponent } from './frontOffice/accommodationModule/mapp/map.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RoomComponent } from './frontOffice/accommodationModule/accommodationModule/room/room.component';
import { AccommodationComponent } from './frontOffice/accommodationModule/accommodationModule/accommodation/accommodation.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CustomerCreateComponent } from './frontOffice/accommodationModule/accommodationModule/customer-create/customer-create.component';
import { RoomPaymentComponent } from './frontOffice/accommodationModule/accommodationModule/room-payment/room-payment.component';
import { ShareBtnComponent } from './frontOffice/facebookbutton/share-btn/share-btn.component';
import { MyMapComponent } from './frontOffice/my-map/my-map.component';
import { FavoriteListOfAccommodationsComponent } from './frontOffice/accommodationModule/favorites/favorite-list-of-accommodations/favorite-list-of-accommodations.component';
import { AccpaymentComponent } from './frontOffice/accommodationModule/accpayment/accpayment.component';
import { AddSoldComponent } from './frontOffice/accommodationModule/accommodationModule/add-sold/add-sold.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeBackComponent,
    FooterBackComponent,
    HeaderBackComponent,
    NavbarBackComponent,
    FormElementsComponent,
    FormLayoutsComponent,
    CarComponent,
    DriversComponent,
    ProductComponent,
    ProductCategoryComponent,
    BusComponent,
    StopComponent,
    TripComponent,
    RoomComponent,
    AccommodationComponent,
    PostComponent,
    CommentComponent,
    DataTablesComponent,
    ChartJsComponent,
    ApexchartsComponent,
    EchartsComponent,
    ProfileComponent,


    RegisterComponent,
    LoginComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    CarouselComponent,
    ExternalUserComponent,
    OverviewComponent,
    HomeFrontComponent,
    DashboardComponent,
    MyProfileComponent,
    BusFrontComponent,
    TripFrontComponent,
    AccessDeniedComponent,
    GenderStatsComponent,
    RoleStatsComponent,


    RegisterRideComponent,
    EditRideComponent,
    RideListComponent,
    RegisterCarComponent,
    EditCarComponent,
    CarListComponent,
    RegisterImageComponent,
    ImageListComponent,
    EditImageComponent,
    AffectCarToRideComponent,
    RegisterFavorieComponent,
    EditFavoriteComponent,
    FavoriteListComponent,
    RegisterReservationComponent,
    ReservationListComponent,
    EditReservationComponent,
    EditSecurityComponent,
    SecurityListComponent,
    RegisterSecurityComponent,
    DisplayCardComponent,
    AcceuilComponent,
    FirstAddComponent,
    InformationComponent,
    ContactComponent,
    SecurityComponent,
    DisplayCarddComponent,
    StepperComponent,
    FinishComponent,
    ConfirmComponent,
    LeafletComponent,
    SearchRidesComponent,
    AddImageComponent,
    AaffichComponent,
    AffectImageToCarComponent,
    RideDetailsComponent,
    AddCarComponent,
    AddImageComponent,
    FindRidesComponent,
    FootComponent,
    DetailsRideComponent,

    AddBusComponent,
    UpdateBusComponent,
    UpdateStopComponent,
    AddStopComponent,
    UpdateStopComponent,
    AddStopComponent,
    AddtripComponent,
    UpdateTripComponent,
    AddtripStopComponent,
    AddtripStopComponent,
    TripStopComponent,
    UpdatetripStopComponent,
    UtripComponent,
    SubscriptionComponent,
    AddsubscriptionComponent,
    StripeComponent,
    CheckSubComponent,
    MapComponent,


    CategoryListComponent,
      RegisterCategoryProductComponent,
      EditCategoryComponent,
      SubcategoryListComponent,
      RegisterSubcategoryComponent,
      EditSubcategoryComponent,
      ProductListComponent,
      RegisterProductComponent,
      EditProductComponent,
      AddSubToCatComponent,
      ProductsComponent,
      RatingComponent,
      PictureproductComponent,
      FavoriteProductComponent,
      AddprodtosubcatComponent,
      AddpicturetoproductComponent,
      AddpicturetoproductfrontComponent,
      AddproductfrontComponent,
      PostFrontComponent,
  PostDetailsComponent,
  CommentFrontComponent,
    CategoryComponent,
    UpdateCategoryComponent,
    SubCategoryComponent,
    AddSubCategoryComponent,
    UpdateSubcategoryComponent,
    AddRoomComponent,
    AddAccommodationComponent,
    AddCategoryComponent,
    UpdateRoomComponent,
    UpdateAccommodationComponent,
    DetailsAccomodationComponent,
    DetailsRoomComponent,
    MappComponent,
    FilterPipe,
    AccomodationBackComponent,
    AddAccBackComponent,
    UpdateAccBackComponent,
    RoomBackComponent,
    AddRoomBackComponent,
    UpdateRoomBackComponent,
    CategoryBackComponent,
    AddCatBackComponent,
    UpdateCatBackComponent,
    SubCatBackComponent,
    AddSubCatBackComponent,
    UpdateSubCatBackComponent,
    DetailAccBackComponent,
    DetailsRoomBackComponent,
    CustomerCreateComponent,
    RoomPaymentComponent,
    ShareBtnComponent,
    MyMapComponent,
    FavoriteListOfAccommodationsComponent,
    AccpaymentComponent,
    AddSoldComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgApexchartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CdkStepperModule,
    LeafletModule,
    MatCardModule,
    MaterialFileInputModule,
    MatIconModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    NgToastModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgbModule,
    RelativeTimePipe,
    NgxCaptchaModule,
    ModalModule.forRoot(),
    SocialLoginModule,
  ],
  schemas: [NO_ERRORS_SCHEMA] ,
  exports:[CdkStepperModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
        provide: 'SocialAuthServiceConfig',
        useValue: {
            autoLogin: false,
            providers: [{
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider('1576393013206435')
            }]
        }
    }
],

  bootstrap: [AppComponent]
})
export class AppModule { }
