import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilebottomnavComponent } from './mobilebottomnav.component';

describe('MobilebottomnavComponent', () => {
  let component: MobilebottomnavComponent;
  let fixture: ComponentFixture<MobilebottomnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilebottomnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilebottomnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
