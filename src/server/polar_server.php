<?php
  header('Cache-Control: no-cache, must-revalidate');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: false');
  header('Content-type: application/json; charset=utf-8');
  
  $host = "127.0.0.1";
  $port = 4546;
  $tws = 9.7;
  $twap = 124.0;
  $twas = -72.0;

  function speed_calc($host,$port,$tws,$twa) {
    $string_tws=sprintf("%f\n",$tws);
    $string_twa=sprintf("%f\n",$twa);
    $socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");
    $result = socket_connect($socket, $host, $port) or die("Could not connect to server\n");
    $result = socket_write($socket, $string_tws, strlen($string_tws)) or die("Could not send TWS to server\n");
    $ack = socket_read($socket, 8) or die("Could not read server ack\n");
    $result = socket_write($socket, $string_twa, strlen($string_twa)) or die("Could not send TWA to server\n");
    $speed = socket_read($socket, 1024) or die("Could not read server response\n");
    socket_close($socket);
    return floatval($speed);
  }

  $speedp=speed_calc($host,$port,$tws,$twap);
  $speeds=speed_calc($host,$port,$tws,$twas);
  echo "{\n \"speedp\" : $speedp,\n \"speeds\" : $speeds\n}\n";
?>
