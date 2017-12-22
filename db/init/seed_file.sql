CREATE TABLE listing(
    id serial primary key,
-- 69C
    name varchar(20), 
-- 69E
    description text,
    imgurl text,
-- 69D
    loan int,
    monthmort int,
    recommendedrent int,
    desiredrent int,
    address text,
    city varchar(30),
    state varchar(20),
    zip int
)

