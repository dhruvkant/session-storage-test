import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { app_config } from "./config/app.config";
import { AppConfigValue } from "./config/app.config";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: app_config,
      useValue: AppConfigValue
    }
  ],
  exports: []
})
export class CoreModule {}
