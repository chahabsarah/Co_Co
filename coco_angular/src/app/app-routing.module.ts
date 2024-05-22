import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBackComponent } from './backOffice/home-back/home-back.component';
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
import { ExternalUserComponent } from './frontOffice/external-user/external-user.component';
import { OverviewComponent } from './backOffice/userManagement/overview/overview.component';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { DashboardComponent } from './frontOffice/userModule/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { MyProfileComponent } from './frontOffice/userModule/my-profile/my-profile.component';
import { BusFrontComponent } from './frontOffice/busManagment/bus-front/bus-front.component';
import { TripFrontComponent } from './frontOffice/busManagment/trip-front/trip-front.component';
import { Role } from './backOffice/userManagement/model/Role';
import { AccessDeniedComponent } from './frontOffice/access-denied/access-denied.component';
import { RoleStatsComponent } from './backOffice/userManagement/role-stats/role-stats.component';
import { RideListComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/ride-list/ride-list.component';
import { RegisterRideComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/register-ride/register-ride.component';
import { EditRideComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/edit-ride/edit-ride.component';
import { CarListComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/car-list/car-list.component';
import { RegisterCarComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/register-car/register-car.component';
import { EditCarComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/edit-car/edit-car.component';
import { AffectCarToRideComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/affect-car-to-ride/affect-car-to-ride.component';
import { ImageListComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/image-list/image-list.component';
import { AaffichComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/aaffich/aaffich.component';
import { AddImageComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/add-image/add-image.component';
import { AffectImageToCarComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/affect-image-to-car/affect-image-to-car.component';
import { RideDetailsComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/ride-details/ride-details.component';
import { RegisterImageComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/register-image/register-image.component';
import { EditImageComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/edit-image/edit-image.component';
import { LeafletComponent } from './frontOffice/Carpooling_Front/Components_Front/Acceuil/leaflet/leaflet.component';
import { AcceuilComponent } from './frontOffice/Carpooling_Front/Components_Front/Acceuil/acceuil/acceuil.component';
import { FindRidesComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/find-rides/find-rides.component';
import { StepperComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/stepper/stepper.component';
import { InformationComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/information/information.component';
import { ContactComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/contact/contact.component';
import { SecurityComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/security/security.component';
import { DisplayCarddComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/display-cardd/display-cardd.component';
import { FinishComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/finish/finish.component';
import { FirstAddComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/first-add/first-add.component';
import { SearchRidesComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/search-rides/search-rides.component';
import { AddBusComponent } from './backOffice/busModule/add-bus/add-bus.component';
import { UpdateBusComponent } from './backOffice/busModule/update-bus/update-bus.component';
import { UpdateStopComponent } from './backOffice/busModule/update-stop/update-stop.component';
import { AddStopComponent } from './backOffice/busModule/add-stop/add-stop.component';
import { AddtripComponent } from './backOffice/busModule/addtrip/addtrip.component';
import { UpdateTripComponent } from './backOffice/busModule/updatetrip/updatetrip.component';
import { AddtripStopComponent } from './backOffice/busModule/addtrip-stop/addtrip-stop.component';
import { TripStopComponent } from './backOffice/busModule/trip-stop/trip-stop.component';
import { UpdatetripStopComponent } from './backOffice/busModule/updatetrip-stop/updatetrip-stop.component';
import { CheckSubComponent } from './backOffice/busModule/check-sub/check-sub.component';
import { SubscriptionComponent } from './frontOffice/busManagment/subscription/subscription.component';
import { UtripComponent } from './frontOffice/busManagment/utrip/utrip.component';
import { AddsubscriptionComponent } from './frontOffice/busManagment/addsubscription/addsubscription.component';
import { StripeComponent } from './frontOffice/busManagment/stripe/stripe.component';
import { MapComponent } from './frontOffice/busManagment/map/map.component';
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
import { AddprodtosubcatComponent } from './MarketPlace/addprodtosubcat/addprodtosubcat.component';
import { ProductsComponent } from './frontOffice/products/products.component';
import { RatingComponent } from './MarketPlace/rating/rating.component';
import { PictureproductComponent } from './MarketPlace/pictureproduct/pictureproduct.component';
import { FavoriteProductComponent } from './frontOffice/favorite-product/favorite-product.component';
import { AddpicturetoproductComponent } from './MarketPlace/addpicturetoproduct/addpicturetoproduct.component';
import { AddpicturetoproductfrontComponent } from './MarketPlace/addpicturetoproductfront/addpicturetoproductfront.component';
import { AddproductfrontComponent } from './MarketPlace/addproductfront/addproductfront.component';
import { PostFrontComponent } from './frontOffice/forum-front/post-front/post-front.component';
import { PostDetailsComponent } from './frontOffice/forum-front/post-details/post-details.component';
import { CommentFrontComponent } from './frontOffice/forum-front/comment-front/comment-front.component';
import { AddRoomComponent } from './frontOffice/accommodationModule/accommodationModule/add-room/add-room.component';
import { UpdateRoomComponent } from './frontOffice/accommodationModule/accommodationModule/update-room/update-room.component';
import { DetailsRoomComponent } from './frontOffice/accommodationModule/accommodationModule/details-room/details-room.component';
import { UpdateAccommodationComponent } from './frontOffice/accommodationModule/accommodationModule/update-accommodation/update-accommodation.component';
import { AddAccommodationComponent } from './frontOffice/accommodationModule/accommodationModule/add-accommodation/add-accommodation.component';
import { DetailsAccomodationComponent } from './frontOffice/accommodationModule/accommodationModule/details-accomodation/details-accomodation.component';
import { AddCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/add-category/add-category.component';
import { UpdateCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/update-category/update-category.component';
import { CategoryComponent } from './frontOffice/accommodationModule/accommodationModule/category/category.component';
import { SubCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/sub-category/sub-category.component';
import { UpdateSubcategoryComponent } from './frontOffice/accommodationModule/accommodationModule/update-subcategory/update-subcategory.component';
import { AddSubCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/add-sub-category/add-sub-category.component';
import { AccomodationBackComponent } from './backOffice/accomodation-back/accomodation-back.component';
import { AddAccBackComponent } from './backOffice/add-acc-back/add-acc-back.component';
import { UpdateAccBackComponent } from './backOffice/update-acc-back/update-acc-back.component';
import { DetailAccBackComponent } from './backOffice/detail-acc-back/detail-acc-back.component';
import { RoomBackComponent } from './backOffice/room-back/room-back.component';
import { AddRoomBackComponent } from './backOffice/add-room-back/add-room-back.component';
import { UpdateRoomBackComponent } from './backOffice/update-room-back/update-room-back.component';
import { DetailsRoomBackComponent } from './backOffice/details-room-back/details-room-back.component';
import { CategoryBackComponent } from './backOffice/category-back/category-back.component';
import { AddCatBackComponent } from './backOffice/add-cat-back/add-cat-back.component';
import { UpdateCatBackComponent } from './backOffice/update-cat-back/update-cat-back.component';
import { SubCatBackComponent } from './backOffice/sub-cat-back/sub-cat-back.component';
import { AddSubCatBackComponent } from './backOffice/add-sub-cat-back/add-sub-cat-back.component';
import { UpdateSubCatBackComponent } from './backOffice/update-sub-cat-back/update-sub-cat-back.component';
import { RoomComponent } from './frontOffice/accommodationModule/accommodationModule/room/room.component';
import { AccommodationComponent } from './frontOffice/accommodationModule/accommodationModule/accommodation/accommodation.component';
import { RoomPaymentComponent } from './frontOffice/accommodationModule/accommodationModule/room-payment/room-payment.component';
import { CustomerCreateComponent } from './frontOffice/accommodationModule/accommodationModule/customer-create/customer-create.component';
import { MappComponent } from './frontOffice/accommodationModule/mapp/map.component';
import { MyMapComponent } from './frontOffice/my-map/my-map.component';
import { FavoriteListOfAccommodationsComponent } from './frontOffice/accommodationModule/favorites/favorite-list-of-accommodations/favorite-list-of-accommodations.component';
import { AddSoldComponent } from './frontOffice/accommodationModule/accommodationModule/add-sold/add-sold.component';

const routes: Routes = [

  {path:'signup',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  //default route
  {path:'', redirectTo :'/login', pathMatch:'full'},


  //amal
  {
    path: 'admin',
    component: HomeBackComponent,
    canActivate: [AuthGuard]

  },

  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'overview',component:OverviewComponent,canActivate: [AuthGuard]},
  {path:'role-stats',component:RoleStatsComponent},

  //front
{path:'coco',component:HomeFrontComponent},
{path:'myProfile',component:MyProfileComponent},
{path:'external-user',component:ExternalUserComponent},
{path:'dashboard',component:DashboardComponent},


  //special
  {path:'car',component:CarComponent},
  {path:'driver',component:DriversComponent},

  {
    path: 'ride-list',
    component: RideListComponent
  },
  {
    path: 'register-ride',
    component: RegisterRideComponent
  }, {
    path: 'edit-ride/:rideId',
    component: EditRideComponent
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'register-car',
    component: RegisterCarComponent
  }, {
    path: 'edit-car/:carId',
    component: EditCarComponent
  }, {
    path: 'affect-car',
    component: AffectCarToRideComponent
  }, {
    path: 'image-list',
    component: ImageListComponent
  },  {
    path: 'gallery',
    component: AaffichComponent
  },{
    path: 'addimage',
    component: AddImageComponent
  },
  {
    path: 'affectimage',
    component: AffectImageToCarComponent
  },{
    path: 'cars/:rideId',
    component: RideDetailsComponent
  },

  {
    path: 'register-image',
    component: RegisterImageComponent
  }, {
    path: 'edit-image/:imageId',
    component: EditImageComponent
  },
  {
    path: 'affectCare/:carID',
    component: AffectCarToRideComponent
  },
  {
    path: 'leaflet',
    component: LeafletComponent
  }, {
    path: 'acceuil',
    component: AcceuilComponent
  },{
    path: 'distance',
    component: FindRidesComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'route',
    component: InformationComponent
  },
  {
    path: 'role',
    component: ContactComponent
  },
  {
    path: 'date',
    component: SecurityComponent
  },
  {
    path: 'cost',
    component: DisplayCarddComponent
  },
  {
    path: 'finish',
    component: FinishComponent
  },{
    path: 'first',
    component: FirstAddComponent
  },
  {
    path: 'search',
    component: SearchRidesComponent
  },

  //sysy
  {path:'product',component:ProductComponent},
  {path:'productcategory',component:ProductCategoryComponent},
  {path:'category-list',component:CategoryListComponent},
  {path:'register-category-product', component:RegisterCategoryProductComponent},
  {path:'edit-category-product/:idCategory',component:EditCategoryComponent},
  {path:'subcategory-list',component:SubcategoryListComponent},
  {path:'register-subcategory', component:RegisterSubcategoryComponent},
  {path:'edit-subcategory-product/:idSubCategory',component:EditSubcategoryComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'register-product',component: RegisterProductComponent},
  {path:'edit-product/:idProduct',component:EditProductComponent},
   {path:'addcattosub/:idCategory/subcategories',component:AddSubToCatComponent},
  {path:'addprodtosubcat/:idProduct/products',component:AddprodtosubcatComponent},

  // {path:'addcattosub/:idCategory/subcategories/:idSubCategory',component:AddSubToCatComponent},
  {path:'products',component:ProductsComponent},
  {path:'rating',component:RatingComponent},
  {path:'upload',component:PictureproductComponent},
  {path:'listfavorite',component:FavoriteProductComponent},
  {path:'addpicturetoproduct',component:AddpicturetoproductComponent},
  {path:'addpicturetoproductfront',component:AddpicturetoproductfrontComponent},
  {path:'addproductfront',component:AddproductfrontComponent},

  // ghribii
  {path:'bus',component:BusComponent},
  {path:'stop',component:StopComponent},
  {path:'trip',component:TripComponent},
  {path:'add-bus',component:AddBusComponent},
  {path:'update-bus/:id',component:UpdateBusComponent},
  {path:'update-stop/:id',component:UpdateStopComponent},
  {path:'add-stop',component:AddStopComponent},
  {path:'add-trip',component:AddtripComponent},
  {path:'update-trip/:id',component:UpdateTripComponent},
  {path:'add-tripStop',component:AddtripStopComponent},
  {path:'tripStop',component:TripStopComponent},
  {path:'update-tripStop/:id',component:UpdatetripStopComponent},
  {path:'checksub',component:CheckSubComponent},


  //ghriibi u
  {path: 'sub', component: SubscriptionComponent},
  {path: 'utrip', component: UtripComponent},
  {path:'add-sub/:id',component:AddsubscriptionComponent},
  {path: 'strip', component: StripeComponent},
  {path: 'map', component: MapComponent},


  //hdayla
  {path:'create-customer', component: CustomerCreateComponent },
  {path:'roomPayment', component: RoomPaymentComponent },
  {path:'roomF',component:RoomComponent},
  {path:'accommodationF',component:AccommodationComponent},
  {path:'addRoomF',component:AddRoomComponent},
  {path:'updateF/:id',component:UpdateRoomComponent},
  {path:'getRoomByIdF/:id',component:DetailsRoomComponent},
  {path:'updateAccomodation/:id',component:UpdateAccommodationComponent},
  {path:'addAccomodationF',component:AddAccommodationComponent},
  {path:'getAccomodationByIdF/:id',component:DetailsAccomodationComponent},
  {path:'addCatF',component:AddCategoryComponent},
  {path:'updateCategory/:id',component:UpdateCategoryComponent},
  {path:'getAllCategories',component:CategoryComponent},
  {path:'getAllSubCategories',component:SubCategoryComponent},
  { path:'update-subcategory/:id', component: UpdateSubcategoryComponent },
  {path:'addSubCatF',component:AddSubCategoryComponent},
  {path: 'abc', component: MyMapComponent},
  {path: 'getAllRoom', component: RoomComponent},
  {path: 'fav', component: FavoriteListOfAccommodationsComponent},
  {path: 'userSold', component: AddSoldComponent},


    /*******  back */
  { path: 'accomodation', component: AccomodationBackComponent },
  { path: 'addAcc', component: AddAccBackComponent },
  { path: 'updateAcc/:id', component: UpdateAccBackComponent },
  { path: 'getAccommodationById/:id', component: DetailAccBackComponent },
  { path: 'room', component: RoomBackComponent },
  { path: 'addRoom', component: AddRoomBackComponent },
  { path: 'updateRoom/:id', component: UpdateRoomBackComponent },
  { path: 'getRoomById/:id', component: DetailsRoomBackComponent },

  { path: 'cat', component: CategoryBackComponent},
  { path: 'addCat', component: AddCatBackComponent },
  { path: 'updateCat/:id', component: UpdateCatBackComponent },

  { path: 'subcat', component: SubCatBackComponent },
  { path: 'addSubCat', component: AddSubCatBackComponent },
  { path: 'updateSubCat/:id', component: UpdateSubCatBackComponent },


  //ramsys
  {path:'post',component:PostComponent},
  {path:'comment',component:CommentComponent},

  { path: 'blog', component: PostFrontComponent},
  { path: 'post-details/:id', component: PostDetailsComponent },
  { path: 'post-comment/:id', component: CommentFrontComponent },



  //charts
  {path:'chartjs',component:ChartJsComponent},
  {path:'apexcharts',component:ApexchartsComponent},
  {path:'echarts',component:EchartsComponent},
 //forms
 {path:'form-elements',component:FormElementsComponent},
 {path:'form-layouts',component:FormLayoutsComponent},
 //table
 {path:'table',component:DataTablesComponent},


 { path: 'access-denied', component: AccessDeniedComponent },












];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
