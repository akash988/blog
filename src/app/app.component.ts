import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentStep:number=1;
  Data:any =["Basic Info","Employment","Financial","Contact","Referece","Permission"];
  title = 'TFG Money';
constructor(){}

ngOnInit(): void {
  
}
  nextStep(valid:boolean) {
    console.warn(this.currentStep);
    if(valid){
      this.currentStep++;
      console.warn(this.currentStep);
    }
    
  }

  previousStep(): void {
   
    if (this.currentStep > 1) {
      
      this.currentStep--;
      
    }
  }
  submitStep():void{
    if(this.currentStep==6){
      this.currentStep=this.currentStep;
    }
  }
  
}
