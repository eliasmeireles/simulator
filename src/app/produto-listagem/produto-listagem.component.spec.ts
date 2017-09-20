import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListagemComponent } from './produto-listagem.component';

describe('ProdutoListagemComponent', () => {
  let component: ProdutoListagemComponent;
  let fixture: ComponentFixture<ProdutoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
