import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenChargeComponent } from './screen-charge.component';

describe('ScreenChargeComponent', () => {
  let component: ScreenChargeComponent;
  let fixture: ComponentFixture<ScreenChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenChargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
