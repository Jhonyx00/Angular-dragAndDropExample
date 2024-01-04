import { Component } from '@angular/core';
import { List } from '../interfaces/list';

@Component({
  selector: 'app-draggable-box',
  templateUrl: './draggable-box.component.html',
  styleUrls: ['./draggable-box.component.css'],
})
export class DraggableBoxComponent {
  items: List[] = [
    {
      description: 'item 1',
      image:
        'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      description: 'item 2',
      image:
        'https://images.pexels.com/photos/2983141/pexels-photo-2983141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      description: 'item 3',
      image:
        'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      description: 'item 4',
      image:
        'https://images.pexels.com/photos/2887710/pexels-photo-2887710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  draggingIndex: number | null = null;

  onDragStart(event: DragEvent, index: number) {
    this.draggingIndex = index;
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Necesario para permitir soltar
  }

  onDragEnter(event: DragEvent, index: number) {
    event.preventDefault();
    if (this.draggingIndex !== null) {
      const movingItem = this.items[this.draggingIndex];
      this.items.splice(this.draggingIndex, 1);
      this.items.splice(index, 0, movingItem);
      this.draggingIndex = index; // Actualiza el índice del elemento que se está arrastrando
    }
  }

  onDrop(event: DragEvent) {
    console.log(event);
    this.draggingIndex = null; // Limpia el índice del elemento arrastrado
  }
}
