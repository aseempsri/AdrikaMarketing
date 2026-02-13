import { Component } from '@angular/core';
import { HeroBannerComponent } from '@/app/components/hero-banner/hero-banner.component';

const companies = [
  {
    name: 'Adrika Tech',
    logo: 'collective/adrika_tech-removebg-preview.png',
  },
  {
    name: 'Adrika Marketing',
    logo: 'collective/adrika_marketing-removebg-preview.png',
  },
  {
    name: 'Adrika Law Firm',
    logo: 'collective/adrika_law_firm-removebg-preview.png',
  },
  {
    name: 'Adrika Vista Retreats',
    logo: 'collective/adrika_vista_retreats-removebg-preview.png',
  },
];

@Component({
  selector: 'app-collective',
  standalone: true,
  imports: [HeroBannerComponent],
  template: `
    <app-hero-banner
      title="The Collective"
      subtitle="A unified ecosystem of specialized companies working together to deliver comprehensive solutions"
    />

    <section class="min-h-screen p-0 m-0 w-full flex items-center justify-center">
      <!-- Desktop: 2x2 Grid -->
      <div class="hidden md:flex h-screen w-[55%] m-0 p-0">
        <div class="grid grid-cols-2 h-full w-full" style="gap: 0; column-gap: 0;">
          @for (company of companies; track company.name) {
            <div class="relative w-full h-full overflow-hidden flex items-center justify-center m-0 p-0" style="aspect-ratio: 1;">
              <img
                [src]="getImagePath(company.logo)"
                [alt]="company.name"
                class="max-w-full max-h-full object-contain"
                (error)="onImageError($event)"
              />
              <div
                class="fallback-label hidden absolute inset-0 bg-card flex items-center justify-center"
              >
                <p class="text-primary text-xl font-heading font-bold uppercase">
                  {{ company.name }}
                </p>
              </div>
            </div>
          }
        </div>
      </div>
      
      <!-- Mobile: Vertical Stack -->
      <div class="md:hidden w-full h-auto py-2 px-4" style="gap: 0;">
        @for (company of companies; track company.name) {
          <div class="relative w-full flex items-center justify-center" style="aspect-ratio: 1; min-height: 80vh;">
            <div class="relative w-full h-full flex items-center justify-center">
              <img
                [src]="getImagePath(company.logo)"
                [alt]="company.name"
                class="max-w-full max-h-full object-contain"
                (error)="onImageError($event)"
              />
              <div
                class="fallback-label hidden absolute inset-0 bg-card flex items-center justify-center"
              >
                <p class="text-primary text-xl font-heading font-bold uppercase">
                  {{ company.name }}
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class CollectiveComponent {
  companies = companies;

  getImagePath(logo: string): string {
    const baseHref = document.querySelector('base')?.getAttribute('href') || '';
    return baseHref + logo;
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const fallback = img.nextElementSibling as HTMLElement;
    if (fallback && fallback.classList.contains('fallback-label')) {
      fallback.classList.remove('hidden');
    }
  }
}
