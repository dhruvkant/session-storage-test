import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SigninComponent } from "./signin/signin.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  imports: [CommonModule, LoginRoutingModule],
  declarations: [SigninComponent]
})
export class LoginModule {}
