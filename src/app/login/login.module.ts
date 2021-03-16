import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SigninComponent } from "./signin/signin.component";
import { LoginRoutingModule } from "./login-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule, LoginRoutingModule],
  declarations: [SigninComponent]
})
export class LoginModule {}
