import { EventEmitter, Injectable, Output, signal } from '@angular/core';
import { IEvent } from '../../core/model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  @Output() event: EventEmitter<IEvent> = new EventEmitter();

  emit(e: IEvent): void {
    this.event.emit(e);
  }

}
