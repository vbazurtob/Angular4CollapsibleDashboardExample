import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowRightComponent } from './svg-arrow-right.component';

describe('SvgArrowRightComponent', () => {
  let component: SvgArrowRightComponent;
  let fixture: ComponentFixture<SvgArrowRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgArrowRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
