import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ContainerComponent } from './app/Container/container.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(ContainerComponent, appConfig)
  .catch((err) => console.error(err))
