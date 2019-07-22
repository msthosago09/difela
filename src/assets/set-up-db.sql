-- noinspection SqlNoDataSourceInspectionForFile
--INSERT INTO HYMNS(title, author, lyrics) VALUES("","","","")

CREATE TABLE IF NOT EXISTS hymns(
id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL, author TEXT, lyrics BLOB NOT NULL);



INSERT OR IGNORE INTO hymns(title, author, lyrics) VALUES("Ba Sione, thabelang!","J. Baumbach","Ba Sione, thabelang.<br/>
Kgos&i e le etelang!<br/>
Tlang re mo gahlanets&eng!<br/>
O kgaufsi o tseleng.<br/>
<br/>
Morwa wa Yomatla, tla<br/>
Re go hlologets&we fa!<br/>
Tlo o re nts&he tlalelong,<br/>
Hosiana godimong<br/>
<br/>
Mmus&o wo o sa feleng<br/>
O o thee mo faseng.<br/>
Re ba gago tumelong.<br/>
Hosiana godimong.<br/>
<br/>")

INSERT OR IGNORE INTO HYMNS(title, author, lyrics) VALUES("Dikgoro iphagami&#353;eng","G. Eiselen","Dikgoro iphagami&#353;eng!<br/>
Dikgoro t&#353;e di sa feleng legodimong le lefaseng!<br/>
Mejako, hle, le emi&#353;eng dihlogo t&#353;e di thabileng t&#353;a lena, le bulegeleng<br/>
Morena e a tlang, yo matla a tlabang.<br/>
<br/>
Mong wa letago e a tlang.<br/>
Morena a hlalalelwang,<br/>
Na kgo&#353;i''kgolo ye ke mang?<br/>
Ke Jusa a re pholo&#353;ang,<br/>
Ke Kriste a khunamelwang<br/>
Ke bohle ba mo dumelang.<br/>
Retang wa letagong,<br/>
Mo tumi&#353;eng pelong!<br/>
<br/>
O t&#353;ere mmu&#353;o letagong<br/>
Mo lefaseng le godimong.<br/>
Ke kgo&#353;i ye e re tlelang<br/>
Le kgaugelo e kakang!<br/>
O re pholo&#353;a tahlegong<br/>
Me o re bea bophelong,<br/>
Montso&#353;i a retwang,<br/>
Montwedi a nthatang.<br/>
<br/>
Morena, tsena ka moyeng<br/>
Me o se eme tseleng!<br/>
O go bulet&#353;we, moya wo,<br/>
O go kgopela: Dula mo!<br/>
Hle, tlo&#353;a t&#353;e di mpolayang.<br/>
A ko mphe t&#353;e di mphedi&#353;ang,<br/>
O nki&#353;e bophelong,<br/>
Ke dule letagong.<br/>
<br/>
Dikgoro t&#353;e di sa feleng,<br/>
Mejako, hle, le emi&#353;eng<br/>
Dihlogo t&#353;e di thabileng!<br/>
Ke Jesu, kgo&#353;i, a tseneng<br/>
Mo lefaseng, mo mebu&#353;ong,<br/>
Le mo metseng le dipelong.<br/>
Yang la hlakanet&#353;eng<br/>
E a le ratileng!<br/>")

