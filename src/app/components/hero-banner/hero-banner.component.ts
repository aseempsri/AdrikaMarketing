import { Component, input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInDelayed', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  template: `
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.08)_0%,_transparent_70%)]"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h1
          @fadeIn
          class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tight"
        >
          {{ title() }}
        </h1>
        @if (subtitle()) {
          <p
            @fadeInDelayed
            class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {{ subtitle() }}
          </p>
        }
      </div>
    </section>
  `,
})
export class HeroBannerComponent {
  title = input.required<string>();
  subtitle = input<string>();
}
