import { Component, input, OnInit, output } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Windows } from '../home/home.component';
@Component({
  selector: 'app-window',
  imports: [CdkDrag, MatIconModule, CommonModule,],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent implements OnInit {
  isMaximized = false;
  isMinimized = false;
  isVisible: boolean = false;
  isShowWindows = input.required<boolean>();
  mockNumbers: number[] = Array.from({ length: 18 }, (_, i) => i + 1);

  resizedWindows = input(null, {
    alias: 'resizedWindows',
    transform: (value: { icon: string, show: boolean, image: string }) => {
      if (value && value.icon === Windows.projects) {
        this.resize();
      }
    }
  });
  // Método para abrir el modal77
  closeWIndows = output<boolean>();
  minimizeWindows = output<{icon:string, show:boolean, image:string}>();

  
  ngOnInit() {
    const effectrfe = this.isShowWindows();
    if (effectrfe) {
      this.open();
    }
  }

  open() {
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
    this.isVisible = true;  
    this.isMinimized = false; // Asegura que no esté minimizado cuando se maximiza
  }

  minimize() {
    this.isMinimized = !this.isMinimized;
    // this.isMaximized = false; // Asegura que no esté maximizado cuando se minimiza
    this.isVisible = false;
    this.minimizeWindows.emit({icon: Windows.projects, show: this.isMinimized, image: 'img/aboutme.webp'});
  }
  resize() {
    //set before resize
    this.isVisible = true;
    this.isMaximized = false;
    this.isMinimized = false;
 
  }
}
