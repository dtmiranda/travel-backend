import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { ProfilesModule } from './profiles/profiles.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [UsersModule, EventsModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
