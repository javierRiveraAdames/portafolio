import { Component, effect, input, output, ViewChild } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
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
 
  isShowWindows = false;
  windows = Windows;
  windowsSelected = '';
  
  onDoubleClick(windows:string) {
    if(windows ===  Windows.aboutMe){
      this.windowsSelected = Windows.aboutMe;
    }else if(windows === Windows.projects){
      this.windowsSelected = Windows.projects;
    }else if(windows === Windows.contact){
      this.windowsSelected = Windows.contact
    }
  }
  closeWindows(event: any) {
    this.isShowWindows = false;
    this.windowsSelected = '';
  }
}

export enum Windows {
  aboutMe = 'aboutMe',
  projects = 'projects',
  contact = 'contact'
}