import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConfigComponent } from './api-config.component';

describe('ApiConfigComponent', () => {
  let component: ApiConfigComponent;
  let fixture: ComponentFixture<ApiConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
