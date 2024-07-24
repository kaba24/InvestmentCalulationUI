import { Component, EventEmitter, Output } from '@angular/core';

import type { InvestmentInput } from '../investment-input.module';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  //@Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment= '0';
  enteredAnnualInvestment= '0';
  enteredExpectedReturn= '5';
  enteredDuration= '10';

  constructor(private investmentService : InvestmentService) {}

  onFormsSubmit(){
     this.investmentService.calculateInvestmentResults({
      initialInvestment: + this.enteredInitialInvestment,
      duration: + this.enteredDuration,
      expectedReturn: + this.enteredExpectedReturn,
      annualInvestment: + this.enteredAnnualInvestment
  })
    
  }

}
