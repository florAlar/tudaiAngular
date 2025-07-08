import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-reproductor',
  templateUrl: './movie-reproductor.html',
  styleUrls: ['./movie-reproductor.scss'],
  standalone: false,
})

export class MovieReproductor {

  //como componente de "ventana emergente" espero saber si estoy visible o no.
  @Input() visible: boolean = false;  
  @Output() closeModal = new EventEmitter<void>();

  // Variable para almacenar la URL del video de forma segura
  safeVideoUrl: SafeResourceUrl = '';
  
  // angular pide sanitizar las URLs de los videos para evitar problemas de seguridad
  constructor(private sanitizer: DomSanitizer) {}

  @Input()
  set videoUrl(url: string) {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  close() {
    this.closeModal.emit();
  }
}
