import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { ServicosComponent } from './shared/components/servicos/servicos.component';
import { FaqComponent } from './shared/components/faq/faq.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './shared/components/about/about.component';
import { CardComponent } from './shared/components/card/card.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { DivisoriaComponent } from './shared/components/divisoria/divisoria.component';
import { ContatoComponent } from './shared/components/contato/contato.component';
import { MapsComponent } from './shared/components/maps/maps.component';
import { ContatoMapsComponent } from './shared/components/contato-maps/contato-maps.component';
import { AccordionItemComponent } from './shared/components/accordion-item/accordion-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ServicosComponent,
    FaqComponent,
    AboutComponent,
    CardComponent,
    RodapeComponent,
    DivisoriaComponent,
    ContatoComponent,
    MapsComponent,
    ContatoMapsComponent,
    AccordionItemComponent
  ],
  imports: [
    BrowserModule,
    MdbCheckboxModule,
    MdbCarouselModule,
    NgbCarousel,
    NgbModule,
    MdbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
