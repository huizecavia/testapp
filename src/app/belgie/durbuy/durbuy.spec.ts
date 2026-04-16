import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Durbuy } from './durbuy';

describe('Durbuy', () => {
  let component: Durbuy;
  let fixture: ComponentFixture<Durbuy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Durbuy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Durbuy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
