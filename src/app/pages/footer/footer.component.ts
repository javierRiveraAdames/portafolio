import { CommonModule } from '@angular/common';
import { Component, input, OnInit, effect } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  isClickedImage = false;
  iconType: string | null = null;
  // value = input.required<string>({
  //   alias: 'icon',
  //   transform:(field:{icon:string}) => {
  //     if(field){
  //       this.iconType = field.icon;
  //     }

  // }
  // );

  selectionWindows = input(null, {
    alias: 'icon',
    transform: (value: string) => {
      if (value) {
        this.iconType = value;
      }else{
        console.log('value', value);
      }
    }
  })
  constructor() { }

  ngOnInit(): void {
    // const effectrfe = this.value();
    // if (effectrfe) {
    //  console.log('effectrfe', effectrfe);
    // }

  }
  startImage(){
    console.log('startImage');
    this.isClickedImage = true;
  }
}
