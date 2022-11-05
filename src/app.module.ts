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

@Module({
  imports: [UsersModule, EventsModule, ProfilesModule, IslandsModule, CitiesModule, TrailsModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
