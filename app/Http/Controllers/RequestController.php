<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TelegramService;
use Illuminate\Support\Str;

class RequestController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'active_type' => 'nullable|string',
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

*📋 Основная информация:*";

        if (isset($requestData['active_type'])) {
            $message .= "
• *Тип активности:* `" . $requestData['active_type'] . "`";
        }

        $message .= "
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

        return response()->json([
            'success' => true,
            'data' => [
                'id' => Str::random(24),
                'event' => 'non_us_lead_created'
            ]
        ]);
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

    public function pageResults(Request $request, $page) {
        return response()->json([
            'data' => [
                'id' => 1,
                'attributes' => [
                    'title' => 'Luxury Airways | Results',
                    'metaDescription' => 'Luxury Airways is an online travel agency that offers massively discounted airfares to flights across the world, Get online or call us now for a quote!',
                    'header' => null,
                    'subheader' => null,
                    'slug' => '/results',
                    'createdAt' => '2024-06-21T17:17:29.908Z',
                    'updatedAt' => '2024-11-13T13:08:25.275Z',
                    'publishedAt' => '2024-06-21T17:17:30.764Z',
                    'blocks' => []
                ]
            ],
            'meta' => [
            ]
        ]);
    }

    public function contacts(Request $request)
{
    $requestData = $request->all();

    $message = "
📩 *НОВОЕ СООБЩЕНИЕ С КОНТАКТНОЙ ФОРМЫ*

• *Имя:* `" . ($requestData['name'] ?? 'не указано') . "`
• *Email:* `" . ($requestData['email'] ?? 'не указано') . "`
• *Телефон:* `" . ($requestData['phone'] ?? 'не указано') . "`
• *Сообщение:* `" . ($requestData['message'] ?? 'не указано') . "`";

    // Доп. данные (необязательно, можно убрать если не нужно)
    if (isset($requestData['_cp'])) {
        $message .= "\n• *Источник:* `" . $requestData['_cp'] . "`";
    }
    if (isset($requestData['_gacid'])) {
        $message .= "\n• *GA Client ID:* `" . $requestData['_gacid'] . "`";
    }
    if (isset($requestData['_roistat'])) {
        $message .= "\n• *Roistat:* `" . $requestData['_roistat'] . "`";
    }

    $telegramService = new TelegramService();
    $telegramService->sendMessage(env('TELEGRAM_CHAT_ID'), $message);

    return response()->json([
        'success' => true,
        'message' => 'Контактные данные успешно отправлены.'
    ]);
}

}
