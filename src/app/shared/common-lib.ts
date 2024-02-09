import { DestroyRef, inject } from "@angular/core";
import { Subject, takeUntil } from "rxjs"

export const onDestroyed = () => {

  const subject = new Subject();

  inject( DestroyRef ).onDestroy(() => {

    subject.next( null );
    subject.complete();

  });

  return <T>() => takeUntil<T>( subject.asObservable() );
}
