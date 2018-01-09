import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowUpComponent } from './svg-arrow-up.component';

describe('SvgArrowUpComponent', () => {
  let component: SvgArrowUpComponent;
  let fixture: ComponentFixture<SvgArrowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgArrowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgArrowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
