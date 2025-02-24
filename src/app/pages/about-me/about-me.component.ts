import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  isVisible: boolean = false; 
    isShowWindows = input.required<boolean>();
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

}
