import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvformComponent } from './cvform.component';

describe('CvformComponent', () => {
  let component: CvformComponent;
  let fixture: ComponentFixture<CvformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
