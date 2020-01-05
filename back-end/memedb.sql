DROP DATABASE IF EXISTS memedb;

CREATE DATABASE memedb;

\c memedb;


CREATE TABLE users( 
    id SERIAL PRIMARY KEY,
    email VARCHAR, 
    firstname VARCHAR,
    displayname VARCHAR,
    bio VARCHAR,
    profilePic VARCHAR,
    active BOOLEAN 
);


CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    userId INT REFERENCES users (id),
    picture_url VARCHAR, 
    date_posted VARCHAR,
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

