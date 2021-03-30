import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AesService } from "../../shared/services/aes.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  public loginFormGroup: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
    private aesService: AesService
  ) {}

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login() {
    this.aesService.encrypt();
  }
}
