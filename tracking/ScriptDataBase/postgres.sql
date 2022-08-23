CREATE TABLE TRACK(
    id SERIAL PRIMARY KEY,
    nProcess INT NOT NULL,
    status VARCHAR (250) NOT NULL,
    cidade VARCHAR (100) NOT NULL,
    data DATE NOT NULL,
    cidadeEnviador varchar(100)NOT NULL,
    idtracking varchar(11) NOT NULL);

INSERT INTO  TRACK (nProcess, status, cidade,cidadeEnviador, data, idtracking) 
VALUES (0, 'Postado', 'AC DISTR IND NOVA SERRANA - NOVA SERRANA/MG','AC DISTR IND NOVA SERRANA - NOVA SERRANA/MG','2022-06-22','MBC20220307');



INSERT INTO  TRACK (nProcess, status, cidade,cidadeEnviador, data, idtracking) 
VALUES (1, 'Encaminhado', 'AC DISTR IND NOVA SERRANA - NOVA SERRANA/MG','CTCE BELO HORIZONTE - BELO HORIZONTE/MG','2022-06-22','MBC20220307');



INSERT INTO  TRACK (nProcess, status, cidade,cidadeEnviador, data, idtracking) 
VALUES (2, 'Encaminhado', 'CTCE BELO HORIZONTE - BELO HORIZONTE/MG','CTE RECIFE - RECIFE/PE','2022-06-23','MBC20220307');



INSERT INTO  TRACK (nProcess, status, cidade,cidadeEnviador, data, idtracking) 
VALUES (3, 'Encaminhado', 'CTE RECIFE - RECIFE/PE','AC MARIBONDO - MARIBONDO/AL','2022-06-25','MBC20220307');



INSERT INTO  TRACK (nProcess, status, cidade,cidadeEnviador, data, idtracking) 
VALUES (4, 'Saiu para entrega.', 'AC MARIBONDO - MARIBONDO/AL','AC MARIBONDO - MARIBONDO/AL','2022-06-26','MBC20220307');


INSERT INTO  TRACK (nProcess, status, cidade,cidadeEnviador, data, idtracking) 
VALUES (5, 'Entregue', 'AC MARIBONDO - MARIBONDO/AL','AC MARIBONDO - MARIBONDO/AL','2022-06-26','MBC20220307');


