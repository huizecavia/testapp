import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Werkbelgie } from './werkbelgie';

describe('Werkbelgie', () => {
  let component: Werkbelgie;
  let fixture: ComponentFixture<Werkbelgie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Werkbelgie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Werkbelgie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
