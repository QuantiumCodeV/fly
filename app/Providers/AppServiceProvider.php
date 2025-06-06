<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\TravelpayoutsService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(TravelpayoutsService::class, function ($app) {
            return new TravelpayoutsService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
