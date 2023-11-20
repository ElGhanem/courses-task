import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {

  baseUrl: string = 'http://3.65.32.166';
  constructor(private http: HttpClient) { }

  getListOfCourses() {
    return this.http.get(this.baseUrl + '/api/v2/storefront/products?filter[sub_product_type]=course&filter[product_type]=digital');
  }

  getCourseOverview(product_ID: string) {
    return this.http.get(this.baseUrl + '/api/v2/storefront/products/' + product_ID);
  }
}
