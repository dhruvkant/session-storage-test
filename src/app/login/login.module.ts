import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SigninComponent } from "./signin/signin.component";
import { LoginRoutingModule } from "./login-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SigninComponent]
})
export class LoginModule {}
