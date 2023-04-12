import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLanguagesComponent } from './registrar-languages.component';

describe('RegistrarLanguagesComponent', () => {
  let component: RegistrarLanguagesComponent;
  let fixture: ComponentFixture<RegistrarLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarLanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
