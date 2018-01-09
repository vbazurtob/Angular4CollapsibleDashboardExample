import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLinePercentageComponent } from './chart-line-percentage.component';

describe('ChartLinePercentageComponent', () => {
  let component: ChartLinePercentageComponent;
  let fixture: ComponentFixture<ChartLinePercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLinePercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLinePercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
