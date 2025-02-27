<?php
 
header("Content-Type: application/json");
 
$data = json_decode(file_get_contents("php://input"));

// Your code here!
$f = fopen("testfile.txt", "w");
fwrite($f, $data);
fwrite($f, "hhhhh");
 
// secho "$dataf";
 
?>
