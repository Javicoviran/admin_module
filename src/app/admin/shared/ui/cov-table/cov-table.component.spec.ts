import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovTableComponent } from './cov-table.component';

describe('CovTableComponent', () => {
  let component: CovTableComponent;
  let fixture: ComponentFixture<CovTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CovTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
