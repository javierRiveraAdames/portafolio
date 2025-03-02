import { Component, effect, input, output, ViewChild } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { WindowComponent } from '../window/window.component';
import { FooterComponent } from "../footer/footer.component";
import { AboutMeComponent } from "../about-me/about-me.component";
@Component({
  selector: 'app-home',
  imports: [CdkDrag, WindowComponent, FooterComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //declare input viewChu

  titleUpperCase = 'Welcome to my portfolio';
  
  isShowWindows = false;
  windows = Windows;
  windowsSelected = '';
  icon: { icon: string, show: boolean, image: string } = { icon: '', show: false, image: '' };
  icons: { window: string, show: boolean }[] = [];
  resizedWindows:{ icon: string, show: boolean, image: string } = { icon: '', show: false, image: '' }; 
    onDoubleClick(windows: string) {
    const setWindows = new Set(this.icons.map((item) => item.window));
    if (!setWindows.has(windows)) {
      this.icons.push({ window: windows, show: true });
    }
  }
  closeWindows(icon: string) {
    console.log('close', icon);
    this.icons = this.icons.filter((item) => item.window !== icon);
    console.log('icons', this.icons);
    this.isShowWindows = false;
    this.windowsSelected = '';
  }
  minimizeWindows(event: { icon: string, show: boolean, image: string }) {
    this.icon = event;
  }
  maximizeWindows(event: any) {
    this.icon = event;
  }
  resizeWindows(event: any) {
    this.resizedWindows = event;
  }
}

export enum Windows {
  aboutMe = 'aboutMe',
  projects = 'projects',
  contact = 'contact'
}