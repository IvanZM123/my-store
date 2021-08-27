import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [
    {
      title: "Lista de productos",
      subtitle: "Encuentra nuestros productos",
      image: "https://image.flaticon.com/icons/png/512/2250/2250295.png",
      color: "brown",
      route: "products"
    },
    {
      title: "Lista de clientes",
      subtitle: "Nuestros clientes mas fieles",
      image: "https://image.flaticon.com/icons/png/512/4149/4149883.png",
      color: "green",
      route: "clients"
    },
    {
      title: "Lista de ordenes",
      subtitle: "Todas las ordenes",
      image: "https://image.flaticon.com/icons/png/512/5439/5439012.png",
      color: "yellow",
      route: "orders"
    }
  ];
  productsLength!: Observable<number>;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {}
}
