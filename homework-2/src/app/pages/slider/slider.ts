// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-slider',
//   styleUrl: './slider.css',
//   templateUrl: './slider.html',
// })
// export class Slider {}

import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
  // Завдання 4
  // Слухаємо натискання клавіш на рівні вікна браузера (для зручності перемикання)
  host: {
    '(window:keydown)': 'handleKeyboard($event)'
  }
})
export class Slider {
  // Масив із шляхами до зображень (абсолютні або відносні з папки public/)
  images: string[] = [
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1019/600/400',
    'https://picsum.photos/id/1039/600/400'
  ];

  // Сигнал для зберігання індексу поточного слайда (починаємо з 0)
  currentIndex = signal<number>(0);

  // Комп'ютед-властивість автоматично підставляє шлях із масиву за поточним індексом
  currentImage = computed(() => this.images[this.currentIndex()]);

  // Кнопка «Вперед» (з циклічним переходом на початок, коли доходимо до кінця)
  nextSlide(): void {
    this.currentIndex.update(index => 
      index === this.images.length - 1 ? 0 : index + 1
    );
  }

  // Кнопка «Назад» (з циклічним переходом на кінець із першого слайда)
  prevSlide(): void {
    this.currentIndex.update(index => 
      index === 0 ? this.images.length - 1 : index - 1
    );
  }
// Завдання 4
  // Перемикання слайдів стрілками клавіатури (Вліво / Вправо)
  handleKeyboard(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.prevSlide();
    }
  }
}
