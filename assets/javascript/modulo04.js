// ════════════════════════════════
// DADOS
// ════════════════════════════════
const e1Q = [
    {
        text: "Qual é este equipamento que distribui a conexão de internet por Wi-Fi e cabo?", hint: "Geralmente fica conectado ao modem da operadora.",
        ill: `<svg width="160" height="100" viewBox="0 0 160 100" fill="none"><rect x="30" y="48" width="100" height="34" rx="5" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><line x1="50" y1="48" x2="43" y2="20" stroke="#0ABFBC" stroke-width="2.5" stroke-linecap="round"/><circle cx="43" cy="18" r="3" fill="#0ABFBC"/><line x1="80" y1="48" x2="80" y2="16" stroke="#0ABFBC" stroke-width="2.5" stroke-linecap="round"/><circle cx="80" cy="14" r="3" fill="#0ABFBC"/><line x1="110" y1="48" x2="117" y2="20" stroke="#0ABFBC" stroke-width="2.5" stroke-linecap="round"/><circle cx="117" cy="18" r="3" fill="#0ABFBC"/><rect x="34" y="52" width="92" height="26" rx="4" fill="#0D2030"/><circle cx="46" cy="62" r="3" fill="#0ABFBC" opacity=".9"/><circle cx="56" cy="62" r="3" fill="#1AB078" opacity=".8"/><circle cx="66" cy="62" r="3" fill="#0ABFBC" opacity=".5"/><rect x="82" y="57" width="8" height="6" rx="1" fill="#0ABFBC" opacity=".5"/><rect x="93" y="57" width="8" height="6" rx="1" fill="#0ABFBC" opacity=".5"/><rect x="104" y="57" width="8" height="6" rx="1" fill="#0ABFBC" opacity=".3"/><text x="80" y="76" text-anchor="middle" font-size="8" fill="#0ABFBC" font-family="DM Sans" font-weight="600" opacity=".7">ROTEADOR</text></svg>`,
        opts: ["Roteador", "Switch", "Modem", "Access Point"], correct: 0,
        fb: { c: "Isso! O roteador distribui a internet para vários dispositivos via Wi-Fi e cabos ethernet. Ele também gerencia os endereços IP da rede local.", e: "A resposta certa é Roteador. Ele é o equipamento com antenas que compartilha a conexão de internet." }
    },
    {
        text: "Este equipamento conecta vários computadores em rede local por cabo, sem criar Wi-Fi. O que é?", hint: "Tem muitas portas RJ-45 e só trabalha com cabos.",
        ill: `<svg width="160" height="100" viewBox="0 0 160 100" fill="none"><rect x="15" y="32" width="130" height="38" rx="5" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="19" y="36" width="122" height="30" rx="3" fill="#0D2030"/><rect x="24" y="40" width="10" height="8" rx="1.5" fill="#0ABFBC" opacity=".6"/><rect x="37" y="40" width="10" height="8" rx="1.5" fill="#0ABFBC" opacity=".6"/><rect x="50" y="40" width="10" height="8" rx="1.5" fill="#0ABFBC" opacity=".6"/><rect x="63" y="40" width="10" height="8" rx="1.5" fill="#1AB078" opacity=".8"/><rect x="76" y="40" width="10" height="8" rx="1.5" fill="#0ABFBC" opacity=".6"/><rect x="89" y="40" width="10" height="8" rx="1.5" fill="#0ABFBC" opacity=".6"/><rect x="102" y="40" width="10" height="8" rx="1.5" fill="#0ABFBC" opacity=".3"/><rect x="115" y="40" width="10" height="8" rx="1.5" fill="#0ABFBC" opacity=".3"/><circle cx="29" cy="54" r="2" fill="#1AB078" opacity=".9"/><circle cx="42" cy="54" r="2" fill="#1AB078" opacity=".9"/><circle cx="55" cy="54" r="2" fill="#1AB078" opacity=".9"/><circle cx="68" cy="54" r="2" fill="#0ABFBC" opacity=".9"/><circle cx="81" cy="54" r="2" fill="#1AB078" opacity=".9"/><circle cx="94" cy="54" r="2" fill="#0D2030"/><circle cx="107" cy="54" r="2" fill="#0D2030"/><circle cx="120" cy="54" r="2" fill="#0D2030"/><text x="80" y="66" text-anchor="middle" font-size="8" fill="#0ABFBC" font-family="DM Sans" font-weight="600" opacity=".7">8-PORT SWITCH</text></svg>`,
        opts: ["Modem", "Switch", "Roteador", "Hub"], correct: 1,
        fb: { c: "Correto! O switch conecta vários dispositivos em rede local via cabo ethernet. Ele envia os dados apenas para a porta de destino, sendo muito mais eficiente que o hub.", e: "A resposta certa é Switch. Ele tem várias portas RJ-45 e interliga computadores em rede local por cabo, sem Wi-Fi." }
    },
    {
        text: "Este equipamento converte o sinal da operadora em sinal de rede ethernet. O que é?", hint: "É o primeiro equipamento que recebe a internet de fora.",
        ill: `<svg width="160" height="100" viewBox="0 0 160 100" fill="none"><rect x="45" y="15" width="70" height="65" rx="6" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="49" y="19" width="62" height="57" rx="4" fill="#0D2030"/><circle cx="65" cy="32" r="3.5" fill="#1AB078" opacity=".9"/><circle cx="80" cy="32" r="3.5" fill="#1AB078" opacity=".9"/><circle cx="95" cy="32" r="3.5" fill="#0ABFBC" opacity=".7"/><text x="65" y="44" text-anchor="middle" font-size="6" fill="#0ABFBC" opacity=".5">PWR</text><text x="80" y="44" text-anchor="middle" font-size="6" fill="#0ABFBC" opacity=".5">DSL</text><text x="95" y="44" text-anchor="middle" font-size="6" fill="#0ABFBC" opacity=".5">LAN</text><circle cx="80" cy="58" r="6" fill="#162840" stroke="#FFAD6F" stroke-width="1.5"/><circle cx="80" cy="58" r="3" fill="#FFAD6F" opacity=".6"/><rect x="68" y="67" width="24" height="7" rx="1.5" fill="#0ABFBC" opacity=".5"/><text x="80" y="90" text-anchor="middle" font-size="8" fill="#0ABFBC" font-family="DM Sans" font-weight="600" opacity=".7">MODEM</text></svg>`,
        opts: ["Access Point", "Roteador", "Switch", "Modem"], correct: 3,
        fb: { c: "Isso! O modem converte o sinal da operadora (fibra óptica, cabo coaxial ou linha telefônica) em sinal ethernet que os computadores entendem.", e: "A resposta certa é Modem. Ele fica entre a operadora de internet e a sua rede doméstica, convertendo o tipo de sinal." }
    },
    {
        text: "Este pequeno cabo com conector plástico é usado para ligar computadores, switches e roteadores. O que é?", hint: "O conector tem 8 fios internos e um clip que trava.",
        ill: `<svg width="160" height="100" viewBox="0 0 160 100" fill="none"><path d="M20 50 Q80 50 140 50" stroke="#0ABFBC" stroke-width="5" stroke-linecap="round"/><rect x="8" y="42" width="20" height="16" rx="2" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="11" y="45" width="14" height="10" rx="1" fill="#0D2030"/><rect x="12" y="47" width="2" height="6" rx=".5" fill="#FFAD6F"/><rect x="15" y="47" width="2" height="6" rx=".5" fill="#FFAD6F"/><rect x="18" y="47" width="2" height="6" rx=".5" fill="#FFAD6F"/><rect x="21" y="47" width="2" height="6" rx=".5" fill="#FFAD6F"/><rect x="13" y="56" width="10" height="3" rx="1" fill="#0ABFBC" opacity=".6"/><rect x="132" y="42" width="20" height="16" rx="2" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="135" y="45" width="14" height="10" rx="1" fill="#0D2030"/><rect x="136" y="47" width="2" height="6" rx=".5" fill="#FFAD6F"/><rect x="139" y="47" width="2" height="6" rx=".5" fill="#FFAD6F"/><rect x="142" y="47" width="2" height="6" rx=".5" fill="#FFAD6F"/><rect x="145" y="47" width="2" height="6" rx=".5" fill="#FFAD6F"/><rect x="137" y="56" width="10" height="3" rx="1" fill="#0ABFBC" opacity=".6"/><text x="80" y="85" text-anchor="middle" font-size="9" fill="#0ABFBC" font-family="DM Sans" font-weight="600" opacity=".8">Cabo RJ-45</text></svg>`,
        opts: ["Cabo HDMI", "Cabo USB", "Cabo de Rede RJ-45", "Cabo SATA"], correct: 2,
        fb: { c: "Correto! O cabo de rede RJ-45 é o padrão ethernet. Tem 8 fios internos em 4 pares, e o clip plástico trava o conector na porta.", e: "A resposta certa é Cabo de Rede RJ-45. É o cabo usado para conectar computadores, switches e roteadores na rede local." }
    },
    {
        text: "Este dispositivo amplia o sinal Wi-Fi em áreas distantes do roteador. O que é?", hint: "Fica plugado na tomada e repete o sinal wireless.",
        ill: `<svg width="160" height="100" viewBox="0 0 160 100" fill="none"><rect x="55" y="30" width="50" height="55" rx="6" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="59" y="34" width="42" height="47" rx="4" fill="#0D2030"/><rect x="70" y="78" width="8" height="10" rx="1" fill="#0ABFBC" opacity=".6"/><rect x="82" y="78" width="8" height="10" rx="1" fill="#0ABFBC" opacity=".6"/><path d="M65 62 Q80 48 95 62" stroke="#0ABFBC" stroke-width="1.8" stroke-linecap="round" fill="none" opacity=".4"/><path d="M70 67 Q80 57 90 67" stroke="#0ABFBC" stroke-width="1.8" stroke-linecap="round" fill="none" opacity=".7"/><circle cx="80" cy="72" r="3" fill="#0ABFBC"/><circle cx="80" cy="43" r="4" fill="#1AB078" opacity=".9"/><text x="80" y="24" text-anchor="middle" font-size="8" fill="#0ABFBC" font-family="DM Sans" font-weight="600" opacity=".8">REPETIDOR Wi-Fi</text></svg>`,
        opts: ["Roteador", "Switch", "Repetidor Wi-Fi", "Firewall"], correct: 2,
        fb: { c: "Isso! O repetidor Wi-Fi recebe o sinal wireless do roteador e retransmite, ampliando o alcance da rede sem precisar de cabos.", e: "A resposta certa é Repetidor Wi-Fi. Ele fica entre o roteador e as áreas sem sinal, repetindo o Wi-Fi para cobrir mais espaço." }
    },
    {
        text: "Este componente dentro do computador conecta-o à rede via cabo ou Wi-Fi. O que é?", hint: "Pode vir integrado na placa-mãe ou como placa de expansão.",
        ill: `<svg width="160" height="100" viewBox="0 0 160 100" fill="none"><rect x="15" y="18" width="130" height="52" rx="6" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="25" y="26" width="35" height="28" rx="4" fill="#0D2030" stroke="#0ABFBC" stroke-width="1"/><rect x="30" y="31" width="25" height="18" rx="2" fill="#0ABFBC" opacity=".25"/><text x="42" y="43" text-anchor="middle" font-size="7" fill="#0ABFBC" font-family="DM Sans" font-weight="600">RTL8111</text><rect x="112" y="24" width="25" height="20" rx="2" fill="#0D2030" stroke="#0ABFBC" stroke-width="1.5"/><rect x="115" y="27" width="19" height="14" rx="1" fill="#162840"/><rect x="116" y="36" width="2" height="5" rx=".5" fill="#FFAD6F"/><rect x="120" y="36" width="2" height="5" rx=".5" fill="#FFAD6F"/><rect x="124" y="36" width="2" height="5" rx=".5" fill="#FFAD6F"/><rect x="128" y="36" width="2" height="5" rx=".5" fill="#FFAD6F"/><circle cx="116" cy="52" r="3" fill="#1AB078" opacity=".9"/><circle cx="126" cy="52" r="3" fill="#FFAD6F" opacity=".8"/><rect x="15" y="67" width="130" height="6" rx="2" fill="#0ABFBC" opacity=".4"/></svg>`,
        opts: ["Placa de Vídeo", "Placa de Rede (NIC)", "Placa de Som", "Controladora RAID"], correct: 1,
        fb: { c: "Correto! A Placa de Rede (NIC) conecta o computador à rede. Tem a porta RJ-45 para o cabo ethernet e LEDs que indicam conexão ativa.", e: "A resposta certa é Placa de Rede (NIC). É ela que tem a porta RJ-45 onde encaixamos o cabo de rede no computador." }
    }
];

const topoSteps = [
    {
        slotId: 'slot-internet', placedId: 'placed-internet', highlight: '#FFAD6F', instr: 'Conecte a Internet (nuvem) ao topo da topologia', hint: 'A internet é a origem. Ela chega pela operadora antes de qualquer equipamento.', correct: 0,
        opts: [{ n: 'Internet', s: `<svg viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="18" fill="#162840" stroke="#FFAD6F" stroke-width="1.5"/><ellipse cx="26" cy="26" rx="8" ry="18" fill="none" stroke="#FFAD6F" stroke-width="1"/><line x1="8" y1="26" x2="44" y2="26" stroke="#FFAD6F" stroke-width="1"/></svg>` },
        { n: 'Switch', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="6" y="18" width="40" height="16" rx="3" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="10" y="22" width="7" height="6" rx="1" fill="#0ABFBC" opacity=".6"/><rect x="20" y="22" width="7" height="6" rx="1" fill="#0ABFBC" opacity=".6"/><rect x="30" y="22" width="7" height="6" rx="1" fill="#1AB078" opacity=".8"/><rect x="40" y="22" width="7" height="6" rx="1" fill="#0ABFBC" opacity=".4"/></svg>` },
        { n: 'Computador', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="8" y="10" width="36" height="24" rx="3" fill="#162840" stroke="#4A9EE0" stroke-width="1.5"/><rect x="11" y="13" width="30" height="18" rx="2" fill="#0D1B2A"/><rect x="20" y="34" width="12" height="4" rx="1" fill="#1A3A5C"/><rect x="14" y="38" width="24" height="3" rx="1.5" fill="#1E6FBF" opacity=".5"/></svg>` },
        { n: 'Roteador', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="8" y="28" width="36" height="14" rx="3" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><line x1="16" y1="28" x2="13" y2="14" stroke="#0ABFBC" stroke-width="2" stroke-linecap="round"/><circle cx="13" cy="12" r="2.5" fill="#0ABFBC"/><line x1="26" y1="28" x2="26" y2="12" stroke="#0ABFBC" stroke-width="2" stroke-linecap="round"/><circle cx="26" cy="10" r="2.5" fill="#0ABFBC"/><line x1="36" y1="28" x2="39" y2="14" stroke="#0ABFBC" stroke-width="2" stroke-linecap="round"/><circle cx="39" cy="12" r="2.5" fill="#0ABFBC"/></svg>` }],
        fb: { c: 'Correto! A internet é a origem da conexão. Ela chega pela operadora via fibra óptica ou cabo coaxial.', e: 'Esse não é o primeiro elemento. A internet (nuvem) representa a conexão externa que chega da operadora.' }
    },
    {
        slotId: 'slot-modem', placedId: 'placed-modem', highlight: '#FFAD6F', instr: 'Conecte o Modem — ele recebe o sinal da internet', hint: 'O modem converte o sinal da operadora para ethernet.', correct: 1,
        opts: [{ n: 'Roteador', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="8" y="28" width="36" height="14" rx="3" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><line x1="16" y1="28" x2="13" y2="14" stroke="#0ABFBC" stroke-width="2" stroke-linecap="round"/><circle cx="13" cy="12" r="2.5" fill="#0ABFBC"/><line x1="26" y1="28" x2="26" y2="12" stroke="#0ABFBC" stroke-width="2" stroke-linecap="round"/><circle cx="26" cy="10" r="2.5" fill="#0ABFBC"/></svg>` },
        { n: 'Modem', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="16" y="8" width="20" height="36" rx="4" fill="#162840" stroke="#FFAD6F" stroke-width="1.5"/><circle cx="26" cy="22" r="5" fill="#162840" stroke="#FFAD6F" stroke-width="1"/><circle cx="26" cy="22" r="2" fill="#FFAD6F" opacity=".6"/><circle cx="26" cy="14" r="2.5" fill="#1AB078" opacity=".9"/><rect x="20" y="30" width="12" height="5" rx="1" fill="#0ABFBC" opacity=".4"/></svg>` },
        { n: 'Switch', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="6" y="18" width="40" height="16" rx="3" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="10" y="22" width="7" height="6" rx="1" fill="#0ABFBC" opacity=".6"/><rect x="20" y="22" width="7" height="6" rx="1" fill="#0ABFBC" opacity=".6"/></svg>` },
        { n: 'Computador', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="8" y="10" width="36" height="24" rx="3" fill="#162840" stroke="#4A9EE0" stroke-width="1.5"/><rect x="11" y="13" width="30" height="18" rx="2" fill="#0D1B2A"/></svg>` }],
        fb: { c: 'Correto! O modem fica logo após a internet. Ele demodula o sinal da operadora e converte para ethernet.', e: 'Esse não é o equipamento que fica direto na chegada da internet. O modem recebe e converte o sinal da operadora.' }
    },
    {
        slotId: 'slot-roteador', placedId: 'placed-roteador', highlight: '#0ABFBC', instr: 'Conecte o Roteador — ele distribui a internet', hint: 'O roteador recebe a internet do modem e distribui para a rede local.', correct: 2,
        opts: [{ n: 'Switch', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="4" y="18" width="44" height="16" rx="3" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="8" y="22" width="8" height="6" rx="1" fill="#0ABFBC" opacity=".6"/><rect x="19" y="22" width="8" height="6" rx="1" fill="#0ABFBC" opacity=".6"/><rect x="30" y="22" width="8" height="6" rx="1" fill="#1AB078" opacity=".8"/><rect x="41" y="22" width="8" height="6" rx="1" fill="#0ABFBC" opacity=".4"/></svg>` },
        { n: 'Computador', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="8" y="10" width="36" height="24" rx="3" fill="#162840" stroke="#4A9EE0" stroke-width="1.5"/><rect x="11" y="13" width="30" height="18" rx="2" fill="#0D1B2A"/></svg>` },
        { n: 'Roteador', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="8" y="28" width="36" height="14" rx="3" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><line x1="16" y1="28" x2="13" y2="14" stroke="#0ABFBC" stroke-width="2" stroke-linecap="round"/><circle cx="13" cy="12" r="2.5" fill="#0ABFBC"/><line x1="26" y1="28" x2="26" y2="12" stroke="#0ABFBC" stroke-width="2" stroke-linecap="round"/><circle cx="26" cy="10" r="2.5" fill="#0ABFBC"/><line x1="36" y1="28" x2="39" y2="14" stroke="#0ABFBC" stroke-width="2" stroke-linecap="round"/><circle cx="39" cy="12" r="2.5" fill="#0ABFBC"/></svg>` },
        { n: 'Impressora', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="8" y="18" width="36" height="18" rx="3" fill="#162840" stroke="#8BA3BC" stroke-width="1.5"/><rect x="14" y="10" width="24" height="10" rx="2" fill="#162840" stroke="#8BA3BC" stroke-width="1"/><rect x="14" y="34" width="24" height="8" rx="2" fill="#162840" stroke="#8BA3BC" stroke-width="1"/><circle cx="36" cy="28" r="3" fill="#1AB078" opacity=".8"/></svg>` }],
        fb: { c: 'Correto! O roteador fica entre o modem e a rede local. Ele gerencia os endereços IP via DHCP e direciona o tráfego.', e: 'Esse equipamento não vem após o modem. O roteador é quem distribui a internet para todos os dispositivos da rede.' }
    },
    {
        slotId: 'slot-switch', placedId: 'placed-switch', highlight: '#0ABFBC', instr: 'Conecte o Switch — ele expande as conexões por cabo', hint: 'O switch multiplica as portas ethernet disponíveis na rede.', correct: 0,
        opts: [{ n: 'Switch', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="4" y="16" width="44" height="18" rx="3" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="8" y="20" width="7" height="6" rx="1" fill="#0ABFBC" opacity=".7"/><rect x="18" y="20" width="7" height="6" rx="1" fill="#0ABFBC" opacity=".7"/><rect x="28" y="20" width="7" height="6" rx="1" fill="#1AB078" opacity=".9"/><rect x="38" y="20" width="7" height="6" rx="1" fill="#0ABFBC" opacity=".5"/><circle cx="12" cy="30" r="2" fill="#1AB078" opacity=".8"/><circle cx="22" cy="30" r="2" fill="#1AB078" opacity=".8"/><circle cx="32" cy="30" r="2" fill="#0ABFBC" opacity=".8"/><circle cx="42" cy="30" r="2" fill="#0D2030" opacity=".5"/></svg>` },
        { n: 'Repetidor Wi-Fi', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="16" y="12" width="20" height="28" rx="4" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><path d="M10 30 Q26 18 42 30" stroke="#0ABFBC" stroke-width="1.5" fill="none" opacity=".4"/><path d="M14 34 Q26 24 38 34" stroke="#0ABFBC" stroke-width="1.5" fill="none" opacity=".7"/><circle cx="26" cy="36" r="2.5" fill="#0ABFBC"/></svg>` },
        { n: 'Modem', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="16" y="8" width="20" height="36" rx="4" fill="#162840" stroke="#FFAD6F" stroke-width="1.5"/><circle cx="26" cy="22" r="5" fill="#162840" stroke="#FFAD6F" stroke-width="1"/><circle cx="26" cy="22" r="2" fill="#FFAD6F" opacity=".6"/></svg>` },
        { n: 'Firewall', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="8" y="12" width="36" height="28" rx="4" fill="#162840" stroke="#E8445A" stroke-width="1.5"/><path d="M26 18 L30 28 L26 32 L22 28 Z" fill="#E8445A" opacity=".7"/></svg>` }],
        fb: { c: 'Correto! O switch fica ligado ao roteador e multiplica as portas ethernet. Em redes maiores, vários switches podem ser conectados em cascata.', e: 'Esse equipamento não multiplica portas de rede. O switch tem muitas portas RJ-45 e interliga os dispositivos com fio.' }
    },
    {
        slotId: 'slot-pc', placedId: 'placed-pc', highlight: '#4A9EE0', instr: 'Conecte os Computadores ao Switch', hint: 'Os computadores são os dispositivos finais (hosts) da rede.', correct: 3,
        opts: [{ n: 'Roteador', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="8" y="28" width="36" height="14" rx="3" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><line x1="16" y1="28" x2="13" y2="14" stroke="#0ABFBC" stroke-width="2" stroke-linecap="round"/><circle cx="13" cy="12" r="2.5" fill="#0ABFBC"/></svg>` },
        { n: 'Switch', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="6" y="18" width="40" height="16" rx="3" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="10" y="22" width="7" height="6" rx="1" fill="#0ABFBC" opacity=".6"/><rect x="20" y="22" width="7" height="6" rx="1" fill="#1AB078" opacity=".8"/></svg>` },
        { n: 'Modem', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="16" y="8" width="20" height="36" rx="4" fill="#162840" stroke="#FFAD6F" stroke-width="1.5"/><circle cx="26" cy="22" r="5" fill="#162840" stroke="#FFAD6F" stroke-width="1"/></svg>` },
        { n: 'Computadores', s: `<svg viewBox="0 0 52 52" fill="none"><rect x="2" y="6" width="22" height="16" rx="2" fill="#162840" stroke="#4A9EE0" stroke-width="1.5"/><rect x="5" y="9" width="16" height="10" rx="1" fill="#0D1B2A"/><rect x="9" y="22" width="6" height="3" rx="1" fill="#1A3A5C"/><rect x="28" y="10" width="22" height="14" rx="2" fill="#162840" stroke="#4A9EE0" stroke-width="1.2"/><rect x="31" y="13" width="16" height="8" rx="1" fill="#0D1B2A"/><rect x="35" y="24" width="6" height="3" rx="1" fill="#1A3A5C"/></svg>` }],
        fb: { c: 'Topologia completa! Os computadores são os hosts finais. Conectam-se ao switch por cabo ethernet para acessar a internet e outros dispositivos.', e: 'Esse não é o dispositivo final da rede. Os computadores ficam na última camada, conectados ao switch por cabos RJ-45.' }
    }
];

const ipSc = {
    cenario: "Um computador precisa se conectar à rede 192.168.1.0. O roteador tem o IP 192.168.1.1. Configure o computador.",
    campos: [
        { label: "Endereço IP", opts: ["192.168.1.50", "10.0.0.50", "172.16.0.50", "192.168.2.50"], correct: 0, fb: { ok: "Correto! 192.168.1.50 está na mesma rede que o roteador (192.168.1.x).", err: "Esse IP não está na rede 192.168.1.0. O computador e o roteador precisam ter IPs na mesma faixa." } },
        { label: "Máscara de Sub-rede", opts: ["255.255.0.0", "255.0.0.0", "255.255.255.0", "255.255.255.128"], correct: 2, fb: { ok: "Correto! 255.255.255.0 é o padrão para redes domésticas. Os 3 primeiros grupos identificam a rede.", err: "Essa máscara não é a padrão para redes /24. A 255.255.255.0 indica que os 3 primeiros octetos são a rede." } },
        { label: "Gateway Padrão", opts: ["192.168.1.254", "192.168.1.50", "192.168.1.1", "0.0.0.0"], correct: 2, fb: { ok: "Correto! O gateway padrão é o IP do roteador (192.168.1.1). Todo tráfego externo passa por ele.", err: "Esse não é o gateway correto. O gateway deve ser o IP do roteador, quem encaminha pacotes para a internet." } },
        { label: "DNS Preferencial", opts: ["192.168.1.50", "8.8.8.8", "255.255.255.0", "192.168.1.255"], correct: 1, fb: { ok: "Correto! 8.8.8.8 é o DNS público do Google. Ele traduz nomes de sites em endereços IP.", err: "Esse não é um servidor DNS válido. O 8.8.8.8 (Google DNS) converte nomes de domínio em IPs." } }
    ]
};

const e4Q = [
    {
        text: "O computador está conectado ao switch, mas não acessa a internet. O 'ping 192.168.1.1' funciona, mas o 'ping 8.8.8.8' falha. Qual é o problema?", hint: "O ping para o roteador funciona, mas para a internet não.",
        scene: `<svg width="200" height="90" viewBox="0 0 200 90" fill="none"><text x="100" y="12" text-anchor="middle" font-size="8" fill="#FFAD6F" font-family="DM Sans">Internet</text><circle cx="100" cy="22" r="9" fill="#162840" stroke="#FFAD6F" stroke-width="1.5" opacity=".5"/><line x1="100" y1="31" x2="100" y2="44" stroke="#E8445A" stroke-width="2" stroke-dasharray="3 2"/><text x="108" y="40" font-size="8" fill="#E8445A">❌</text><rect x="80" y="44" width="40" height="14" rx="3" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><text x="100" y="54" text-anchor="middle" font-size="7" fill="#0ABFBC" font-family="DM Sans">Roteador</text><line x1="100" y1="58" x2="100" y2="70" stroke="#1AB078" stroke-width="2"/><rect x="74" y="70" width="52" height="14" rx="2" fill="#162840" stroke="#0ABFBC" stroke-width="1"/><text x="100" y="80" text-anchor="middle" font-size="7" fill="#0ABFBC" font-family="DM Sans">Switch ✓</text></svg>`,
        opts: ["Cabo do computador ao switch com defeito", "Gateway padrão do computador errado", "Roteador não está recebendo internet do modem", "Placa de rede do computador queimada"], correct: 2,
        fb: { c: "Correto! Como o ping para o roteador funciona, a rede local está OK. O problema está entre o roteador e a internet — provavelmente o modem ou a conexão com a operadora.", e: "Se o ping para o roteador funciona, a rede local está íntegra. O problema está além do roteador — na conexão com a internet." }
    },
    {
        text: "Dois computadores na mesma rede não se comunicam. PC-A tem IP 192.168.1.10 e PC-B tem IP 192.168.2.20. Qual é o problema?", hint: "Observe os endereços IP dos dois computadores com atenção.",
        scene: `<svg width="200" height="90" viewBox="0 0 200 90" fill="none"><rect x="5" y="25" width="70" height="40" rx="4" fill="#162840" stroke="#4A9EE0" stroke-width="1.5"/><text x="40" y="43" text-anchor="middle" font-size="7" fill="#4A9EE0" font-family="DM Sans" font-weight="600">PC-A</text><text x="40" y="55" text-anchor="middle" font-size="6" fill="#4A9EE0" font-family="DM Sans">192.168.1.10</text><line x1="75" y1="45" x2="125" y2="45" stroke="#E8445A" stroke-width="2" stroke-dasharray="3 2"/><text x="100" y="41" text-anchor="middle" font-size="9" fill="#E8445A">❌</text><rect x="125" y="25" width="70" height="40" rx="4" fill="#162840" stroke="#4A9EE0" stroke-width="1.5"/><text x="160" y="43" text-anchor="middle" font-size="7" fill="#4A9EE0" font-family="DM Sans" font-weight="600">PC-B</text><text x="160" y="55" text-anchor="middle" font-size="6" fill="#E8445A" font-family="DM Sans">192.168.2.20</text></svg>`,
        opts: ["O switch está com defeito", "Os computadores estão em redes diferentes (IPs incompatíveis)", "O cabo de rede do PC-B está mal crimpado", "Os dois precisam de DNS configurado"], correct: 1,
        fb: { c: "Exato! PC-A está na rede 192.168.1.x e PC-B na 192.168.2.x. Computadores em redes diferentes não se comunicam diretamente — precisam de roteador ou os IPs precisam ser corrigidos.", e: "O problema está nos IPs: 192.168.1.x e 192.168.2.x são redes diferentes. Para se comunicar diretamente, precisam estar na mesma rede." }
    },
    {
        text: "Um computador obtém automaticamente o IP 169.254.x.x ao ligar. Isso indica que:", hint: "O prefixo 169.254 é reservado para uma situação específica.",
        scene: `<svg width="200" height="90" viewBox="0 0 200 90" fill="none"><rect x="60" y="18" width="80" height="56" rx="5" fill="#162840" stroke="#4A9EE0" stroke-width="1.5"/><rect x="66" y="24" width="68" height="36" rx="3" fill="#0D1B2A"/><text x="100" y="40" text-anchor="middle" font-size="7" fill="#E8445A" font-family="DM Sans" font-weight="600">IP Obtido:</text><text x="100" y="52" text-anchor="middle" font-size="7" fill="#E8445A" font-family="DM Sans">169.254.12.5</text><text x="100" y="66" text-anchor="middle" font-size="7" fill="#FFAD6F" font-family="DM Sans">⚠ Sem DHCP</text></svg>`,
        opts: ["O computador configurou um IP estático corretamente", "O servidor DHCP do roteador não respondeu — IP automático de emergência", "A máscara de sub-rede está errada", "O DNS não está configurado"], correct: 1,
        fb: { c: "Correto! O endereço 169.254.x.x (APIPA) é atribuído pelo Windows quando ele não consegue contatar o servidor DHCP. Indica que o roteador não respondeu — verifique o cabo ou o serviço DHCP.", e: "O prefixo 169.254.x.x é APIPA (Automatic Private IP Addressing). O Windows usa esse endereço quando não consegue obter um IP do servidor DHCP do roteador." }
    },
    {
        text: "Para que a impressora de rede sempre tenha o mesmo IP sem causar conflito com o DHCP, a melhor solução é:", hint: "Queremos IP fixo, mas sem conflitar com IPs distribuídos automaticamente.",
        scene: `<svg width="200" height="90" viewBox="0 0 200 90" fill="none"><rect x="75" y="5" width="50" height="26" rx="4" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><text x="100" y="20" text-anchor="middle" font-size="7" fill="#0ABFBC" font-family="DM Sans">Roteador DHCP</text><text x="100" y="28" text-anchor="middle" font-size="6" fill="#0ABFBC" font-family="DM Sans">Pool: .100~.200</text><line x1="100" y1="31" x2="100" y2="45" stroke="#0ABFBC" stroke-width="1.5"/><rect x="74" y="45" width="52" height="12" rx="2" fill="#162840" stroke="#0ABFBC" stroke-width="1"/><text x="100" y="54" text-anchor="middle" font-size="7" fill="#0ABFBC" font-family="DM Sans">Switch</text><line x1="126" y1="51" x2="150" y2="68" stroke="#E8445A" stroke-width="1.5" stroke-dasharray="2 2"/><text x="154" y="78" font-size="7" fill="#E8445A" font-family="DM Sans">Impressora ?</text></svg>`,
        opts: ["Configurar IP estático dentro do range DHCP (ex: 192.168.1.150)", "Desligar o DHCP do roteador para todos os dispositivos", "Configurar IP estático fora do range DHCP (ex: 192.168.1.50) ou reserva por MAC", "Conectar a impressora direto no roteador sem passar pelo switch"], correct: 2,
        fb: { c: "Correto! IPs estáticos devem ficar fora do pool DHCP para evitar conflitos. Criar uma reserva por MAC address no roteador também garante que a impressora sempre receba o mesmo IP automaticamente.", e: "Configurar IP estático dentro do range DHCP causará conflito. O IP estático deve ficar fora do pool, ou criar reserva por MAC no roteador." }
    }
];

// ════════════════════════════════
// ESTADO
// ════════════════════════════════
let score = 0, wrong = 0;
let e1s = 0, e2s = 0, e3s = 0, e4s = 0;
let e1Cur = 0, e2Cur = 0, e3Campo = 0, e4Cur = 0;
let e1Ans = false, e2Ans = false, e4Ans = false;

// ════════════════════════════════
// UTILS
// ════════════════════════════════
function setDots(a) { for (let i = 0; i < 4; i++) { const d = document.getElementById('dot-' + i); d.className = 'etapa-dot' + (i < a - 1 ? ' done' : i === a - 1 ? ' active' : ''); } }
function setProgress(lbl, cur, tot, pct) { document.getElementById('prog-label').innerHTML = `${lbl} <strong>${cur}</strong> de <strong>${tot}</strong>`; document.getElementById('progress-fill').style.width = pct + '%'; document.getElementById('score-label').innerHTML = `✓ ${score} &nbsp;✗ ${wrong}`; }
function show(id) { ['e1', 'e2', 'e3', 'e4', 'result'].forEach(x => document.getElementById('screen-' + x).style.display = x === id ? 'block' : 'none'); }
function shuffle(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; }

// ════════════════════════════════
// INIT
// ════════════════════════════════
function init() {
    score = 0; wrong = 0; e1s = 0; e2s = 0; e3s = 0; e4s = 0; e1Cur = 0; e2Cur = 0; e3Campo = 0; e4Cur = 0;
    document.getElementById('badge-phase').textContent = 'Etapa 1/4';
    setDots(1); show('e1'); renderE1();
}

// ════════════════════════════════
// ETAPA 1
// ════════════════════════════════
function renderE1() {
    e1Ans = false;
    const q = e1Q[e1Cur];
    setProgress('Questão', e1Cur + 1, e1Q.length, (e1Cur / e1Q.length) * 100);
    const lets = ['A', 'B', 'C', 'D'];
    const idxs = shuffle([0, 1, 2, 3]);
    document.getElementById('screen-e1').innerHTML = `
    <div class="section-eyebrow">Etapa 1 · Identificação</div>
    <div class="section-title">Reconheça o equipamento</div>
    <div class="question-card">
    <div class="question-chip">Identifique o equipamento de rede</div>
    <div class="question-illustration">${q.ill}</div>
    <div class="question-text">${q.text}</div>
    <div class="question-hint">💡 ${q.hint}</div>
    <div class="options" id="e1-opts">
        ${idxs.map((o, i) => `<div class="option" id="e1o${o}" onclick="pickE1(${o})"><div class="option-letter">${lets[i]}</div><div class="option-text">${q.opts[o]}</div></div>`).join('')}
    </div>
    <div class="feedback-box" id="e1-fb"></div>
    </div>
    <button class="btn-next" id="e1-nxt"></button>`;
}
function pickE1(c) {
    if (e1Ans) return; e1Ans = true;
    const q = e1Q[e1Cur]; const ok = c === q.correct;
    document.querySelectorAll('#e1-opts .option').forEach(o => { const id = parseInt(o.id.replace('e1o', '')); if (id === c) o.classList.add(ok ? 'correct' : 'wrong'); else if (id === q.correct && !ok) o.classList.add('correct'); o.classList.add('disabled'); });
    if (ok) { score++; e1s++; } else { wrong++; } document.getElementById('score-label').innerHTML = `✓ ${score} &nbsp;✗ ${wrong}`;
    const fb = document.getElementById('e1-fb'); fb.className = 'feedback-box ' + (ok ? 'correct' : 'wrong');
    fb.innerHTML = `<div class="feedback-header"><span>${ok ? '✅' : '❌'}</span><strong>${ok ? 'Correto!' : 'Errado!'}</strong></div><p class="feedback-text">${ok ? q.fb.c : q.fb.e}</p>`; fb.style.display = 'block';
    const btn = document.getElementById('e1-nxt'); const last = e1Cur >= e1Q.length - 1;
    btn.textContent = last ? 'Ir para Etapa 2 →' : 'Próxima questão →'; btn.classList.add('show');
    btn.onclick = last ? startE2 : () => { e1Cur++; renderE1(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
}

// ════════════════════════════════
// ETAPA 2
// ════════════════════════════════
const TOPO = `<svg id="topo-svg" viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="296" height="256" rx="8" fill="#0A1A28" stroke="#0ABFBC" stroke-width=".8"/>
<line x1="2" y1="65" x2="298" y2="65" stroke="#0ABFBC" stroke-width=".3" opacity=".15"/>
<line x1="2" y1="125" x2="298" y2="125" stroke="#0ABFBC" stroke-width=".3" opacity=".15"/>
<line x1="2" y1="185" x2="298" y2="185" stroke="#0ABFBC" stroke-width=".3" opacity=".15"/>
<line x1="100" y1="2" x2="100" y2="258" stroke="#0ABFBC" stroke-width=".3" opacity=".15"/>
<line x1="200" y1="2" x2="200" y2="258" stroke="#0ABFBC" stroke-width=".3" opacity=".15"/>
<line x1="150" y1="48" x2="150" y2="68" stroke="#0ABFBC" stroke-width="1.2" stroke-dasharray="3 2" opacity=".35"/>
<line x1="150" y1="96" x2="150" y2="116" stroke="#0ABFBC" stroke-width="1.2" stroke-dasharray="3 2" opacity=".35"/>
<line x1="150" y1="144" x2="150" y2="164" stroke="#0ABFBC" stroke-width="1.2" stroke-dasharray="3 2" opacity=".35"/>
<line x1="150" y1="192" x2="150" y2="212" stroke="#0ABFBC" stroke-width="1.2" stroke-dasharray="3 2" opacity=".35"/>
<line x1="130" y1="226" x2="100" y2="240" stroke="#0ABFBC" stroke-width="1.2" stroke-dasharray="3 2" opacity=".35"/>
<line x1="170" y1="226" x2="200" y2="240" stroke="#0ABFBC" stroke-width="1.2" stroke-dasharray="3 2" opacity=".35"/>
<g id="slot-internet"><circle cx="150" cy="30" r="18" fill="#0D2030" stroke="#FFAD6F" stroke-width="1.2" stroke-dasharray="4 3" opacity=".6"/><text x="150" y="34" text-anchor="middle" font-size="7" fill="#FFAD6F" font-family="DM Sans" opacity=".5">Internet ?</text></g>
<g id="slot-modem"><rect x="130" y="68" width="40" height="22" rx="4" fill="#0D2030" stroke="#FFAD6F" stroke-width="1.2" stroke-dasharray="4 3" opacity=".6"/><text x="150" y="82" text-anchor="middle" font-size="7" fill="#FFAD6F" font-family="DM Sans" opacity=".5">Modem ?</text></g>
<g id="slot-roteador"><rect x="126" y="116" width="48" height="22" rx="4" fill="#0D2030" stroke="#0ABFBC" stroke-width="1.2" stroke-dasharray="4 3" opacity=".6"/><text x="150" y="130" text-anchor="middle" font-size="7" fill="#0ABFBC" font-family="DM Sans" opacity=".5">Roteador ?</text></g>
<g id="slot-switch"><rect x="122" y="164" width="56" height="22" rx="4" fill="#0D2030" stroke="#0ABFBC" stroke-width="1.2" stroke-dasharray="4 3" opacity=".6"/><text x="150" y="178" text-anchor="middle" font-size="7" fill="#0ABFBC" font-family="DM Sans" opacity=".5">Switch ?</text></g>
<g id="slot-pc"><rect x="70" y="212" width="56" height="22" rx="3" fill="#0D2030" stroke="#4A9EE0" stroke-width="1.2" stroke-dasharray="4 3" opacity=".6"/><text x="98" y="226" text-anchor="middle" font-size="7" fill="#4A9EE0" font-family="DM Sans" opacity=".5">PCs ?</text><rect x="174" y="212" width="56" height="22" rx="3" fill="#0D2030" stroke="#4A9EE0" stroke-width="1.2" stroke-dasharray="4 3" opacity=".6"/><text x="202" y="226" text-anchor="middle" font-size="7" fill="#4A9EE0" font-family="DM Sans" opacity=".5">PCs ?</text></g>
<g id="placed-internet" display="none"><circle cx="150" cy="30" r="18" fill="#1A3A5C" stroke="#FFAD6F" stroke-width="1.5"/><circle cx="150" cy="28" r="8" fill="none" stroke="#FFAD6F" stroke-width=".8"/><ellipse cx="150" cy="28" rx="4" ry="8" fill="none" stroke="#FFAD6F" stroke-width=".7"/><line x1="142" y1="28" x2="158" y2="28" stroke="#FFAD6F" stroke-width=".7"/><text x="150" y="44" text-anchor="middle" font-size="6" fill="#FFAD6F" font-family="DM Sans" font-weight="600">Internet</text></g>
<g id="placed-modem" display="none"><rect x="130" y="68" width="40" height="22" rx="4" fill="#1A3A5C" stroke="#FFAD6F" stroke-width="1.5"/><circle cx="146" cy="79" r="4" fill="#162840" stroke="#FFAD6F" stroke-width="1"/><circle cx="146" cy="79" r="2" fill="#FFAD6F" opacity=".7"/><circle cx="158" cy="74" r="2" fill="#1AB078" opacity=".9"/><text x="150" y="87" text-anchor="middle" font-size="6" fill="#FFAD6F" font-family="DM Sans" font-weight="600">Modem</text></g>
<g id="placed-roteador" display="none"><rect x="126" y="116" width="48" height="22" rx="4" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><line x1="136" y1="116" x2="133" y2="108" stroke="#0ABFBC" stroke-width="1.5" stroke-linecap="round"/><circle cx="133" cy="106" r="2" fill="#0ABFBC"/><line x1="150" y1="116" x2="150" y2="107" stroke="#0ABFBC" stroke-width="1.5" stroke-linecap="round"/><circle cx="150" cy="105" r="2" fill="#0ABFBC"/><line x1="164" y1="116" x2="167" y2="108" stroke="#0ABFBC" stroke-width="1.5" stroke-linecap="round"/><circle cx="167" cy="106" r="2" fill="#0ABFBC"/><text x="150" y="134" text-anchor="middle" font-size="6" fill="#0ABFBC" font-family="DM Sans" font-weight="600">Roteador</text></g>
<g id="placed-switch" display="none"><rect x="122" y="164" width="56" height="22" rx="4" fill="#162840" stroke="#0ABFBC" stroke-width="1.5"/><rect x="127" y="168" width="8" height="6" rx="1" fill="#0ABFBC" opacity=".6"/><rect x="138" y="168" width="8" height="6" rx="1" fill="#0ABFBC" opacity=".6"/><rect x="149" y="168" width="8" height="6" rx="1" fill="#1AB078" opacity=".9"/><rect x="160" y="168" width="8" height="6" rx="1" fill="#0ABFBC" opacity=".4"/><circle cx="131" cy="180" r="1.5" fill="#1AB078" opacity=".8"/><circle cx="142" cy="180" r="1.5" fill="#1AB078" opacity=".8"/><circle cx="153" cy="180" r="1.5" fill="#0ABFBC" opacity=".8"/><text x="150" y="183" text-anchor="middle" font-size="6" fill="#0ABFBC" font-family="DM Sans" font-weight="600">Switch</text></g>
<g id="placed-pc" display="none"><rect x="70" y="212" width="56" height="22" rx="3" fill="#162840" stroke="#4A9EE0" stroke-width="1.5"/><rect x="74" y="215" width="18" height="12" rx="1.5" fill="#0D1B2A"/><rect x="96" y="215" width="18" height="12" rx="1.5" fill="#0D1B2A"/><rect x="174" y="212" width="56" height="22" rx="3" fill="#162840" stroke="#4A9EE0" stroke-width="1.5"/><rect x="178" y="215" width="18" height="12" rx="1.5" fill="#0D1B2A"/><rect x="200" y="215" width="18" height="12" rx="1.5" fill="#0D1B2A"/></g>
</svg>`;

function startE2() {
    e2Cur = 0; document.getElementById('badge-phase').textContent = 'Etapa 2/4';
    setDots(2); show('e2');
    document.getElementById('screen-e2').innerHTML = `
    <div class="section-eyebrow">Etapa 2 · Topologia</div>
    <div class="section-title">Monte a rede</div>
    <div class="section-desc">Encaixe cada equipamento no lugar correto da topologia!</div>
    <div class="topo-wrap"><div class="topo-title">Diagrama de rede</div>${TOPO}</div>
    <div class="instr-card" id="e2-instr">
    <div class="instr-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#0ABFBC" stroke-width="1.8"/><path d="M10 6v5l3 2" stroke="#0ABFBC" stroke-width="1.5" stroke-linecap="round"/></svg></div>
    <div><div class="instr-label">Elemento destacado</div><div class="instr-text" id="e2-it"></div><div class="instr-hint" id="e2-ih"></div></div>
    </div>
    <div class="topo-opts-label">Qual equipamento encaixa aqui?</div>
    <div class="topo-opts-grid" id="e2-grid"></div>
    <div class="feedback-box" id="e2-fb"></div>
    <button class="btn-next" id="e2-nxt"></button>`;
    renderE2(); window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderE2() {
    e2Ans = false;
    const st = topoSteps[e2Cur];
    setProgress('Elemento', e2Cur + 1, topoSteps.length, (e2Cur / topoSteps.length) * 100);
    document.getElementById('e2-it').textContent = st.instr;
    document.getElementById('e2-ih').textContent = '💡 ' + st.hint;
    topoSteps.forEach(s => { const el = document.getElementById(s.slotId); if (el) el.querySelectorAll('rect,circle').forEach(r => r.style.filter = ''); });
    const sl = document.getElementById(st.slotId); if (sl) sl.querySelectorAll('rect,circle').forEach(r => r.style.filter = `drop-shadow(0 0 5px ${st.highlight})`);
    const g = document.getElementById('e2-grid'); g.innerHTML = '';
    const idxs = shuffle([0, 1, 2, 3]);
    idxs.forEach(i => {
        const o = st.opts[i]; const c = document.createElement('div'); c.className = 'topo-opt'; c.id = 'e2o' + i;
        c.innerHTML = `<div class="topo-opt-icon">${o.s}</div><div class="topo-opt-name">${o.n}</div>`;
        c.addEventListener('click', () => pickE2(i, st)); g.appendChild(c);
    });
    const fb = document.getElementById('e2-fb'); fb.style.display = 'none'; fb.className = 'feedback-box';
    const btn = document.getElementById('e2-nxt'); btn.classList.remove('show'); btn.style.display = '';
}
function pickE2(c, st) {
    if (e2Ans) return; e2Ans = true; const ok = c === st.correct;
    document.querySelectorAll('#e2-grid .topo-opt').forEach(o => { const id = parseInt(o.id.replace('e2o', '')); if (id === c) o.classList.add(ok ? 'correct' : 'wrong'); else if (id === st.correct && !ok) o.classList.add('correct'); o.classList.add('disabled'); });
    if (ok) { score++; e2s++; const el = document.getElementById(st.placedId); if (el) { el.setAttribute('display', ''); el.style.animation = 'snapIn .4s cubic-bezier(.4,0,.2,1) both'; } } else { wrong++; }
    document.getElementById('score-label').innerHTML = `✓ ${score} &nbsp;✗ ${wrong}`;
    const fb = document.getElementById('e2-fb'); fb.className = 'feedback-box ' + (ok ? 'correct' : 'wrong');
    fb.innerHTML = `<div class="feedback-header"><span>${ok ? '✅' : '❌'}</span><strong>${ok ? 'Encaixe perfeito!' : 'Equipamento errado!'}</strong></div><p class="feedback-text">${ok ? st.fb.c : st.fb.e}</p>`; fb.style.display = 'block';
    const btn = document.getElementById('e2-nxt'); const last = e2Cur >= topoSteps.length - 1;
    btn.textContent = last ? 'Ir para Etapa 3 →' : 'Próximo elemento →'; btn.classList.add('show'); btn.style.display = 'flex';
    btn.onclick = last ? startE3 : () => { e2Cur++; const f = document.getElementById('e2-fb'); if (f) { f.style.display = 'none'; f.className = 'feedback-box'; } renderE2(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
}

// ════════════════════════════════
// ETAPA 3
// ════════════════════════════════
function startE3() {
    e3Campo = 0; document.getElementById('badge-phase').textContent = 'Etapa 3/4';
    setDots(3); show('e3'); window.scrollTo({ top: 0, behavior: 'smooth' }); renderE3();
}
function renderE3() {
    setProgress('Campo', e3Campo + 1, ipSc.campos.length, (e3Campo / ipSc.campos.length) * 100);
    const html = ipSc.campos.map((c, i) => {
        const done = i < e3Campo;
        return `<div class="ip-field"><div class="ip-field-label">${c.label}</div>
        <div class="ip-opts">${c.opts.map((o, j) => `<div class="ip-opt ${done && j === c.correct ? 'correct disabled' : done ? 'disabled' : i > e3Campo ? 'disabled' : ''}" id="ipo${i}_${j}" style="${i > e3Campo ? 'opacity:.3;pointer-events:none' : ''}" onclick="pickIP(${i},${j})">${o}</div>`).join('')}</div>
        <div class="ip-field-feedback ${done ? 'show' : ''} ${done ? 'ok' : ''}" id="ipfb${i}">${done ? '✅ ' + c.fb.ok : ''}</div></div>`;
    }).join('');
    document.getElementById('screen-e3').innerHTML = `
    <div class="section-eyebrow">Etapa 3 · Configuração</div>
    <div class="section-title">Configure o IP</div>
    <div class="ip-scenario"><div class="ip-scenario-label">📋 Cenário</div><div class="ip-scenario-text">${ipSc.cenario}</div></div>
    <div class="ip-fields">${html}</div>
    <button class="btn-next" id="e3-nxt" style="display:none"></button>`;
}
function pickIP(fi, oi) {
    if (fi !== e3Campo) return;
    const c = ipSc.campos[fi]; const ok = oi === c.correct;
    document.querySelectorAll(`#ipo${fi}_0,#ipo${fi}_1,#ipo${fi}_2,#ipo${fi}_3`).forEach((el, j) => { if (j === oi) el.classList.add(ok ? 'correct' : 'wrong'); else if (j === c.correct && !ok) el.classList.add('correct'); el.classList.add('disabled'); });
    if (ok) { score++; e3s++; } else { wrong++; } document.getElementById('score-label').innerHTML = `✓ ${score} &nbsp;✗ ${wrong}`;
    const fb = document.getElementById('ipfb' + fi); fb.className = 'ip-field-feedback show ' + (ok ? 'ok' : 'err'); fb.textContent = (ok ? '✅ ' : '❌ ') + (ok ? c.fb.ok : c.fb.err);
    e3Campo++;
    setTimeout(() => {
        if (e3Campo >= ipSc.campos.length) { const btn = document.getElementById('e3-nxt'); btn.textContent = 'Ir para Etapa 4 →'; btn.classList.add('show'); btn.style.display = 'flex'; btn.onclick = startE4; }
        else { renderE3(); setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100); }
    }, 400);
}

// ════════════════════════════════
// ETAPA 4
// ════════════════════════════════
function startE4() {
    e4Cur = 0; document.getElementById('badge-phase').textContent = 'Etapa 4/4';
    setDots(4); show('e4'); window.scrollTo({ top: 0, behavior: 'smooth' }); renderE4();
}
function renderE4() {
    e4Ans = false; const q = e4Q[e4Cur];
    setProgress('Questão', e4Cur + 1, e4Q.length, (e4Cur / e4Q.length) * 100);
    const lets = ['A', 'B', 'C', 'D']; const idxs = shuffle([0, 1, 2, 3]);
    document.getElementById('screen-e4').innerHTML = `
    <div class="section-eyebrow">Etapa 4 · Diagnóstico</div>
    <div class="section-title">Encontre o problema</div>
    <div class="question-card">
    <div class="question-chip">Diagnóstico de rede</div>
    <div class="question-illustration">${q.scene}</div>
    <div class="question-text">${q.text}</div>
    <div class="question-hint">💡 ${q.hint}</div>
    <div class="options" id="e4-opts">
        ${idxs.map((o, i) => `<div class="option" id="e4o${o}" onclick="pickE4(${o})"><div class="option-letter">${lets[i]}</div><div class="option-text">${q.opts[o]}</div></div>`).join('')}
    </div>
    <div class="feedback-box" id="e4-fb"></div>
    </div>
    <button class="btn-next" id="e4-nxt"></button>`;
}
function pickE4(c) {
    if (e4Ans) return; e4Ans = true; const q = e4Q[e4Cur]; const ok = c === q.correct;
    document.querySelectorAll('#e4-opts .option').forEach(o => { const id = parseInt(o.id.replace('e4o', '')); if (id === c) o.classList.add(ok ? 'correct' : 'wrong'); else if (id === q.correct && !ok) o.classList.add('correct'); o.classList.add('disabled'); });
    if (ok) { score++; e4s++; } else { wrong++; } document.getElementById('score-label').innerHTML = `✓ ${score} &nbsp;✗ ${wrong}`;
    const fb = document.getElementById('e4-fb'); fb.className = 'feedback-box ' + (ok ? 'correct' : 'wrong');
    fb.innerHTML = `<div class="feedback-header"><span>${ok ? '✅' : '❌'}</span><strong>${ok ? 'Diagnóstico correto!' : 'Não é isso!'}</strong></div><p class="feedback-text">${ok ? q.fb.c : q.fb.e}</p>`; fb.style.display = 'block';
    const btn = document.getElementById('e4-nxt'); const last = e4Cur >= e4Q.length - 1;
    btn.textContent = last ? 'Ver resultado final →' : 'Próxima questão →'; btn.classList.add('show');
    btn.onclick = last ? showResult : () => { e4Cur++; renderE4(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
}

// ════════════════════════════════
// RESULTADO
// ════════════════════════════════
function showResult() {
    document.getElementById('progress-fill').style.width = '100%';
    document.getElementById('badge-phase').textContent = 'Concluído';
    show('result'); window.scrollTo({ top: 0, behavior: 'smooth' });
    const tot = e1Q.length + topoSteps.length + ipSc.campos.length + e4Q.length;
    document.getElementById('result-den').textContent = `de ${tot} acertos`;
    document.getElementById('result-num').textContent = score;
    const pct = score / tot; const offset = 364 - (pct * 364);
    setTimeout(() => { const arc = document.getElementById('score-arc'); arc.style.transition = 'stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)'; arc.style.strokeDashoffset = offset; arc.style.stroke = pct >= .8 ? '#1AB078' : pct >= .5 ? '#F7732A' : '#E8445A'; }, 150);
    let t, s;
    if (pct === 1) { t = '🏆 Especialista em Redes!'; s = 'Perfeito em todas as etapas. Você domina identificação, topologia, configuração e diagnóstico!'; }
    else if (pct >= .8) { t = '🎉 Excelente!'; s = 'Ótimo domínio de redes. Revise as questões que errou para chegar na perfeição.'; }
    else if (pct >= .5) { t = '💪 Bom trabalho!'; s = 'Você está no caminho certo. Pratique mais configuração de IP e diagnóstico.'; }
    else { t = '📚 Continue estudando!'; s = 'Revise os conceitos de rede no material da disciplina e tente novamente.'; }
    document.getElementById('result-title').textContent = t; document.getElementById('result-subtitle').textContent = s;
    const etapas = [{ l: 'Etapa 1 · Identificação', ok: e1s, tot: e1Q.length }, { l: 'Etapa 2 · Topologia', ok: e2s, tot: topoSteps.length }, { l: 'Etapa 3 · Config. IP', ok: e3s, tot: ipSc.campos.length }, { l: 'Etapa 4 · Diagnóstico', ok: e4s, tot: e4Q.length }];
    const list = document.getElementById('breakdown-list'); list.innerHTML = '';
    etapas.forEach(e => { const row = document.createElement('div'); row.className = 'breakdown-row'; const ok = e.ok >= Math.ceil(e.tot * .7); row.innerHTML = `<div class="breakdown-label">${e.l}</div><span class="breakdown-badge ${ok ? 'ok' : 'err'}">${e.ok}/${e.tot} ${ok ? '✓' : '✗'}</span>`; list.appendChild(row); });
}
function goBack() { history.back(); }
function goHome() { window.location.href = 'index.html'; }
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}