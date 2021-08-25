import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsPageComponent } from './list-products-page.component';

describe('ListProductsPageComponent', () => {
  let component: ListProductsPageComponent;
  let fixture: ComponentFixture<ListProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
