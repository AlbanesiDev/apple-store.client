## TitleService
This service is responsible for obtaining the title of the current route in an Angular application.

### Properties

- `titleSubject: BehaviorSubject<string>`: A `BehaviorSubject` that stores the last title of the route.

### Methods

- `constructor(router: Router, activatedRoute: ActivatedRoute)`: The constructor of the service. Subscribes to route change events and updates the `titleSubject` with the new route title.

- `getTitle(): Observable<string>`: Returns an Observable of the title of the current route. You can subscribe to this Observable to be notified when the title changes.

## Use in a component
To use the `TitleService` service in a component, you must first inject it into the component's constructor. You can then subscribe to the title Observable in the component's `ngOnInit()` method and update a property of the component with the new title. You should also unsubscribe from the Observable in the `ngOnDestroy()` method to avoid memory leaks.

Here is an example of how to use it:

```typescript
import { Subscription } from 'rxjs';
//...

export class AdminHeaderComponent implements OnInit, OnDestroy {
   public faBars = faBars;
   public title!: string;
   private titleSubscription!: Subscription;

   builder(
     private cdr: ChangeDetectorRef,
     private sidebarService: SidebarService,
     private titleProviderService: TitleProviderService
   ) {}

   ngOnInit(): void {
     this.titleSubscription = this.titleProviderService.getTitle().subscribe(title => {
       this.title = title;
       this.cdr.detectChanges();
     });
   }

   ngOnDestroy(): void {
     if (this.titleSubscription) {
       this.titleSubscription.unsubscribe();
     }
   }
}
```
