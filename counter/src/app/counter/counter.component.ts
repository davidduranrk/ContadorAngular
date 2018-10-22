import { Component, OnInit, Input } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  
  @Input() seconds : number = 25;
  intervalId : number;
  public exibirPanel: boolean = false;
  public exibirPanelTime: boolean = false;


  constructor() { 
    //this.intervalId = setInterval(() => this.tick(), 1000);
  }

  ngOnInit() {}

  private tick(): void {
    if(--this.seconds < 1){
      clearInterval(this.intervalId);
    }
  }

    
  public reiniciarContador(): void {
    this.seconds = 0;
    this.exibirPanelTime = true;
    this.exibirPanel = false;
  }


}
