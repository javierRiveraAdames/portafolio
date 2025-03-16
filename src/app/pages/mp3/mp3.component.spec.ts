import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3Component } from './mp3.component';

describe('Mp3Component', () => {
  let component: Mp3Component;
  let fixture: ComponentFixture<Mp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mp3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
