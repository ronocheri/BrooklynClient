<?php

if(isset($_POST) && !empty($_POST))
{
    $username=$_POST['uname']
    $password=$_POST['pass']

    if($username=='admin && '$password=='admin')
    {
    ?>

    {
        "success":true,
        "secret":"this is a secret"
    }

    <?php
    }
    else
    {
        ?>  
    {
        "success":false,
        "message":"Invalid credentials"
    }

    <?php
    }
    else
    {
        ?>  
    {
        "success":false,
        "message":"only post accepted"
    }
    <?php
    }
    ?>

}