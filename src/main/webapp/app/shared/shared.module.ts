import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SmartaccountinggatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SmartaccountinggatewaySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SmartaccountinggatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SmartaccountinggatewaySharedModule {
  static forRoot() {
    return {
      ngModule: SmartaccountinggatewaySharedModule
    };
  }
}
