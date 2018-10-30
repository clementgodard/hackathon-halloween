import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBonbonsComponent } from './page-bonbons.component';

describe('PageBonbonsComponent', () => {
  let component: PageBonbonsComponent;
  let fixture: ComponentFixture<PageBonbonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBonbonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBonbonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
