import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['../app.component.css']
})
export class Step6Component {
  @Input() currentStep:number=6;

  @Output() nextStep:EventEmitter<boolean>=new EventEmitter<boolean>();
   step61Form!:FormGroup
   step62Form!:FormGroup;
   step63Form!:FormGroup;
   form61_step=false;
   form62_step=false;
   form63_step=false;
   step6=1;
   constructor(private formBuilder:FormBuilder){  

   }

   ngOnInit(){
    this.step61Form=this.formBuilder.group({
      // ch1:['',Validators.required],

      // ch2:['',Validators.required],

      // ch3:['',Validators.required],

      // ch4:['',Validators.required],

      // ch5:['',Validators.required]
      
    })
    this.step62Form=this.formBuilder.group({

      // ch6:['',Validators.required],

      // ch7:['',Validators.required],

      // ch8:['',Validators.required],

      // ch9:['',Validators.required],

      // ch10:['',Validators.required]
    })
    this.step63Form=this.formBuilder.group({
      Agree3:['',Validators.required]
    })

  }
  next(){
    if (this.step61Form.invalid) {

      this.step61Form.controls['ch1'].markAsTouched();

      this.step61Form.controls['ch2'].markAsTouched();

      this.step61Form.controls['ch3'].markAsTouched();

      this.step61Form.controls['ch4'].markAsTouched();

      this.step61Form.controls['ch5'].markAsTouched();

       return;

   }
    if(this.step6==2 && this.currentStep===6){
      this.form62_step = true;
      if (this.step62Form.invalid) { return }
          this.step6++;
      }
    if(this.step6==1 && this.currentStep===6){
      this.form61_step = true;
      if (this.step61Form.invalid) { return  }
      this.step6++
    }
  
    
  }
  previous(){
    this.step6--
    if(this.step6==1 && this.currentStep===6){
      this.form61_step = false;
    }
    if(this.step6==2 && this.currentStep===6){
      this.form62_step= false;
    }
    if(this.step6==3 && this.currentStep===6){
      this.form62_step= false;
    }
  }
  back(){
    
      
    
  }
  submit(){
    if(this.step6==3){
      this.form62_step = true;
      if (this.step62Form.invalid) { 
        this.nextStep.emit(false);
      }
      else{
        this.nextStep.emit(true);
      }       
    }
  }

  onSubmit6(){

    console.warn("ok6");

      if(this.step61Form.invalid){

       this.nextStep.emit(false);

      }

      else{

       this.nextStep.emit(true);

       }

       

  }

}
