import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebbottomnavComponent } from './webbottomnav.component';

describe('WebbottomnavComponent', () => {
  let component: WebbottomnavComponent;
  let fixture: ComponentFixture<WebbottomnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebbottomnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebbottomnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
