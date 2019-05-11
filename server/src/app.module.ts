import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsController } from './boards/boards.controller';
import { NotesController } from './notes/notes.controller';

@Module({
  imports: [],
  controllers: [AppController, BoardsController, NotesController],
  providers: [AppService],
})
export class AppModule {}
