import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoTesteComponent } from './produto-teste.component';

describe('ProdutoTesteComponent', () => {
  let component: ProdutoTesteComponent;
  let fixture: ComponentFixture<ProdutoTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
