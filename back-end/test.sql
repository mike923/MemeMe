\c memedb

SELECT picture_url ,ARRAY_AGG(captions.body) FROM captions
            LEFT JOIN photos
            ON photos.id = captions.photo_id
            WHERE LOWER(body) LIKE '%here%'
             GROUP BY photo_id, picture_url