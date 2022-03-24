CREATE SCHEMA IF NOT EXISTS static;

CREATE TABLE IF NOT EXISTS static.items (
    id     SMALLINT    NOT NULL
        CONSTRAINT items_pk
            PRIMARY KEY,
    str_id VARCHAR(50) NOT NULL,
    name   VARCHAR(50)
);

COMMENT ON TABLE static.items IS '
    Contains static info about in-game items
    GAME VERSION: 1.19.0 BE
    https://github.com/pmmp/BedrockData/blob/master/block_id_map.json
';

COMMENT ON COLUMN static.items.id IS 'Numeric ID of an item';

COMMENT ON COLUMN static.items.str_id IS 'String ID of an item with no "minecraft:" prefix';

COMMENT ON COLUMN static.items.name IS 'Item name';

ALTER TABLE static.items
    OWNER TO spb;

CREATE UNIQUE INDEX IF NOT EXISTS items_id_uindex
    ON static.items (id);

CREATE UNIQUE INDEX IF NOT EXISTS items_name_uindex
    ON static.items (name);

CREATE UNIQUE INDEX IF NOT EXISTS items_str_id_uindex
    ON static.items (str_id);
