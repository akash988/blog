import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['../app.component.css']
})
export class Step4Component {
  @Input() currentStep:number=4;

  @Output() nextStep:EventEmitter<boolean>=new EventEmitter<boolean>();

   

   step4Form!:FormGroup

   constructor(private formBuilder:FormBuilder){

     

   }

   ngOnInit(){

     

    this.step4Form=this.formBuilder.group({

      TelNo:['',Validators.required],




      WorkNo:['',Validators.required],




      Email:['',Validators.required],




      Add1:['',Validators.required],




      City:['',Validators.required],




      Postal:['',Validators.required],




      Year:['',Validators.required],




      ch4:['',Validators.required]

    })

  }

  onSubmit4(){
    
    if (this.step4Form.invalid) {

      this.step4Form.controls['TelNo'].markAsTouched();

      this.step4Form.controls['WorkNo'].markAsTouched();

      this.step4Form.controls['Email'].markAsTouched();

      this.step4Form.controls['Add1'].markAsTouched();

      this.step4Form.controls['City'].markAsTouched();

      this.step4Form.controls['Postal'].markAsTouched();

      this.step4Form.controls['Year'].markAsTouched();

      this.step4Form.controls['Ch4'].markAsTouched();

       return;
   }
   if(this.step4Form.invalid){

    this.nextStep.emit(false);

   }

   else{

    this.nextStep.emit(true);

    }
  }

}
