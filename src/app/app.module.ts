import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [
        AppComponent,
         UserInputComponent, 
         InvestmentResultComponent, 
         HeaderComponent],
    imports: [BrowserModule, FormsModule],  
    bootstrap: [AppComponent]   
})
export class AppModule{




}