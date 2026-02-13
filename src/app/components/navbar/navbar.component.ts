import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Services', path: '/services' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Collective', path: '/collective' },
  { label: 'Contact Us', path: '/contact-us' },
];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <nav
      [class]="cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled() ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent')"
    >
      <div class="container mx-auto px-6 py-4 flex items-center justify-between">
        <a routerLink="/" class="flex items-center gap-2">
          <span class="text-2xl font-heading font-bold tracking-tight text-foreground">
            ADRIKA<span class="text-primary"> MARKETING</span>
          </span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="text-primary"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
              [class]="cn('text-sm font-heading font-semibold uppercase tracking-wider transition-colors hover:text-primary', router.url === link.path ? '' : 'text-foreground/80')"
            >
              {{ link.label }}
            </a>
          }
        </div>

        <button
          class="md:hidden text-foreground"
          (click)="isOpen.set(!isOpen())"
          aria-label="Toggle menu"
        >
          @if (isOpen()) {
            <lucide-icon name="x" [size]="28" />
          } @else {
            <lucide-icon name="menu" [size]="28" />
          }
        </button>
      </div>

      @if (isOpen()) {
        <div class="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div class="container mx-auto px-6 py-6 flex flex-col gap-4">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                (click)="isOpen.set(false)"
                [class]="cn('text-lg font-heading font-semibold uppercase tracking-wider py-2 transition-colors hover:text-primary', router.url === link.path ? 'text-primary' : 'text-foreground/80')"
              >
                {{ link.label }}
              </a>
            }
          </div>
        </div>
      }
    </nav>
  `,
})
export class NavbarComponent implements OnInit {
  router = inject(Router);
  isOpen = signal(false);
  scrolled = signal(false);
  navLinks = navLinks;
  cn = cn;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.scrolled.set(window.scrollY > 50));
    }
  }
}
