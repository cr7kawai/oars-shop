import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/products`);
  }

  addProducto(producto: Producto){
    return this.http.post(`${this.baseUrl}/products`,producto);
  }
  
  deleteProducto(idProducto: number){
    return this.http.delete(`${this.baseUrl}/products?id=${idProducto}`);
  }

  updateProducto(idProducto: number, productoAct: Producto){
    return this.http.put(`${this.baseUrl}/products?id=${idProducto}`,productoAct);
  }

}