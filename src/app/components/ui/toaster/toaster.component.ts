import { Component, inject } from '@angular/core';
import { ToastService } from '@/app/services/toast.service';

@Component({
  selector: 'app-toaster',
  standalone: true,
  template: `
    @for (toast of toastService.toasts(); track toast.id) {
      <div
        class="fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
      >
        <div
          class="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all border bg-background text-foreground"
        >
          <div class="grid gap-1">
            @if (toast.title) {
              <div class="text-sm font-semibold">{{ toast.title }}</div>
            }
            @if (toast.description) {
              <div class="text-sm opacity-90">{{ toast.description }}</div>
            }
          </div>
          <button
            (click)="toastService.dismiss(toast.id)"
            class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
      </div>
    }
  `,
})
export class ToasterComponent {
  toastService = inject(ToastService);
}
