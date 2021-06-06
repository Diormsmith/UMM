import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazteVoluntarioComponent } from './hazte-voluntario.component';

describe('HazteVoluntarioComponent', () => {
  let component: HazteVoluntarioComponent;
  let fixture: ComponentFixture<HazteVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazteVoluntarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HazteVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
