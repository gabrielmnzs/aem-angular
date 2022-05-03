import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/auth/services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @Input() title = "Welcome";
  @Input() subtitle = "Text your message here";
  @Input() formTitle = "Login";
  @Input() userPlaceholder = "User";
  @Input() passwordPlaceholder = "Password";
  @Input() buttonName = "Sign in";

  loginForm: FormGroup;
  user: any;
  invalidCredentials: boolean;
  submitted = false;

  usernamePattern = "^[A-Za-z.]+$";
  passwordPattern = "^[0-9]*$";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [
        "",
        [Validators.required, Validators.pattern(this.usernamePattern)],
      ],
      password: [
        "",
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log("form invalido");
      return;
    }

    this.authenticate(
      this.loginForm.value.username,
      this.loginForm.value.password
    ).subscribe((response: any) => {
      this.user = response[0];
      if (this.user) {
        this.authenticationService.setUser(this.user);
        this.invalidCredentials = false;
        this.router.navigate(["content/angularapp/us/en/home.html"]); // refatorar
      } else {
        console.log("invalido");
        this.invalidCredentials = true;
      }
    });
  }

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }

  private authenticate(login: string, password: string) {
    return this.authenticationService.authenticate(login, password);
  }
}

MapTo("angularapp/components/login")(LoginComponent);
