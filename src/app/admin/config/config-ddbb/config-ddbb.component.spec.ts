import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDdbbComponent } from './config-ddbb.component';

describe('ConfigDdbbComponent', () => {
  let component: ConfigDdbbComponent;
  let fixture: ComponentFixture<ConfigDdbbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigDdbbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigDdbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
