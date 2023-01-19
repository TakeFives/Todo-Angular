import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DroppableService {

  dragStart$: Observable<DragEvent>;
  dragEnd$: Observable<DragEvent>;

  private dragStartSubject = new Subject<DragEvent>();
  private dragEndSubject = new Subject<DragEvent>();

  constructor() {
    this.dragStart$ = this.dragStartSubject.asObservable();
    this.dragEnd$ = this.dragEndSubject.asObservable();
  }

  onDragStart(event: DragEvent) {
    this.dragStartSubject.next(event)
  }

  onDragEnd(event: DragEvent) {
    this.dragEndSubject.next(event)
  }

}
