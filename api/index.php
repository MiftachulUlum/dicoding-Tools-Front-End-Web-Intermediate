<?php
// api/index.php
header('Content-Type: application/json');
echo file_get_contents('../data/DATA.json');
