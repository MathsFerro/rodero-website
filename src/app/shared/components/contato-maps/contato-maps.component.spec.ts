import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoMapsComponent } from './contato-maps.component';

describe('ContatoMapsComponent', () => {
  let component: ContatoMapsComponent;
  let fixture: ComponentFixture<ContatoMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
