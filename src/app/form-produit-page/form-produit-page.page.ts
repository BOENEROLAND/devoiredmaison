import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestServiceService } from '../request-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-produit-page',
  templateUrl: './form-produit-page.page.html',
  styleUrls: ['./form-produit-page.page.scss'],
})
export class FormProduitPagePage implements OnInit {
  nom: string = '';
  quantite: string = '';
  prix: string = '';
  image: string = '';
  nomPrenomProprietaire: string = '';
  contactProprietaire: string = '';
  description: string = '';
  id:any
  constructor(
    private router: Router,
    private requestService: RequestServiceService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.getData()
    }
  }

  navigate(name: string) {
    this.router.navigate([name]);
  }
  retourEnArriere() {
    this.navCtrl.pop();
  }

  submit(){
    if(this.id){
      this.update()
    }else{
      this.post()
    }
  }

  post() {
    const data = {
      code: '',
      nom: this.nom,
      description: this.description,
      quantite: this.quantite,
      prix: this.prix,
      image:this.image,
      nomPrenomProprietaire: this.nomPrenomProprietaire,
      contactProprietaire: this.contactProprietaire,
    };
    //console.log(data)
    this.requestService.postData(data).subscribe(
      (response) => {
        console.log('Réponse du serveur :', response);
        //this.navCtrl.pop();
        this.retourEnArriere()
      },
      (error) => {
        console.error('Erreur lors de la requête POST :', error);
      }
    );
  }
  update() {
    const data = {
      nom: this.nom,
      description: this.description,
      quantite: this.quantite,
      prix: this.prix,
      image:this.image,
      nomPrenomProprietaire: this.nomPrenomProprietaire,
      contactProprietaire: this.contactProprietaire,
    };
    console.log(data)
    this.requestService.putData(this.id,data).subscribe(
      (response) => {
        console.log('Réponse du serveur :', response);
        //this.navCtrl.pop();
        this.retourEnArriere()
      },
      (error) => {
        console.error('Erreur lors de la requête POST :', error);
      }
    );
  }

  async getData() {
    try {
      const data = await this.requestService.getData(this.id,{ /* Vos données à envoyer */ }).toPromise();
      //this.produit = data;
      this.nom = data.nom
      this.description = data.description
      this.quantite = data.quantite
      this.prix = data.prix
      this.image = data.image
      this.nomPrenomProprietaire = data.nomPrenomProprietaire
      this.contactProprietaire = data.contactProprietaire
    } catch (error) {
      console.error('Erreur lors de la requête GET :', error);
      // Gérez les erreurs ici
    }
  }
}
