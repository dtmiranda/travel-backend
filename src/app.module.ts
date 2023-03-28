import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { ProfilesModule } from './profiles/profiles.module';
import { IslandsModule } from './islands/islands.module';
import { CitiesModule } from './cities/cities.module';
import { TrailsModule } from './trails/trails.module';
import { TicketsModule } from './tickets/tickets.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { PhotosModule } from './photos/photos.module';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';
import { ReservationsModule } from './reservations/reservations.module';
import { CountriesModule } from './countries/countries.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [UsersModule,
    EventsModule,
    ProfilesModule,
    IslandsModule,
    CitiesModule,
    TrailsModule,
    TicketsModule,
    RestaurantsModule,
    PhotosModule,
    HotelsModule,
    TrailsModule,
    RoomsModule,
    ReservationsModule,
    CountriesModule,
    ReviewsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
