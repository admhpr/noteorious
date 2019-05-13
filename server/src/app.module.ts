import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './board/board.module';
@Module({
  imports: [TypeOrmModule.forRoot(), BoardModule],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
