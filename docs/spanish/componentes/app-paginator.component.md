### Paginator Component

El componente `app-paginator` proporciona una interfaz de usuario para la navegación entre páginas de un conjunto de datos paginado.

#### Uso

```html
<app-paginator [totalPages]="[1, 2, 3, 4]" [currentPage]="1" [visiblePages]="5"></app-paginator>
```

#### Propiedades de Entrada

- **totalPages:** Un array que representa el número total de páginas disponibles.
- **currentPage:** El número de página actual.
- **visiblePages (opcional):** Número opcional que define la cantidad máxima de botones de página visibles a la vez.

#### Interacción

- Al hacer clic en los botones de flecha izquierda y derecha, se puede navegar a la página anterior o siguiente, respectivamente.
- Al hacer clic en un número de página, se navegará directamente a esa página.
- Al estar en la primera pagina el boton flecha izquierda se desactivara y al estar en la ultima pagina el boton flecha derecha se desactivara.

#### Ejemplo de Implementación

```html
<div class="pagination" *ngIf="totalPages.length > 1">
  <div class="pagination__btn">
    <button class="pagination__btn-arrow" (click)="setPage(currentPage - 1)" [disabled]="currentPage === 1">
      <fa-icon [icon]="faAngleLeft"></fa-icon>
    </button>
    <div class="pagination__btn-number">
      <ng-container *ngFor="let item of calculatePageRange();">
        <button [ngClass]="{'activated': item === currentPage}" (click)="setPage(item)">{{ item }}</button>
      </ng-container>
    </div>
    <button class="pagination__btn-arrow" (click)="setPage(currentPage + 1)" [disabled]="currentPage === totalPages.length">
      <fa-icon [icon]="faAngleRight"></fa-icon>
    </button>
  </div>
</div>
```

#### Métodos

- **calculatePageRange():** Calcula y devuelve un array de números representando las páginas a mostrar en el paginador.
  
- **setPage(page: number):** Establece la página actual y actualiza la interfaz de usuario.

#### Notas adicionales
- El componente aun no esta terminado, falta una funcion que devuelva la ruta a navegar, la idea de esta funcion es que sea tambien dinamica y se adapte a las distintos urls y params.
