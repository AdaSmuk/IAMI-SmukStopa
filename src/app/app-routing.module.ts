import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletDesingComponent } from './wallet-desing/wallet-desing.component';
import { BagDesingComponent } from './bag-desing/bag-desing.component';
import { HairDesingComponent } from './hair-desing/hair-desing.component';
import { AboutWorkshopComponent } from './about-workshop/about-workshop.component';
import { AboutProductsComponent } from './about-products/about-products.component';
import { ContactInformationsComponent } from './contact-informations/contact-informations.component';
import { OrderFormComponent } from './order-form/order-form.component';

const routes: Routes = [
  { path: 'wallet-designs', component: WalletDesingComponent },
  { path: 'bag-designs', component: BagDesingComponent },
  { path: 'hair-designs', component: HairDesingComponent },
  { path: 'workshop', component: AboutWorkshopComponent },
  { path: 'products', component: AboutProductsComponent },
  { path: 'informations', component: ContactInformationsComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: '',
    redirectTo: '/informations',
    pathMatch: 'full'
  },
  { path: '**', component: ContactInformationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
