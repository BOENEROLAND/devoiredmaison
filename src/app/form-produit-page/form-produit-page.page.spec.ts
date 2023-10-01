import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormProduitPagePage } from './form-produit-page.page';

describe('FormProduitPagePage', () => {
  let component: FormProduitPagePage;
  let fixture: ComponentFixture<FormProduitPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormProduitPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
