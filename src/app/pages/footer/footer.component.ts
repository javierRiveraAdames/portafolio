import { CommonModule } from '@angular/common';
import { Component, input, OnInit, effect, output, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  isClickedImage = false;
  windowsMinimized: {icon:string,show:boolean,image:string}[] = [];
  selectionWindows = input(null, {
    alias: 'icon',
    transform: (value:{icon:string,show:boolean,image:string}) => {
      if (value.icon) {
      this.recibedIcon(value);
      }else{
        console.log('value', value);
      }
    }
  })
  selectWindow:string | null = null;
  residedWindows = output<{icon:string,show:boolean,image:string}>();
  isResized: boolean = false;

  constructor() { 

  }

  ngOnInit(): void {


  }


  recibedIcon({icon,show,image}:{icon:string,show:boolean,image:string}){
      this.addIcon({icon,show,image});
    // this.windowsMinimized
    // this.isResized = false;
    // this.iconType = icon;
  }
  startImage(){
    this.isClickedImage = true;
  }
  resideWindows({icon,show,image}:{icon:string,show:boolean,image:string}){
    console.log('resize');

  }
  removeIcon({icon,show,image}:{icon:string,show:boolean,image:string}){
    this.selectWindow = icon;
    setTimeout(() => {
      if(this.windowsMinimized.length > 0){
        this.windowsMinimized = this.windowsMinimized.filter((item) => item.icon !== icon);
      }
      this.isResized= true;
      this.residedWindows.emit({icon,show,image});
      this.selectWindow = null;
    }
    , 130);
  }
  addIcon({icon,show,image}:{icon:string,show:boolean,image:string}){
    this.windowsMinimized.push({icon,show,image});
  }
}
