import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveAppComponent } from './directive-app/directive-app.component';
import { DependencyInjectionAppComponent } from './dependency-injection-app/dependency-injection-app.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { PeekABooDirective } from './peek-aboo/peek-aboo.directive';
import { PeekABooComponent } from './peek-aboo/peek-aboo.component';
import { OnChangesParentComponent } from './on-change/on-changes-parent.component';
import { PeekABooParentComponent } from './peek-aboo/peek-aboo-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DataBindingComponent,
    DirectiveAppComponent,
    DependencyInjectionAppComponent,
    OnChangeComponent,
    PeekABooDirective,
    PeekABooComponent,
    OnChangesParentComponent,
    PeekABooParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeroComponent]
})
export class AppModule { }
