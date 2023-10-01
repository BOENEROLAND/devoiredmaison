import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailProduitPagePage } from './detail-produit-page.page';

describe('DetailProduitPagePage', () => {
  let component: DetailProduitPagePage;
  let fixture: ComponentFixture<DetailProduitPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailProduitPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
