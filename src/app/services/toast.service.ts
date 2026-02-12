import { Injectable, signal, computed } from '@angular/core';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  open: boolean;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastsState = signal<Toast[]>([]);
  toasts = computed(() => this.toastsState());

  private genId(): string {
    return Math.random().toString(36).slice(2);
  }

  toast(options: { title?: string; description?: string }) {
    const id = this.genId();
    const toast: Toast = {
      id,
      title: options.title,
      description: options.description,
      open: true,
    };
    this.toastsState.update((prev) => [toast, ...prev].slice(0, 1));
    setTimeout(() => this.dismiss(id), 5000);
    return { id, dismiss: () => this.dismiss(id) };
  }

  dismiss(id?: string) {
    if (id) {
      this.toastsState.update((prev) =>
        prev.map((t) => (t.id === id ? { ...t, open: false } : t))
      );
      setTimeout(() => {
        this.toastsState.update((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    } else {
      this.toastsState.set([]);
    }
  }
}
