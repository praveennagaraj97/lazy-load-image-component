import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LazyLoadedImageComponent } from './lazy-loaded-image/lazy-loaded-image.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [AppComponent, LazyLoadedImageComponent, LoaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
