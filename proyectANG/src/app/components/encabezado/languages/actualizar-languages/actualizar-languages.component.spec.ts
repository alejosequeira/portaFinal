import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarLanguagesComponent } from './actualizar-languages.component';

describe('ActualizarLanguagesComponent', () => {
  let component: ActualizarLanguagesComponent;
  let fixture: ComponentFixture<ActualizarLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarLanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
