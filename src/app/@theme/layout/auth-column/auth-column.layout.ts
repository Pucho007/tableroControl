import { Component } from '@angular/core';

@Component({
    selector:'ngx-auth-column-layout',
    styleUrls: ['./auth-column.layout.scss'],
    template: `
    <nb-layout windowMode>
      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
    </nb-layout>
  `,
})

export class AuthColumnLayoutComponent {}