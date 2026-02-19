import { Component } from '@angular/core';
import { HeroBannerComponent } from '@/app/components/hero-banner/hero-banner.component';

const collectiveItems = [
  {
    name: 'Adrika Marketing',
    logo: '/logo.png',
    logoLeft: true,
    url: 'https://www.adrikamarketing.com',
    text: `Founded in 2012, Adrika Marketing began as a small team of passionate marketers with a big vision — to bridge the gap between brands and their audiences through integrated, data-driven marketing solutions.

Over the years, we've grown into a full-service agency with expertise spanning digital marketing, experiential events, lead generation, content strategy, and branding. Our journey has been defined by relentless innovation, deep client partnerships, and a commitment to delivering measurable results.`,
  },
  {
    name: 'Adrika Tech',
    logo: '/collective/adrika_tech-removebg-preview.png',
    logoLeft: false,
    url: 'https://adrika.co.in',
    text: `Adrika Tech is a dynamic technology and digital solutions firm offering comprehensive IT, digital marketing, business consulting, and software services. We help businesses grow with tailored tech solutions — from web and app development to marketing strategy, market research, and IT consulting. Focused on innovation and client success, Adrika partners with brands to solve challenges, boost performance, and drive scalable growth.`,
  },
  {
    name: 'Adrika Vista Retreats',
    logo: '/collective/adrika_vista_retreats-removebg-preview.png',
    logoLeft: true,
    url: 'https://ezyescape.com',
    text: `Ezyescape : Discover Our Escapes

Curated homestays, mindful retreats, and journeys that restore, reconnect, and reawaken your sense of wonder`,
  },
  {
    name: 'Adrika Law Firm',
    logo: '/collective/adrika_law_firm-removebg-preview.png',
    logoLeft: false,
    url: null,
    text: `We are a modern law firm operating across India's tier-one cities, focused on supporting new-age startups and high-growth ventures. From entity structuring and compliance to fundraising, contracts, intellectual property, and dispute resolution, we provide end-to-end legal solutions. Combining legal expertise with commercial insight, we act as strategic partners, enabling founders to innovate, scale, and grow with confidence in a dynamic regulatory environment.`,
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

    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6 space-y-8 md:space-y-12">
        @for (item of collectiveItems; track item.name) {
          @if (item.url) {
            <a
              [href]="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="block border border-border rounded-xl bg-card/50 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.35)] cursor-pointer"
            >
              <div
                class="hidden md:flex items-center gap-8 lg:gap-12 p-8 lg:p-12"
                [class.flex-row]="item.logoLeft"
                [class.flex-row-reverse]="!item.logoLeft"
              >
                <div class="flex-shrink-0 flex items-center justify-center w-1/3 min-w-0">
                  <img
                    [src]="getImagePath(item.logo)"
                    [alt]="item.name"
                    [class]="'max-h-24 w-auto object-contain origin-center ' + (item.name === 'Adrika Marketing' ? 'scale-[2.535]' : 'scale-[1.95]')"
                    (error)="onImageError($event)"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-xl font-heading font-bold uppercase tracking-tight text-foreground mb-4">
                    {{ item.name }}
                  </h3>
                  <p class="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {{ item.text }}
                  </p>
                </div>
              </div>
              <div class="md:hidden flex flex-col p-6 overflow-visible">
                <div class="flex justify-center items-center mb-6 min-h-[140px] overflow-visible">
                  <img
                    [src]="getImagePath(item.logo)"
                    [alt]="item.name"
                    [class]="'w-auto object-contain origin-center ' + (item.name === 'Adrika Marketing' ? 'h-[10.4rem] max-w-[280px]' : 'h-28 max-w-[280px]')"
                    (error)="onImageError($event)"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-heading font-bold uppercase tracking-tight text-foreground mb-3">
                    {{ item.name }}
                  </h3>
                  <p class="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </a>
          } @else {
            <div
              class="block border border-border rounded-xl bg-card/50 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.35)] cursor-default"
            >
              <div
                class="hidden md:flex items-center gap-8 lg:gap-12 p-8 lg:p-12"
                [class.flex-row]="item.logoLeft"
                [class.flex-row-reverse]="!item.logoLeft"
              >
                <div class="flex-shrink-0 flex items-center justify-center w-1/3 min-w-0">
                  <img
                    [src]="getImagePath(item.logo)"
                    [alt]="item.name"
                    [class]="'max-h-24 w-auto object-contain origin-center ' + (item.name === 'Adrika Marketing' ? 'scale-[2.535]' : 'scale-[1.95]')"
                    (error)="onImageError($event)"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-xl font-heading font-bold uppercase tracking-tight text-foreground mb-4">
                    {{ item.name }}
                  </h3>
                  <p class="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {{ item.text }}
                  </p>
                </div>
              </div>
              <div class="md:hidden flex flex-col p-6 overflow-visible">
                <div class="flex justify-center items-center mb-6 min-h-[140px] overflow-visible">
                  <img
                    [src]="getImagePath(item.logo)"
                    [alt]="item.name"
                    [class]="'w-auto object-contain origin-center ' + (item.name === 'Adrika Marketing' ? 'h-[10.4rem] max-w-[280px]' : 'h-28 max-w-[280px]')"
                    (error)="onImageError($event)"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-heading font-bold uppercase tracking-tight text-foreground mb-3">
                    {{ item.name }}
                  </h3>
                  <p class="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </div>
          }
        }
      </div>
    </section>
  `,
})
export class CollectiveComponent {
  collectiveItems = collectiveItems;

  getImagePath(logo: string): string {
    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
    const path = logo.startsWith('/') ? logo.slice(1) : logo;
    const base = baseHref.endsWith('/') ? baseHref : baseHref + '/';
    return base + path;
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
