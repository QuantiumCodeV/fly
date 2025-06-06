<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TelegramService;

class RequestController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'active_type' => 'required|string',
            'trip_type' => 'required|string',
            'cabin_class' => 'required|string',
            'passengers' => 'required|array',
            'passengers.adult' => 'required|integer|min:1',
            'passengers.child' => 'required|integer|min:0',
            'passengers.infant' => 'required|integer|min:0',
            'client' => 'required|array',
            'client.name' => 'required|string|max:255',
            'client.email' => 'required|email|max:255',
            'client.phone' => 'required|string|max:255',
            'flights' => 'required|array',
            'flights.*.from' => 'required|string|size:3',
            'flights.*.to' => 'required|string|size:3',
            'flights.*.date' => 'required|date|after:today',
            'preferences' => 'required|array',
            'preferences.quotes_via_sms' => 'required|boolean',
            'timezone' => 'required|string'
        ]);

        $requestData = $request->all();

        $message = "
*🛫 НОВАЯ ЗАЯВКА НА ПОИСК АВИАБИЛЕТОВ* 🛬

*📋 Основная информация:*
• *Тип активности:* `" . $requestData['active_type'] . "`
• *Тип поездки:* `" . $requestData['trip_type'] . "`
• *Класс обслуживания:* `" . $requestData['cabin_class'] . "`

*👥 Пассажиры:*
• Взрослых: `" . $requestData['passengers']['adult'] . "` 👨‍👩‍👧‍👦
• Детей: `" . $requestData['passengers']['child'] . "` 👶
• Младенцев: `" . $requestData['passengers']['infant'] . "` 🍼

*👤 Информация о клиенте:*
• *Имя:* `" . $requestData['client']['name'] . "`
• *Email:* `" . $requestData['client']['email'] . "`
• *Телефон:* `" . $requestData['client']['phone'] . "`

*✈️ Маршрут:*";

        foreach ($requestData['flights'] as $index => $flight) {
            $message .= "
*Рейс " . ($index + 1) . ":*
• Откуда: `" . $flight['from'] . "` 🛫
• Куда: `" . $flight['to'] . "` 🛬
• Дата: `" . $flight['date'] . "` 📅";
        }

        $message .= "

*⚙️ Дополнительные настройки:*
• Получать предложения по SMS: " . ($requestData['preferences']['quotes_via_sms'] ? "✅" : "❌") . "
• Часовой пояс: `" . $requestData['timezone'] . "` 🌍";

        $telegramService = new TelegramService();
        $telegramService->sendMessage(env('TELEGRAM_CHAT_ID'), $message);

        return response()->json(['message' => 'Request created successfully']);
    }

    public function redirects(Request $request)
    {
        return response()->json([
            'data' => [],
            'meta' => [
                'pagination' => [
                    'page' => 1,
                    'pageSize' => 25,
                    'pageCount' => 0,
                    'total' => 0
                ]
            ]
        ]);
    }
}
