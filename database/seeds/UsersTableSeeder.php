<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(User::class)->times(4)->create();
        
        DB::table('users')->insert([
            'name' => 'Admin',
            'rol' => 'admin',
            'email' => 'admin@test.com',
            'password' => bcrypt('12345678')
        ]); 

        DB::table('users')->insert([
            'name' => 'Héctor',
            'rol' => 'user',
            'email' => 'hscapel@test.com',
            'password' => bcrypt('12345678')
        ]);

        DB::table('users')->insert([
            'name' => 'Yago',
            'rol' => 'user',
            'email' => 'yago@test.com',
            'password' => bcrypt('12345678')
        ]);
    }

    public function down()
    {
        DB::dropIfExists('users');
    }

}
