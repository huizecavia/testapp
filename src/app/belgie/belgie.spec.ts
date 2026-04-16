import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Belgie } from './belgie';

describe('Belgie', () => {
  let component: Belgie;
  let fixture: ComponentFixture<Belgie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Belgie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Belgie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
