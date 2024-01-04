import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableBoxComponent } from './draggable-box.component';

describe('DraggableBoxComponent', () => {
  let component: DraggableBoxComponent;
  let fixture: ComponentFixture<DraggableBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableBoxComponent]
    });
    fixture = TestBed.createComponent(DraggableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
