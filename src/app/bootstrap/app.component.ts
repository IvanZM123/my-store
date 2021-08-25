import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoaderService } from '../loaders/lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';

  constructor(
    private lazyLoader: LazyLoaderService,
    private router: Router
  ) {}

  loadLazyModule(name: string) {
    this.router.config.push({
      path: name,
      loadChildren: this.lazyLoader.loadModule(name)
    });

    this.router.resetConfig(this.router.config);
    this.router.navigate([name]);
  }
}
