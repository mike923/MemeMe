-- DROP DATABASE IF EXISTS memedb;

-- CREATE DATABASE memedb;

-- \c memedb;


CREATE TABLE users( 
    id SERIAL PRIMARY KEY,
    email VARCHAR, 
    user_password VARCHAR, 
    firstname VARCHAR,
    displayname VARCHAR,
    bio VARCHAR,
    profilePic VARCHAR,
    active BOOLEAN
);


CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users (id),
    picture_url VARCHAR, 
    date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    active BOOLEAN 
);


CREATE TABLE captions (
    id SERIAL PRIMARY KEY,
    photo_id INT REFERENCES photos (id),
    commenter_id INT REFERENCES users (id),
    body VARCHAR,
    active BOOLEAN
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    like_value BOOLEAN, 
    liker_id INT REFERENCES users (id),
    caption_id INT REFERENCES captions (id),
    active BOOLEAN
);

CREATE TABLE user_session (
    id INT REFERENCES users (id)
);

INSERT INTO users (email, firstname, displayname, bio, profilePic, active, user_password)
VALUES 
    ('aransagarcia@pursuit.org', 'aransa', 'a_garcia', 'yert im fron the bronx', 'https://i.vimeocdn.com/video/353648146_780x439.jpg', true, 'agarcia'),
    ('owenjones@pursuit.org', 'owen', 'o_jones', 'yert im from brooklyn', 'https://media.licdn.com/dms/image/C4E03AQFJFRKW5QbJEg/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=T9WMAksTCK6XfMEXTlN0ZnUPsSamoOX_yYEENzOaVdk', true, 'ojones'),
    ('maliqtaylor@pursuit.org', 'maliq', 'm_taylor', 'yert im fron the BROOKLYN we go hard', 'https://media.licdn.com/dms/image/C4D03AQHKGTVYMBEsVw/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=x7R2_fYfMFvSG4DCcVq1tu37pE36Gwigo0edPd21WaI', true, 'mtaylor'),
    ('michaelamparo@pursuit.org', 'michael', 'm_amparo', 'yert im from manhattan', 'https://media.licdn.com/dms/image/C4D03AQFDnN-7lYz5PA/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=nl8aaWD6mPNfb9rtemx79O8RT7MJWRhn5xFBZ9p_plA', true, 'mamparo');

INSERT INTO photos (poster_id, picture_url, active)
VALUES 
    (1, 'https://i.kym-cdn.com/photos/images/newsfeed/001/248/399/430.png', true),
    (2, 'https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg', true),
    (3, 'https://image.businessinsider.com/56e3189152bcd0320c8b5cf7?width=1100&format=jpeg&auto=webp', true),
    (4, 'https://static.vibe.com/files/2017/02/Roll-Safe-1485964928-compressed.jpg', true),
    (1, 'https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s800-c85.jpg', true),
    (2, 'https://cdn.vox-cdn.com/thumbor/F1amWkSpCu_1dFRdKkIX2oXDIB8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/14253063/Screen_Shot_2019_02_22_at_3.13.37_PM.png', true),
    (3, 'https://cdn.livekindly.co/wp-content/uploads/2019/10/vegan-plant-based-news-meme14-1-Cropped.jpg', true),
    (4, 'https://imgflip.com/s/meme/Black-Girl-Wat.jpg', true);

INSERT INTO captions (photo_id, commenter_id, body, active)
VALUES 
    (1, 1, 'WHEN YOU CHECK YOUR BANK ACCOUNT IN THE MORNING', true),
    (1, 2, 'WHAT DO YOU MEAN WE HAVE A TEST TOMORROW', true),
    (1, 3, 'MFW I GET BACK MY UNIT 5 ASSESSMENT', true),
    (1, 4, 'BEEN IN TRAFFIC FOR 2 HOURS WHATS ANOTHER 45 MINUTES', true),
    (2, 1, 'REACT WHEN I CODE IT VERSUS WHEN SOMEONE ELSE DOES', true),
    (2, 2, 'THE FIRST OF MONTH VS THE NEXT DAY', true),
    (2, 3, 'THE STAR WARS PREQUELS VS THE SEQUELS', true),
    (2, 4, 'ME WHEN IM LISTENING TO NEW MUSIC VS ME WHEN IM LISTENING TO THE SAME 10 SONGS I LISTEN TO EVERY DAY', true),
    (3, 1, 'FORGET TO SET MY ALARM. STILL WAKE UP ON TIME ANYWAY', true),
    (3, 2, 'FINISHED MY PROJECT JUST IN TIME', true),
    (3, 3, 'LOST MONEY BETTING AGAINST MY FAVORITE. DOESNT MATTER MY TEAM STILL WON', true),
    (3, 4, 'BEAT 4 LIGHTS IN A ROW', true),
    (4, 1, 'WHEN MY CODE WORKS ON THE FIRST TRY', true),
    (4, 2, 'CANT BE HUNGRY IF YOU NEVER STOP EATING', true),
    (4, 3, 'MALIQ HERE FOURTH POST INNIT', true),
    (4, 4, 'MIKE HERE FOURTH POST', true),
    (5, 1, 'MJ WHEN ITS TIME TO DONATE MONEY', true),
    (5, 2, 'STUBBED MY TOE GETTING OUT OF BED', true),
    (5, 3, 'WHY IS REACT SO HARD?', true),
    (5, 4, 'ME ON THE WAY TO CLASS ON 3 HOURS OF SLEEP', true),
    (6, 1, 'ME WHEN THE CHECK CLEARS', true),
    (6, 2, 'OWEN HERE SIXTH POST INNIT', true),
    (6, 3, 'MALIQ HERE SIXTH POST', true),
    (6, 4, 'MIKE HERE SIXTH POST', true),
    (7, 1, 'WHATS THAT SMELL?', true),
    (7, 2, 'OWEN HERE SEVENTH POST', true),
    (7, 3, 'MALIQ HERE SEVENTH POST', true),
    (7, 4, 'MIKE HERE SEVENTH POST', true),
    (8, 1, 'SO YALL JUST GONNA KEEP MAKING STAR WARS', true),
    (8, 2, 'ARE YOU FINISHED OR ARE YOU DONE', true),
    (8, 3, 'WHAT DO YOU MEAN I CANT HAVE ICE CREAM FOR DINNER', true),
    (8, 4, 'OK BUT DID YOU DIE THOUGH?', true);

INSERT INTO likes (like_value, liker_id, caption_id, active)
VALUES
    (true, 3, 1, true),
    (true, 2, 3, true),
    (false, 2, 10, true),
    (true, 3, 5, true),
    (true, 1, 2, true),
    (false, 4, 3, true),
    (true, 1, 3, true),
    (false, 2, 13, true),
    (true, 3, 8, true),
    (true, 2, 14, true),
    (false, 2, 20, true),
    (false, 4, 9, true),
    (false, 1, 5, true),
    (true, 1, 11, true),
    (true, 1, 21, true),
    (false, 1, 25, true),
    (true, 2, 22, true),
    (true, 4, 20, true);