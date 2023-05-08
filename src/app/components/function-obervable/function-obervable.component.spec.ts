import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionObervableComponent } from './function-obervable.component';

describe('FunctionObervableComponent', () => {
  let component: FunctionObervableComponent;
  let fixture: ComponentFixture<FunctionObervableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionObervableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionObervableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
