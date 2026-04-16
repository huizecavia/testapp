import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Winterberg } from './winterberg';

describe('Winterberg', () => {
  let component: Winterberg;
  let fixture: ComponentFixture<Winterberg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Winterberg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Winterberg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
