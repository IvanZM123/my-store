import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStickerComponent } from './order-sticker.component';

describe('OrderStickerComponent', () => {
  let component: OrderStickerComponent;
  let fixture: ComponentFixture<OrderStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
