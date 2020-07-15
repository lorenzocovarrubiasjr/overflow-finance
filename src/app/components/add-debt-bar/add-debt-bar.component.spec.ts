import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDebtBarComponent } from './add-debt-bar.component';

describe('AddDebtBarComponent', () => {
  let component: AddDebtBarComponent;
  let fixture: ComponentFixture<AddDebtBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDebtBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDebtBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
