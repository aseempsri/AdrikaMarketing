import { Component, input, model } from '@angular/core';
import { cn } from '@/lib/utils';

@Component({
  selector: 'app-input',
  standalone: true,
  template: `
    <input
      [type]="type()"
      [placeholder]="placeholder()"
      [required]="required()"
      [value]="value()"
      (input)="value.set($any($event.target).value)"
      [class]="inputClass()"
    />
  `,
})
export class InputComponent {
  type = input<string>('text');
  placeholder = input<string>('');
  required = input<boolean>(false);
  value = model<string>('');

  inputClass = () =>
    cn(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-secondary border-border',
    );
}
