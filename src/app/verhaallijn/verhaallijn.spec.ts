import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verhaallijn } from './verhaallijn';

describe('Verhaallijn', () => {
  let component: Verhaallijn;
  let fixture: ComponentFixture<Verhaallijn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verhaallijn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verhaallijn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
