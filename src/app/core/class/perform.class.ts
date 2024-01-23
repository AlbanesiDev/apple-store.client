import { catchError, Observable, take } from 'rxjs';

// PARA EL DASHBOARD
export class Perform<T> {
  data: T | undefined;
  isLoading: boolean = false;
  hasError: boolean = false;
  private action$: Observable<T> | undefined;

  load(action$: Observable<T>): void {
    this.isLoading = true;
    this.hasError = false;
    this.action$ = action$;
    this.action$
    .pipe(
      take(1),
      catchError(() => {
        this.data = undefined;
        this.isLoading = false;
        this.hasError = true;
        return [];
      })
    )
    .subscribe((data: T) => {
      this.data = data;
      this.isLoading = false;
      this.hasError = false;
    });
  }
}
