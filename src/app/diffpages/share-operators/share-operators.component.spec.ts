import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareOperatorsComponent } from './share-operators.component';

describe('ShareOperatorsComponent', () => {
  let component: ShareOperatorsComponent;
  let fixture: ComponentFixture<ShareOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
