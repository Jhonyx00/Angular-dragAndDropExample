import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableBoxComponent } from './draggable-box/draggable-box.component';

@NgModule({
  declarations: [DraggableBoxComponent],
  imports: [CommonModule],
  exports: [DraggableBoxComponent],
})
export class ComponentsModule {}
