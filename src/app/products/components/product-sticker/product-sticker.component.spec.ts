import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStickerComponent } from './product-sticker.component';

describe('ProductStickerComponent', () => {
  let component: ProductStickerComponent;
  let fixture: ComponentFixture<ProductStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
