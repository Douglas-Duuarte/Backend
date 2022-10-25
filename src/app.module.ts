import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SalasModule } from './salas/salas.module';

@Module({
  imports: [UsersModule, SalasModule, MongooseModule.forRoot('mongodb://localhost/sala')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
