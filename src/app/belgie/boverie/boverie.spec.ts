import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boverie } from './boverie';

describe('Boverie', () => {
  let component: Boverie;
  let fixture: ComponentFixture<Boverie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boverie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boverie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
