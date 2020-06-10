import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtopnavComponent } from './webtopnav.component';

describe('WebtopnavComponent', () => {
  let component: WebtopnavComponent;
  let fixture: ComponentFixture<WebtopnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebtopnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebtopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
