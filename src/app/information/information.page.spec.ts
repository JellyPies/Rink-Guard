import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPage } from './information.page';

describe('SettingsPage', () => {
  let component: InformationPage;
  let fixture: ComponentFixture<InformationPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(InformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
