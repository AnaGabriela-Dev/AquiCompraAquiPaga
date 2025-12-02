-- 1. Limpeza (Apaga dados velhos para não duplicar)
DELETE FROM compra_games;
DELETE FROM compra;
DELETE FROM game;

-- 2. Reseta o ID para começar do 1
ALTER TABLE game ALTER COLUMN id RESTART WITH 1;

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(1, 'Venha ajudar nosso herói Sávio a resgatar a princesa Ticianne do Castelo do poderoso Dirson.', 'Super Sávio World', 129.9, 'INDIE', '/imagens/superSavioWorld.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(2, 'Undertale é um aclamado RPG independente onde suas escolhas entre lutar ou poupar monstros alteram drasticamente o enredo e o final do jogo.', 'Undertale', 20.0, 'INDIE', '/imagens/Undertale.JPG');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(3, 'Omori é um jogo eletrônico de RPG de 2020 desenvolvido pelo estúdio independente Omocat. Baseado na série de webcomics do diretor, Omori, há destaque para conceitos como ansiedade e depressão e elementos de terror psicológico.', 'Omori', 16.0, 'INDIE', '/imagens/omori.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(4, 'Jogo de ação e tiros (run and gun) com estilo visual inspirado nas animações da década de 1930, conhecido por sua dificuldade desafiadora.', 'Cuphead', 50.0, 'INDIE', '/imagens/cuphead.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(5, 'Sequência do aclamado metroidvania Hollow Knight, lançada em 4 de setembro de 2025.', 'Silksong', 60.0, 'INDIE', '/imagens/silksong.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(6, 'Jogo de ação e aventura 2D do gênero metroidvania ambientado em Hallownest, um reino subterrâneo em ruínas.', 'Hollow Knight', 55.0, 'INDIE', '/imagens/hollowknight.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(7, 'Jogo de plataforma 2D com elementos rogue-lite onde Skul deve resgatar o Rei Demônio, usando seu poder de trocar caveiras.', 'Skull The Hero Slayer', 53.0, 'INDIE', '/imagens/Skull.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(8, 'Jogo de terror e quebra-cabeça feito no RPG Maker VX, famoso por sua atmosfera tensa e reviravolta marcante', 'The Witch''s House', 45.0, 'INDIE', '/imagens/witchshouse.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(9, 'OneShot é um jogo surreal de quebra-cabeça/aventura com visão de cima e mecânicas únicas. Você guia uma criança por um mundo misterioso em uma missão para restaurar seu sol há muito extinto. O mundo sabe que você existe.', 'One Shot', 32.9, 'INDIE', '/imagens/OneShot.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(10, 'Ajude Madeline a sobreviver aos seus demônios interiores em sua jornada até o topo da Montanha Celeste.', 'Celeste', 59.9, 'INDIE', '/imagens/Celeste.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(11, 'Faça amizades intensas em um acampamento cheio de atividades e descobertas.', 'Camp Buddy', 69.0, 'INDIE', '/imagens/Camp_Buddy.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(12, 'Versão expandida do popular jogo indie de 2017, misturando visual novel com terror psicológico e quebra da quarta parede.', 'Doki Doki Literature Club Plus!', 50.0, 'INDIE', '/imagens/dokidoki.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(13, 'Jogo multijogador online de dedução social, onde tripulantes tentam completar tarefas enquanto impostores sabotam tudo.', 'Among Us', 6.0, 'INDIE', '/imagens/among-us.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(14, 'RPG de terror 2D com elementos de restaurante e visual novel, acompanhando Rody enquanto descobre segredos sombrios no bistrô onde trabalha.', 'Dead Plate', 16.0, 'INDIE', '/imagens/deadPlate.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(15, 'Clássico jogo de encaixar blocos que testa velocidade, lógica e estratégia enquanto você tenta evitar que a pilha alcance o topo.', 'Tetris', 0.0, 'RETRO', '/imagens/tetris.JPG');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(16, 'Aventura baseada no universo da Pequena Sereia, com fases leves e desafio simples, ideal para fãs da animação.', 'Pequena Sereia 2', 0.0, 'RETRO', '/imagens/peqsereia2.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(17, 'O clássico dos celulares antigos onde você controla uma cobrinha que deve comer frutas no mapa sem colidir consigo mesma.', 'Snake - Jogo da Cobrinha', 0.0, 'RETRO', '/imagens/cobrinha.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(18, 'Jogo de ação e estratégia onde você deve posicionar bombas para destruir obstáculos e inimigos em labirintos.', 'Bomberman', 0.0, 'RETRO', '/imagens/bomberman.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(19, 'Beat em up clássico onde você luta pelas ruas de Metro City contra gângsteres.', 'Final Fight', 0.0, 'RETRO', '/imagens/finalFight.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(20, 'Um dos maiores jogos de luta de todos os tempos, com personagens icônicos e combates emocionantes.', 'Street Fighter', 0.0, 'RETRO', '/imagens/streetFighter.JPG');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(21, 'Jogo de futebol retrô, famoso no Brasil, conhecido por sua jogabilidade clássica e divertida ao longo dos anos.', 'Ronaldinho Soccer 97', 0.0, 'RETRO', '/imagens/ronaldinhoSoccer97.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(22, 'Considerado por muitos o melhor Bomberman já feito, trazendo fases famosas e power-ups divertidos.', 'Super Bomberman 4', 0.0, 'RETRO', '/imagens/superBomberman4.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(23, 'Remake de Pokémon Green, permitindo explorar Kanto, capturar criaturas e derrotar a Elite Four.', 'Pokémon LeafGreen', 0.0, 'RETRO', '/imagens/PokémonLeafGreen.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(24, 'Versão aprimorada da série Pokémon, com novos gráficos, enredo expandido e novos desafios para completar a Pokédex.', 'Pokémon Red', 0.0, 'RETRO', '/imagens/PokémonRed.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(25, 'Jogo de plataforma onde você controla Aladdin em sua aventura pelo deserto, enfrentando inimigos em cenários icônicos.', 'Sunset Riders', 0.0, 'RETRO', '/imagens/sunsetRiders.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(26, 'Clássico 2D de ação run-and-gun ambientado no Velho Oeste, com fases desafiadoras e personagens icônicos.', 'Aladdin (PS1)', 0.0, 'RETRO', '/imagens/aladdin.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(27, 'O clássico desenho dos anos 90 ganha vida em jogo de plataforma encantador.', 'Rei Leão (PS1)', 0.0, 'RETRO', '/imagens/reiLeão.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(28, 'Jogo de batalha com personagens icônicos da Marvel e da Capcom, com combates frenéticos.', 'Marvel vs Capcom', 0.0, 'RETRO', '/imagens/marvelVsCapcom.jpg');

INSERT INTO game (ID, DESCRICAO, NOME, PRECO, CATEGORIA, IMAGEM_URL) VALUES
(29, 'Aventuras e confusões no colégio de adolescentes da Rockstar ambientado em 2006, enquanto Jimmy Hopkins tenta acabar com o caos escolar e se tornar o aluno mais influente.', 'Bully', 0.0, 'RETRO', '/imagens/bully.JPG');