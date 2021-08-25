import { Injectable } from '@angular/core';
import { LoadChildren, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "clients",
    loadChildren: () => import("../clients/clients.module").then(m => m.ClientsModule)
  },
  {
    path: "products",
    loadChildren: () => import("../products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "orders",
    loadChildren: () => import("../orders/orders.module").then(m => m.OrdersModule)
  }
]

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {
  private modulesMap: Map<string, LoadChildren> = new Map();

  constructor() {
    routes.forEach(route => {
      this.modulesMap.set(
        route.path as string,
        route.loadChildren as LoadChildren
      );
    });
  }

  loadModule(name: string): LoadChildren | undefined {
    return this.modulesMap.get(name);
  }
}
