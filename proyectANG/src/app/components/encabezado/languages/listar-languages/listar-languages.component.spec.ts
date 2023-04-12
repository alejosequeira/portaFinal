import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLanguagesComponent } from './listar-languages.component';

describe('ListarLanguagesComponent', () => {
  let component: ListarLanguagesComponent;
  let fixture: ComponentFixture<ListarLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
