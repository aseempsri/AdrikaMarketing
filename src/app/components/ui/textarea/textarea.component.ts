import { Component, input, model } from '@angular/core';
import { cn } from '@/lib/utils';

@Component({
  selector: 'app-textarea',
  standalone: true,
  template: `
    <textarea
      [placeholder]="placeholder()"
      [required]="required()"
      [rows]="rows()"
      [value]="value()"
      (input)="value.set($any($event.target).value)"
      [class]="textareaClass()"
    ></textarea>
  `,
})
export class TextareaComponent {
  placeholder = input<string>('');
  required = input<boolean>(false);
  rows = input<number>(5);
  value = model<string>('');

  textareaClass = () =>
    cn(
      'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-secondary border-border',
    );
}
