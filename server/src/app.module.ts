import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NoteController } from './notes/notes.controller';
import { NoteService } from './notes/notes.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
@Module({
  imports: [TypeOrmModule.forRoot(), BoardsModule],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
