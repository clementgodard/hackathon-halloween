import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonbonsComponent } from './bonbons.component';

describe('BonbonsComponent', () => {
  let component: BonbonsComponent;
  let fixture: ComponentFixture<BonbonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonbonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonbonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
