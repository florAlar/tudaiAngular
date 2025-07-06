import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-reproductor',
  templateUrl: './movie-reproductor.html',
  styleUrls: ['./movie-reproductor.scss'],
  standalone: false,
})
export class MovieReproductorComponent {
  @Input() visible: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  safeVideoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  @Input()
  set videoUrl(url: string) {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  close() {
    this.closeModal.emit();
  }
}
