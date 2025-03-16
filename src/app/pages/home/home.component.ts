import { Component, effect, input, output, ViewChild } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { WindowComponent } from '../window/window.component';
import { FooterComponent } from "../footer/footer.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { Mp3Component } from '../mp3/mp3.component';
@Component({
  selector: 'app-home',
  imports: [CdkDrag, WindowComponent, FooterComponent, AboutMeComponent,Mp3Component],
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
      console.log(windows);
    const setWindows = new Set(this.icons.map((item) => item.window));
    if (!setWindows.has(windows)) {
      this.icons.push({ window: windows, show: true });
    }
  }
  closeWindows(icon: string) {
    this.icons = this.icons.filter((item) => item.window !== icon);
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
  contact = 'contact',
  mp3 = 'mp3'
}