import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Werkduitsland } from './werkduitsland';

describe('Werkduitsland', () => {
  let component: Werkduitsland;
  let fixture: ComponentFixture<Werkduitsland>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Werkduitsland]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Werkduitsland);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
