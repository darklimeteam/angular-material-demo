import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapDragDropComponent } from './wrap-drag-drop.component';

describe('WrapDragDropComponent', () => {
  let component: WrapDragDropComponent;
  let fixture: ComponentFixture<WrapDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
