create table b(id integer primary key, x real, y real, z real, w real);
insert into b(x,y,z,w) values(11.12345678910737373, 22.12345678910737373, 33.12345678910737373, 44.12345678910737373);
select count(*) cnt, sum(rc) as passed from t;
