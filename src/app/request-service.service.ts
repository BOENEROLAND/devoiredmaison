import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  private apiUrl = 'http://api.bitebitego.com/';
  private userCode = '23191493-21a3-4c96-9a13-4466feaf8b82'

  constructor(private http: HttpClient) {}

  getAllData(data: any): Observable<any> {
    return this.http.get(this.apiUrl+"afficher/produits/code/"+this.userCode, data);
  }

  getData(id:any,data: any): Observable<any> {
    console.log(id)
    return this.http.get(this.apiUrl+"afficher/produit/"+id+"/code/"+this.userCode, data);
  }

  postData(data: any): Observable<any> {
    data.code = this.userCode
    return this.http.post(this.apiUrl+"ceerproduit", data);
  }
  /**06 41 18 48 */

  putData(id:any,data: any): Observable<any> {
    data.code = this.userCode
    return this.http.put(this.apiUrl+"modifier/produit/"+id+"/"+this.userCode, data);
  }

  deleteData(id:any): Observable<any> {
    //data.code = this.userCode
    return this.http.delete(this.apiUrl+"supprimer/produit/"+id+"/"+this.userCode);
  }

}
