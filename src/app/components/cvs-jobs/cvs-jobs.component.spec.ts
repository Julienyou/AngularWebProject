import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsJobsComponent } from './cvs-jobs.component';

describe('CvsJobsComponent', () => {
  let component: CvsJobsComponent;
  let fixture: ComponentFixture<CvsJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
