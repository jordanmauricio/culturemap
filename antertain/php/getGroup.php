<?php
    $servername = SERVER_NAME;
    $username = SERVER_NAME;
    $password = SERVER_PASS;
    $dbname = SERVER_DB;
    $eventsObjectJSON;

    //establish db connection
    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_errno) {
        echo "Error: Failed to make a MySQL connection, here is why: \n";
        echo "Errno: " . $mysqli->connect_errno . "\n";
        echo "Error: " . $mysqli->connect_error . "\n";
        exit;
    }

    //receive data from Processing, and update db
    if( $_POST["client"] == 'processing' ) {

        $venueName = $_POST["name"];
        $venueID = $_POST["id"];

        $sql = 'SELECT count FROM venue WHERE name = "'.$venueName.'"';

        if (!$result = $mysqli->query($sql)) {
            echo "Sorry, the website is experiencing problems.";
        }

        $count = $result->fetch_assoc()[count];
        $count++;

        $updateSQL = 'UPDATE venue SET count="'.$count.'" WHERE name="'.$venueName.'"';

        $procSQL = 'SELECT count FROM venue WHERE name = "'.$venueName.'"';
        $procResult = $mysqli->query($procSQL);
        $procCount = "Total Amount of Click: " . $procResult->fetch_assoc()[count];
        echo $procCount;

        if (!$result = $mysqli->query($updateSQL)) {
            echo "Sorry, the website is experiencing problems.";
        }
    } else {

        //or show error and display current count back in Processing
        $getData = 'SELECT * FROM venue';

        if (!$result = $mysqli->query($getData)) {
            echo "Sorry, the website is experiencing problems.";
        }

        if(is_ajax()){

            while($count = $result->fetch_assoc()){
                $return[] = $count;
            }
            
            echo json_encode($return);
        }       
    }

    //close connection
    $result->free();
    $mysqli->close();

    //setup ajax for JS connection
    function is_ajax(){
        return isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&
        strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    }
?>
