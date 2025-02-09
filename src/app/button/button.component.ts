import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgFor],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() serverCards: any[] = [];
  @Input() serverStatusData: any;
  @Input() serverLoading: any;
  @Output() cardCheck = new EventEmitter<string>();

  playSelectAudio() {
    const selectAudio = new Audio('assets/audio/select.mp3');
    selectAudio.play();
  }

  checkCardStatus(key: string) {
    this.cardCheck.emit(key);
  }
}
