import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOverviewComponent } from './site-overview.component';

describe('SiteOverviewComponent', () => {
  let component: SiteOverviewComponent;
  let fixture: ComponentFixture<SiteOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
