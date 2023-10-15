<?php

class Score
{
    public function AddScore($player)
    {
        $data = json_decode(file_get_contents('leaderboard.txt'), true);
        if (isset($data) && array_key_exists($player, $data)) {
            $data[$player] += 1;
        } else {
            $data[$player] = 1;
        }
        arsort($data);
        file_put_contents('leaderboard.txt', json_encode($data));
        return true;
    }
}

if (isset($_POST['player'])) {
    $score = new Score();
    $player_name = $_POST['player'];
    $score->AddScore($player_name);
}
