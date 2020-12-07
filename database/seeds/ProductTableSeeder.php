<?php

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Facades\DB;

class ProductTableSeeder extends Seeder
{
   /**
    * Run the database seeds.
    *
    * @return void
    */
   public function run()
   {
      // factory(Category::class)->times(10)->create();

      DB::table('products')->insert([
         'user_id' => 2,
         'category_id' => 1,
         'name' => 'camiseta',
         'REF' => '1234',
         'price' => '20',
         'offer_price' => '10'
      ]);

      DB::table('products')->insert([
         'user_id' => 2,
         'category_id' => 1,
         'name' => 'pantalón',
         'REF' => '1234y',
         'price' => '40',
         'offer_price' => '15'
      ]);

      DB::table('products')->insert([
         'user_id' => 2,
         'category_id' => 1,
         'name' => 'falda',
         'REF' => '1234ty',
         'price' => 20,
         'offer_price' => 10
      ]);

      DB::table('products')->insert([
         'user_id' => 3,
         'category_id' => 4,
         'name' => 'Burger King',
         'REF' => '1234fgii',
         'price' => 20,
         'offer_price' => 10
      ]);

      DB::table('products')->insert([
         'user_id' => 3,
         'category_id' => 5,
         'name' => 'Portátil',
         'REF' => '1234lp',
         'price' => 1000,
         'offer_price' => 100
      ]);
   }

   public function down()
   {
      DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
      DB::dropIfExists('products');
      DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
     
   }



}
