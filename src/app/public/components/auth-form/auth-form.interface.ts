import { FormControl } from '@angular/forms';

export interface FormField {
  type: string;
  name: string;
  placeholder: string;
  initialValue?: any;
  control: FormControl;
  validators: any[];
}
