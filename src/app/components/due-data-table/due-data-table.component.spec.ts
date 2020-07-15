import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDataTableComponent } from './due-data-table.component';

describe('DueDataTableComponent', () => {
  let component: DueDataTableComponent;
  let fixture: ComponentFixture<DueDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
