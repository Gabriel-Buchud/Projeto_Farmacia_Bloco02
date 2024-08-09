import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from '';
import { Categoria } from '';
import { ProdutoModule } from '';
import { CategoriaModule } from '';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia',
      entities: [Produto, Categoria],
      synchronize: true,
      logging: true,
    }),
    ProdutoModule,
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}