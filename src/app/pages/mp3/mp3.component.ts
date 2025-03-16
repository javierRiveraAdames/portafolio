import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, input, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CountriesAmericas } from './interfaces/countries.interface';

@Component({
  selector: 'app-mp3',
  imports: [CommonModule,CdkDrag, MatIconModule,],
  templateUrl: './mp3.component.html',
  styleUrl: './mp3.component.css'
})
export class Mp3Component implements OnInit, OnDestroy {

  countries = CountriesAmericas;
  stations: any[] = [];
  audio = new Audio();
  isMaximized = false;
  isMinimized = false;
  isVisible: boolean = false;
  isShowWindows = input.required<boolean>();
  countrySelected: any;
  ngOnInit() {
    // this.fetchStations();
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
    // this.minimizeWindows.emit({icon: Windows.projects, show: this.isMinimized, image: 'img/aboutme.webp'});
  }
  resize() {
    //set before resize
    this.isVisible = true;
    this.isMaximized = false;
    this.isMinimized = false;
 
  }
  async fetchStations(code: string = 'pa') {
    console.log('Cargando estaciones de:', code);
    try {
      const url = `https://de1.api.radio-browser.info/json/stations/bycountry/${code}`;
      const response = await fetch(url);
      this.stations = await response.json();
      console.log('Radios cargadas:', this.stations);
    } catch (error) {
      console.error('Error cargando estaciones:', error);
    }
  }

  playStation(url: string) {
    if (this.audio.src !== url) {
      this.audio.src = url;
      this.audio.play();
    } else {
      this.audio.paused ? this.audio.play() : this.audio.pause();
    }
  }
  selectCountry(event: any) {
    console.log('Seleccionando país:', event.target.value);
    const code = event.target.value;
    this.countrySelected = code;
    this.fetchStations(code);
  }
  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.src = '';
    this.audio = undefined as unknown as HTMLAudioElement;
  }
}
