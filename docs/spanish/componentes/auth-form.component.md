### `auth-form` Component

#### Uso

El componente `auth-form` se utiliza para mostrar un formulario de autenticación flexible que se puede personalizar según las necesidades específicas del formulario.

<br>
<br>


#### Atributos de Entrada

1. **title** (string): El título del formulario. Puede ser "Login" o "Create Account".

```html
<app-auth-form [title]="'Login'"></app-auth-form>
```

<br>
<br>

2. **formFields** (array de FormField): Un array que define los campos del formulario. Cada campo tiene las siguientes propiedades:

   - **type** (string): Tipo de campo, como "text", "email" o "password".
   - **name** (string): Nombre del campo para asociar con el formulario.
   - **placeholder** (string): Texto de marcador de posición para el campo.
   - **control** (FormControl): Control del formulario asociado al campo.
   - **initialValue** (opcional, any): Valor inicial para el campo.
   - **validators** (opcional, array de Validators): Validadores para aplicar al campo.

```typescript
import { Validators } from '@angular/forms';

registrationFormFields: FormField[] = [
  {
    type: 'text',
    name: 'userName',
    placeholder: 'Username',
    control: new FormControl(''),
    validators: [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
  },
  // ...otros campos
];

<app-auth-form [formFields]="registrationFormFields"></app-auth-form>
```

<br><br>

3. **form** (FormGroup): El formulario principal al que se asocian los campos.

```typescript
import { FormGroup, FormControl } from '@angular/forms';

registrationForm = new FormGroup({
  // Define los campos del formulario aquí
  userName: new FormControl(''),
  // ...otros campos
});

<app-auth-form [form]="registrationForm"></app-auth-form>
```

<br><br>

4. **buttonLabel** (string): Etiqueta del botón de envío del formulario.

```html
<app-auth-form [buttonLabel]="'Sign Up'"></app-auth-form>
```

<br><br>

5. **switchMessage** (string): Mensaje para cambiar entre formularios (por ejemplo, "Already have an account?").

```html
<app-auth-form [switchMessage]="'Already have an account?'"></app-auth-form>
```

<br><br>

6. **switchButtonLabel** (string): Etiqueta del botón para cambiar entre formularios.

```html
<app-auth-form [switchButtonLabel]="'Login'"></app-auth-form>
```

<br><br>

7. **switchFormEvent** (EventEmitter<void>): Evento emitido cuando se hace clic en el botón para cambiar entre formularios. Los usuarios deben suscribirse a este evento para ejecutar una función específica cuando se produce el cambio.

```html
<app-auth-form (switchFormEvent)="goToLoginContainer()"></app-auth-form>
```

<br><br>

#### Ejemplo Completo

```html
<app-auth-form
  [title]="'Create Account'"
  [formFields]="registrationFormFields"
  [form]="registrationForm"
  [buttonLabel]="'Sign Up'"
  [switchMessage]="'Already have an account?'"
  [switchButtonLabel]="'Login'"
  (switchFormEvent)="goToLoginContainer()"
></app-auth-form>
```

<br>

#### Notas Adicionales
- Asegurese de importar y utilizar las clases necesarias de `@angular/forms` en el módulo y componente que estás utilizando.
