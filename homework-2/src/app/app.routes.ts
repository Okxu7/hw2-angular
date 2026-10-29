// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; // У Angular 17-19: HomeComponent з './pages/home/home.component'
import { ImageBinding } from './pages/image-binding/image-binding';
import { Slider } from './pages/slider/slider';

export const routes: Routes = [
  { path: '', component: Home }, // Головна сторінка за замовчуванням
  { path: 'image', component: ImageBinding }, // Завдання 2
  { path: 'slider', component: Slider }, // Завдання 3 та 4
];