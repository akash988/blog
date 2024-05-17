import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['../app.component.css']
})
export class Step2Component{
   @Input() currentStep:number=2;
   @Output() nextStep:EventEmitter<boolean>=new EventEmitter<boolean>();
    
    step2Form!:FormGroup
    constructor(private formBuilder:FormBuilder){
      
    }
    ngOnInit(){
      
      this.step2Form=this.formBuilder.group({
        // orgName:['',Validators.required],
        // dep:['',Validators.required],
        // pos:['',Validators.required]
        // orgName:[],
        // dep:[],
        // pos:[]

        orgName:['',Validators.required],

        dep:['',Validators.required],

        pos:['',Validators.required],

        org:['',Validators.required],

        position:['',Validators.required],

        org1:['',Validators.required]
      })
    }
    onSubmit(){
      if (this.step2Form.invalid) {

        this.step2Form.controls['orgName'].markAsTouched();

        this.step2Form.controls['dep'].markAsTouched();

        this.step2Form.controls['pos'].markAsTouched();

        this.step2Form.controls['org'].markAsTouched();

        this.step2Form.controls['position'].markAsTouched();

        this.step2Form.controls['org1'].markAsTouched();

         return;

     }
      if(this.step2Form.invalid){
       this.nextStep.emit(false);

      }
      else{
       this.nextStep.emit(true);
       } 
       
    }

}
