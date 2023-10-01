import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormProduitPagePage } from './form-produit-page.page';

const routes: Routes = [
  {
    path: '',
    component: FormProduitPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormProduitPagePageRoutingModule {}
