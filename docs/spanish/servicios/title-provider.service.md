## TitleService
Este servicio se encarga de obtener el título de la ruta actual en una aplicación Angular.

### Propiedades

- `titleSubject: BehaviorSubject<string>`: Un `BehaviorSubject` que almacena el último título de la ruta.

### Métodos

- `constructor(router: Router, activatedRoute: ActivatedRoute)`: El constructor del servicio. Se suscribe a los eventos de cambio de ruta y actualiza el `titleSubject` con el nuevo título de la ruta.

- `getTitle(): Observable<string>`: Devuelve un Observable del título de la ruta actual. Puedes suscribirte a este Observable para ser notificado cuando cambie el título.

## Uso en un componente
Para usar el servicio `TitleService` en un componente, primero debes inyectarlo en el constructor del componente. Luego, puedes suscribirte al Observable del título en el método `ngOnInit()` del componente y actualizar una propiedad del componente con el nuevo título. También debes desuscribirte del Observable en el método `ngOnDestroy()` para evitar fugas de memoria.

Aquí tienes un ejemplo de cómo usarlo:

```typescript
import { Subscription } from 'rxjs';
// ...

export class AdminHeaderComponent implements OnInit, OnDestroy {
  public faBars = faBars;
  public title!: string;
  private titleSubscription!: Subscription;

  constructor(
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
