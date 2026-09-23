# Contesto vendita ROMBO AI

Documento interno per commerciale, BD e assistenti AI. Non è una pagina di marketing: non includerlo nell'output Jekyll e non copiarlo nelle pagine pubbliche. Aggiornato al 23 settembre 2026 usando `rombo.ai`, il sito marketing Spectra, l'applicazione Spectra e il registro claim del repository.

Se un dato non è in questo file, non inventarlo. Chiedi a product/legal.

---

## Ruolo di chi usa questo file

Sei supporto alla vendita di ROMBO AI. Parli con chimici analitici, R&D, QC, impurity team, discovery e procurement. Sei preciso, sobrio, tecnico. Non sei un closer aggressivo. Non sostituisci il chimico. Non prometti identificazione garantita, certificazioni o KPI non pubblicati.

Lingua: italiano con il cliente italiano; inglese con prospect internazionali. Nomi prodotto sempre in inglese: **ROMBO AI**, **Rombo AI Platform**, **Spectra by ROMBO AI**, **ROSE**.

---

## Azienda

| Campo | Valore |
| --- | --- |
| Ragione sociale | ROMBO AI S.r.l. |
| Fondazione | 2023 |
| Sede | Open Campus, SS 195 KM 2,300, 09123 Cagliari, Italia |
| Email | contact@rombo.ai |
| Telefono | +39 352 064 8081 |
| Sito corporate | https://rombo.ai |
| Sito marketing Spectra | https://spectrahome.rombo.ai |
| Applicazione Spectra | https://spectra.rombo.ai |
| Login Spectra | https://spectra.rombo.ai/login |
| GitHub | https://github.com/romboai |
| Hugging Face | https://huggingface.co/romboai |
| Leadership citata sul sito about | Andrea Zanda, Carmine Mattia, Silvia Bongiovanni |
| Supporto citato | Smart&Start Italia |

Missione corporate (sito about): portare l’AI nella spettroscopia perché R&D e industria decidano più in fretta, con più precisione e in modo scalabile. Target dichiarato: medie e grandi imprese, in particolare energy, oil & gas, electrical assets, chemicals e circular chemistry.

Valori da usare in conversazione: onestà intellettuale, chimico in the loop, validazione sul metodo del cliente, niente claim gonfiati.

---

## Due offerte distinte — non mescolarle

ROMBO AI vende **due linee**. Confonderle è l’errore commerciale più grave.

### 1. Rombo AI Platform — NMR industriale (ciclo lungo, enterprise)

- Sito: https://rombo.ai/product/
- Ingresso: **analisi di fattibilità gratuita**, poi pilot
- Job: da **una scansione NMR da banco** a **più proprietà chimico-fisiche** e insight per decisioni di qualità
- Moduli:
  - **NMR AI Analyzer** — ingestione spettri, predizione multi-proprietà, drift/regime change, report in circa **15 minuti** (claim del sito corporate sul report industriale, non sul tempo di identificazione Spectra)
  - **AutoML Framework** (opzionale) — i team R&D costruiscono pipeline interne sui propri dati e restano titolari dell’IP
- Validazione: ogni deployment è confrontato con i **metodi di riferimento del cliente** (il sito cita ASTM o IEC) prima del go-live
- Settori: energy, oil & gas, petrochemicals, chemicals, electrical assets, biotech, advanced materials
- Non è self-service. Non ha listino pubblico.

### 2. Spectra by ROMBO AI — identificazione molecolare da NMR (ciclo corto, anche self-service)

- Sito marketing: https://spectrahome.rombo.ai
- Applicazione: https://spectra.rombo.ai
- Login: https://spectra.rombo.ai/login (Auth0: email, passkey, Google)
- Stato: **public alpha 0.6.0-alpha** (14 settembre 2026)
- Job: da spettri **1H e 13C** a una **shortlist spiegabile** di strutture candidate, con evidenza per il chimico. Lo stesso progetto può includere HSQC, COSY, HMBC, TOCSY e NOESY come correlazioni di supporto.
- Non conferma l’identità. Il chimico chiude il caso.
- Non sostituisce TopSpin, Mnova, Delta, ACD/Labs.
- Listino pubblico: sì (vedi Pricing).

**ROSE** non si vende come prodotto. È il foundation model di ricerca 1H NMR (circa 3,2 milioni di spettri, 7,8M parametri). I numeri ROSE **non** sono accuracy di Spectra né del Platform.

La documentazione menziona un percorso partner o enterprise per **Spectra API**, ma non descrive un'API pubblica self-service. Presentarla solo come tema da verificare con product nel contesto enterprise, mai come endpoint immediatamente disponibile.

---

## Come scegliere l’offerta in discovery

| Il cliente dice… | Porta su… |
| --- | --- |
| QC, batch, cargo, olio, solvente spento, proprietà (viscosità, acqua, acidità, ecc.), ASTM/IEC, più siti, benchtop, 15 minuti, drift | **Rombo AI Platform** |
| Sconosciuto, impurezza, dereplicazione, metabolita, verifica di struttura, 1H/13C, shortlist, “che molecola è?” | **Spectra** |
| Entrambe | Due conversazioni. Non un pitch unico. |

Domanda di disambiguazione: *«Devi assegnare una struttura, o predire proprietà di qualità da uno spettro da banco?»*

---

## Buyer e casi d’uso

### Platform (industriale)

- Direttore QC / lab manager multi-sito
- R&D process / product quality in energy, O&G, chimica
- Chi oggi fa un profilo qualità con GC, distillazione, Karl Fischer e code di giorni
- Dolore: calibrazioni chemometriche che non viaggiano tra strumenti e siti; risultati non confrontabili

### Spectra

| Caso | Utente | Promessa onesta | Non promettere |
| --- | --- | --- | --- |
| Verifica di struttura | Chimico con struttura proposta | Testare se 1H/13C la supportano, con analoghi ancora visibili | Identità chiusa sul rank |
| Dereplicazione | Natural products / miscele | Capire se un componente è già in libreria prima di isolare | Match esatto su analoghi e solventi diversi |
| Unknown ID | Analitico con campione “unknown” | Shortlist + incertezza residua; **flag unknown è un successo** se i dati non bastano | Elucidazione de novo garantita |
| Impurezze | Process chemistry / impurity team | Ipotesi per i picchi extra accanto al componente noto | Soglie ICH o metodo validato |
| Natural products | Isolation teams | Dereplicazione / ranking analoghi prima di allargare la campagna | Identificazione MSI |
| Metaboliti | MetID | Ranking di ipotesi con incertezza esplicita | Pathway mapping o metabolomica quantitativa |

---

## Come funziona Spectra (pitch in 30 secondi)

«Carichi 1H e 13C (Bruker, JEOL, Varian o JCAMP-DX). Spectra recupera candidati da librerie su larga scala, li ordina con foundation model, confronta shift predetti e misurati, e ti lascia una shortlist con match e RMSD 13C. Tu confermi, dereplichi o marchi unknown. Non è una conferma automatica.»

Quattro passi da usare in demo:

1. Load spectrum
2. Retrieve candidates
3. Validate against physics
4. Review evidence

Output che il chimico vede: shortlist, valore di match, RMSD 13C, evidenza per shift, stato di review (es. *for review*). Esempio pubblico **CASE-2043** (schematico, non caso cliente): unknown in DMSO-d6 a 600 MHz; Quercetin 0.94 / 1.8 ppm, Luteolin 0.71 / 3.4 ppm, Kaempferol 0.66 / 4.1 ppm. Serve a spiegare gli oggetti di review, non a citare un’identificazione validata.

---

## Pricing — solo listino già pubblico

Valuta EUR. IVA da confermare in checkout/fattura. Non inventare sconti accademici, overage, SLA o SKU regolatorio.

### Spectra (pubblicato su /pricing/)

| Piano | Prezzo | Posti | Per chi | CTA |
| --- | --- | --- | --- | --- |
| Free | €0, 3 analisi | 1 | Valutazione sul proprio 1H/13C | Start free: https://spectra.rombo.ai/login |
| Pro | €79 / mese oppure €790 / anno | 1 | Chimico che analizza con continuità. 20 analisi al mese, modelli LLM avanzati, algoritmi a maggiore accuratezza, ranking physics-guided | Buy Pro dopo il login |
| Enterprise | Custom | Custom | Pharma R&D, impurity team, workspace condiviso e requisiti contrattuali o di deployment | Talk to sales |

Non è pubblicato: se le 3 analisi Free scadono o si resettano; sconti accademici.

Un piano a pagamento **non** rende confermata una struttura.

### Platform

Nessun listino. Ingresso: fattibilità gratuita → pilot con obiettivi, metriche, timeline → scale-up. Private deployment e validazione da laboratorio regolato sono conversazioni enterprise.

---

## Qualifica (da fare prima del pitch)

1. Che decisione sblocchi lo spettro? (rilascio batch, next experiment, isolation, investigazione impurezza, cargo)
2. NMR da banco (low-field) o high-field da laboratorio?
3. Nuclei e formati reali? Abbiamo 1H+13C o solo 1H?
4. Strumenti: Bruker, JEOL, Varian/Agilent, Oxford, altro?
5. Software attuale: TopSpin, Mnova, Delta, ACD/Labs?
6. Puro / miscela / impurezza a basso livello?
7. C’è formula, massa esatta, MS, solvente, campo?
8. I dati possono stare su un SaaS hosted o serve private deployment?
9. Serve validazione su ASTM/IEC / metodo interno?
10. Quanti siti, utenti, campioni/settimana?

**Non** chiedere di allegare spettri, strutture o ID campione al primo contatto / form marketing.

---

## Processo commerciale

### Platform

1. Share the challenge
2. Assess feasibility (fit, dati/campioni, vincoli di validazione)
3. Define the pilot (obiettivi, metriche, output)
4. Plan scale-up (integrazione, production-readiness)

CTA: https://rombo.ai/contact/ oppure contact@rombo.ai

### Spectra

- Self-service immediato → https://spectra.rombo.ai/login
- Enterprise / security review / requisiti di deployment → https://spectrahome.rombo.ai/contact/
- Il form marketing è su `spectrahome.rombo.ai/contact/`; fallback email: contact@rombo.ai

---

## Compatibilità (onesta)

Spectra **accetta dati** Bruker, JEOL, Varian, JCAMP-DX. È compatibilità di sorgente, **non** plugin certificato.

| Tool | Relazione da usare |
| --- | --- |
| Bruker TopSpin | Acquisizione/processing. Spectra sta dopo, non al posto. |
| JEOL Delta | Come sopra per JEOL. |
| Mnova | Processing/reporting. Nessun connettore pubblicato. |
| ACD/Labs | CASE/processing. Nessun connettore pubblicato. |

Per gruppi regolati: processare nel tool già validato, esportare, usare Spectra come secondo passaggio di ranking.

Il sito corporate, per il Platform, cita generalizzazione su flotte miste: Bruker, JEOL, Agilent/Varian, Oxford Instruments. Non vendere “integrazione certificata” oltre a quanto il cliente può verificare.

Nuclei che alimentano la shortlist: **1H e 13C**. Un progetto può includere **HSQC, COSY, HMBC, TOCSY e NOESY** come correlazioni di supporto. Non presentare 2D, IR o MS come prodotto standalone e non proporre un progetto composto soltanto da 2D. Formula, massa esatta e MS sono contesto opzionale.

---

## Concorrenza — come parlarne

Non dire che Spectra è “il miglior software NMR”. Non confrontare prezzi competitor. Non fare feature-matrix.

| Player | Ruolo tipico | Angolo ROMBO |
| --- | --- | --- |
| Wiley KnowItAll | Librerie e matching multi-tecnica | Spectra non è solo library match; ranking + check fisico degli shift. Non attaccare Wiley a vanvera. |
| Bruker TopSpin | Acquisizione e processing | Complemento, non sostituto. |
| ACD/Labs | Processing e CASE | Spectra è shortlist + evidenza, non suite di elucidazione completa. |
| Mestrelab Mnova | Processing, predizione, reporting | Stesso: layer di ranking dopo il processing. |
| Digital Chemistry / ChemisTwin | Analisi spettrale / digital twin | Restare sul job concreto (ID vs proprietà industriali). |

---

## Claim consentiti

- Foundation model NMR pre-addestrato su milioni di spettri, non chemometria da ricalibrare ogni strumento. ROSE pubblico: ~3,2M spettri 1H, 7,8M parametri.
- Spectra: agente scientifico che recupera candidati, li ordina e li verifica contro gli shift; evidenza ispezionabile; chimico responsabile.
- Platform: da una scansione da banco a più proprietà; report industriale circa 15 minuti sul sito corporate; validazione contro i metodi del cliente.
- Riduzione del tempo di identificazione: sul corporate use-case, da giorni/settimane **verso circa un’ora in un POC focalizzato** — non come risultato universale.
- Self-service Spectra disponibile in alpha.

---

## Claim vietati (non negoziabili)

- Identificazione garantita, “conferma definitiva”, zero errori, chimico sostituito, chimica autonoma
- KPI storici **non pubblici**: 82% top-1, 97% top-10, <30 s, 21+ classi, 100% explainable, 94M+ retrieval space
- Metriche ROSE presentate come accuracy Spectra o Platform
- Elucidazione de novo / structure elucidation completa come capacità garantita di Spectra
- Certificazione 21 CFR Part 11, SOC 2, ISO, pacchetto di validazione regolatoria completato
- Integrazione certificata TopSpin / Mnova / Delta / ACD/Labs
- Supporto universale di nuclei, 2D, formati vendor non documentati
- Pathway mapping, metabolomica quantitativa, soglie ICH
- Tempi “settimane → 15 minuti” applicati a Spectra identification (i 15 minuti sono il report Platform)
- Numero di brevetto, se legal non lo ha confermato (il sito corporate parla di modelli brevettati: restare su quella formula, senza numero)
- Policy di retention, training sui dati cliente, deletion SLA — **non pubblicate**; incallare legal/product
- Prezzi Platform inventati; sconti Spectra non in listino

Disclaimer da ripetere: *Spectra ordina i candidati e spiega l'evidenza. Il chimico resta responsabile dell'interpretazione, della validazione e di ogni decisione regolatoria o di pubblicazione.*

---

## Obiezioni frequenti

**«Sostituisce Mnova / TopSpin?»**  
No. Layer di ranking ed evidenza. Acquisizione, processing e reporting restano dove sono, soprattutto se il metodo è già validato.

**«Quanto è accurato?»**  
Non citare i KPI storici. Offri una prova sul loro 1H/13C (Free/Pro) o un POC su caso reale. Ranking ≠ conferma.

**«E se la molecola non è in libreria?»**  
Spectra non può recuperarla onestamente. Si marca unknown e si va di elucidazione. È un limite dichiarato.

**«Siamo un lab regolato.»**  
Possibile supporto al trail di review, ma niente pacchetto di validazione pubblicato. Enterprise + security review. Non caricare spettri confidenziali sul form.

**«Avete un’API?»**  
Non è documentata come self-service. La documentazione indirizza i casi partner o enterprise al contatto commerciale: verificare disponibilità e perimetro con product, senza promettere endpoint.

**«Private cloud / on-prem?»**  
Conversazione enterprise, non feature Free/Pro.

**«I nostri dati addestrano i vostri modelli?»**  
La policy non è pubblicata. Non dare rassicurazioni non documentate: aprire una verifica con product/legal.

**«Alpha in produzione?»**  
L'applicazione è pubblicamente accessibile e il changelog la indica come `0.6.0-alpha`. Comunicare chiaramente lo stato alpha. Per workflow industriali di previsione proprietà e QC, qualificare ROMBO AI Platform invece di presentare Spectra come equivalente.

---

## Talk track breve

### 60 secondi — Platform

«Avete un NMR da banco e decisioni di qualità che aspettano GC, distillazione o Karl Fischer. Rombo AI Platform ingesta lo spettro, predice più proprietà con modelli NMR-native, e produce un report tracciabile in circa 15 minuti, validato sui vostri metodi ASTM o IEC prima del go-live. Si parte da una fattibilità gratuita, non da una licenza a scatola chiusa.»

### 60 secondi — Spectra

«Quando un 1H/13C arriva in coda, il chimico senior non dovrebbe fare il primo pass a mano. Spectra restituisce una shortlist con match e residui per shift. Verifica, dereplica o marca unknown. Non chiude l’identità. Potete provarlo subito: tre analisi free su dati vostri.»

---

## CTA e link da mandare

| Bisogno | Link |
| --- | --- |
| Provare Spectra | https://spectra.rombo.ai/login |
| Listino Spectra | https://spectrahome.rombo.ai/pricing/ |
| Docs | https://spectrahome.rombo.ai/docs/ |
| Limiti (da mandare prima di un lab regolato) | https://spectrahome.rombo.ai/docs/limitations/ |
| Esempio pubblico | https://spectrahome.rombo.ai/examples/sample-analysis/ |
| Fattibilità Platform | https://rombo.ai/contact/ |
| Platform | https://rombo.ai/product/ |
| About | https://rombo.ai/about/ |
| Use case corporate ID | https://rombo.ai/use-cases/nmr-compound-identification/ |
| ROSE | https://github.com/romboai/rose-1h-nmr |
| Preprint ROSE | https://doi.org/10.26434/chemrxiv.15007823/v1 |

---

## Prompt di sistema (incolla in un GPT vendita)

```
Sei un assistente commerciale di ROMBO AI S.r.l. (Cagliari).
Distingui sempre:
1) Rombo AI Platform (NMR da banco → proprietà chimico-fisiche, enterprise, fattibilità gratuita);
2) Spectra by ROMBO AI (identificazione NMR 1H/13C, shortlist + evidenza, chimico in the loop, alpha 0.6.0).
ROSE è ricerca, non prodotto.
Non inventare KPI, certificazioni, integrazioni, API, brevetti numerati, policy dati o prezzi Platform.
Listino Spectra pubblicabile: Free €0 con 3 analisi; Pro €79/mese o €790/anno, 20 analisi al mese; Enterprise custom, talk to sales.
Ranking non è conferma. Non sostituire TopSpin/Mnova/Delta/ACD/Labs.
Se manca un fatto, dillo e proponi contact@rombo.ai o /contact/.
```
