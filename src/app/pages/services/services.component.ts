import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { HeroBannerComponent } from '@/app/components/hero-banner/hero-banner.component';
import { ButtonDirective } from '@/app/components/ui/button/button.directive';

const services = [
  {
    icon: 'search',
    title: 'Digital Marketing',
    desc: 'Comprehensive digital strategies including SEO, SEM, social media marketing, PPC advertising, and performance marketing to maximize your online presence and drive conversions.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop',
    features: [
      'Search Engine Optimization',
      'Pay-Per-Click Advertising',
      'Social Media Marketing',
      'Performance Marketing',
    ],
  },
  {
    icon: 'megaphone',
    title: 'Experiential Marketing',
    desc: 'Creating immersive brand experiences through events, activations, product launches, and exhibitions that forge emotional connections between brands and audiences.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    features: [
      'Event Management',
      'Brand Activations',
      'Product Launches',
      'Exhibitions & Trade Shows',
    ],
  },
  {
    icon: 'users',
    title: 'Lead Generation',
    desc: 'Targeted B2B and B2C lead generation campaigns powered by data analytics, inside sales, and account-based marketing to deliver qualified leads at scale.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    features: ['B2B Campaigns', 'Inside Sales', 'Account-Based Marketing', 'Database Management'],
  },
  {
    icon: 'file-text',
    title: 'Content Marketing',
    desc: 'Strategic content creation and distribution across channels — from blog posts and whitepapers to video production and social content that tells your brand story.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    features: ['Content Strategy', 'Copywriting & Blogs', 'Video Production', 'Social Media Content'],
  },
  {
    icon: 'palette',
    title: 'Branding & Design',
    desc: 'Building distinctive brand identities through logo design, brand guidelines, visual design systems, and creative collateral that makes your brand unforgettable.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    features: ['Brand Identity', 'Logo Design', 'Visual Design Systems', 'Creative Collateral'],
  },
];

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, HeroBannerComponent, ButtonDirective],
  template: `
    <app-hero-banner
      title="Our Services"
      subtitle="Integrated marketing solutions tailored to your business goals"
    />

    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="space-y-16">
          @for (service of services; track service.title; let i = $index) {
            <div
              [class]="'grid md:grid-cols-2 gap-10 items-center ' + (i % 2 === 1 ? 'md:direction-rtl' : '')"
            >
              <div [class]="i % 2 === 1 ? 'md:order-2' : ''">
                <div class="flex items-center gap-3 mb-3">
                  <lucide-icon [name]="service.icon" class="text-primary" [size]="32" />
                  <h2 class="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight">
                    {{ service.title }}
                  </h2>
                </div>
                <p class="text-muted-foreground leading-relaxed">{{ service.desc }}</p>
                <ul class="mt-4 space-y-2 mb-8">
                  @for (f of service.features; track f) {
                    <li class="flex items-center gap-2 text-sm text-foreground/80">
                      <lucide-icon name="arrow-right" [size]="14" class="text-primary shrink-0" />
                      {{ f }}
                    </li>
                  }
                </ul>
                <a routerLink="/contact-us" appButton class="font-heading font-bold uppercase tracking-wider" size="lg">
                  Get Started <lucide-icon name="arrow-right" [size]="16" />
                </a>
              </div>
              <div
                [class]="'h-64 rounded-2xl border border-border overflow-hidden relative ' + (i % 2 === 1 ? 'md:order-1' : '')"
              >
                <img
                  [src]="service.image"
                  [alt]="service.title"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  services = services;
}
