import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['../app.component.css']
})
export class Step1Component  {
  @Input() currentStep:number=1;
  @Output() nextStep:EventEmitter<boolean>=new EventEmitter<boolean>();
  step1Form!:FormGroup;
  step11Form!:FormGroup;
  step12Form!:FormGroup;
  form1_step=false;
  form11_step=false;
  form12_step=false;
  step=1;
  selectedYear: number;
  years: number[] = [];  
  constructor(private formBuilder:FormBuilder){
    this.selectedYear = new Date().getFullYear();
    for (let year =this.selectedYear; year >= 1000; year--) {
      this.years.push(year);
    }
  }
  ngOnInit(){
      
    this.step1Form=this.formBuilder.group({
      select:['',Validators.required],

      num:['',Validators.required],

      select2:['',Validators.required],

      FName:['',Validators.required],

      LName:['',Validators.required],

      num2:['',Validators.required],

      name:['',Validators.required],

      ch1:['',Validators.required],

      ch2:['',Validators.required],

      ch3:['',Validators.required]
  

      // num:[''],

      // select2:[''],

      // // FName:[''],

      // LName:[''],

      // num2:[''],

      // name:[''],

      // ch1:[''],

      // ch2:[''],

      // ch3:['']
    })
    this.step11Form=this.formBuilder.group({

      dep1:['',Validators.required],
      ch4:['',Validators.required],
      dep2:['',Validators.required]
      // dep1:[],
      // dep2:[]
    })
    this.step12Form=this.formBuilder.group({
      num3:['',Validators.required],
      num4:['',Validators.required],
      select3:['',Validators.required],
      select4:['',Validators.required],
      ch5:['',Validators.required]
      // num3:[],
      // num4:[],
      // select3:[],
      // select4:[]
    })
  }

  next(){

    if (this.step1Form.invalid) {

      this.step1Form.controls['FName'].markAsTouched();

      this.step1Form.controls['select'].markAsTouched();

      this.step1Form.controls['num'].markAsTouched();

      this.step1Form.controls['select2'].markAsTouched();

      this.step1Form.controls['LName'].markAsTouched();

      this.step1Form.controls['ch1'].markAsTouched();

      this.step1Form.controls['ch2'].markAsTouched();

      this.step1Form.controls['ch3'].markAsTouched();

      this.step1Form.controls['num2'].markAsTouched();

      this.step1Form.controls['name'].markAsTouched();

       return;

   }
    if(this.step==2 && this.currentStep===1){
      this.form11_step = true;
      if (this.step11Form.invalid) { return }
          this.step++;
          
      }
    
    if(this.step==1 && this.currentStep===1){
      this.form1_step = true;
      if (this.step1Form.invalid) { return  }
      this.step++;
      
    }
   
    
  }
  previous(){
    this.step--;
    if(this.step==1 && this.currentStep===1){
      this.form1_step = false;
    }
    if(this.step==2 && this.currentStep===1){
      this.form11_step= false;
    }
    if(this.step==3 && this.currentStep===1){
      this.form12_step= false;
    }
  }
  submit(){
    if (this.step12Form.invalid) {

      this.step12Form.controls['num3'].markAsTouched();

      this.step12Form.controls['num4'].markAsTouched();

      this.step12Form.controls['select3'].markAsTouched();

      this.step12Form.controls['select4'].markAsTouched();

      this.step12Form.controls['ch5'].markAsTouched();

       return;

    }
    if(this.step==3){
      this.form12_step = true;
      if (this.step12Form.invalid) { 
        this.nextStep.emit(false);
      }
      else{
        this.nextStep.emit(true);
      }      
      
    }
  }
  // onSubmit1(){
      
  //   if(this.step1Form.invalid){
  //     this.nextStep.emit(false);

  //   }
  //   else{
  //     this.nextStep.emit(true);
  //   }      
  // }
}
