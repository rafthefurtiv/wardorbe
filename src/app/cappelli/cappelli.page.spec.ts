import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CappelliPage } from './cappelli.page';

describe('CappelliPage', () => {
  let component: CappelliPage;
  let fixture: ComponentFixture<CappelliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CappelliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CappelliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
