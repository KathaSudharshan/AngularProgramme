import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveAppComponent } from './directive-app/directive-app.component';
import { DependencyInjectionAppComponent } from './dependency-injection-app/dependency-injection-app.component';
import { HeroComponent } from './hero/hero.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { OnChangesParentComponent } from './on-change/on-changes-parent.component';
import { PeekABooComponent } from './peek-aboo/peek-aboo.component';
import { PeekABooParentComponent } from './peek-aboo/peek-aboo-parent.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directive-app', component: DirectiveAppComponent },
  { path: 'dependency-injection-app', component: DependencyInjectionAppComponent },
  { path: 'heros-details', component: HeroComponent}
  ,{path: 'on-changes-parent',  component: OnChangesParentComponent}
  ,{path: 'peek-aboo-parent', component: PeekABooParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
