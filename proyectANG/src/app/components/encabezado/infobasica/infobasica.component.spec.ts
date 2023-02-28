import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobasicaComponent } from './infobasica.component';

describe('InfobasicaComponent', () => {
  let component: InfobasicaComponent;
  let fixture: ComponentFixture<InfobasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobasicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
