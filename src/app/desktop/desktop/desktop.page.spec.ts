import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopPage } from './desktop.page';

describe('DesktopPage', () => {
  let component: DesktopPage;
  let fixture: ComponentFixture<DesktopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
