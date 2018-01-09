import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFirewallComponent } from './svg-firewall.component';

describe('SvgFirewallComponent', () => {
  let component: SvgFirewallComponent;
  let fixture: ComponentFixture<SvgFirewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgFirewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgFirewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
