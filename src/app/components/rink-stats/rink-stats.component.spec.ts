import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RinkStatsComponent } from './rink-stats.component';

describe('RinkStatsComponent', () => {
  let component: RinkStatsComponent;
  let fixture: ComponentFixture<RinkStatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RinkStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RinkStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
