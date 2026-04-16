import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Irrland } from './irrland';

describe('Irrland', () => {
  let component: Irrland;
  let fixture: ComponentFixture<Irrland>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Irrland]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Irrland);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
