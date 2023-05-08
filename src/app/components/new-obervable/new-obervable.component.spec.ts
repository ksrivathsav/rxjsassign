import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObervableComponent } from './new-obervable.component';

describe('NewObervableComponent', () => {
  let component: NewObervableComponent;
  let fixture: ComponentFixture<NewObervableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewObervableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewObervableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
