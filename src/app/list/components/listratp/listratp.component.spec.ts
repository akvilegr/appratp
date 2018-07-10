import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListratpComponent } from './listratp.component';

describe('ListratpComponent', () => {
  let component: ListratpComponent;
  let fixture: ComponentFixture<ListratpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListratpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListratpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
