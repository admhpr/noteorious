import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsController } from './boards/boards.controller';
import { NotesController } from './notes/notes.controller';
import { BoardsService } from './boards/boards.service';
import { NotesService } from './notes/notes.service';

@Module({
  imports: [],
  controllers: [AppController, BoardsController, NotesController],
  providers: [AppService, BoardsService, NotesService],
})
export class AppModule {}
