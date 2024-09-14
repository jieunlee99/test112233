CREATE TABLE reviews
(
    id          serial      not null primary key,
    user_id     uuid        not null references auth.users,
    category_id int         not null,
    title       text        not null,
    content     text        not null,
    rating      smallint,
    visibility  text        not null DEFAULT 'private',
    created_at  timestamptz not null DEFAULT NOW(),
    updated_at  timestamptz not null DEFAULT NOW(),
    deleted_at  timestamptz
);
