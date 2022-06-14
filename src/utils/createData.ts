import { writeFile } from "./readWriteFile";
import { IDesvantagem } from "../interfaces/data";
import FilePath from "../enums/filesPath";

const desvantagens: IDesvantagem = {
  desvantagens: [
    {
      id: 1,
      name: "Ambiente Especial",
      cost: "-1 ponto",
      description: "Você é dependente de seu ambiente de origem, seja a água, clima ártico ou outro terreno que não existe em abundância no local da campanha.\nVocê pode ficar afastado de seu ambiente durante um número de dias igual à sua Resistência; quando esse prazo se esgota, começa a perder 1 ponto de Força e 1 ponto de Resistência por dia (seus Pontos de Vida e Magia caem na mesma proporção). Você ficará fraco como uma pessoa comum (a maioria das pessoas comuns tem F0 e R0), mas não morrerá.\nPara restaurar sua Força e Resistência perdidas, você deve permanecer pelo menos 24 horas em seu ambiente natural. Ou, em caso de emergência, você também pode gastar 1 Ponto de Experiência para uma recuperação instantânea em seu ambiente.",
    },
    {
      id: 2,
      name: "Assombrado",
      cost: "-2 pontos",
      description: "Existe algum tipo de assombração, fantasma ou aparição dedicada a atormentar você. Pode ser alguém que você matou, ou alguém afirmando ser a única pessoa que pode ajudá-lo. Ninguém mais pode ver esse fantasma além de você. Ele só deixa você em paz quando está satisfeito ou cansado.\nSempre que você entra em combate, o mestre joga um dado: um resultado 4, 5 ou 6 significa que o fantasma apareceu para assombrá-lo, e você sofre uma penalidade de –1 em todas as suas características até que ele vá embora. Um conjurador Assombrado gasta duas vezes mais PMs para lançar magias.\nEsta desvantagem também pode significar alguma doença ou, para construtos, algum tipo de mal-funcionamento. A critério do mestre, o “fantasma” também pode aparecer para incomodá-lo em outras ocasiões.",
    },
    {
      id: 3,
      name: "Bateria",
      cost: "-1 ponto",
      description: "Você tem uma reserva de energia para permanecer ativo: 2 horas por ponto de Resistência. Quando o limite se esgota, começa a perder 1 ponto de Força e 1 ponto de Resistência por hora (seus Pontos de Vida e Magia caem na mesma proporção). Caso sua Força e Resistência cheguem ambas a 0, você “desliga” durante 1d horas, até que sua bateria esteja recarregada. A recarga só é possível com repouso absoluto.",
    },
    {
      id: 4,
      name: "Código de Honra",
      cost: "-1 ponto cada",
      description: "Você segue um código rígido que o impede de fazer (ou deixar de fazer) alguma coisa.\n1ª Lei de Asimov: jamais causar mal a um ser humano ou, por omissão, permitir que um ser humano sofra qualquer mal.\n2ª Lei de Asimov: sempre obedecer ordens de seres humanos, exceto quando essas ordens violam qualquer outro Código que você possua.\nCódigo de Arena: nunca lutar em certos tipos de terreno; escolha dois terrenos (veja a vantagem Arena).\nCódigo do Caçador: nunca matar (combater ou capturar, quando necessário, mas nunca matar) filhotes ou fêmeas grávidas de qualquer espécie. Nunca abandonar uma caça abatida. Sempre escolher como oponente a criatura de aparência mais perigosa que esteja à vista.\nCódigo do Cavalheiro: nunca atacar uma mulher (ou fêmea de qualquer espécie), nem mesmo quando atacado, e nem permitir que seus companheiros o façam. Sempre atender um pedido de ajuda de uma mulher.\nCódigo do Combate: nunca atacar um oponente indefeso, ou em desvantagem numérica.\nCódigo da Derrota: nunca se permitir ser capturado com vida e nunca aceitar a derrota. Caso seja reduzido a 0 Pontos de Vida (apenas em situações de combate honrado, um contra um) ou capturado (em qualquer situação), você deve tirar a própria vida. (Nem que seja para ressuscitar mais tarde...)\nCódigo da Gratidão: quando alguém salva sua vida (ou de um ente querido seu), você fica a serviço dessa pessoa, até conseguir devolver o favor (salvar sua vida).\nCódigo dos Heróis: sempre cumprir sua palavra, sempre proteger qualquer pessoa ou criatura mais fraca que você, jamais recusar um pedido de ajuda.\nCódigo da Honestidade: nunca roubar, trapacear, mentir ou desobedecer as leis locais, nem permitir que seus companheiros o façam.\nCódigo da Redenção: jamais atacar sem provocação, sempre aceitar um pedido de rendição, sempre poupar oponentes reduzidos a 0 Pontos de Vida.\nSempre que você viola um Código, recebe –1 Ponto de Experiência no final da aventura. Cada violação vale –1 PE.\nVocê pode ter até quatro Códigos de Honra, no valor total de –4 pontos (e será alguém muuuito honrado e bonzinho...).",
    },
    {
      id: 5,
      name: "Deficiência Física",
      cost: "0 a -2 pontos",
      description: "• Audição Ruim (0 pontos): você sofre um redutor de H–1 para notar inimigos escondidos. Esta condição é cancelada se você adquirir Audição Aguçada, restaurando sua audição normal (mas neste caso sem oferecer os benefícios normais da vantagem ou magia).\n• Cego (–2 pontos): um cego sofre um redutor de H–1 para fazer ataques corporais, e H–3 para ataques à distância e esquivas (personagens com Audição Aguçada ou Radar sofrem apenas H–1 para ataques à distância e esquivas).\nUm cego também sofre um redutor de H–1 para notar inimigos escondidos, utilizando apenas seus outros sentidos (em algumas situações, caso você não consiga ouvir ou cheirar, o teste nem mesmo será permitido).\nSentidos Especiais como Infravisão, Ver o Invisível, Visão Aguçada e Visão de Raio X são anulados pela cegueira. Contudo, para certas criaturas que não dependem da visão\n— como morcegos, toupeiras ou personagens com Radar\n— esta será uma desvantagem de –1 ponto.\n• Mudo (–1 ponto): um personagem mudo tem dificuldade para se comunicar, exceto com personagens ligados a vantagens ou desvantagens (Aliado, Mentor, Patrono, Protegido Indefeso...). Testes de perícias que envolvam ações sociais (como Arte, Manipulação, Investigação, Crime e outras, quando exigem interação com outras pessoas) serão sempre considerados difíceis.\nUm conjurador mudo não pode lançar magias, exceto através de A Mágica Silenciosa de Talude.\n• Sem Faro (0 pontos): você não pode sentir o cheiro e o gosto de nada. Em algumas situações esta condição pode ser vantajosa (o gás pestilento de um trog não terá efeito sobre você), mas também pode colocar você em perigo (você não pode, por exemplo, sentir o cheiro de algo queimando).\nPara você, todo tipo de comida tem o mesmo gosto (nenhum). Exceto pela aparência, você não pode dizer se um alimento está estragado. Por outro lado, você raramente passa fome, pois consegue comer coisas capazes de revirar o estômago de um avestruz.\nFaro Aguçado é cancelado por esta desvantagem.\n• Surdo (–1 ponto): uma pessoa surda sofre um redutor de H–1 em testes para notar inimigos escondidos (em algumas situações, caso você não consiga ver, o teste nem mesmo será permitido).\nVocê pode ler os lábios de alguém se tiver as perícias Idiomas, Investigação, ou a especialização Leitura de Lábios (ou ainda a magia de mesmo nome).\nAudição Aguçada e Radar são cancelados pela surdez.\n• Visão Ruim (0 pontos): você é caolho, míope ou enxerga mal por alguma outra razão, sofrendo um redutor de H–1 para ataques à distância e esquivas. Também sofre um redutor de H–1 em testes para notar inimigos escondidos.\nEsta condição é cancelada se adquirir Visão Aguçada, restaurando sua visão normal (mas neste caso sem oferecer os benefícios normais da vantagem ou magia).",
    },
    {
      id: 6,
      name: "Dependência",
      cost: "-2 pontos",
      description: "Você depende de alguma coisa rara, proibida ou desumana para continuar existindo — sendo quase sempre alguma coisa que envolve a morte de outros seres humanos ou outro tipo de crime grave.\nEssa Dependência pode ser agradável ou não, mas você deve satisfazê-la todos os dias. Se não o fizer, vai sofrer uma penalidade cumulativa de –1 em Resistência (o que também vai reduzir seus PVs e PMs) por dia. Caso sua Resistência chegue a 0, você terá apenas 1 PV e mais um dia de vida: se não alimentar sua Dependência, morrerá. Quando satisfaz a Dependência, sua Resistência retorna imediatamente ao normal.\nEsta desvantagem é mais apropriada para vilões NPCs, não personagens jogadores.",
    },
    {
      id: 7,
      name: "Devoção",
      cost: "-1 ponto",
      description: "Você é devotado a um dever sagrado, uma grande missão ou uma profunda obsessão. Sua vida é dedicada a cumprir esse dever, e nada mais importa.\nUm personagem com uma Devoção raramente se desvia de seu grande objetivo — e, quando o faz, não consegue se empenhar na tarefa: sempre que está envolvido em qualquer coisa que não tenha ligação direta com sua Devoção, sofre um redutor de –1 em todas as suas características.\nVocê não pode possuir uma Devoção que seria usada em todas as situações de combate, como “derrotar meus oponentes” ou “lutar para provar minha força”. Concluir uma aventura também não pode ser considerado uma Devoção.",
    },
    {
      id: 8,
      name: "Fetiche",
      cost: "-1 ponto",
      description: "Você não pode fazer mágica sem um objeto especial que usa para canalizar seu poder. Pode ser uma varinha ou cajado para os magos, um amuleto sagrado para clérigos e paladinos, um instrumento musical para bardos, ou qualquer outro objeto. Se perder, deixar cair ou ficar sem esse objeto por algum motivo, você não vai poder usar mágica até recuperá-lo ou conseguir outro igual.\nSempre que você sofre dano, faça um teste de Habilidade: uma falha quer dizer que você deixa cair seu objeto mágico. Recuperá-lo demora um turno.\nO fetiche não é um objeto raro: se perdê-lo você pode encontrar, comprar ou até improvisar outro facilmente. Usando um fetiche quebrado ou improvisado (por exemplo, um galho de árvore para substituir uma varinha), suas magias consomem duas vezes mais PMs.",
    },
    {
      id: 9,
      name: "Fúria",
      cost: "-1 ponto",
      description: "Sempre que você sofre dano ou fica irritado por qualquer motivo (a critério do mestre), deve fazer um teste de Resistência. Se falhar, entra em um tipo de frenesi de batalha e ataca imediatamente o alvo de sua irritação.\nDurante a Fúria você não pensa claramente: jamais pode se esquivar, usar magia, ou qualquer vantagem que use PMs.\nA Fúria só termina quando você ou seu oponente são derrotados, ou caso o oponente consiga fugir. Quando tudo acaba, você fica imediatamente esgotado, sofrendo uma penalidade de –1 em todas as características durante uma hora. Se entrar em Fúria outra vez nesse período, as penalidades são cumulativas.",
    },
    {
      id: 10,
      name: "Inculto",
      cost: "-1 ponto",
      description: "Alguns aventureiros podem ter grande poder de combate, mas são pouco espertos. Outros não são exatamente incultos — apenas nativos de outra cultura, e não conhecem bem a linguagem ou costumes locais.\nUm personagem com esta desvantagem não sabe ler, ou tem muita dificuldade em fazê-lo, e também não consegue se comunicar com outras pessoas. Se você tem um Mentor, Patrono, Parceiro, Aliado, Protegido Indefeso ou outro personagem representado por uma vantagem ou desvantagem, ele será capaz de entender você.",
    },
    {
      id: 11,
      name: "Insano",
      cost: "0 a -3 pontos",
      description: "Você é louco. Após dois minutos de conversa, ninguém acredita ou confia em você.\nHá muitas formas de insanidade. Algumas são bem suaves, não pagam pontos por desvantagens (valem 0 pontos). Elas estão aqui porque podem ser adquiridas em campanha, como efeito de alguma magia, maldição ou ataque especial de criaturas.\nTodas as formas de insanidade podem ser vencidas temporariamente com um teste de R–3 (ou um teste normal, caso apareça na descrição de cada insanidade), mas o mestre só deve autorizar esses testes em situações extremas.\nLembre-se também que, em todas estas variantes, o efeito normal de Insano (ninguém confia em você) continua valendo; mesmo que seu problema não seja evidente, você ainda fala e se comporta de forma estranha e suspeita. Apenas personagens representados por uma vantagem ou desvantagem (Mentor, Patrono, Aliado, Protegido Indefeso...) acreditam em você. Às vezes.\nAlgumas formas de Insano são idênticas a certas desvantagens já existentes, como Fúria, Devoção, Assombrado e outras. Novamente, isso acontece porque tais problemas mentais podem ser adquiridos em campanha.\n• Cleptomaníaco (–1 ponto): você rouba coisas de que não precisa, não por seu valor, apenas por serem interessantes. Sempre que surgir a chance de roubar algo, deve ser bem-sucedido em um teste de R para evitar. Um cleptomaníaco nunca devolve para os donos o produto de seus roubos, e lutará para evitar que isso aconteça.\n• Compulsivo (–1 ponto): existe alguma coisa que você precisa fazer constantemente, pelo menos uma vez por hora; tomar banho, lavar roupa, comer lasanha, tocar harpa, roer as unhas, ler quadrinhos... alguma coisa que consome pelo menos 1d minutos de cada vez. Se ficar mais de uma hora sem fazer essa coisa, deve fazer um teste de R por turno. Se falhar, você vai deixar tudo que estiver fazendo (inclusive lutar!) para satisfazer sua compulsão. Você não pode ter como compulsão alguma coisa que possa ser feita enquanto se luta!\n• Demente (–1 ponto): sua inteligência e capacidade de aprendizado são reduzidas. Em regras, é o mesmo que ser Inculto: você não sabe ler ou escrever, nem se comunicar com outras pessoas.\n• Depressivo (–2 pontos): você pode perder subitamente a motivação de viver, algo perigoso quando acontece em combate! Em regras, é o mesmo que Assombrado.\n• Dupla Personalidade (0 pontos): é parecido com Forma Alternativa: você tem um outro personagem feito com a mesma quantidade de pontos, mas com outras características, vantagens, desvantagens, Perícias e magias conhecidas. Sim, esta Dupla Personalidade é mesmo meio exagerada — porque sua própria aparência e poderes também mudam!\nNo entanto, a mudança não está sob seu controle. A cada hora, ou em qualquer situação de perigo, o mestre rola um dado; um resultado 4, 5 ou 6 indica que você mudou para sua outra personalidade. Uma personalidade não se lembra do que a outra fez. Na verdade, às vezes você nem acredita que tem esse problema!\n• Distraído (0 pontos): você tem dificuldade para se concentrar em alguma coisa na qual não está interessado (qualquer coisa não ligada a uma Devoção, Dependência, Código de Honra...). Você sofre uma penalidade extra de –1 (cumulativo com quaisquer outros) em qualquer teste envolvendo algo que você não deseja muito fazer.\n• Fantasia (–1 ponto): você acredita ser alguém ou alguma coisa que não é, ou acha que pode fazer alguma coisa de que não é capaz. (Eu sou um mago! Eu posso voar! Eu sou o Mestre Arsenal!) Você fala de si mesmo o tempo todo para anunciar sua fantasia para todos à volta.\n• Fobia (–1 a –3 pontos): você tem medo terrível de alguma coisa. Sempre que é exposto a essa coisa, deve fazer um teste de Resistência. Se falhar, fica apavorado e tenta fugir de qualquer maneira em velocidade máxima (mesmo efeito da magia Pânico).\nO valor da Fobia depende daquilo que você teme: –1 ponto para uma coisa incomum, que você encontra em pelo menos 25% do tempo (lugares altos, estrangeiros, insetos, água, sangue, pessoas mortas...); –2 pontos para uma coisa comum, que você encontra 50% do tempo (escuridão, lugares fechados, animais...); e –3 pontos para algo que você encontra quase o tempo todo (pessoas, veículos, lugares abertos, barulhos altos, vento, aparelhos eletrônicos, música...)\n• Fúria (–1 ponto): igual à desvantagem.\n• Histérico (–2 pontos): você pode começar a rir ou chorar sem motivo. Em regras, é mesmo que Assombrado.\n• Homicida (–2 pontos): precisa matar um humano, semi-humano ou humanoide a cada 1d dias. Se não cometer um assassinato quando o prazo se esgotar, deve fazer um teste de Resistência por hora; uma falha significa que vai tentar atacar e matar a primeira pessoa que encontrar (Precisa dizer que esta desvantagem não é recomendada para personagens jogadores?)\n• Megalomaníaco (–1 ponto): você acredita ser invencível, imortal, alguém destinado a realizar um grande objetivo — e acha que ninguém jamais conseguirá detê-lo! Você com freqüência ignora perigos que poderiam matá-lo. Nunca recusa um desafio, nunca se rende, nunca foge e sempre luta até a morte.\n• Mentiroso (–1 ponto): você nunca diz a verdade sobre coisa alguma, mesmo quando quer. Com um teste de Resistência pode vencer momentaneamente sua insanidade e dizer algo verdadeiro para seus amigos. O mestre faz esse teste em segredo, para que os jogadores não sabiam se podem confiar no colega.\n• Obsessivo (–1 ponto): igual a Devoção.\n• Paranoico (–1 ponto): você não confia em ninguém, nem em seus amigos. Nunca pede e nem aceita nenhuma ajuda (não, nem mesmo aquela magia ou poçãozinha de cura...). Não consegue descansar ou dormir direito: mesmo que esteja em uma estalagem ou outro lugar seguro, você recupera PVs e PMs como se estivesse em lugar inadequado (ou seja, só recupera um valor igual à sua Resistência).\n• Sonâmbulo (0 pontos): cada vez que dormir, role um dado: um resultado 4, 5 ou 6 indica que você começa a andar enquanto dorme. Você não pode lutar, mas acorda se sofrer qualquer dano.\n• Suicida (0 pontos): você não dá valor à própria vida. Embora não tenha coragem para se matar, sempre procura oportunidades de morrer — desafiando inimigos poderosos, correndo riscos desnecessários, fazendo coisas de forma impensada. Você pode ser Suicida e Imortal (mas não vai ganhar muitos Pontos de Experiência, uma vez que não recebe nenhum ponto em aventuras durante as quais tenha morrido).",
    },
    {
      id: 12,
      name: "Interferência",
      cost: "0 pontos",
      description: "Você emite continuamente um campo de interferência que prejudica o funcionamento de certos aparelhos.\nNenhuma mensagem de rádio pode ser enviada ou recebida nas redondezas (10m para cada Ponto de Vida que o personagem possui no momento), sendo assim impossível entrar em contato com um Aliado, Mentor ou Patrono. Adaptador, Memória Expandida e Sentidos Especiais não funcionam dentro da área. Perceba que, às vezes, a Interferência pode ser usada como vantagem (afinal, ela também funciona contra inimigos...).",
    },
    {
      id: 13,
      name: "Interferência Mágica",
      cost: "0 pontos",
      description: "Você emana uma aura de “antimágica” que dificulta o uso de magia nas proximidades.\nSempre que uma magia é lançada a até 10m de você, o mestre rola secretamente um dado: com um resultado 1 ou 2, a magia falha, mas gasta os PMs necessários normalmente.\nQualquer conjurador de magias sente um mal-estar momentâneo quando você está perto, sendo capaz de perceber imediatamente sua interferência. Um conjurador pode gastar 1 PM extra para ignorar a chance de falha e lançar sua magia normalmente na área afetada.",
    },
    {
      id: 14,
      name: "Má Fama",
      cost: "-1 ponto",
      description: "Você é infame. Talvez você tenha fracassado em alguma missão importante, foi derrotado ou humilhado publicamente, é um ex-criminoso tentando se regenerar, pertence a uma raça detestada... por algum motivo, ninguém acredita ou confia em você, seja de forma merecida ou não.\nVocê está sempre sob suspeita. Será mais difícil fazer com que confiem em você, e sua presença em um grupo vai tornar todos os outros suspeitos também. Caso seja constatado algum crime, muito provavelmente você será acusado e perseguido mesmo que seja inocente.",
    },
    {
      id: 15,
      name: "Maldição",
      cost: "-1 ou -2 pontos",
      description: "Você foi vítima de uma maldição que o perturba todos os dias. Nada que você possa fazer vai acabar com essa sina; sempre ela voltará de alguma maneira. A Maldição pode ser inventada pelo jogador, mas sua natureza e efeito exatos serão decididos pelo mestre.\n• Suave (–1 ponto): mais irritante ou constrangedora que qualquer outra coisa, esta Maldição traz problemas, mas nunca provoca nenhuma penalidade. Por exemplo, pode ser que você se transforme em mulher quando molhado com água fria, e depois volte ao normal quando molhado com água quente.\n• Grave (–2 pontos): algo que coloca sua vida em risco. Se você se transforma em gatinho, porquinho ou pato quando é molhado com água fria (e com 0 em todas as características, menos uma, enquanto está nessa forma...), isso acaba sendo um grande problema!\nUma Maldição pode ser removida com a magia Cura de Maldição, lançada por um clérigo poderoso o bastante. No entanto, é quase certo que ele vai exigir algum tipo de compensação por esse grande serviço — seja em dinheiro, seja na forma de uma missão.\nEm mundos medievais e outras culturas primitivas, ser deficiente ou insano é o mesmo que ser amaldiçoado. Por esse motivo, em termos de jogo apenas, uma Deficiência Física ou Insanidade é o mesmo que uma Maldição. Um mago maligno pode rogar uma magia de Maldição das Trevas para torná-lo cego, e mais tarde você pode recorrer a uma Cura de Maldição para recobrar a visão.\nA decisão de usar deficiências físicas e mentais como Maldições pertence ao mestre: uma Maldição de anime e mangá muitas vezes é cômica, bem-humorada, enquanto uma deficiência possivelmente não será. Tenha cuidado para não acabar ofendendo ou magoando alguém.",
    },
    {
      id: 16,
      name: "Modelo Especial",
      cost: "-1 ponto",
      description: "Por algum motivo, seu corpo é diferente: muito maior, menor, com membros nos lugares errados... enfim, diferente do padrão humanoide normal. Por esse motivo, você não pode usar armas, roupas, equipamentos, máquinas e veículos projetados para humanos — apenas aqueles que tenham sido construídos especialmente para você.\nO inverso também é válido: máquinas feitas para você não servem para outros personagens. Pertences pessoais que tenham sido escolhidos durante a criação do personagem são, automaticamente, feitos para você.\nSe você recebe esta desvantagem por ser membro de uma raça fantástica (gnomo, halfling, fada...), então poderá usar itens próprios para outros membros da raça.",
    },
    {
      id: 17,
      name: "Monstruoso",
      cost: "-1 ponto",
      description: "Sua aparência é repulsiva e assustadora. Você não pode sair pelas ruas como gente normal; as pessoas ficarão assustadas ou furiosas.\nO motivo exato daquilo que torna você monstruoso pode variar. Qualquer coisa que possa ser facilmente disfarçada com roupas (olhos vermelhos, orelhas pontudas, uma cauda fina...) não é considerada Monstruosa. Se você tem algum poder natural para disfarçar seu verdadeiro aspecto, isso também não é ser Monstruoso.\nVocê não pode ser Monstruoso e ter Aparência Inofensiva ao mesmo tempo.",
    },
    {
      id: 18,
      name: "Munição Limitada",
      cost: "-1 ponto",
      description: "Um personagem com Poder de Fogo tem munição ilimitada, mas não neste caso. Sua arma tem um número de tiros limitado, igual a três vezes seu Poder de Fogo (com PdF4 você tem 12 tiros, por exemplo). Esta é toda a munição que você consegue carregar consigo: quando esgotada, você precisa comprar ou fabricar mais.\nEm cenários mais realistas ou primitivos, a critério do mestre, todos os personagens jogadores possuem automaticamente esta desvantagem, sem ganhar pontos por ela. Veja no capítulo “Combate”.",
    },
    {
      id: 19,
      name: "Poder Vergonhoso",
      cost: "0 ou -1 ponto cada",
      description: "Não basta só apertar o gatilho. Seu canhão é formado por partes brilhantes que voam à sua volta para combinar-se e montar a arma. Sua magia manifesta a imagem de um leão em chamas imenso que salta das nuvens. Seu ataque requer uma dança que evoca luzes coloridas e música pop.\nSempre que você usa magia ou qualquer vantagem que gasta PMs, algo estranho acontece:\n• Agradável (–1 ponto): sua magia vem acompanhada de música empolgante e ilusões visuais agradáveis, como chuvas de pétalas, revoadas de pássaros, explosões coloridas, a bandeira de sua nação, ou quaisquer outras imagens positivas. É tudo tão bonito, que dificilmente faria mal a alguém! Seus adversários recebem bem merecidos A+1 e R+1 para resistir às suas magias e ataques.\n• Constrangedor (–1 ponto): sua magia requer atos vergonhosos. Você precisa dizer coisas embaraçosas (“Eu invoco o Poder Floral da Tia Gertrudes!”) e realizar coreografias humilhantes. Para aventureiras bonitas, isso normalmente envolve uma dança e efeitos mágicos que revelam sua nudez. Como resultado, suas magias e poderes têm Força de Ataque –1.\n• Exagerado (–1 ponto): sua magia demora a acontecer, porque envolve gestos elaborados e efeitos especiais, incluindo projeções ilusórias fantásticas e uma música-tema. Tudo é muito impressionante, mas também demorado. Alvos de suas magias recebem R+1 em seus testes de resistência, e também em esquivas para evitar magias de ataque à distância.\n• Hentai (0 pontos): você aprendeu suas magias com alguém muito sem-vergonha (ou, você mesmo é sem-vergonha!). Quando você faz uma magia ou ataque bem-sucedido contra uma criatura, além de causar efeito normal, essa criatura fica nua por um instante — suas roupas desaparecem ou ficam transparentes. Esse efeito acontece até mesmo com magias benéficas (explicando a razão pela qual seus colegas às vezes recusam suas magias de cura...)\nUm personagem nu deve ser bem-sucedido em um teste de Resistência ou ficará envergonhado, sofrendo redutor de H–1 durante uma rodada. Este efeito não afeta a Armadura do alvo (sua armadura não desaparece realmente) e, em geral, não afeta monstros ou mechas (que não usam roupa, mesmo).\nQuando a magia ou ataque é mal-sucedido, ou não afeta criaturas, é você quem fica nu.\nPois é!",
    },
    {
      id: 20,
      name: "Poder Vingativo",
      cost: "-1 ponto",
      description: "Às vezes, invocar um poder sobrenatural pode cobrar um preço em sofrimento. Sempre que você lança uma magia ou usa qualquer vantagem que consome Pontos de Magia, sofre 1 ponto de dano (sem direito a testes para resistir). Exceto por esse fato, a vantagem ou magia funciona normalmente.",
    },
    {
      id: 21,
      name: "Ponto Fraco",
      cost: "-1 ponto",
      description: "Você ou sua técnica de luta tem algum tipo de fraqueza. Um oponente que conheça seu Ponto Fraco ganha um bônus de H+1 quando luta com você. Alguém só pode descobrir seu ponto fraco se observar uma luta sua pelo menos uma vez.\nVocê pode tentar descobrir o Ponto Fraco de um lutador quando o observa em ação. Faça um teste de Habilidade enquanto assiste à luta: se tiver sucesso, e se ele tiver um ponto fraco, você o descobrirá — e terá um bônus de H+1 quando lutar com ele.\nSe você tem Boa ou Má Fama, então seu Ponto Fraco será automaticamente conhecido por quase todo mundo!",
    },
    {
      id: 22,
      name: "Protegido Indefeso",
      cost: "-1 ponto cada",
      description: "Existe alguém que você precisa proteger de qualquer maneira. Essa pessoa será sempre visada pelos vilões, e você precisa protegê-la com a própria vida. Ter um Protegido é arriscado, pois os vilões podem tentar usá-lo como chantagem para vencer você (e não tenha dúvida de que eles vão tentar!).\nSua concentração nas lutas será prejudicada caso seu Protegido esteja em perigo, prisioneiro ou muito ferido; nessas situações você sofre uma penalização de H–1, até que ele esteja são e salvo outra vez. Se o Protegido morrer ou desaparecer para sempre, você perde um ponto de Habilidade permanente.\nVocê pode ter mais de um Protegido, mas isso aumenta seus riscos. Caso dois ou mais Protegidos estejam em perigo ao mesmo tempo, seus redutores serão acumulados (dois Protegidos em perigo impõem H–2).",
    },
    {
      id: 23,
      name: "Restrição de Poder",
      cost: "-1 a -3 pontos",
      description: "É mais difícil para você usar seus poderes em certas condições, escolhidas com aprovação do mestre. Quando essa condição está presente, você precisa gastar duas vezes mais PMs para lançar magias e usar vantagens.\nO custo da desvantagem depende de quão comum são essas condições.\n• Incomum (–1 ponto): esta condição não acontece todo dia, mas você vai enfrentá-la em pelo menos 25% do tempo. Digamos, quando você estiver molhado; durante uma das fases da lua; durante uma das estações do ano; contra mamíferos, répteis, goblinoides, mortos-vivos ou outra grande família de criaturas; sobre você mesmo...\n• Comum (–2 pontos): você vai enfrentar esta condição quase todos os dias, ou em pelo menos 50% do tempo: à noite ou à luz do dia; contra todos os animais, todos os youkai (incluindo mortos-vivos) ou todos os humanoides.\n• Muito Comum (–3 pontos): esta condição acontece quase o tempo todo. Por exemplo, sua mágica não funciona se alguém estiver olhando (incluindo inimigos!); não funciona contra nenhuma criatura viva, ou contra nenhum objeto inanimado.\nEm alguns casos (como estações do ano ou fases da lua) o mestre pode rolar os dados para saber a possibilidade do evento acontecer, ou apenas decidir em segredo.",
    },
    {
      id: 24,
      name: "Vulnerabilidade",
      cost: "especial",
      description: "Você é mais vulnerável a um certo tipo de dano. Quando recebe um ataque ao qual é vulnerável, sua Armadura é reduzida a zero para calcular sua Força de Defesa: o ataque ignora quase toda a sua proteção e frita seus Pontos de Vida!\nExemplo: você tem Habilidade 2, Armadura 5 e Vulnera bilidade a Sônico. Se for atingido por um raio sônico, sua Força de Defesa será 2+1d.\nEsta desvantagem não oferece pontos, e não pode ser escolhida durante a criação de personagem. No entanto, ela pode aparecer mais adiante como parte de uma vantagem única (por exemplo, um Anjo tem Vulnerabilidade: Fogo), ou causada por alguma Maldição.\nOs tipos de Vulnerabilidade são os mesmos existentes para Armadura Extra.\nVulnerabilidade não vale apenas contra ataques de criaturas: se você é vulnerável a fogo, então qualquer calor ou fogo terá maior chance de feri-lo: incêndios, vapor escaldante, água fervente, lava... veja mais detalhes em “Combate”.",
    },
  ],
};

// const createDesvantagens = async () => {
//   const newDesvantagens = await desvantagens
//     .forEach((data: any) => data.desvantagens.id = data.desvantagens.id.toString());
//   await writeFile(FilePath.DESVANTAGENS, newDesvantagens);
// };

// createDesvantagens();
