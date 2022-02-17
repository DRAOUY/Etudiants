import { ComponentFixture, TestBed } from '@angular/core/testing';

import { etudiantFormComponent } from './etudiant-form.component';

describe('etudiantFormComponent', () => {
  let component: etudiantFormComponent;
  let fixture: ComponentFixture<etudiantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ etudiantFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(etudiantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
