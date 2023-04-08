<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class JishoController extends Controller
{
    public function search($keyword)
    {
        $client = new Client();
        $response = $client->request('GET', 'https://jisho.org/api/v1/search/words', [
            'query' => [
                'keyword' => $keyword
            ]
        ]);
        $data = json_decode($response->getBody(), true);
        return response()->json($data);
    }
}
