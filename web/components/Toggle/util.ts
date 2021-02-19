import { MouseEvent, TouchEvent } from 'react';

export function pointerCoord(event: MouseEvent | TouchEvent): { x: number; y: number } {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    if (event instanceof TouchEvent) {
      const { changedTouches } = event;

      if (changedTouches && changedTouches.length > 0) {
        const touch = changedTouches[0];
        return { x: touch.clientX, y: touch.clientY };
      }
    } else if (event instanceof MouseEvent) {
      const { pageX } = event;

      if (pageX !== undefined) return { x: pageX, y: event.pageY };
    }
  }

  return { x: 0, y: 0 };
}
