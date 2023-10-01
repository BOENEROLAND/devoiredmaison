import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProduitPagePageRoutingModule } from './detail-produit-page-routing.module';

import { DetailProduitPagePage } from './detail-produit-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProduitPagePageRoutingModule
  ],
  declarations: [DetailProduitPagePage]
})
export class DetailProduitPagePageModule {}
