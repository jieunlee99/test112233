CREATE TABLE categories
(
    id         serial      not null primary key,
    user_id    uuid        not null references auth.users,
    name       text        not null,
    sort_order smallint    not null,
    visibility text        not null DEFAULT 'private',
    created_at timestamptz not null DEFAULT NOW(),
    updated_at timestamptz not null DEFAULT NOW(),
    deleted_at timestamptz
);
