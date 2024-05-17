import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['../app.component.css']
})
export class Step5Component {
  @Input() currentStep:number=5;

  @Output() nextStep:EventEmitter<boolean>=new EventEmitter<boolean>();
  step6=0;
  form5_step=false;

   step5Form!:FormGroup

   constructor(private formBuilder:FormBuilder){

   }

   ngOnInit(){

    this.step5Form=this.formBuilder.group({

      Relation:['',Validators.required],




      Fn:['',Validators.required],




      Sn:['',Validators.required],




      Contact:['',Validators.required],




      FN:['',Validators.required],




      SN:['',Validators.required],




      Ph:['',Validators.required]
    })

  }
  

  onSubmit5(){
    

      if(this.step5Form.invalid){

       this.nextStep.emit(false);

      }

      else{

       this.nextStep.emit(true);

       }

    //    if (this.step5Form.invalid) {

    //     this.step5Form.controls['Relation'].markAsTouched();
  
    //     this.step5Form.controls['Fn'].markAsTouched();
  
    //     this.step5Form.controls['Sn'].markAsTouched();
  
    //     this.step5Form.controls['Contact'].markAsTouched();
  
    //     this.step5Form.controls['FN'].markAsTouched();
  
    //     this.step5Form.controls['SN'].markAsTouched();
  
    //     this.step5Form.controls['Ph'].markAsTouched();
    //      return;
  
    //  }
  }

}
