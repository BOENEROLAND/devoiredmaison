import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProduitPagePage } from './detail-produit-page.page';

const routes: Routes = [
  {
    path: '',
    component: DetailProduitPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProduitPagePageRoutingModule {}
