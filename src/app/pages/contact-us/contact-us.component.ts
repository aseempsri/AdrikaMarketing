import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HeroBannerComponent } from '@/app/components/hero-banner/hero-banner.component';
import { ButtonDirective } from '@/app/components/ui/button/button.directive';
import { InputComponent } from '@/app/components/ui/input/input.component';
import { TextareaComponent } from '@/app/components/ui/textarea/textarea.component';
import { ToastService } from '@/app/services/toast.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    LucideAngularModule,
    HeroBannerComponent,
    ButtonDirective,
    InputComponent,
    TextareaComponent,
  ],
  template: `
    <app-hero-banner
      title="Contact Us"
      subtitle="Let's get in touch and start something great together"
    />

    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-2xl font-heading font-bold uppercase tracking-tight mb-6">
              Send Us a Message
            </h2>
            <form (ngSubmit)="handleSubmit($event)">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <app-input
                  placeholder="Your Name *"
                  [required]="true"
                  [(value)]="formData.name"
                />
                <app-input
                  placeholder="Email Address *"
                  [type]="'email'"
                  [required]="true"
                  [(value)]="formData.email"
                />
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <app-input placeholder="Phone Number" [(value)]="formData.phone" />
                <app-input placeholder="Company Name" [(value)]="formData.company" />
              </div>
              <div class="mb-4">
                <app-textarea
                  placeholder="Your Message *"
                  [required]="true"
                  [rows]="5"
                  [(value)]="formData.message"
                />
              </div>
              <button type="submit" appButton size="lg" class="font-heading font-bold uppercase tracking-wider">
                Send Message <lucide-icon name="send" [size]="16" />
              </button>
            </form>
          </div>

          <div>
            <h2 class="text-2xl font-heading font-bold uppercase tracking-tight mb-6">
              Get In Touch
            </h2>
            <div class="space-y-6">
              @for (item of contactItems; track item.title) {
                <div class="flex gap-4 p-5 bg-card border border-border rounded-lg">
                  <lucide-icon [name]="item.icon" class="text-primary shrink-0 mt-1" [size]="24" />
                  <div>
                    <h3 class="font-heading font-bold uppercase tracking-wider text-sm">{{ item.title }}</h3>
                    @for (line of item.lines; track line) {
                      <p class="text-muted-foreground text-sm">{{ line }}</p>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactUsComponent {
  private toast = inject(ToastService);

  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  };

  contactItems = [
    {
      icon: 'map-pin',
      title: 'Our Office',
      lines: ['123 Business Hub, Sector 62', 'Noida, Uttar Pradesh 201301', 'India'],
    },
    {
      icon: 'mail',
      title: 'Email Us',
      lines: ['hello@adrikamarketing.com', 'careers@adrikamarketing.com'],
    },
    {
      icon: 'phone',
      title: 'Call Us',
      lines: ['+91 98765 43210', '+91 11 4567 8900'],
    },
  ];

  handleSubmit(e: Event) {
    e.preventDefault();
    this.toast.toast({ title: 'Message Sent!', description: "We'll get back to you shortly." });
    this.formData = { name: '', email: '', phone: '', company: '', message: '' };
  }
}
