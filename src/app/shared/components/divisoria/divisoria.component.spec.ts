import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisoriaComponent } from './divisoria.component';

describe('DivisoriaComponent', () => {
  let component: DivisoriaComponent;
  let fixture: ComponentFixture<DivisoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
