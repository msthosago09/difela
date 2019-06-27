-- noinspection SqlNoDataSourceInspectionForFile

CREATE TABLE IF NOT EXISTS hymns(
id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT, lyrics BLOB, number TEXT);
