### `auth-form` Component

#### Use

The `auth-form` component is used to display a flexible authentication form that can be customized to the specific needs of the form.

<br>
<br>


#### Input Attributes

1. **title** (string): The title of the form. It can be "Login" or "Create Account".

```html
<app-auth-form [title]="'Login'"></app-auth-form>
```

<br>
<br>

2. **formFields** (FormField array): An array that defines the form fields. Each field has the following properties:

    - **type** (string): Field type, such as "text", "email" or "password".
    - **name** (string): Name of the field to associate with the form.
    - **placeholder** (string): Placeholder text for the field.
    - **control** (FormControl): Control of the form associated with the field.
    - **initialValue** (optional, any): Initial value for the field.
    - **validators** (optional, array of Validators): Validators to apply to the field.

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
   // ...other fields
];

<app-auth-form [formFields]="registrationFormFields"></app-auth-form>
```

<br><br>

3. **form** (FormGroup): The main form to which the fields are associated.

```typescript
import { FormGroup, FormControl } from '@angular/forms';

registrationForm = new FormGroup({
   // Define the form fields here
   userName: new FormControl(''),
   // ...other fields
});

<app-auth-form [form]="registrationForm"></app-auth-form>
```

<br><br>

4. **buttonLabel** (string): Form submit button label.

```html
<app-auth-form [buttonLabel]="'Sign Up'"></app-auth-form>
```

<br><br>

5. **switchMessage** (string): Message to switch between forms (for example, "Already have an account?").

```html
<app-auth-form [switchMessage]="'Already have an account?'"></app-auth-form>
```

<br><br>

6. **switchButtonLabel** (string): Button label to switch between forms.

```html
<app-auth-form [switchButtonLabel]="'Login'"></app-auth-form>
```

<br><br>

7. **switchFormEvent** (EventEmitter<void>): Event emitted when the button is clicked to switch between forms. Users must subscribe to this event to execute a specific function when the change occurs.

```html
<app-auth-form (switchFormEvent)="goToLoginContainer()"></app-auth-form>
```

<br><br>

#### Complete Example

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

#### Additional notes
- Make sure to import and use the necessary `@angular/forms` classes in the module and component you are using.
