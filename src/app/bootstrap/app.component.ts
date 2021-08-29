import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { LazyLoaderService } from '../loaders/lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Array<Record<string, string>> = [
    { title: "Productos", icon: "shopping-bag", path: "products" },
    { title: "Clientes", icon: "group", path: "clients" },
    { title: "Ordenes", icon: "cart", path: "orders" }
  ];

  constructor(
    private lazyLoader: LazyLoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(async routerEvent => {
      if (routerEvent instanceof NavigationStart) {
        const { nameModule } = this.parseRoute(routerEvent.url);
        
        if (routerEvent.url.includes(nameModule) && !this.isLazyRouteAvaible(nameModule)) {
          this.loadLazyModule(routerEvent.url);
        }
      }
    });
  }

  loadLazyModule(name: string) {
    const { nameModule } = this.parseRoute(name);

    this.router.config.push({
      path: nameModule,
      loadChildren: this.lazyLoader.getModule(nameModule)
    });

    this.router.resetConfig(this.router.config);
    this.router.navigate([name]);
  }

  isLazyRouteAvaible(path: string): boolean {
    return this.router.config.filter(c => c.path === path).length > 0
  }

  parseRoute(route: string) {
    const path: string = route.replace("/", "");
    const nameModule: string = path.split("/")[0];

    return { nameModule };
  }
}
