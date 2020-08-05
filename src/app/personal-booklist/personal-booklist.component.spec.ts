import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBooklistComponent } from './personal-booklist.component';

describe('PersonalBooklistComponent', () => {
  let component: PersonalBooklistComponent;
  let fixture: ComponentFixture<PersonalBooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
