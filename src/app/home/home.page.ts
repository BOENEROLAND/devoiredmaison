import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  list: any;
  constructor(
    private router: Router,
    private requestService: RequestServiceService
  ) {
    this.loadData()
    console.log(this.list)
  }

  navigate(name:string) {
    this.router.navigate([name]);
  }

  async loadData() {
    try {
      const data = await this.requestService.getAllData({ /* Vos données à envoyer */ }).toPromise();
      this.list = data;
      console.log(this.list); // Maintenant, vous pouvez utiliser this.list ici
    } catch (error) {
      console.error('Erreur lors de la requête GET :', error);
      // Gérez les erreurs ici
    }
  }
  
}
