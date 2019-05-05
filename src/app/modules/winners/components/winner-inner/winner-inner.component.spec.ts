import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerInnerComponent } from './winner-inner.component';

describe('WinnerInnerComponent', () => {
  let component: WinnerInnerComponent;
  let fixture: ComponentFixture<WinnerInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
