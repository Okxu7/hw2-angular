import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-image-binding',
  styleUrl: './image-binding.css',
  templateUrl: './image-binding.html',


})
export class ImageBinding {
// <!-- правило:
// Є слово signal(...) у .ts ➔ ставимо () у .html (imageUrl2()).
// Немає слова signal у .ts ➔ не ставимо () у .html (imageUrl2).  -->
//   Варіант 1: Датабайдинг зі звичайною змінною (Старі версії Angular)	Варіант 2: Датабайдинг із сигналом (Нова версія Angular 17–20+)

// 1. Як оголошуємо у файлі .ts	
imageUrl1 = 'https://picsum.photos/id/237/200';
imageUrl11 =  'image (1).png';
 
// Варіант 2: Датабайдинг із сигналом (Нова версія Angular 17–20+)
imageUrl2 = signal( 'https://picsum.photos/id/238/200/100');
imageUrl22 = signal('image (1).png');
}
