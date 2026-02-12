import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  LucideAngularModule,
  Menu,
  X,
  ArrowRight,
  Target,
  Zap,
  Users,
  BarChart3,
  Award,
  ChevronLeft,
  ChevronRight,
  Eye,
  Lightbulb,
  Heart,
  TrendingUp,
  Search,
  Megaphone,
  FileText,
  Palette,
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, {
      scrollPositionRestoration: 'top',
    }),
    provideAnimations(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu,
        X,
        ArrowRight,
        Target,
        Zap,
        Users,
        BarChart3,
        Award,
        ChevronLeft,
        ChevronRight,
        Eye,
        Lightbulb,
        Heart,
        TrendingUp,
        Search,
        Megaphone,
        FileText,
        Palette,
        Mail,
        Phone,
        MapPin,
        Send,
        Facebook,
        Twitter,
        Linkedin,
        Instagram,
      }),
    ),
  ],
};
