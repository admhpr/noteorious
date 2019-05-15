import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { NotesModule } from './notes/notes.module';
@Module({
  imports: [TypeOrmModule.forRoot(), BoardsModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
