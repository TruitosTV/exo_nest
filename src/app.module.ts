import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilterService } from './filter/filter.service';
import { EntitiesService } from './entities/entities.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { UsersModule } from './users/users.module';
import { ArticleModule } from './article/article.module';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => databaseConfig,
    }),
    UsersModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService, FilterService, EntitiesService],
})
export class AppModule {}
