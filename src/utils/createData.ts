// import { writeFile } from "./readWriteFile";
// import { IDesvantagem } from "../interfaces/data";
// import FilePath from "../enums/filesPath";

// const desvantagens: IDesvantagem = {
//   desvantagens: [
//     {
//       id: 1,
//       name: "Ambiente Especial",
//       cost: "-1 ponto",
//       description: "Você é dependente de seu ambiente de origem, seja a água, clima ártico ou outro terreno que não existe em abundância no local da campanha.\nVocê pode ficar afastado de seu ambiente durante um número de dias igual à sua Resistência; quando esse prazo se esgota, começa a perder 1 ponto de Força e 1 ponto de Resistência por dia (seus Pontos de Vida e Magia caem na mesma proporção). Você ficará fraco como uma pessoa comum (a maioria das pessoas comuns tem F0 e R0), mas não morrerá.\nPara restaurar sua Força e Resistência perdidas, você deve permanecer pelo menos 24 horas em seu ambiente natural. Ou, em caso de emergência, você também pode gastar 1 Ponto de Experiência para uma recuperação instantânea em seu ambiente.",
//     },
//     {
//       id: 2,
//       name: "Assombrado",
//       cost: "-2 pontos",
//       description: "Existe algum tipo de assombração, fantasma ou aparição dedicada a atormentar você. Pode ser alguém que você matou, ou alguém afirmando ser a única pessoa que pode ajudá-lo. Ninguém mais pode ver esse fantasma além de você. Ele só deixa você em paz quando está satisfeito ou cansado.\nSempre que você entra em combate, o mestre joga um dado: um resultado 4, 5 ou 6 significa que o fantasma apareceu para assombrá-lo, e você sofre uma penalidade de –1 em todas as suas características até que ele vá embora. Um conjurador Assombrado gasta duas vezes mais PMs para lançar magias.\nEsta desvantagem também pode significar alguma doença ou, para construtos, algum tipo de mal-funcionamento. A critério do mestre, o “fantasma” também pode aparecer para incomodá-lo em outras ocasiões.",
//     },
//     {
//       id: 3,
//       name: "Bateria",
//       cost: "-1 ponto",
//       description: "Você tem uma reserva de energia para permanecer ativo: 2 horas por ponto de Resistência. Quando o limite se esgota, começa a perder 1 ponto de Força e 1 ponto de Resistência por hora (seus Pontos de Vida e Magia caem na mesma proporção). Caso sua Força e Resistência cheguem ambas a 0, você “desliga” durante 1d horas, até que sua bateria esteja recarregada. A recarga só é possível com repouso absoluto.",
//     },
//     {
//       id: 4,
//       name: "Código de Honra",
//       cost: "-1 ponto cada",
//       description: "Você segue um código rígido que o impede de fazer (ou deixar de fazer) alguma coisa.\n1ª Lei de Asimov: jamais causar mal a um ser humano ou, por omissão, permitir que um ser humano sofra qualquer mal.\n2ª Lei de Asimov: sempre obedecer ordens de seres humanos, exceto quando essas ordens violam qualquer outro Código que você possua.\nCódigo de Arena: nunca lutar em certos tipos de terreno; escolha dois terrenos (veja a vantagem Arena).\nCódigo do Caçador: nunca matar (combater ou capturar, quando necessário, mas nunca matar) filhotes ou fêmeas grávidas de qualquer espécie. Nunca abandonar uma caça abatida. Sempre escolher como oponente a criatura de aparência mais perigosa que esteja à vista.\nCódigo do Cavalheiro: nunca atacar uma mulher (ou fêmea de qualquer espécie), nem mesmo quando atacado, e nem permitir que seus companheiros o façam. Sempre atender um pedido de ajuda de uma mulher.\nCódigo do Combate: nunca atacar um oponente indefeso, ou em desvantagem numérica.\nCódigo da Derrota: nunca se permitir ser capturado com vida e nunca aceitar a derrota. Caso seja reduzido a 0 Pontos de Vida (apenas em situações de combate honrado, um contra um) ou capturado (em qualquer situação), você deve tirar a própria vida. (Nem que seja para ressuscitar mais tarde...)\nCódigo da Gratidão: quando alguém salva sua vida (ou de um ente querido seu), você fica a serviço dessa pessoa, até conseguir devolver o favor (salvar sua vida).\nCódigo dos Heróis: sempre cumprir sua palavra, sempre proteger qualquer pessoa ou criatura mais fraca que você, jamais recusar um pedido de ajuda.\nCódigo da Honestidade: nunca roubar, trapacear, mentir ou desobedecer as leis locais, nem permitir que seus companheiros o façam.\nCódigo da Redenção: jamais atacar sem provocação, sempre aceitar um pedido de rendição, sempre poupar oponentes reduzidos a 0 Pontos de Vida.\nSempre que você viola um Código, recebe –1 Ponto de Experiência no final da aventura. Cada violação vale –1 PE.\nVocê pode ter até quatro Códigos de Honra, no valor total de –4 pontos (e será alguém muuuito honrado e bonzinho...).",
//     },
//     {
//       id: 5,
//       name: "Deficiência Física",
//       cost: "0 a -2 pontos",
//       description: "• Audição Ruim (0 pontos): você sofre um redutor de H–1 para notar inimigos escondidos. Esta condição é cancelada se você adquirir Audição Aguçada, restaurando sua audição normal (mas neste caso sem oferecer os benefícios normais da vantagem ou magia).\n• Cego (–2 pontos): um cego sofre um redutor de H–1 para fazer ataques corporais, e H–3 para ataques à distância e esquivas (personagens com Audição Aguçada ou Radar sofrem apenas H–1 para ataques à distância e esquivas).\nUm cego também sofre um redutor de H–1 para notar inimigos escondidos, utilizando apenas seus outros sentidos (em algumas situações, caso você não consiga ouvir ou cheirar, o teste nem mesmo será permitido).\nSentidos Especiais como Infravisão, Ver o Invisível, Visão Aguçada e Visão de Raio X são anulados pela cegueira. Contudo, para certas criaturas que não dependem da visão\n— como morcegos, toupeiras ou personagens com Radar\n— esta será uma desvantagem de –1 ponto.\n• Mudo (–1 ponto): um personagem mudo tem dificuldade para se comunicar, exceto com personagens ligados a vantagens ou desvantagens (Aliado, Mentor, Patrono, Protegido Indefeso...). Testes de perícias que envolvam ações sociais (como Arte, Manipulação, Investigação, Crime e outras, quando exigem interação com outras pessoas) serão sempre considerados difíceis.\nUm conjurador mudo não pode lançar magias, exceto através de A Mágica Silenciosa de Talude.\n• Sem Faro (0 pontos): você não pode sentir o cheiro e o gosto de nada. Em algumas situações esta condição pode ser vantajosa (o gás pestilento de um trog não terá efeito sobre você), mas também pode colocar você em perigo (você não pode, por exemplo, sentir o cheiro de algo queimando).\nPara você, todo tipo de comida tem o mesmo gosto (nenhum). Exceto pela aparência, você não pode dizer se um alimento está estragado. Por outro lado, você raramente passa fome, pois consegue comer coisas capazes de revirar o estômago de um avestruz.\nFaro Aguçado é cancelado por esta desvantagem.\n• Surdo (–1 ponto): uma pessoa surda sofre um redutor de H–1 em testes para notar inimigos escondidos (em algumas situações, caso você não consiga ver, o teste nem mesmo será permitido).\nVocê pode ler os lábios de alguém se tiver as perícias Idiomas, Investigação, ou a especialização Leitura de Lábios (ou ainda a magia de mesmo nome).\nAudição Aguçada e Radar são cancelados pela surdez.\n• Visão Ruim (0 pontos): você é caolho, míope ou enxerga mal por alguma outra razão, sofrendo um redutor de H–1 para ataques à distância e esquivas. Também sofre um redutor de H–1 em testes para notar inimigos escondidos.\nEsta condição é cancelada se adquirir Visão Aguçada, restaurando sua visão normal (mas neste caso sem oferecer os benefícios normais da vantagem ou magia).",
//     },
//     {
//       id: 6,
//       name: "Dependência",
//       cost: "-2 pontos",
//       description: "Você depende de alguma coisa rara, proibida ou desumana para continuar existindo — sendo quase sempre alguma coisa que envolve a morte de outros seres humanos ou outro tipo de crime grave.\nEssa Dependência pode ser agradável ou não, mas você deve satisfazê-la todos os dias. Se não o fizer, vai sofrer uma penalidade cumulativa de –1 em Resistência (o que também vai reduzir seus PVs e PMs) por dia. Caso sua Resistência chegue a 0, você terá apenas 1 PV e mais um dia de vida: se não alimentar sua Dependência, morrerá. Quando satisfaz a Dependência, sua Resistência retorna imediatamente ao normal.\nEsta desvantagem é mais apropriada para vilões NPCs, não personagens jogadores.",
//     },
//     {
//       id: 7,
//       name: "Devoção",
//       cost: "-1 ponto",
//       description: "Você é devotado a um dever sagrado, uma grande missão ou uma profunda obsessão. Sua vida é dedicada a cumprir esse dever, e nada mais importa.\nUm personagem com uma Devoção raramente se desvia de seu grande objetivo — e, quando o faz, não consegue se empenhar na tarefa: sempre que está envolvido em qualquer coisa que não tenha ligação direta com sua Devoção, sofre um redutor de –1 em todas as suas características.\nVocê não pode possuir uma Devoção que seria usada em todas as situações de combate, como “derrotar meus oponentes” ou “lutar para provar minha força”. Concluir uma aventura também não pode ser considerado uma Devoção.",
//     },
//     {
//       id: 8,
//       name: "Fetiche",
//       cost: "-1 ponto",
//       description: "Você não pode fazer mágica sem um objeto especial que usa para canalizar seu poder. Pode ser uma varinha ou cajado para os magos, um amuleto sagrado para clérigos e paladinos, um instrumento musical para bardos, ou qualquer outro objeto. Se perder, deixar cair ou ficar sem esse objeto por algum motivo, você não vai poder usar mágica até recuperá-lo ou conseguir outro igual.\nSempre que você sofre dano, faça um teste de Habilidade: uma falha quer dizer que você deixa cair seu objeto mágico. Recuperá-lo demora um turno.\nO fetiche não é um objeto raro: se perdê-lo você pode encontrar, comprar ou até improvisar outro facilmente. Usando um fetiche quebrado ou improvisado (por exemplo, um galho de árvore para substituir uma varinha), suas magias consomem duas vezes mais PMs.",
//     },
//     {
//       id: 9,
//       name: "Fúria",
//       cost: "-1 ponto",
//       description: "Sempre que você sofre dano ou fica irritado por qualquer motivo (a critério do mestre), deve fazer um teste de Resistência. Se falhar, entra em um tipo de frenesi de batalha e ataca imediatamente o alvo de sua irritação.\nDurante a Fúria você não pensa claramente: jamais pode se esquivar, usar magia, ou qualquer vantagem que use PMs.\nA Fúria só termina quando você ou seu oponente são derrotados, ou caso o oponente consiga fugir. Quando tudo acaba, você fica imediatamente esgotado, sofrendo uma penalidade de –1 em todas as características durante uma hora. Se entrar em Fúria outra vez nesse período, as penalidades são cumulativas.",
//     },
//     {
//       id: 10,
//       name: "Inculto",
//       cost: "-1 ponto",
//       description: "Alguns aventureiros podem ter grande poder de combate, mas são pouco espertos. Outros não são exatamente incultos — apenas nativos de outra cultura, e não conhecem bem a linguagem ou costumes locais.\nUm personagem com esta desvantagem não sabe ler, ou tem muita dificuldade em fazê-lo, e também não consegue se comunicar com outras pessoas. Se você tem um Mentor, Patrono, Parceiro, Aliado, Protegido Indefeso ou outro personagem representado por uma vantagem ou desvantagem, ele será capaz de entender você.",
//     },
//     {
//       id: 11,
//       name: "Insano",
//       cost: "0 a -3 pontos",
//       description: "Você é louco. Após dois minutos de conversa, ninguém acredita ou confia em você.\nHá muitas formas de insanidade. Algumas são bem suaves, não pagam pontos por desvantagens (valem 0 pontos). Elas estão aqui porque podem ser adquiridas em campanha, como efeito de alguma magia, maldição ou ataque especial de criaturas.\nTodas as formas de insanidade podem ser vencidas temporariamente com um teste de R–3 (ou um teste normal, caso apareça na descrição de cada insanidade), mas o mestre só deve autorizar esses testes em situações extremas.\nLembre-se também que, em todas estas variantes, o efeito normal de Insano (ninguém confia em você) continua valendo; mesmo que seu problema não seja evidente, você ainda fala e se comporta de forma estranha e suspeita. Apenas personagens representados por uma vantagem ou desvantagem (Mentor, Patrono, Aliado, Protegido Indefeso...) acreditam em você. Às vezes.\nAlgumas formas de Insano são idênticas a certas desvantagens já existentes, como Fúria, Devoção, Assombrado e outras. Novamente, isso acontece porque tais problemas mentais podem ser adquiridos em campanha.\n• Cleptomaníaco (–1 ponto): você rouba coisas de que não precisa, não por seu valor, apenas por serem interessantes. Sempre que surgir a chance de roubar algo, deve ser bem-sucedido em um teste de R para evitar. Um cleptomaníaco nunca devolve para os donos o produto de seus roubos, e lutará para evitar que isso aconteça.\n• Compulsivo (–1 ponto): existe alguma coisa que você precisa fazer constantemente, pelo menos uma vez por hora; tomar banho, lavar roupa, comer lasanha, tocar harpa, roer as unhas, ler quadrinhos... alguma coisa que consome pelo menos 1d minutos de cada vez. Se ficar mais de uma hora sem fazer essa coisa, deve fazer um teste de R por turno. Se falhar, você vai deixar tudo que estiver fazendo (inclusive lutar!) para satisfazer sua compulsão. Você não pode ter como compulsão alguma coisa que possa ser feita enquanto se luta!\n• Demente (–1 ponto): sua inteligência e capacidade de aprendizado são reduzidas. Em regras, é o mesmo que ser Inculto: você não sabe ler ou escrever, nem se comunicar com outras pessoas.\n• Depressivo (–2 pontos): você pode perder subitamente a motivação de viver, algo perigoso quando acontece em combate! Em regras, é o mesmo que Assombrado.\n• Dupla Personalidade (0 pontos): é parecido com Forma Alternativa: você tem um outro personagem feito com a mesma quantidade de pontos, mas com outras características, vantagens, desvantagens, Perícias e magias conhecidas. Sim, esta Dupla Personalidade é mesmo meio exagerada — porque sua própria aparência e poderes também mudam!\nNo entanto, a mudança não está sob seu controle. A cada hora, ou em qualquer situação de perigo, o mestre rola um dado; um resultado 4, 5 ou 6 indica que você mudou para sua outra personalidade. Uma personalidade não se lembra do que a outra fez. Na verdade, às vezes você nem acredita que tem esse problema!\n• Distraído (0 pontos): você tem dificuldade para se concentrar em alguma coisa na qual não está interessado (qualquer coisa não ligada a uma Devoção, Dependência, Código de Honra...). Você sofre uma penalidade extra de –1 (cumulativo com quaisquer outros) em qualquer teste envolvendo algo que você não deseja muito fazer.\n• Fantasia (–1 ponto): você acredita ser alguém ou alguma coisa que não é, ou acha que pode fazer alguma coisa de que não é capaz. (Eu sou um mago! Eu posso voar! Eu sou o Mestre Arsenal!) Você fala de si mesmo o tempo todo para anunciar sua fantasia para todos à volta.\n• Fobia (–1 a –3 pontos): você tem medo terrível de alguma coisa. Sempre que é exposto a essa coisa, deve fazer um teste de Resistência. Se falhar, fica apavorado e tenta fugir de qualquer maneira em velocidade máxima (mesmo efeito da magia Pânico).\nO valor da Fobia depende daquilo que você teme: –1 ponto para uma coisa incomum, que você encontra em pelo menos 25% do tempo (lugares altos, estrangeiros, insetos, água, sangue, pessoas mortas...); –2 pontos para uma coisa comum, que você encontra 50% do tempo (escuridão, lugares fechados, animais...); e –3 pontos para algo que você encontra quase o tempo todo (pessoas, veículos, lugares abertos, barulhos altos, vento, aparelhos eletrônicos, música...)\n• Fúria (–1 ponto): igual à desvantagem.\n• Histérico (–2 pontos): você pode começar a rir ou chorar sem motivo. Em regras, é mesmo que Assombrado.\n• Homicida (–2 pontos): precisa matar um humano, semi-humano ou humanoide a cada 1d dias. Se não cometer um assassinato quando o prazo se esgotar, deve fazer um teste de Resistência por hora; uma falha significa que vai tentar atacar e matar a primeira pessoa que encontrar (Precisa dizer que esta desvantagem não é recomendada para personagens jogadores?)\n• Megalomaníaco (–1 ponto): você acredita ser invencível, imortal, alguém destinado a realizar um grande objetivo — e acha que ninguém jamais conseguirá detê-lo! Você com freqüência ignora perigos que poderiam matá-lo. Nunca recusa um desafio, nunca se rende, nunca foge e sempre luta até a morte.\n• Mentiroso (–1 ponto): você nunca diz a verdade sobre coisa alguma, mesmo quando quer. Com um teste de Resistência pode vencer momentaneamente sua insanidade e dizer algo verdadeiro para seus amigos. O mestre faz esse teste em segredo, para que os jogadores não sabiam se podem confiar no colega.\n• Obsessivo (–1 ponto): igual a Devoção.\n• Paranoico (–1 ponto): você não confia em ninguém, nem em seus amigos. Nunca pede e nem aceita nenhuma ajuda (não, nem mesmo aquela magia ou poçãozinha de cura...). Não consegue descansar ou dormir direito: mesmo que esteja em uma estalagem ou outro lugar seguro, você recupera PVs e PMs como se estivesse em lugar inadequado (ou seja, só recupera um valor igual à sua Resistência).\n• Sonâmbulo (0 pontos): cada vez que dormir, role um dado: um resultado 4, 5 ou 6 indica que você começa a andar enquanto dorme. Você não pode lutar, mas acorda se sofrer qualquer dano.\n• Suicida (0 pontos): você não dá valor à própria vida. Embora não tenha coragem para se matar, sempre procura oportunidades de morrer — desafiando inimigos poderosos, correndo riscos desnecessários, fazendo coisas de forma impensada. Você pode ser Suicida e Imortal (mas não vai ganhar muitos Pontos de Experiência, uma vez que não recebe nenhum ponto em aventuras durante as quais tenha morrido).",
//     },
//     {
//       id: 12,
//       name: "Interferência",
//       cost: "0 pontos",
//       description: "Você emite continuamente um campo de interferência que prejudica o funcionamento de certos aparelhos.\nNenhuma mensagem de rádio pode ser enviada ou recebida nas redondezas (10m para cada Ponto de Vida que o personagem possui no momento), sendo assim impossível entrar em contato com um Aliado, Mentor ou Patrono. Adaptador, Memória Expandida e Sentidos Especiais não funcionam dentro da área. Perceba que, às vezes, a Interferência pode ser usada como vantagem (afinal, ela também funciona contra inimigos...).",
//     },
//     {
//       id: 13,
//       name: "Interferência Mágica",
//       cost: "0 pontos",
//       description: "Você emana uma aura de “antimágica” que dificulta o uso de magia nas proximidades.\nSempre que uma magia é lançada a até 10m de você, o mestre rola secretamente um dado: com um resultado 1 ou 2, a magia falha, mas gasta os PMs necessários normalmente.\nQualquer conjurador de magias sente um mal-estar momentâneo quando você está perto, sendo capaz de perceber imediatamente sua interferência. Um conjurador pode gastar 1 PM extra para ignorar a chance de falha e lançar sua magia normalmente na área afetada.",
//     },
//     {
//       id: 14,
//       name: "Má Fama",
//       cost: "-1 ponto",
//       description: "Você é infame. Talvez você tenha fracassado em alguma missão importante, foi derrotado ou humilhado publicamente, é um ex-criminoso tentando se regenerar, pertence a uma raça detestada... por algum motivo, ninguém acredita ou confia em você, seja de forma merecida ou não.\nVocê está sempre sob suspeita. Será mais difícil fazer com que confiem em você, e sua presença em um grupo vai tornar todos os outros suspeitos também. Caso seja constatado algum crime, muito provavelmente você será acusado e perseguido mesmo que seja inocente.",
//     },
//     {
//       id: 15,
//       name: "Maldição",
//       cost: "-1 ou -2 pontos",
//       description: "Você foi vítima de uma maldição que o perturba todos os dias. Nada que você possa fazer vai acabar com essa sina; sempre ela voltará de alguma maneira. A Maldição pode ser inventada pelo jogador, mas sua natureza e efeito exatos serão decididos pelo mestre.\n• Suave (–1 ponto): mais irritante ou constrangedora que qualquer outra coisa, esta Maldição traz problemas, mas nunca provoca nenhuma penalidade. Por exemplo, pode ser que você se transforme em mulher quando molhado com água fria, e depois volte ao normal quando molhado com água quente.\n• Grave (–2 pontos): algo que coloca sua vida em risco. Se você se transforma em gatinho, porquinho ou pato quando é molhado com água fria (e com 0 em todas as características, menos uma, enquanto está nessa forma...), isso acaba sendo um grande problema!\nUma Maldição pode ser removida com a magia Cura de Maldição, lançada por um clérigo poderoso o bastante. No entanto, é quase certo que ele vai exigir algum tipo de compensação por esse grande serviço — seja em dinheiro, seja na forma de uma missão.\nEm mundos medievais e outras culturas primitivas, ser deficiente ou insano é o mesmo que ser amaldiçoado. Por esse motivo, em termos de jogo apenas, uma Deficiência Física ou Insanidade é o mesmo que uma Maldição. Um mago maligno pode rogar uma magia de Maldição das Trevas para torná-lo cego, e mais tarde você pode recorrer a uma Cura de Maldição para recobrar a visão.\nA decisão de usar deficiências físicas e mentais como Maldições pertence ao mestre: uma Maldição de anime e mangá muitas vezes é cômica, bem-humorada, enquanto uma deficiência possivelmente não será. Tenha cuidado para não acabar ofendendo ou magoando alguém.",
//     },
//     {
//       id: 16,
//       name: "Modelo Especial",
//       cost: "-1 ponto",
//       description: "Por algum motivo, seu corpo é diferente: muito maior, menor, com membros nos lugares errados... enfim, diferente do padrão humanoide normal. Por esse motivo, você não pode usar armas, roupas, equipamentos, máquinas e veículos projetados para humanos — apenas aqueles que tenham sido construídos especialmente para você.\nO inverso também é válido: máquinas feitas para você não servem para outros personagens. Pertences pessoais que tenham sido escolhidos durante a criação do personagem são, automaticamente, feitos para você.\nSe você recebe esta desvantagem por ser membro de uma raça fantástica (gnomo, halfling, fada...), então poderá usar itens próprios para outros membros da raça.",
//     },
//     {
//       id: 17,
//       name: "Monstruoso",
//       cost: "-1 ponto",
//       description: "Sua aparência é repulsiva e assustadora. Você não pode sair pelas ruas como gente normal; as pessoas ficarão assustadas ou furiosas.\nO motivo exato daquilo que torna você monstruoso pode variar. Qualquer coisa que possa ser facilmente disfarçada com roupas (olhos vermelhos, orelhas pontudas, uma cauda fina...) não é considerada Monstruosa. Se você tem algum poder natural para disfarçar seu verdadeiro aspecto, isso também não é ser Monstruoso.\nVocê não pode ser Monstruoso e ter Aparência Inofensiva ao mesmo tempo.",
//     },
//     {
//       id: 18,
//       name: "Munição Limitada",
//       cost: "-1 ponto",
//       description: "Um personagem com Poder de Fogo tem munição ilimitada, mas não neste caso. Sua arma tem um número de tiros limitado, igual a três vezes seu Poder de Fogo (com PdF4 você tem 12 tiros, por exemplo). Esta é toda a munição que você consegue carregar consigo: quando esgotada, você precisa comprar ou fabricar mais.\nEm cenários mais realistas ou primitivos, a critério do mestre, todos os personagens jogadores possuem automaticamente esta desvantagem, sem ganhar pontos por ela. Veja no capítulo “Combate”.",
//     },
//     {
//       id: 19,
//       name: "Poder Vergonhoso",
//       cost: "0 ou -1 ponto cada",
//       description: "Não basta só apertar o gatilho. Seu canhão é formado por partes brilhantes que voam à sua volta para combinar-se e montar a arma. Sua magia manifesta a imagem de um leão em chamas imenso que salta das nuvens. Seu ataque requer uma dança que evoca luzes coloridas e música pop.\nSempre que você usa magia ou qualquer vantagem que gasta PMs, algo estranho acontece:\n• Agradável (–1 ponto): sua magia vem acompanhada de música empolgante e ilusões visuais agradáveis, como chuvas de pétalas, revoadas de pássaros, explosões coloridas, a bandeira de sua nação, ou quaisquer outras imagens positivas. É tudo tão bonito, que dificilmente faria mal a alguém! Seus adversários recebem bem merecidos A+1 e R+1 para resistir às suas magias e ataques.\n• Constrangedor (–1 ponto): sua magia requer atos vergonhosos. Você precisa dizer coisas embaraçosas (“Eu invoco o Poder Floral da Tia Gertrudes!”) e realizar coreografias humilhantes. Para aventureiras bonitas, isso normalmente envolve uma dança e efeitos mágicos que revelam sua nudez. Como resultado, suas magias e poderes têm Força de Ataque –1.\n• Exagerado (–1 ponto): sua magia demora a acontecer, porque envolve gestos elaborados e efeitos especiais, incluindo projeções ilusórias fantásticas e uma música-tema. Tudo é muito impressionante, mas também demorado. Alvos de suas magias recebem R+1 em seus testes de resistência, e também em esquivas para evitar magias de ataque à distância.\n• Hentai (0 pontos): você aprendeu suas magias com alguém muito sem-vergonha (ou, você mesmo é sem-vergonha!). Quando você faz uma magia ou ataque bem-sucedido contra uma criatura, além de causar efeito normal, essa criatura fica nua por um instante — suas roupas desaparecem ou ficam transparentes. Esse efeito acontece até mesmo com magias benéficas (explicando a razão pela qual seus colegas às vezes recusam suas magias de cura...)\nUm personagem nu deve ser bem-sucedido em um teste de Resistência ou ficará envergonhado, sofrendo redutor de H–1 durante uma rodada. Este efeito não afeta a Armadura do alvo (sua armadura não desaparece realmente) e, em geral, não afeta monstros ou mechas (que não usam roupa, mesmo).\nQuando a magia ou ataque é mal-sucedido, ou não afeta criaturas, é você quem fica nu.\nPois é!",
//     },
//     {
//       id: 20,
//       name: "Poder Vingativo",
//       cost: "-1 ponto",
//       description: "Às vezes, invocar um poder sobrenatural pode cobrar um preço em sofrimento. Sempre que você lança uma magia ou usa qualquer vantagem que consome Pontos de Magia, sofre 1 ponto de dano (sem direito a testes para resistir). Exceto por esse fato, a vantagem ou magia funciona normalmente.",
//     },
//     {
//       id: 21,
//       name: "Ponto Fraco",
//       cost: "-1 ponto",
//       description: "Você ou sua técnica de luta tem algum tipo de fraqueza. Um oponente que conheça seu Ponto Fraco ganha um bônus de H+1 quando luta com você. Alguém só pode descobrir seu ponto fraco se observar uma luta sua pelo menos uma vez.\nVocê pode tentar descobrir o Ponto Fraco de um lutador quando o observa em ação. Faça um teste de Habilidade enquanto assiste à luta: se tiver sucesso, e se ele tiver um ponto fraco, você o descobrirá — e terá um bônus de H+1 quando lutar com ele.\nSe você tem Boa ou Má Fama, então seu Ponto Fraco será automaticamente conhecido por quase todo mundo!",
//     },
//     {
//       id: 22,
//       name: "Protegido Indefeso",
//       cost: "-1 ponto cada",
//       description: "Existe alguém que você precisa proteger de qualquer maneira. Essa pessoa será sempre visada pelos vilões, e você precisa protegê-la com a própria vida. Ter um Protegido é arriscado, pois os vilões podem tentar usá-lo como chantagem para vencer você (e não tenha dúvida de que eles vão tentar!).\nSua concentração nas lutas será prejudicada caso seu Protegido esteja em perigo, prisioneiro ou muito ferido; nessas situações você sofre uma penalização de H–1, até que ele esteja são e salvo outra vez. Se o Protegido morrer ou desaparecer para sempre, você perde um ponto de Habilidade permanente.\nVocê pode ter mais de um Protegido, mas isso aumenta seus riscos. Caso dois ou mais Protegidos estejam em perigo ao mesmo tempo, seus redutores serão acumulados (dois Protegidos em perigo impõem H–2).",
//     },
//     {
//       id: 23,
//       name: "Restrição de Poder",
//       cost: "-1 a -3 pontos",
//       description: "É mais difícil para você usar seus poderes em certas condições, escolhidas com aprovação do mestre. Quando essa condição está presente, você precisa gastar duas vezes mais PMs para lançar magias e usar vantagens.\nO custo da desvantagem depende de quão comum são essas condições.\n• Incomum (–1 ponto): esta condição não acontece todo dia, mas você vai enfrentá-la em pelo menos 25% do tempo. Digamos, quando você estiver molhado; durante uma das fases da lua; durante uma das estações do ano; contra mamíferos, répteis, goblinoides, mortos-vivos ou outra grande família de criaturas; sobre você mesmo...\n• Comum (–2 pontos): você vai enfrentar esta condição quase todos os dias, ou em pelo menos 50% do tempo: à noite ou à luz do dia; contra todos os animais, todos os youkai (incluindo mortos-vivos) ou todos os humanoides.\n• Muito Comum (–3 pontos): esta condição acontece quase o tempo todo. Por exemplo, sua mágica não funciona se alguém estiver olhando (incluindo inimigos!); não funciona contra nenhuma criatura viva, ou contra nenhum objeto inanimado.\nEm alguns casos (como estações do ano ou fases da lua) o mestre pode rolar os dados para saber a possibilidade do evento acontecer, ou apenas decidir em segredo.",
//     },
//     {
//       id: 24,
//       name: "Vulnerabilidade",
//       cost: "especial",
//       description: "Você é mais vulnerável a um certo tipo de dano. Quando recebe um ataque ao qual é vulnerável, sua Armadura é reduzida a zero para calcular sua Força de Defesa: o ataque ignora quase toda a sua proteção e frita seus Pontos de Vida!\nExemplo: você tem Habilidade 2, Armadura 5 e Vulnera bilidade a Sônico. Se for atingido por um raio sônico, sua Força de Defesa será 2+1d.\nEsta desvantagem não oferece pontos, e não pode ser escolhida durante a criação de personagem. No entanto, ela pode aparecer mais adiante como parte de uma vantagem única (por exemplo, um Anjo tem Vulnerabilidade: Fogo), ou causada por alguma Maldição.\nOs tipos de Vulnerabilidade são os mesmos existentes para Armadura Extra.\nVulnerabilidade não vale apenas contra ataques de criaturas: se você é vulnerável a fogo, então qualquer calor ou fogo terá maior chance de feri-lo: incêndios, vapor escaldante, água fervente, lava... veja mais detalhes em “Combate”.",
//     },
//   ],
// };

// const vantagens = {
//   name: "Vantagens",
//   about: "Vantagens são poderes extras que um personagem pode ter. Elas não são obrigatórias: um personagem de 3D&T pode ser construído sem qualquer vantagem, e mesmo assim funcionar perfeitamente no jogo. Contudo, um jogador raramente resiste à oportunidade de dar a seu herói pelo menos duas ou três delas...\nAssim como as características, uma vantagem custa pontos: quanto melhor, mais cara será. Algumas, como Ataque Especial e Energia Extra, podem ter custos variáveis — quanto mais pontos você gasta, melhor ela funciona.\nA maior parte das vantagens exige Pontos de Magia para sua ativação, mesmo que você não seja um mago. Todos os personagens têm pelo menos 1 Ponto de Magia. Mesmo assim, antes de comprar uma vantagem, verifique se você tem PMs suficientes para usá-la com eficácia.\nEnquanto as vantagens são qualidades e poderes extras que um personagem tem, as desvantagens atrapalham sua vida. “E por que eu ia querer algo assim?” você pergunta. Primeiro, porque não existem pessoas perfeitas — ter defeitos faz seu personagem ficar mais parecido com um herói do cinema, TV, games ou HQ. Segundo, porque pegar desvantagens faz você ganhar pontos para gastar em características, vantagens, perícias ou o que você quiser. Esse equilíbrio é a melhor maneira de conseguir um herói poderoso e interessante.",
//   acesso: {
//     title: 'Acesso',
//     body: "A seguir temos uma lista de vantagens e desvantagens. Em princípio, um jogador pode comprar qualquer vantagem se puder pagar por ela. No geral, todas servem para personagens em qualquer gênero: fantasia medieval, ficção científica, super-heróis, torneios...\nA quantidade de desvantagens depende do mestre e da pontuação (página 13), mas nenhum personagem recém-criado pode acumular mais de –6 pontos.\nEm alguns casos, o mestre pode determinar que esta ou aquela vantagem (ou desvantagem) não pode pertencer a personagens jogadores. Se não existe magia no mundo da aventura, por exemplo — ou se é rara, praticada apenas por grandes feiticeiros —, o mestre pode proibir todas as vantagens e desvantagens ligadas a magia."
//   },
//   tips: [
//     {
//       id: 1,
//       title: "Ganhando e Perdendo",
//       body: "Pode acontecer que, durante uma aventura, você consiga um anel mágico capaz de aumentar sua Força em +1; ou um escudo sagrado de ouro que pode refletir disparos, como a vantagem Reflexão. O jogador deve pagar pontos por estes novos poderes?\nNão. Pontos só servem para comprar ca racterísticas, vantagens e perícias durante a criação do personagem. Ou mais tarde, com evolução e Pontos de Experiência. Não é preciso pagar pontos por Invisibilidade se você explorou uma masmorra, derrotou um dragão e encontrou em seu tesouro uma capa mágica que torna você invisível: é a merecida recompensa por seu esforço.\nVale lembrar que também é possível perder uma vantagem, mesmo aquela que esteja mais profundamente enraizada em você. O poder de Telepatia pode ser perdido por causa de um grande trauma, uma máquina de drenar poderes, uma magia, ou até uma pancada na cabeça. Um Ataque Especial pode ser anulado por algum tipo de maldição. Um Patrono, Aliado ou Parceiro pode morrer ou abandonar você para sempre. Você não recebe de volta pontos por uma vantagem perdida.\nO inverso também é válido — você pode receber uma ou mais desvantagens, gostando disso ou não! Se violou a tumba de um antigo samurai, talvez ele volte para Assombrá-lo. Se irritou um antigo deus maligno, talvez ele rogue uma Maldição sobre você, entre outras possibilidades. Desnecessário dizer, uma desvantagem recebida durante uma aventura não dá pontos para gastar.\nLivrar-se de desvantagens é possível, com tempo e esforço. Seria interessante dar a seu personagem a missão pessoal de livrar-se de uma Maldição, deixar de ser um morto-vivo, ou desfazer sua Má Fama. Há duas formas de fazer isso: ganhando Pontos de Experiência suficientes para recomprar a desvantagem, ou em campanha, conforme o julgamento do mestre"
//     },
//     {
//       id: 2,
//       title: "Progressão de Ataques Especiais",
//       body: "À medida que ganham experiência, os personagens podem aprender golpes cada vez mais elaborados e poderosos. Para simular isso, um personagem pode comprar novos níveis de Ataque Especial. Cada novo nível custa 1 ponto de personagem.\n• Ataque Especial 0: gratuito. Característica (C) +1, custo 1 PM.\n• Ataque Especial I: 1 ponto, C+2, custo 1 PM.\n• Ataque Especial II: +1 ponto, C+4, custo 2 PMs.\n• Ataque Especial III: +1 ponto, C+6, custo 3 PMs.\nE assim por diante, até Ataque Especial X, que fornece +20 na característica e custa 10 PMs por uso.\nCada Ataque tem como pré-requisito todos os anteriores. Apenas o Ataque Especial I pode ser adquirido durante a criação do personagem — os outros só podem ser comprados com pontos ganhos durante o jogo."
//     }
//   ],
//   vantagens: [
//     {
//       id: 1,
//       name: "Aceleração",
//       cost: "1 ponto",
//       description: "Você corre mais rápido. Esta vantagem acrescenta 1 ponto à Habilidade apenas para situações de perseguição, fuga e esquiva (não cumulativo com Teleporte).\nVocê também recebe um movimento extra por turno. Isso quer dizer que você pode mover-se em velocidade máxima duas vezes e agir, ou então mover-se três vezes. Mas você continua não podendo agir mais de uma vez por turno.\nVocê pode executar sua ação e movimentos em qualquer ordem. Pode mover-se, agir e mover-se de novo; mover-se duas vezes e agir; ou agir e mover-se duas vezes.\nUsar esta vantagem em situações de combate gasta 1 Ponto de Magia. Os efeitos duram até o fim do combate."
//     },
//     {
//       id: 2,
//       name: "Adaptador",
//       cost: "1 ponto",
//       description: "Você tem facilidade para lidar com armas, aprender novas técnicas e improvisar novos golpes. Esta vantagem permite mudar o tipo de dano de sua Força ou Poder de Fogo sem sofrer nenhuma penalidade, como se fosse seu próprio dano inicial. Para mais detalhes veja o capítulo “Combate”."
//     },
//     {
//       id: 3,
//       name: "Aliado",
//       cost: "1 ponto cada",
//       description: "Você tem um companheiro com quem pode contar. Pode ser uma pessoa, animal ou mecha, à sua escolha.\nO Aliado é um NPC que você controla, mas o mestre pode às vezes interferir nesse controle — por exemplo, quando acreditar que o Aliado faria ou não faria algo. Seu Aliado ajuda você, mas muitas vezes ele também pode precisar de sua ajuda.\nVocê pode construir o Aliado se quiser, mas o mestre dará a aprovação final. A pontuação do Aliado é um “nível” abaixo da sua. Por exemplo, se você é um Novato, seu Aliado é uma Pessoa Comum (feito com 4 pontos). Se você é um Lutador, o Aliado é um Novato (5 pontos), e assim por diante.\nVeja o quadro na página 13.\nSe quiser um Aliado mais poderoso, ele custará mais caro: 1 ponto extra para cada ponto de personagem. Por exemplo, se você quer um Aliado Novato feito com 6 pontos em vez de 5, ele vai custar 2 pontos.\nUm Aliado normalmente segue suas ordens sem reclamar. No entanto, você não pode obrigá-lo a fazer algo que ele não quer (como uma ação suicida) ou contra sua natureza (como enfrentar uma Fobia ou violar um Código de Honra).\nUm Aliado não ganha Pontos de Experiência. Quando você evolui seu personagem, a pontuação total dele também aumenta proporcionalmente. Você não ganha PEs por vitórias de seu Aliado."
//     },
//     {
//       id: 4,
//       name: "Alquimista",
//       cost: "1 ponto",
//       description: "Você sabe traçar diagramas arcanos que potencializam seus poderes. Antes de lançar uma magia (ou usar qualquer vantagem que gasta PMs), você pode desenhar um símbolo místico em alguma superfície próxima. Traçar um diagrama leva uma rodada inteira, e se você sofrer dano o processo falha. Se tiver sucesso, na rodada seguinte você pode usar uma magia ou vantagem gastando metade dos PMs necessários (arredonde para cima).\nVocê pode desenhar com qualquer material, sobre qualquer superfície lisa (chão, parede...). Você deve anunciar qual magia pretende lançar no momento de traçar o diagrama.\nCada diagrama é único para cada utilização. Você não pode levar consigo diagramas prontos em folhas de papel, nem tatuá-los na pele ou costurá-los na roupa.\nAlguém treinado em magia (ou seja, que tenha Magia Branca, Elemental ou Negra) que veja seu diagrama saberá, na mesma hora, qual magia você pretende conjurar"
//     },
//     {
//       id: 5,
//       name: "Aparência Inofensiva",
//       cost: "1 ponto",
//       description: "Por algum motivo você não parece perigoso. Talvez pareça pequeno, fraco ou covarde. Talvez seja um bichinho fofo, um vovô barrigudo, uma menininha segurando pirulito... você escolhe o motivo.\nAlém de outros benefícios, como entrar em lugares protegidos sem levantar suspeitas, possuir uma Aparência Inofensiva também ajuda em combate. Ela vai surpreender seu oponente — você ganha uma ação extra antes do primeiro turno de um combate. Esse truque não funciona com ninguém que já tenha visto você lutar, e também não engana duas vezes a mesma pessoa.\nVocê não pode ter Aparência Inofensiva e ser Monstruoso ao mesmo tempo."
//     },
//     {
//       id: 6,
//       name: "Arcano",
//       cost: "4 pontos",
//       description: "Esta vantagem diz que você tem uma poderosa aptidão natural para a magia, e pode ser um grande mago mais facilmente. Você pode utilizar Magia Branca, Magia Elemental e Magia Negra como se tivesse comprado todas as três vantagens. Confira mais detalhes no capítulo “Magos e Magia”"
//     },
//     {
//       id: 7,
//       name: "Área de Batalha",
//       cost: "2 pontos",
//       description: "Você tem o poder de transportar a si mesmo e uma ou mais criaturas (oponentes e/ou aliados) temporariamente para outra dimensão, onde você leva vantagem em combate. Nenhum outro personagem pode interferir na luta enquanto vocês estiverem na área.\nO número máximo de criaturas que você pode levar consigo é igual à sua Habilidade, e todos devem estar ao alcance de seu Poder de Fogo.\nVocê não pode transportar um oponente contra a vontade se ele tiver Resistência superior à sua Habilidade. No entanto, note que um oponente poderoso pode permitir ser transportado (talvez para afastar você de seus aliados).\nAtivar a Área de Batalha custa 2 PMs. Mantê-la custa 2 PMs por turno, e você pode mantê-la por um número máximo de turnos igual à sua Habilidade.\nA Área pode ter um destes três efeitos, que você escolhe no momento do uso:\n• Habilidade +1, Armadura +2. Além disso, você pode usar Ataques Especiais que tenha sem gastar PMs.\n• Força ou Poder de Fogo +2, Armadura +2.\n• Você pode lançar suas magias com metade do custo normal em PMs.\nÉ impossível escapar de uma Área de Batalha, exceto quando ela termina. Caso você seja derrotado, a Área desaparece.\nO tempo corre mais rápido na Área de Batalha. Para todos aqueles não envolvidos, apenas um turno terá passado."
//     },
//     {
//       id: 8,
//       name: "Arena",
//       cost: "1 ponto",
//       description: "Você tem sua própria arena de lutas, ou sabe lutar melhor em certo tipo de terreno ou condição. Você ganha H+2 quando está em sua Arena, apenas em situações de combate. Vale lembrar que, quando alguém faz um desafio formal para um duelo, aquele que foi desafiado tem o direito de escolher o local do combate.\nA Arena é escolhida pelo jogador, mas sempre com aprovação do mestre. Eis algumas sugestões:\n• Água (praia, barcos, chuva, superfície da água, embaixo d’água).\n• Céu (combate aéreo; vale apenas quando seu oponente também está voando).\n• Cidades (ruas, telhados, topo de prédios, aposentos, corredores, escadas).\n• Ermos (desertos, florestas, montanhas, pântanos, planícies, geleiras...).\n• Subterrâneo (cavernas, masmorras, esgotos).\n• Um único lugar do mundo (provavelmente sua base de operações) e vizinhanças."
//     },
//     {
//       id: 9,
//       name: "Armadura Extra",
//       cost: "especial",
//       description: "Você é mais resistente a certos tipos de dano. Sua Armadura será duas vezes maior, mas apenas contra aquele dano.\nDigamos que você tem Habilidade 4, Armadura 3 e Armadura Extra: Frio. Quando atingido por um raio congelante, sua Força de Defesa será 4+(3x2), resultando em FD 10.\nEsta vantagem não pode ser comprada com pontos. No entanto, ela pode aparecer mais adiante como parte de uma vantagem única (por exemplo, um Esqueleto tem Armadura Extra: Corte e Perfuração), ou oferecida por um item mágico.\nOs tipos de Armadura Extra são:\n• Força. Qualquer dano causado com Força (ataques corporais).\n• Poder de Fogo. Qualquer dano causado com PdF (ataques à distância).\n• Magia. Qualquer dano causado por magia, incluindo armas mágicas (mas não incluindo outros ataques ou manobras que gastam PMs).\n• Corte, Perfuração, Esmagamento. Estes são os três tipos possíveis de dano físico.\n• Fogo, Frio, Elétrico, Químico, Sônico. Estes são os cinco tipos possíveis de dano por energia.\nBenefícios são cumulativos. Se você tem Armadura Extra: Magia e Fogo, e recebe um ataque mágico da Escola Elemental/Fogo, sua Armadura é triplicada.\nVeja mais detalhes em “Combate”."
//     },
//     {
//       id: 10,
//       name: "Ataque Especial",
//       cost: "1 ponto ou mais",
//       description: "Praticamente qualquer aventureiro, herói ou guerreiro tem algum tipo de técnica ou ataque que provoca dano maior. Isso é tão comum nos mundos de aventura que qualquer personagem pode fazer um Ataque Especial gastando 1 PM e ganhando F+1 ou PdF+1. Isto é apenas uma manobra especial; não é preciso pagar pontos de personagem por ela.\nA vantagem Ataque Especial, no entanto, é uma versão melhorada dessa manobra. Ela permite gastar 1 PM e aumentar em +2 sua Força ou Poder de Fogo (escolha F ou PdF quando adquirir esta vantagem) para um único ataque.\nVocê pode pagar mais ou menos pela vantagem, para dar mais poderes ou fraquezas ao Ataque Especial. Alguns desses ajustes também afetam o custo do ataque em Pontos de Magia:\n• Amplo (+2 pontos, +2 PMs): apenas para ataques com PdF. Se você quiser, todas as criaturas no alcance do ataque à distância são atingidas (incluindo aliados, e até mesmo você!). Todos os alvos têm direito a esquiva. Você pode ignorar um número de alvos igual ao seu PdF.\n• Lento (–1 ponto): apenas para ataques com PdF. O alvo recebe H+2 em sua esquiva.\n• Paralisante (+1 ponto, +1 PM): além de causar dano, o ataque funciona como a vantagem Paralisia (pelo custo normal em Pontos de Magia).\n• Penetrante (+1 ponto, +1 PM): impõe A–2 contra o alvo em sua Força de Defesa.\n• Perigoso (+1 pontos, +1 PMs): este ataque consegue um acerto crítico com um resultado 5 ou 6 no dado.\n• Perto da Morte (–2 pontos, –1 PM): o ataque só pode ser usado quando você está Perto da Morte.\n• Poderoso (+1 pontos, +1 PMs): em caso de acerto crítico, o ataque triplica sua Força ou PdF (em vez de duplicar).\n• Preciso (+1 ponto): impõe H–2 contra o alvo em sua Força de Defesa.\n• Teleguiado (+1 ponto): apenas para PdF. O ataque persegue o alvo, impondo H–2 em tentativas de esquiva.\nUm Ataque Especial nunca pode custar menos de 1 ponto de personagem. Também não pode custar menos de 1 PM para ser usado.\nVocê pode tornar seu Ataque Especial mais poderoso, durante a evolução do personagem (veja o quadro ao lado)."
//     },
//     {
//       id: 11,
//       name: "Ataque Múltiplo",
//       cost: "1 ponto",
//       description: "Você pode fazer mais ataques com Força em uma única rodada. Cada golpe (incluindo o primeiro) gasta 1 PM. Assim, atacar três vezes na mesma rodada gasta 3 PMs. O número máximo de ataques que você pode fazer por rodada é igual à sua Habilidade.\nA Força de Ataque de cada golpe conta separadamente para vencer a Força de Defesa do inimigo. Você não pode somar a FA de seus vários ataques."
//     },
//     {
//       id: 12,
//       name: "Boa Fama",
//       cost: "1 ponto",
//       description: "Você é respeitado entre outros heróis e aventureiros, e também entre boa parte das pessoas comuns. Pode ser conhecido por lutar bem, ter um estilo diferente, uma aparência especial, ou até por uma única luta marcante. De qualquer forma, você é famoso, admirado ou temido por alguma razão.\nSer famoso pode trazer vantagens em algumas ocasiões, mas também desvantagens. Será mais difícil passar despercebido ou agir disfarçado. Se você tem um Ponto Fraco (veja mais adiante), ele será conhecido por todos."
//     },
//     {
//       id: 13,
//       name: "Clericato",
//       cost: "1 ponto",
//       description: "Você é um sacerdote, druida ou xamã, e serve a uma entidade espiritual superior. Em troca de cumprir certas obrigações, você pode lançar certas magias divinas que outros conjuradores não podem.\nSozinha, esta vantagem não permite lançar magias. No entanto, usuários de Magia Branca só conseguem lançar as mais poderosas magias divinas quando também possuem Clericato. O mesmo vale para certos tipos de Magia Negra, pois para utilizá-las o conjurador deve cultuar uma entidade maligna.\nPara conjuradores, esta vantagem também permite começar com três magias extras, além das magias iniciais (cumulativas com Mentor e Patrono). Elas são escolhidas pelo mestre."
//     },
//     {
//       id: 14,
//       name: "Deflexão",
//       cost: "1 ponto",
//       description: "Você tem chance de desviar completamente um ataque feito com Poder de Fogo, sem sofrer quase nenhum dano. Com esta vantagem, você pode gastar 2 PMs e duplicar sua Habilidade para calcular a Força de Defesa contra um único ataque.\nA Deflexão é uma esquiva — ou seja, você só pode usá-la um número máximo de vezes por rodada igual à sua H."
//     },
//     {
//       id: 15,
//       name: "Elementarista",
//       cost: "1 ponto cada",
//       description: "Escolha um tipo de Magia Elemental (água, ar, fogo, terra ou espírito). Você sempre gasta metade dos PMs necessários (arredonde para cima) para lançar magias do elemento escolhido.\nVocê pode comprar esta vantagem várias vezes, uma para cada elemento."
//     },
//     {
//       id: 16,
//       name: "Energia Extra",
//       cost: "1-2 pontos",
//       description: "Você consegue invocar forças interiores para se recuperar espantosamente, recarregando seus Pontos de Vida.\nVocê pode gastar 2 PMs para recuperar todos os seus PVs. Usar a Energia Extra leva um turno inteiro, e você é considerado indefeso enquanto se concentra. Se sofrer dano, sua concentração é perdida.\nExistem dois níveis para esta vantagem: por 1 ponto você só pode usar a Energia Extra quando estiver Perto da Morte (veja em \"Pontos de Vida\"). Por 2 pontos a Energia Extra pode ser usada a qualquer momento.\nEnergia Extra é parecida com magia de cura, mas serve apenas para curar você mesmo, e não funciona contra qualquer outro tipo de mal (doenças, veneno...)."
//     },
//     {
//       id: 17,
//       name: "Energia Vital",
//       cost: "2 pontos",
//       description: "Você pode usar sua própria energia vital para alimentar magias e poderes especiais, ainda que fazer isso provoque dano. Em vez de Pontos de Magia, você pode usar Pontos de Vida para ativar vantagens, lançar magias ou fazer qualquer outra coisa que exige o gasto de PMs.\n2 PVs valem 1 PM. Você ainda recupera PVs e PMs normalmente, e também pode usar seus Pontos de Magia normais."
//     },
//     {
//       id: 18,
//       name: "Familiar",
//       cost: "1 ponto",
//       description: "Você tem um pequeno animal mágico que partilha suas habilidades. Um Familiar é como um Parceiro mais fraco que evolui com o conjurador na mesma proporção. Cada ponto conquistado é revertido em um ponto que pode ser gasto para melhorar seu Familiar. O conjurador e o Familiar também possuem uma Ligação Natural (veja adiante).\nExemplo: um mago com F1, H4, R2, A3, PdF1 e Arena une-se a um corvo familiar com F0, H1, R1, A0, PdF0 e Voo. Agora a dupla terá F1, H4, R2, A3, PdF1, Arena e Voo (o mago também será capaz de voar).\nEstes são os animais que podem se tornar familiares:\nCamaleão: F0, H0, R1, A0, PdF0, Invisibilidade.\nCorvo (ou qualquer pássaro): F0, H1, R0, A0, PdF0, Voo.\nGato: F0, H2, R0, A0, PdF0, Sentidos Especiais (Audição, Faro, Visão Aguçadas).\nCão/Lobo: F1, H1, R1, A0, PdF0, Sentidos Especiais (Audição, Faro Aguçados).\nMacaco: F0, H1, R1, A0, PdF0, Arena (ermos).\nSapo: F0, H0, R1, A0, PdF0, Arena (água).\nSerpente: F0, H1, R0, A0, PdF0, Paralisia.\nApenas usuários de magia (Branca, Elemental ou Negra) podem receber os benefícios de um familiar. Nenhum mago pode ter mais de um familiar ao mesmo tempo.\nNota: o mestre pode proibir a aquisição de um Familiar para um personagem recém-criado. Em vez disso, um Familiar custará 10 Pontos de Experiência, devendo ser conquistado em campanha.\nSe um Familiar morre, seu dono deve gastar 5 PEs para adquirir outro do mesmo tipo, 10 PEs para adquirir outro de um tipo diferente ou 20 PEs para trazê-lo de volta."
//     },
//     {
//       id: 19,
//       name: "Forma Alternativa",
//       cost: "2 pontos cada",
//       description: "Você pode mudar de forma e poderes. Para cada Forma Alternativa que tiver, pode construir um personagem diferente com a mesma quantidade de pontos, com outras características e vantagens — mas desvantagens, perícias e magias conhecidas permanecem sempre as mesmas.\nDigamos que seu personagem de 12 pontos tenha F4, H2, R2, A3, PdF1, Ataque Especial (1 pt), Forma Alternativa (2 pts), Código de Honra dos Heróis (–1 pt) e Maldição (–2 pts); ele pode mudar para uma segunda forma com F0, H5, R1, A1, PdF5, Aparência Inofensiva (1 pt), Forma Alternativa (2 pts), Código e Honra dos Heróis (–1 pt) e Maldição (–2 pts). Repare que as duas formas têm o mesmo Código de Honra e Maldição, e ambas precisam pagar 2 pontos por Forma Alternativa. (Nota: Monstruoso e Modelo Especial são as únicas desvantagens que não precisa ser partilhada por todas as Formas.)\nVocê pode comprar várias Formas Alternativas. Cada Forma pode ter uma vantagem única (veja o próximo capítulo), sendo a única maneira de ter mais de uma destas em um mesmo personagem. Mas lembre-se, você vai acumular os problemas de todas as Formas! Se um Anfíbio muda para um Anão, ainda precisará de um Ambiente Especial; e um construto nunca poderá recuperar PVs em nenhuma outra Forma.\nMudar para uma Forma Alternativa demora um movimento. A mudança nunca vai aumentar seus Pontos de Vida ou de Magia atuais — mas pode reduzi-los, caso a nova Forma tenha Resistência mais baixa."
//     },
//     {
//       id: 20,
//       name: "Genealidade",
//       cost: "1 ponto",
//       description: "Você é um gênio. Recebe H+2 ao utilizar qualquer perícia que possua, ou em qualquer teste de Habilidade envolvendo uma perícia que não possua.\nCom os recursos necessários, a critério do mestre, esta vantagem também permite feitos acima do nível técnico de seu mundo (como fabricar um motor a vapor em mundos medievais, ou consertar uma nave interestelar na época atual). Em Arton, por exemplo, é necessário ter esta vantagem para lidar com armas de fogo, canhões e balões de ar quente."
//     },
//     {
//       id: 21,
//       name: "Imortal",
//       cost: "1-2 pontos",
//       description: "Por algum motivo, você nunca pode morrer. Na verdade, você até pode morrer — mas nunca vai continuar morto. Algum tipo de força maior ou energia sobrenatural impede sua entrada no Reino dos Mortos, e você sempre vai retornar ao mundo dos vivos (com 1 PV e 1 PM). Isso pode acontecer por você ser de uma raça imortal, ter recebido uma dádiva (ou maldição) dos deuses, ter algum poder regenerativo, ou qualquer coisa assim.\nPor 1 ponto, retornar da morte leva dias, semanas ou até meses. Em termos de jogo, caso você seja morto durante uma aventura, não poderá retornar antes da aventura seguinte.\nPor 2 pontos, você retorna da morte logo após o combate, ou assim que a situação de perigo acaba.\nEm qualquer dos casos, você não ganha nenhum Ponto de Experiência durante uma aventura em que tenha morrido, mesmo que tenha derrotado adversários antes de sua morte.\nVale lembrar que, embora não possa morrer, você ainda pode sofrer destinos piores: ser aprisionado, transformado em pedra, em pudim de ameixa..."
//     },
//     {
//       id: 22,
//       name: "Inimigo",
//       cost: "1 ponto cada",
//       description: "Você é especialmente treinado em combater certo tipo de criatura, conhecendo bem seus poderes e fraquezas.\nEscolha entre os seguintes: humanos, semi-humanos, humanoides, youkai (incluindo mortos-vivos) ou construtos (incluindo máquinas). Você recebe H+2 em combate e testes de perícias envolvendo criaturas deste tipo (saiba mais sobre essas criaturas no capítulo “Vantagens Únicas”).\nO mestre pode proibir esta vantagem, por exemplo, em mundos e campanhas onde só existam humanos (não é justo pagar 1 ponto para ter H+2 contra todo mundo), ou onde outras criaturas sejam muito raras."
//     },
//     {
//       id: 23,
//       name: "Invisibilidade",
//       cost: "2 pontos",
//       description: "Você pode ficar invisível. Fora de combate, esta habilidade reduz a dificuldade em testes de perícias que envolvem furtividade (por exemplo, para apanhar um oponente indefeso).\nEm combate, seu oponente sofre H–1 para acertar ataques corporais contra você, e H–3 para ataques à distância ou esquivar (estes são os mesmos redutores que um personagem sofre quando está cego).\nPersonagens com Audição Aguçada não sofrem redutor em combate corpo-a-corpo, e sofrem apenas H–2 para ataques à distância e esquivas. Ver o Invisível (a magia ou Sentidos Especiais) vence totalmente sua invisibilidade.\nAtivar e manter a Invisibilidade custa 1 PM por turno."
//     },
//     {
//       id: 24,
//       name: "Invulnerabilidade",
//       cost: "especial",
//       description: "Você é praticamente imune a certo tipo de dano. Quando recebe um ataque baseado nesse dano, após ser comparado à sua Força de Defesa, ele será dividido por dez (arredonde para baixo). O mesmo vale para dano que não venha de ataques (como algumas magias), que ignoram sua Armadura, ou qualquer outro. Isso quer dizer que qualquer dano inferior a 10 é anulado, e apenas quantidades fantásticas desse dano (provavelmente de uma escala superior) podem ferir você.\nOs tipos de Invulnerabilidade são os mesmos existentes para Armadura Extra. É possível ter Armadura Extra e também Invulnerabilidade contra certo tipo de dano. Os efeitos se acumulam: o dano é dividido por dez, e sua Armadura também é dobrada contra ele.\nEsta vantagem não pode ser comprada com pontos. No entanto, ela pode aparecer mais adiante como parte de uma vantagem única (por exemplo, um Demônio tem Invulnerabilidade: Fogo), ou oferecida por um item mágico."
//     },
//     {
//       id: 25,
//       name: "Ligação Natural",
//       cost: "1 ponto",
//       description: "Você tem uma ligação especial com seu Aliado. Os dois foram destinados um ao outro desde que nasceram. Apenas personagens com um Aliado podem ter esta vantagem.\nDentro do mesmo campo visual, vocês podem perceber os pensamentos um do outro; são capazes de se comunicar sem nenhum sinal aparente. Fora do campo de visão, vocês podem apenas sentir emoções gerais, mas sempre sabem em que direção e distância o outro está.\nQuando você comanda seu Aliado, ele pode usar quaisquer vantagens de combate que você tenha. Veja a manobra Comandar Aliados no capítulo “Combate”.\nComo efeito colateral dessa ligação poderosa, sempre que seu Aliado é ferido, você também sofre dano equivalente. É como quando um piloto mecha fica ferido quando seu mecha recebe dano. Caso você ou seu Aliado pertençam a escalas diferentes, o dano é ajustado de acordo (se um Aliado Sugoi recebe 20 pontos de dano, você perde 2 PVs)."
//     },
//     {
//       id: 26,
//       name: "Magia Branca",
//       cost: "2 pontos",
//       description: "Você é um conjurador de magia sagrada. Quase todas as suas magias são curativas ou defensivas, enquanto algumas poucas são ofensivas. Confira mais detalhes no capítulo “Magos e Magia”."
//     },
//     {
//       id: 27,
//       name: "Magia Elemental",
//       cost: "2 pontos",
//       description: "Você é um conjurador de magia ligada à natureza e aos espíritos, representada pelos quatro elementos: terra, água, fogo e ar. Seus efeitos são variados, incluindo magias ofensivas do fogo, magias congelantes da água, magias defensivas da terra e magias do ar (que permitem formar barreiras de ar, voar ou respirar sob a água). Existe ainda o elementalismo espiritual, que afeta a mente e alma. Confira mais detalhes no capítulo “Magos e Magia”."
//     },
//     {
//       id: 28,
//       name: "Magia Negra",
//       cost: "2 pontos",
//       description: "Você é um conjurador de magia negra, invocando o poder da necromancia e demonologia. Quase todas as suas magias estão ligadas a morte, doença, veneno, deterioração, estagnação. Confira mais detalhes no capítulo “Magos e Magia”."
//     },
//     {
//       id: 29,
//       name: "Magia Irresistível",
//       cost: "1 a 3 pontos",
//       description: "É mais difícil resistir às suas vantagens e magias. O redutor sofrido pela vítima depende do custo:\n1 ponto: a vítima sofre –1 em seu teste de Resistência.\n2 pontos: a vítima sofre –2 em seu teste de Resistência.\n3 pontos: a vítima sofre –3 em seu teste de Resistência"
//     },
//     {
//       id: 30,
//       name: "Membros Elásticos",
//       cost: "1 ponto",
//       description: "Seus braços, pernas ou tentáculos podem ir muito mais longe que o normal. Você pode esticá-los, ou então violar o espaço-tempo e abrir um “mini portal dimensional” para levar seus braços a longas distâncias (o mesmo alcance de sua Força, se ela fosse Poder de Fogo). Você não precisa de Poder de Fogo para atacar a essa distância; pode atacar com socos e chutes.\nUm ataque realizado com Membros Elásticos é sempre considerado um ataque corpo-a-corpo, baseado em Força, não um ataque à distância."
//     },
//     {
//       id: 31,
//       name: "Membros Extra",
//       cost: "1 ponto cada",
//       description: "Você tem numerosos braços, pernas, cauda ou tentáculos. Você pode comprar esta vantagem várias vezes — por exemplo, gastando 3 pontos para ter três braços, tentáculos ou caudas extras.\nAlém de utilidades óbvias, como segurar vários objetos, cada Membro Extra permite fazer um ataque adicional por rodada. Esse ataque tem FA=F+1d ou FA=PdF+1d, sem somar Habilidade. Se quiser aumentar a FA através de vantagens ou manobras, deve pagar o custo para cada ataque.\nSe não quiser fazer um ataque extra, o personagem pode usar seu Membro Extra para bloquear (FD+1 até a próxima rodada). Os bônus são cumulativos: bloquear com dois Membros Extras oferece FD+2.\nQualquer personagem com Membros Extras sofre os mesmos efeitos de Monstruoso e Modelo Especial (mas não recebe pontos por estas desvantagens)."
//     },
//     {
//       id: 32,
//       name: "Memória Expandida",
//       cost: "2 pontos",
//       description: "Você tem uma memória infalível. Pode lembrar tudo que seja ligado aos cinco sentidos, e jamais esquece nada.\nSua Memória Expandida pode gravar novos conhecimentos: quando vê outra pessoa usar uma perícia, você pode aprendê-la e usá-la como se a tivesse. Você não pode manter mais de uma perícia ao mesmo tempo — para aprender uma nova perícia, primeiro é preciso “apagar” a anterior.\nPersonagens que tenham esta vantagem não precisam fazer testes para aprender novas magias."
//     },
//     {
//       id: 33,
//       name: "Mentor",
//       cost: "1 ponto",
//       description: "Você ainda tem contato com a pessoa que ensinou você a usar seus poderes, habilidades de combate e magias.\nPode ser um velho sensei, um guerreiro veterano, um clérigo que ensinou você a louvar uma divindade, um mago que aceitou você como aprendiz, e assim por diante. Ele é muito sábio e sabe responder a praticamente qualquer pergunta. Mesmo que o mentor esteja morto ou distante, em momentos de dificuldade você pode se lembrar de algum ensinamento importante ou receber uma mensagem telepática.\nPara conjuradores, esta vantagem oferece três magias extras, além das magias iniciais (cumulativas com Clericato e Patrono). Elas são escolhidas pelo mestre."
//     },
//     {
//       id: 34,
//       name: "Paladino",
//       cost: "1 ponto",
//       description: "Você é um guerreiro sagrado. Um soldado que recebeu poder dos deuses, guiado por nobres ideais de honra e justiça. De certa forma, Paladinos são muito parecidos com clérigos. A diferença é que personagens com Clericato muitas vezes podem ser cultistas a serviço do mal, enquanto Paladinos sempre lutam pelo bem. Não existem Paladinos malignos.\nPaladinos recebem um bônus de +1 em testes de Resistência. Isso não aumenta seus Pontos de Vida ou Magia além do normal para sua Resistência verdadeira.\nUm Paladino pode lançar as magias Cura Mágica e Detectar o Mal, pelo custo normal em Pontos de Magia, mesmo sem ter nenhuma vantagem mágica.\nSozinha, esta vantagem não permite lançar outras magias. No entanto, usuários de Magia Branca só conseguem lançar certas magias divinas quando também são Paladinos.\nTodos os Paladinos seguem os Códigos de Honra dos Heróis e Honestidade (sem ganhar pontos). Um Paladino jamais pode adquirir Magia Negra."
//     },
//     {
//       id: 35,
//       name: "Paralisia",
//       cost: "1 ponto",
//       description: "Você tem o poder de paralisar temporariamente o alvo. Para isso deve gastar 2 Pontos de Magia ou mais (veja adiante) e fazer um ataque normal.\nCaso sua Força de Ataque vença a Força de Defesa do alvo, o ataque não provoca nenhum dano real, mas a vítima deve ter sucesso em um teste de Resistência. Se falhar ficará paralisada e indefesa, incapaz de se mover, esquivar, falar ou usar magia.\nA duração da paralisia depende de quantos Pontos de Magia você gastou: dois turnos para 2 PMs (o mínimo permitido), e mais um turno para cada PM extra (por exemplo, 6 turnos se você gastou 6 PMs). Se a vítima é bem-sucedida em seu teste de Resistência, os PMs são perdidos.\nQualquer dano causado à vítima provoca o cancelamento da paralisia."
//     },
//     {
//       id: 36,
//       name: "Parceiro",
//       cost: "1 ponto cada",
//       description: "Esta vantagem deve ser usada em conjunto com um Aliado (sem um Aliado, você não pode ter esta vantagem). Além de uma pessoa em quem você pode confiar, um Parceiro é um colega de batalha que age em sincronia perfeita com seus movimentos. Quando você e seu Parceiro se unem para atacar, agem como se fossem um só lutador!\nQuando lutam em dupla vocês agem apenas uma vez por turno, mas podem combinar as características mais altas de cada um. Também podem compartilhar vantagens como Ataque Especial, Ataque Múltiplo e outras.\nExemplo: um lutador com F1, H4, R3, A1, PdF0 e Ataque Especial luta com seu Parceiro que tem F3, H2, R1, A2, PdF 2, Arena e Torcida. Pegamos as características mais altas, reunimos a vantagens e temos uma dupla com F3, H4, R3, A2, PdF 2, Ataque Especial, Arena e Torcida. Quando vocês recebem dano, esse dano será dividido igualmente entre os dois personagens (arredonde para cima).\nSeu Aliado também deve possuir esta vantagem.\nAtenção: lutar com um Parceiro é o único caso em que você pode derrotar um oponente em desvantagem numérica e ainda receber Pontos de Experiência (veja em “Experiência”)."
//     },
//     {
//       id: 37,
//       name: "Patrono",
//       cost: "1 ponto",
//       description: "Uma grande organização, empresa, governo ou NPC poderoso ajuda você. Dentro de certos limites, um Patrono pode fornecer transporte, equipamento e informação para um empregado. Um Patrono também pode ajudar e enviar reforços quando você mais precisar.\nVocê pode, a qualquer momento, gastar 1 Ponto de Magia para invocar seu Patrono. A forma exata como essa ajuda virá depende do mestre — desde uma nova arma secreta ou manobra não testada, a um veículo de fuga que surge na hora certa. Contudo, em alguns momentos ou situações, talvez nenhuma ajuda seja possível.\nTer um Patrono também significa que você precisa ser leal e seguir ordens. Muitas vezes vai precisar cumprir missões para seu Patrono.\nPara conjuradores, esta vantagem fornece três magias extras (cumulativo com Clericato e Mentor). Elas são escolhidas pelo mestre."
//     },
//     {
//       id: 38,
//       name: "Poder Oculto",
//       cost: "1 ponto",
//       description: "Você é mais poderoso do que parece. Em situações de combate e outras emergências (a critério do mestre), pode manifestar características superiores.\nVocê pode gastar 1 PM para aumentar uma característica em +1. Você pode aumentar qualquer número de características, até um máximo de +5. Como alternativa, seu Poder Oculto pode afetar apenas uma característica, escolhida durante a criação do personagem. Neste caso, cada PM garante um bônus de +2, até um máximo de +10!\nO Poder Oculto não pode ser ativado ou mantido em situações que não envolvem perigo. Isso significa que você não pode ativá-lo antes de uma luta. Além disso, ativar o Poder Oculto leva tempo: 1 turno para cada aumento de +1. Por exemplo, se você quer F+2 e H+3, vai gastar 5 PMs e 5 turnos. Em combate, apenas um inimigo muito honrado, confiante ou estúpido permitirá que você tenha todo esse tempo.\nVocê não pode fazer nada enquanto se concentra. Se receber qualquer ataque, será considerado indefeso (apenas sua Armadura conta em sua Força de Defesa). E se sofrer qualquer dano, sua concentração é perdida.\nUma vez ativado, o Poder Oculto dura até o fim do combate. Se a qualquer momento você ficar com 0 PVs, qualquer aumento de poder é perdido."
//     },
//     {
//       id: 39,
//       name: "Pontos de Magia Extras",
//       cost: "1 ponto cada",
//       description: "Você tem Pontos de Magia adicionais, além daqueles já oferecidos por sua Resistência. Esta vantagem é especialmente recomendada para conjuradores e outros personagens que usam PMs para ativar suas magias ou habilidades especiais.\nCada vez que compra esta vantagem, você recebe PMs equivalentes a R+2. Então, se você tem R4 (20 PMs) e paga um ponto por PMs Extras, agora terá Pontos de Magia equivalentes a R6 (ou seja, 30 PMs).\nEsta vantagem não afeta sua Resistência verdadeira e nem seus PVs, apenas seus PMs. Então, no exemplo anterior, você continuaria com 20 PVs e R4 para testes contra magias, velocidade máxima e outras situações. Você pode comprar a vantagem várias vezes para ter novos aumentos de R+2 em seus PMs."
//     },
//     {
//       id: 40,
//       name: "Pontos de Vida Extras",
//       cost: "1 ponto cada",
//       description: "Você tem Pontos de Vida adicionais, além daqueles já oferecidos por sua Resistência. Cada vez que compra esta vantagem, você recebe PVs equivalentes a R+2. Então, se você tem R2 (10 PVs) e paga um ponto por PVs Extras, agora terá Pontos de Vida equivalentes a R4 (ou seja, 20 PVs).\nEsta vantagem não afeta sua Resistência verdadeira e nem seus PMs, apenas seus PVs. Então, no exemplo anterior, você continuaria com 10 PMs e R2 para efeito de testes contra magias, velocidade máxima e outras situações. Você pode comprar a vantagem várias vezes para ter novos aumentos de R+2 em seus PVs."
//     },
//     {
//       id: 41,
//       name: "Possessão",
//       cost: "2 pontos",
//       description: "Você pode possuir o corpo de outro ser inteligente. Para isso a vítima deve estar desacordada — seja dormindo, ou inconsciente após uma batalha.\nEnquanto está usando aquele corpo você possui todas as características, Pontos de Vida, vantagens e desvantagens físicas do hospedeiro. Pontos de Magia, Perícias, conhecimentos e valores morais (como Códigos de Honra) não são afetados; você ainda possui os seus, não os da vítima.\nUsar este poder consome Pontos de Magia em quantidade igual à Resistência da vítima. Se a vítima tiver algum bônus ou penalidade contra magia, esse ajuste se aplica ao custo da possessão em PMs (por exemplo, possuir uma vítima com R3 e Resistência a Magia custa 5 PMs). Você paga esse custo uma vez no momento da possessão, e novamente a cada hora.\nVocê não pode possuir uma criatura que tenha Resistência superior à sua Habilidade."
//     },
//     {
//       id: 42,
//       name: "Reflexão",
//       cost: "2 pontos",
//       description: "Como Deflexão, mas melhor. Permite não apenas bloquear completamente um ataque feito com Poder de Fogo, mas também devolvê-lo ao atacante.\nVocê pode gastar 2 PMs e duplicar sua Habilidade para calcular a Força de Defesa contra um único ataque. Se conseguir deter o ataque completamente (sua FD é igual ou superior à FA do atacante), além de não sofrer nenhum dano, você devolve o ataque para o atacante com a mesma FA original.\nA Reflexão é considerada uma esquiva — ou seja, você só pode usar um número máximo de vezes por rodada igual à sua Habilidade."
//     },
//     {
//       id: 43,
//       name: "Regeneração",
//       cost: "3 pontos",
//       description: "Você é muito difícil de matar. Portador de um poderoso fator de cura, seu corpo pode curar-se de ferimentos muito rapidamente. Você recupera 1 Ponto de Vida por turno.\nPara você, Testes de Morte têm resultados diferentes:\n1) Muito Fraco: você ainda recupera 1 PV por turno normalmente. No próximo turno, se não receber novos ataques (veja em “Castigo Contínuo”), terá recuperado 1 PV e poderá voltar a agir.\n2-3) Inconsciente: você recupera 1 PV e retorna à consciência em um minuto, ou 10 rodadas, ou imediatamente com um teste de Medicina +2.\n4-5) Quase Morto: você recupera 1 PV em 8 horas.\n6) Morto: você retorna da morte em alguns dias, semanas ou meses, como se fosse um Imortal. Você não recebe Pontos de Experiência em uma aventura durante a qual tenha “morrido”.\nAo contrário de um Imortal verdadeiro, um personagem com Regeneração pode morrer definitivamente se sofrer um colapso total. Isso acontece se ele receber dano igual ou superior a dez vezes seus Pontos de Vida atuais, na mesma rodada. Por exemplo, se você está com 15 PVs, vai sofrer colapso total se sofrer 150 pontos de dano na mesma rodada (após sua Força de Defesa absorver parte do dano). O dano mínimo para colapso total é igual a 10 vezes sua Resistência.\nRegeneração não afeta Pontos de Magia."
//     },
//     {
//       id: 44,
//       name: "Resistência à Magia",
//       cost: "",
//       description: "Esta vantagem torna você muito resistente aos efeitos de qualquer vantagem ou magia — exceto dano. Sempre que uma vantagem ou magia exige um teste de R para ignorar seu efeito (como Cegueira, Paralisia, Silêncio e outras), você recebe +2 no teste. Um resultado 6 ainda é uma falha.\nResistência à Magia não funciona contra veneno, doenças ou ataques especiais de certas criaturas (como o sopro de um dragão ou o olhar petrificante de uma medusa); funciona apenas contra vantagens e magias.\nCuras mágicas e outras magias benéficas ainda funcionam de forma normal com você. Anões e algumas outras raças possuem naturalmente esta vantagem.\nEsta vantagem não tem efeito contra dano, a menos que esse dano possa ser evitado (ou reduzido) com um teste de Resistência. Contra dano mágico, veja Armadura Extra."
//     },
//     {
//       id: 45,
//       name: "Riqueza",
//       cost: "2 pontos",
//       description: "Como Patrono, mas melhor, porque você não precisa seguir ordens de ninguém. Dinheiro não é problema para você: pode pagar viagens, contratar equipes e comprar qualquer equipamento normal, não-mágico.\nVocê pode, a qualquer momento, gastar 1 Ponto de Magia para invocar sua Riqueza. A forma exata como seu dinheiro vai ajudar depende do mestre — desde uma chance para subornar um inimigo, até contratar mercenários que surgem em um piscar de olhos. Contudo, em alguns momentos ou situações, nem todo o dinheiro do mundo vai ajudar.\nRiqueza nunca pode ser usada para comprar nada que represente uma vantagem, ou livrar-se de uma desvantagem."
//     },
//     {
//       id: 46,
//       name: "Sentidos Especiais",
//       cost: "1-2 pontos",
//       description: "Você tem sentidos muito mais aguçados que os humanos normais. Por 1 ponto você pode escolher, na lista abaixo, três Sentidos Especiais. Por 2 pontos, você pode ter todos:\nAudição Aguçada: você pode ouvir sons muito baixos ou muito distantes.\nFaro Aguçado: você tem sensores químicos capazes de farejar tão bem quanto um perdigueiro.\nInfravisão: você pode ver o calor das coisas. Pode encontrar facilmente criaturas de sangue quente (seres humanos e muitos animais). Você também pode enxergar no escuro, mas apenas quando não há fontes de calor intenso por perto (chamas, grandes motores, disparos de armas de fogo...).\nRadar: você pode ver na escuridão total e também perceber tudo à sua volta, formas e objetos (mas não cores), mesmo de costas ou olhos vendados.\nVer o Invisível: você pode ver coisas invisíveis. A vantagem e a magia Invisibilidade são inúteis contra você.\nAtenção: Radar, Infravisão e outros Sentidos Especiais não servem para ver coisas invisíveis.\nVisão Aguçada: você enxerga mais longe.\nVisão de Raio X: você pode ver através de portas e paredes, exceto aquelas feitas de chumbo, ou outros materiais muito densos ou mágicos.\nAlgumas criaturas têm um ou mais Sentidos Especiais sem possuir necessariamente a vantagem, nem gastar pontos. Por exemplo, um anão tem Infravisão, mas não tem quaisquer outros dois sentidos como se tivesse gasto 1 ponto na vantagem."
//     },
//     {
//       id: 47,
//       name: "Separação",
//       cost: "2 pontos",
//       description: "Em situações de combate você pode gastar PMs e invocar cópias exatas de si mesmo. Essas cópias compartilham todas as suas características, vantagens e desvantagens.\nCriar uma cópia gasta 4 PMs. Suas cópias (mas não você) sofrem penalidade de –1 em suas características (afetando também seus PVs e PMs). Este redutor não é cumulativo: duas cópias terão, ambas, –1 em características. O número máximo de cópias que você pode criar é igual à sua Resistência.\nUma cópia tem a mesma quantidade de PVs e PMs que você tem no momento (depois de gastar PMs para criar as cópias), mas NÃO pode criar novas cópias.\nEm aparência, as cópias são exatamente iguais ao original: não há como saber quem é quem (caso seja um jovem ninja atrapalhado, talvez nem VOCÊ saiba quem é quem). Se qualquer de vocês chegar Perto da Morte, a 0 PVs ou então morrer, todas as cópias desaparecem."
//     },
//     {
//       id: 48,
//       name: "Telepatia",
//       cost: "1 ponto",
//       description: "Esta vantagem tem as seguintes utilizações:\n• Ler pensamentos. Você recebe H+2 em perícias para obter informações de outra pessoa (Interrogatório, Intimidação, Lábia).\n• Analisar poder de combate. Você descobre todas as características, vantagens e desvantagens de uma criatura.\n• Revelar tesouro. Você descobre se uma criatura carrega itens valiosos.\n• Prever movimentos. Você adivinha os próximos passos do adversário, recebendo +1 em sua iniciativa e esquivas contra ele até o fim do combate.\nCada utilização de Telepatia gasta 2 PMs. Usar Telepatia não gasta nenhuma ação ou movimento, mas você não pode fazê-lo mais de uma vez por turno. Você só pode tentar ler a mente de alguém que consiga ver.\nTelepatia só funciona com criaturas vivas, e não afeta um alvo que tenha Resistência superior à sua Habilidade."
//     },
//     {
//       id: 49,
//       name: "Teleporte",
//       cost: "2 pontos",
//       description: "Você é capaz de desaparecer de um lugar e reaparecer em outro. Teleportar-se para lugares que estejam à vista não exige nenhum teste. Para lugares que não possa ver (do outro lado de uma parede, por exemplo), faça um teste de Habilidade: se falhar, nada acontece; se tiver sucesso, você desaparece de onde estava e reaparece onde quiser. Você não pode levar consigo outras pessoas ou cargas (apenas seus pertences pessoais).\nA distância máxima que você pode atingir é igual a dez vezes sua Habilidade, em metros. Assim, se você tem Habilidade 2, pode se teleportar até 20 metros. Teleporte concede +2 em esquivas (não cumulativo com Aceleração).\nTeleportar-se gasta 1 PM e é o mesmo que mover-se. Você pode teleportar-se e agir na mesma rodada. Se também tiver Aceleração, você pode teleportar-se duas vezes na mesma rodada."
//     },
//     {
//       id: 50,
//       name: "Tiro Carregável",
//       cost: "1 ponto",
//       description: "Você tem a capacidade de concentrar energia para um tiro muito mais poderoso — seja acumulando carga em sua arma de raios, concentrando mais energia ki nas mãos, ou fazendo pontaria com sua adaga ou arco.\nUsar o Tiro Carregável exige 2 PMs e um turno inteiro se concentrando. Você é considerado indefeso durante esse tempo e, se sofrer dano, perde a concentração (assim como os PMs). No turno seguinte faça seu ataque normal, mas com PdF dobrado.\nExemplo: um personagem com H2, PdF4 emprega um turno concentrando energia e, no turno seguinte, faz seu disparo. Sua Força de Ataque será 2+(4x2), total FA 10."
//     },
//     {
//       id: 51,
//       name: "Tiro Múltiplo",
//       cost: "2 pontos",
//       description: "Você pode fazer mais ataques com PdF em uma única rodada. Cada disparo (incluindo o primeiro) consome 1 PM. Assim, atacar quatro vezes na mesma rodada consome 4 PMs, por exemplo. O número máximo de ataques que você pode fazer por rodada é igual à sua Habilidade.\nA Força de Ataque de cada golpe conta separadamente para vencer a Força de Defesa do inimigo. Você não pode somar a FA de seus vários ataques."
//     },
//     {
//       id: 52,
//       name: "Toque de Energia",
//       cost: "1 ponto cada",
//       description: "Você pode transmitir pela própria pele uma poderosa carga de energia, capaz de gerar uma Força de Ataque igual à Armadura + 1d para cada PM gasto. Por exemplo, um personagem que gasta 3 Pontos de Magia na manobra ataca com FA=A+3d. Habilidade não é incluída.\nA carga atinge quaisquer criaturas que estejam à distância de combate corpo-a-corpo, mesmo que não estejam tocando diretamente o personagem.\nO tipo de energia é escolhido pelo jogador quando compra a vantagem, e não pode ser trocado (mas você pode comprar a vantagem várias vezes, uma para cada energia). Para mais detalhes, veja “Tipos de Dano”.\nUsar o Toque de Energia é o mesmo que fazer um ataque. O número máximo de PMs que você pode gastar em cada utilização é igual à sua Armadura."
//     },
//     {
//       id: 53,
//       name: "Torcida",
//       cost: "1 ponto",
//       description: "Você tem fãs, e eles inspiram suas lutas! Um grupo de admiradores acompanha você e torce por seu sucesso. Às vezes esse fã-clube pode ser um verdadeiro estorvo, seguindo você por toda a parte, tirando seu sossego e impedindo-o de agir furtivamente. Mas, em combates, seus torcedores são preciosos.\nEntre outras coisas, o maior benefício de uma Torcida é que ela aumenta seu moral. Durante uma luta, quando uma torcida está vibrando por você e vaiando o oponente, você ganha H+1 e impõe H–1 ao oponente (se ele falhar em um teste de Resistência).\nVocê recebe esses benefícios sempre que houver uma torcida — não necessariamente a sua torcida, mas qualquer público que seja a seu favor (ou contra o oponente, tanto faz). Lembre-se que nem sempre haverá espectadores presentes!"
//     },
//     {
//       id: 54,
//       name: "Voo",
//       cost: "2 pontos",
//       description: "Você pode voar. Quanto maior sua Habilidade, melhor você voa: com H1 pode apenas levitar um pouco acima do chão, e mover-se a uma velocidade de 10m/s; H2 permite levitar mais alto e mover-se a até 20m/s; com H3 ou mais você já pode realmente voar, a até 40m/s. Dobre essa velocidade para cada ponto extra de Habilidade; 80m/s para H4, 160m/s para H5...\nVocê pode tentar atingir altura ou velocidade acima de seu limite, mas o mestre vai exigir um teste de Habilidade (com penalidade de –1 para cada ponto de H além da sua); se falhar você cai e sofre 1d de dano para cada 10m de altura."
//     },
//     {
//       id: 55,
//       name: "Xamã",
//       cost: "1 ponto",
//       description: "Você tem uma forte ligação com o mundo dos espíritos. Pode interagir com fantasmas e outras criaturas incorpóreas, podendo atacá-las (e ser atacado) livremente. Você também pode Ver o Invisível como se tivesse esse Sentido Especial."
//     }
//   ]
// }

// const createDesvantagens = async () => {
//   const list = await desvantagens.desvantagens
//     .map((data: any) => (
//       {
//         id: data.id.toString(),
//         name: data.name,
//         cost: data.cost,
//         description: data.description,
//       }
//     ));
//   const newDesvantagens = {
//     desvantagens: list,
//   }
//   await writeFile(FilePath.DESVANTAGENS, newDesvantagens);
// };

// const createVantagens = async () => { };
