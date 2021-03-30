import { Inject, Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";
import { ConfigToken } from "../../core/config/app.config";
import { AppConfig } from "../../core/interfaces/app-config.interface";

@Injectable()
export class AesService {
  constructor(@Inject(ConfigToken) private appConfig: AppConfig) {
    console.log(appConfig.cryptoKey);
  }

  encrypt() {
    let etext = CryptoJS.AES.encrypt(
      "abc",
      this.appConfig.cryptoKey
    ).toString();
    console.log("encrypted => ", etext);
  }

  decrypt() {}
}
