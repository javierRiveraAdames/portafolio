import { Component,input, OnInit, output } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-window',
  imports: [CdkDrag, MatIconModule,CommonModule,],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent implements OnInit {
  isMaximized = false;
  isMinimized = false;
  isVisible: boolean = false;
  isShowWindows = input.required<boolean>();
  // Método para abrir el modal77
  closeWIndows = output<boolean>();

  ngOnInit() {
   const effectrfe = this.isShowWindows();
   if (effectrfe) {
     this.open();
   }
  }
  open() {
    console.log('open');
    this.isVisible = true;
  }

  // Método para cerrar el modal
  close() {
    console.log('close');
    this.isVisible = false;
    this.closeWIndows.emit(false);
  }
  maximize() {
    this.isMaximized = !this.isMaximized;
    this.isMinimized = false; // Asegura que no esté minimizado cuando se maximiza
  }

  minimize() {
    this.isMinimized = !this.isMinimized;
    this.isMaximized = false; // Asegura que no esté maximizado cuando se minimiza
  }
}
