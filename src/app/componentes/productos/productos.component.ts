import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Producto } from '../../interfaces/producto';
import { response } from 'express';
import { MessageService } from 'primeng/api';
import { error } from 'console';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: Producto[] = [];
  statuses = [
    { label: 'INSTOCK', value: 'instock' },
    { label: 'LOWSTOCK', value: 'lowstock' },
    { label: 'OUTOFSTOCK', value: 'outofstock' }
  ];

  constructor(
    private productosService: ProductosService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.productosService.getProductos().subscribe((products) => {
      this.products = products;
      console.log(this.products)
    });
  }

  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' | undefined {
    switch(status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }

  deleteProduct(idProducto: number){
    this.productosService.deleteProducto(idProducto).subscribe(response =>{
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'El registro se ha eliminado correctamente'
      });
      this.ngOnInit()
    },error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se ha podido eliminar el registro'
      });
    })
  }
}
