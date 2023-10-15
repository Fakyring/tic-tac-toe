<?php

require_once 'leaders.php';

use PHPUnit\Framework\TestCase;

class ScoreTest extends TestCase
{
    public function testAddScore()
    {
        $tmp = new Score();
        $this->assertEquals($tmp->AddScore("sdas"), true);
    }
}