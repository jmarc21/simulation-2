insert into listing (name,
    description,
    imgurl,
    loan,
    monthmort,
    recommendedrent,
    desiredrent,
    address,
    city,
    state,
    zip)
values($1,
$2,
$3,
$4,
$5,
$6,
$7,
$8,
$9,
$10,
$11,
$12,
$13
)
returning *;