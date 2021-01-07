import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapoComponent } from './capo.component';

describe('CapoComponent', () => {
  let component: CapoComponent;
  let fixture: ComponentFixture<CapoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
