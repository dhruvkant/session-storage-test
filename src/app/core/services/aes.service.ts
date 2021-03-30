import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";

@Injectable()
export class AesService {
  constructor() {}

  encrypt() {
    let etext = CryptoJS.AES.encrypt("abc", "abc1234thj").toString();
    console.log("encrypted => ", etext);
  }

  decrypt() {}
}
