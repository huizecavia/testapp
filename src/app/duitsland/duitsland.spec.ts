import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Duitsland } from './duitsland';

describe('Duitsland', () => {
  let component: Duitsland;
  let fixture: ComponentFixture<Duitsland>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Duitsland]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Duitsland);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
