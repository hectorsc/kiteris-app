<?php

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Facades\DB;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(Category::class)->times(10)->create();
        DB::table('categories')->insert([
            'user_id' => 2,
            'name' => 'Ropa'
        ]);

        DB::table('categories')->insert([
            'user_id' => 2,
            'name' => 'Electrónica'
        ]);

        DB::table('categories')->insert([
            'user_id' => 2,
            'name' => 'Coches'
        ]);

        DB::table('categories')->insert([
            'user_id' => 3,
            'name' => 'Restaurantes'
        ]);

        DB::table('categories')->insert([
            'user_id' => 3,
            'name' => 'Electrónica'
        ]);
    }

    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
        DB::dropIfExists('categories');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
        
    }
}
