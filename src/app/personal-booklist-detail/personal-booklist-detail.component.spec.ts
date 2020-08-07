import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBooklistDetailComponent } from './personal-booklist-detail.component';

describe('PersonalBooklistDetailComponent', () => {
  let component: PersonalBooklistDetailComponent;
  let fixture: ComponentFixture<PersonalBooklistDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBooklistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBooklistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
