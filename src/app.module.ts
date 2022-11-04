import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { ProfilesModule } from './profiles/profiles.module';
import { IslandsModule } from './islands/islands.module';

@Module({
  imports: [UsersModule, EventsModule, ProfilesModule, IslandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
