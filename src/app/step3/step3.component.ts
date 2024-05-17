import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['../app.component.css']
})
export class Step3Component {
  @Input() currentStep:number=3;
  @Output() nextStep:EventEmitter<boolean>=new EventEmitter<boolean>();
   
   step3Form!:FormGroup
   constructor(private formBuilder:FormBuilder){
      
   }
   ngOnInit(){
      
    this.step3Form=this.formBuilder.group({
      sal:['',Validators.required],




      inc :[''],




      rent:['',Validators.required],




      loan:['',Validators.required],




      tax:['',Validators.required],




      support:['',Validators.required],




      med:['',Validators.required],




      poli:['',Validators.required],




      cell:['',Validators.required],




      trans:['',Validators.required],

      expense:['',Validators.required],
      radiobtn1:['',Validators.required],
      radiobtn2:['',Validators.required],
      // sal:[''],

      // inc :[''],

      // rent:[''],

      // loan:[''],

      // tax:[''],

      // support:[''],

      // med:[''],

      // poli:[''],

      // cell:[''],

      // trans:[''],

      // expense:['']
    })
  }
  onSubmit3(){
    if (this.step3Form.invalid) {

      this.step3Form.controls['sal'].markAsTouched();

      this.step3Form.controls['inc'].markAsTouched();

      this.step3Form.controls['rent'].markAsTouched();

      this.step3Form.controls['loan'].markAsTouched();

      this.step3Form.controls['tax'].markAsTouched();

      this.step3Form.controls['support'].markAsTouched();

      this.step3Form.controls['med'].markAsTouched();

      this.step3Form.controls['poli'].markAsTouched();

      this.step3Form.controls['cell'].markAsTouched();

      this.step3Form.controls['trans'].markAsTouched();

      this.step3Form.controls['expense'].markAsTouched();
      this.step3Form.controls['radiobtn1'].markAsTouched();
      this.step3Form.controls['radiobtn2'].markAsTouched();

       return;

   }
    
      if(this.step3Form.invalid){
       this.nextStep.emit(false);

      }
      else{
       this.nextStep.emit(true);
       } 
       
  }


}