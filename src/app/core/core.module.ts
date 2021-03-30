import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfigToken } from "./config/app.config";
import { AppConfigValue } from "./config/app.config";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: ConfigToken,
      useValue: AppConfigValue
    }
  ],
  exports: []
})
export class CoreModule {}
