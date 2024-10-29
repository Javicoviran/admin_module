import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUseComponent } from './component-use.component';

describe('ComponentUseComponent', () => {
  let component: ComponentUseComponent;
  let fixture: ComponentFixture<ComponentUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentUseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
