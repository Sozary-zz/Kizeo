<?php
/*
 * Controler
 */

class mainController
{
    public static function welcome($request, $context)
    {
        return context::SUCCESS;
    }
    public static function getMovies($request, $context)
    {
        echo file_get_contents('Allokizeo/model/data.json');
        return context::NONE;
    }
    public static function getMovie($request, $context)
    {
        if (isset($request['title'])) {
            $c = json_decode(file_get_contents('Allokizeo/model/data.json'));

            foreach ($c as $v)
                if ($v->title == $request['title']) {
                    echo json_encode($v);
                    return context::NONE;
                }
        }
        echo "0x0";
        return context::NONE;
    }

    public static function about($request, $context)
    {
        return context::SUCCESS;
    }
}
