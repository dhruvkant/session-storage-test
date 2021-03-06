import { InjectionToken } from "@angular/core";
import { crypto, environment } from "../../../environments/environment";
import { AppConfig } from "../interfaces/app-config.interface";

export const ConfigToken = new InjectionToken<AppConfig>("app.config");

export const AppConfigValue: AppConfig = {
  serviceUrl: environment.serviceUrl,
  cryptoKey: crypto.aesKey
}