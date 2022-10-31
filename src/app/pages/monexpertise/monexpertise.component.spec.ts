import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonexpertiseComponent } from './monexpertise.component';

describe('MonexpertiseComponent', () => {
  let component: MonexpertiseComponent;
  let fixture: ComponentFixture<MonexpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonexpertiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonexpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
