import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AesService } from "./services/aes.service";
import { CoreModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [AesService]
})
export class SharedModule {}
