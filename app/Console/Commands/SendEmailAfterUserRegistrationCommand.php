<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Notifications\RegisteredUserNotification;

class SendEmailAfterUserRegistrationCommand extends Command
{
    protected $signature = 'send:registeredUser';
    protected $description = 'Envio de email al admin cuando un nuevo usuario se registra.';

    public function __construct()
    {
        parent::__construct();
        
    }

    public function handle()
    {
        // $user = new User();
        // $user->getAdminUsers();
        User::query()
            ->where('rol', '=', 'admin')
            ->each(function (User $user) {
                $user->notify(new RegisteredUserNotification());
            });
    }
}
