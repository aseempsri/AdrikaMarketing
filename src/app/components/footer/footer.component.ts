import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <footer class="bg-card border-t border-border">
      <div class="container mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 class="text-xl font-heading font-bold mb-4">
              ADRIKA<span class="text-primary"> MARKETING</span>
            </h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              A full-service digital marketing agency delivering integrated solutions that drive growth, engagement, and measurable results for brands across India and beyond.
            </p>
          </div>

          <div>
            <h4 class="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-primary">Quick Links</h4>
            <ul class="space-y-2">
              @for (link of quickLinks; track link.path) {
                <li>
                  <a [routerLink]="link.path" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-primary">Services</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li>Digital Marketing</li>
              <li>Experiential Marketing</li>
              <li>Lead Generation</li>
              <li>Content Marketing</li>
              <li>Branding & Design</li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-primary">Contact</h4>
            <ul class="space-y-3 text-sm text-muted-foreground">
              <li class="flex items-start gap-2">
                <lucide-icon name="map-pin" [size]="16" class="mt-0.5 shrink-0 text-primary" />
                <span>123 Business Hub, Sector 62, Noida, Uttar Pradesh, India</span>
              </li>
              <li class="flex items-center gap-2">
                <lucide-icon name="phone" [size]="16" class="shrink-0 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li class="flex items-center gap-2">
                <lucide-icon name="mail" [size]="16" class="shrink-0 text-primary" />
                <span>hello&#64;adrikamarketing.com</span>
              </li>
            </ul>
            <div class="flex gap-3 mt-4">
              <a href="#" class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <lucide-icon name="facebook" [size]="16" />
              </a>
              <a href="#" class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <lucide-icon name="twitter" [size]="16" />
              </a>
              <a href="#" class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <lucide-icon name="linkedin" [size]="16" />
              </a>
              <a href="#" class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <lucide-icon name="instagram" [size]="16" />
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {{ currentYear }} Adrika Marketing. All rights reserved.
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Contact Us', path: '/contact-us' },
  ];
  currentYear = new Date().getFullYear();
}
