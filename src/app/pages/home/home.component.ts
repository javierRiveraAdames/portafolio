import { Component, effect, input, output, ViewChild } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { WindowComponent } from '../window/window.component';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-home',
  imports: [CdkDrag, WindowComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //declare input viewChu
 
  isShowWindows = false
  onDoubleClick() {
    console.log('onDoubleClick');
    this.isShowWindows = true;
  }
  closeWindows(event: any) {
    console.log('closeWindows', event);
    this.isShowWindows = false;
  }
}
