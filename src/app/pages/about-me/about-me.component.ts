import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Windows } from '../home/home.component';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, MatIconModule, CdkDrag],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  fontOptions = [
    { value: 'arial', label: 'Arial' },
    { value: 'verdana', label: 'Verdana' },
    { value: 'times', label: 'Times New Roman' },
    { value: 'courier', label: 'Courier New' }
  ];
  fontSizes = [
    { value: '12px', label: '12' },
    { value: '14px', label: '14' },
    { value: '16px', label: '16' },
    { value: '18px', label: '18' }
  ];
  encodings = [
    { value: 'western', label: 'Western' },
    { value: 'cyrillic', label: 'Cyrillic' },
    { value: 'arabic', label: 'Arabic' },
    { value: 'greek', label: 'Greek' },
    { value: 'chinese', label: 'Chinese' }
  ];
  selectedEncoding = 'western'; // Codificación predeterminada
  selectedFont = 'Arial'; // Valor predeterminado
  selectedFontSize = '12px'; // Valor predeterminado
  selectedJustify: string = '';
  isVisible: boolean = false;
  closeWIndows = output<boolean>();
  minimizeWindows = output<{ icon: string, show: boolean, image: string }>();
  isShowWindows = input.required<boolean>();
  icon: { icon: string; show: boolean; image: string; } | null = null;
  isMinimized: boolean = false;
  isMaximized: boolean = false;
  resizedWindows = input(null, {
    alias: 'resizedWindows',
    transform: (value: { icon: string, show: boolean, image: string }) => {
      if (value && value.icon === Windows.aboutMe) {
        this.resize();
      }
    }
  });
  ngOnInit() {
    const effectrfe = this.isShowWindows();
    if (effectrfe) {
      console.log('open');
      this.open();
    }
  }
  open() {
    this.isVisible = true;
  }

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
    this.minimizeWindows.emit({ icon: Windows.aboutMe, show: this.isMinimized, image: 'img/cv.png' });
  }
  resize() {
    //set before resize
    this.isVisible = true;
    this.isMaximized = false;
    this.isMinimized = false;

  }
  onFontChange(event: any): void {
    this.selectedFont = event.target.value;
  }
  onFontSizeChange(event: any): void {
    this.selectedFontSize = event.target.value;
  }
  onEncodingChange(event: any): void {
    this.selectedEncoding = event.target.value;
  }
  alignText(value:string): void {
    this.selectedJustify = value;
  }
}
