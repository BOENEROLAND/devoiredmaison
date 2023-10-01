import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../request-service.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-produit-page',
  templateUrl: './detail-produit-page.page.html',
  styleUrls: ['./detail-produit-page.page.scss'],
})
export class DetailProduitPagePage implements OnInit {
  id:any;
  produit:any
  constructor(
    private router: Router,
    private requestService: RequestServiceService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) { 
      
    }

  retourEnArriere() {
    this.navCtrl.pop();
  }

  navigate(name: string) {
    this.router.navigate([name]);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadData()
    //console.log(this.id)
  }

  async loadData() {
    try {
      const data = await this.requestService.getData(this.id,{ /* Vos données à envoyer */ }).toPromise();
      this.produit = data;
      console.log(this.produit); // Maintenant, vous pouvez utiliser this.list ici
    } catch (error) {
      console.error('Erreur lors de la requête GET :', error);
      // Gérez les erreurs ici
    }
  }

  formatDate (date:any) {

    return new Date(date).toLocaleDateString()
  }

  async deleteProduit () {
    try {
      const data = await this.requestService.deleteData(this.id).toPromise();
      console.log(data);
      this.retourEnArriere()
    } catch (error) {
      console.error('Erreur lors de la requête GET :', error);
      // Gérez les erreurs ici
    }
  }

}
