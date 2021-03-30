import { Inject, Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";
import { AppConfig } from "../../core/interfaces/app-config.interface";

@Injectable()
export class AesService {
  constructor(@Inject("app.config") private appConfig: AppConfig) {
    console.log(appConfig.cryptoKey);
  }

  encrypt() {
    let etext = CryptoJS.AES.encrypt("abc", "abc1234thj").toString();
    console.log("encrypted => ", etext);
  }

  decrypt() {}
}
