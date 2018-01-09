import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowDownComponent } from './svg-arrow-down.component';

describe('SvgArrowDownComponent', () => {
  let component: SvgArrowDownComponent;
  let fixture: ComponentFixture<SvgArrowDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgArrowDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgArrowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
