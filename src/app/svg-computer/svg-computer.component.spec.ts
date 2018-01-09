import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgComputerComponent } from './svg-computer.component';

describe('SvgComputerComponent', () => {
  let component: SvgComputerComponent;
  let fixture: ComponentFixture<SvgComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
