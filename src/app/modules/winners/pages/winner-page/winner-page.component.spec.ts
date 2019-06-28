import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerPageComponent } from './winner-page.component';

describe('WinnerPageComponent', () => {
  let component: WinnerPageComponent;
  let fixture: ComponentFixture<WinnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
