import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerService } from './spinner.service';

describe('SpinnerComponent', () => {
  let componente: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxSpinnerModule],
      declarations: [SpinnerComponent],
      providers: [SpinnerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente Spinner', () => {
    expect(componente).toBeTruthy();
  });
});
