const books = [{'titolo': 'Titolo e sottotitolo del libro in corsivo ', 'autore': '', 'casa_editrice': '', 'luogo_anno': '', 'isbn': '', 'tema': ''},
     {'titolo': '1. La madonna della Civita Itinerari Culturali nei Simboli, nei linguaggi e nella storia', 'autore': '-', 'casa_editrice': 'Fratelli Palombari Editori', 'luogo_anno': 'Roma, 1996', 'isbn': '88-7621-822-X ', 'tema': 'religioso'}, {'titolo': '2. L’archeologia industriale nel Lazio, Storia e recupero', 'autore': 'Natoli Marina', 'casa_editrice': 'Fratelli Palombari Editori', 'luogo_anno': 'Roma, 1999', 'isbn': '88-7621-241-8', 'tema': 'Archeologia industriale laziale'}, {'titolo': '3. Per un archivio filmografico del costume laziale Catalogo di documenti video-filmici conservati in archivi pubblici e privati di Roma', 'autore': 'Stefania Leone, Sabrina Varroni', 'casa_editrice': 'Nuova Editrice Roma srl ', 'luogo_anno': 'Roma, 1992', 'isbn': '88-85085-10-5', 'tema': 'archivio filografico'}, {'titolo': '5. Terracina passeggiate fuori le mura', 'autore': 'Emilio Selvaggi', 'casa_editrice': ' Armando Caramanica Editore ', 'luogo_anno': 'Marina di Minturno, 1996', 'isbn': '88-86261-30-6', 'tema': 'Luoghi turistici Terracina'}, {'titolo': '6. Il passo del Garigliano nella storia d’Italia, Il ponte di Luigi Giura', 'autore': 'Di Biasio Aldo', 'casa_editrice': 'Armando Caramanica Editore', 'luogo_anno': 'Marina di Minturno (LT), 1994', 'isbn': '88-86261-10-1', 'tema': 'storia del ponte del Garigliano'},
      {'titolo': '7. La Malaria Scienza,Storia, Cultura, Storia della lotta alla malaria nel territorio pontino e fondano', 'autore': '-', 'casa_editrice': 'IGER srl', 'luogo_anno': 'Roma, 1994', 'isbn': '-', 'tema': 'la malaria'}, {'titolo': '8. Modena Capitale dell’arte Salumiera Gli statuti dell’arte dei salsicciai e lardaroli 1589-1763', 'autore': 'Maria Cristina Manfredini', 'casa_editrice': 'ArteStampa Modena', 'luogo_anno': 'Modena, 1995', 'isbn': '-', 'tema': 'Arte Salumiera, Salame'}, {'titolo': '9. Monitoraggio delle acque interne e carta ittica della provincia di Latina: i bacini campione del fiume Amaseno e del lago di Fondi', 'autore': 'Zerunian S. e Leone M.', 'casa_editrice': 'Carlo Marra snc ', 'luogo_anno': 'Latina, 1996', 'isbn': '-', 'tema': 'monitoraggio acque e carta ittica - prov. Latina'}, {'titolo': '10. Comune di Bassiano, Diritto Municipale dei Bassianesi Statuti di Bassiano 1541', 'autore': 'mancante', 'casa_editrice': 'Carlo Marra snc', 'luogo_anno': 'Latina, 1996', 'isbn': '-', 'tema': 'Statuti di Bassiano'}, {'titolo': '11. IL PONTE: periodico indipendente di informazione, raccolta di testate giornalistiche', 'autore': 'rivedere', 'casa_editrice': 'rivedere', 'luogo_anno': 'rivedere', 'isbn': '-', 'tema': 'rivedere'}, {'titolo': "12.Storia di Civitavecchia, Dalle origini agli albori dell'età moderna da Traiano a Paolo II", 'autore': 'Toti Odoardo', 'casa_editrice': 'La Litografica snc', 'luogo_anno': 'Civitavecchia, 1992', 'isbn': '-', 'tema': 'storico'}, {'titolo': '13. Storia di Civitavecchia da Sisto Pio IV a Pio VI', 'autore': 'Toti Odoardo', 'casa_editrice': 'assente', 'luogo_anno': 1996, 'isbn': '-', 'tema': 'storico'},
       {'titolo': '14.Centocelle, La città leoniana di centumcellae (leopoli-cencelle)', 'autore': 'Toti Odoardo', 'casa_editrice': 'assente', 'luogo_anno': ' (2ª edizione)', 'isbn': '-', 'tema': ' addenda al vol.1 della “Storia di Civitavecchia”'}, {'titolo': '15. Immagini dalla terra di S.Benedetto e S. Tommaso d’Aquino Terzo Millennio', 'autore': 'Amedeo Carrocci', 'casa_editrice': 'assente', 'luogo_anno': 'Formia, 1998', 'isbn': '-', 'tema': 'storico-religioso'}, {'titolo': '16. Atina dall’alto medioevo alla fine dell’età feudale storia, fortificazioni, topografia e arte', 'autore': 'Marcello Rizzello e Antonio Sorrentino', 'casa_editrice': 'Edizioni Albatros', 'luogo_anno': 'Gaeta, 1993', 'isbn': '-', 'tema': 'arte, storia, topografia'}, {'titolo': '17. Il dialetto di San Donato in Val Comino', 'autore': 'Daniela Farina', 'casa_editrice': 'GraficArt snc', 'luogo_anno': 'Formia, 2001', 'isbn': '-', 'tema': 'linguistica'}, {'titolo': '18. Valle di Comino… appena ieri ', 'autore': 'Luciano Caira e Vincenzo Orlandi', 'casa_editrice': 'Edizioni Albatros', 'luogo_anno': 'Gaeta ', 'isbn': '-', 'tema': 'storico-geografico'}, {'titolo': '19. -', 'autore': '-', 'casa_editrice': '-', 'luogo_anno': '-', 'isbn': '-', 'tema': '-'}, {'titolo': '20. Sant’Onorato e Fondi tra il V e VI secolo', 'autore': 'Luigi Mancini', 'casa_editrice': '-', 'luogo_anno': 2001, 'isbn': '-', 'tema': 'storico urbano'}, {'titolo': '21.‘Nu fiore Spenuse (un fiore spinoso) Sensazioni e divagazioni in uno zibaldone fondano', 'autore': ' Emilio Rosati', 'casa_editrice': 'Confrontographic', 'luogo_anno': 1998, 'isbn': '-', 'tema': '-'}, {'titolo': '22. La difesa delle acque della Marina Costiera della Provincia di Latina ai fini ambientali e sanitari', 'autore': 'Azienda Unità Sanitaria Locale - Latina', 'casa_editrice': 'Arti Grafiche KOLBE Srl ', 'luogo_anno': 'Fondi, 1995', 'isbn': '-', 'tema': 'Amministrazione Provinciale di Latina'}, {'titolo': '23. Parrocchia Santa Maria Maggiore, Gesù Cristo e le attese degli uomini all’alba del terzo millennio', 'autore': '-', 'casa_editrice': 'Lenola Tipografia 3D Grafica ', 'luogo_anno': 'Fondi, 2000', 'isbn': '-', 'tema': 'religioso'}, 
       {'titolo': '24. -', 'autore': '-', 'casa_editrice': '-', 'luogo_anno': '-', 'isbn': '-', 'tema': '-'}, {'titolo': "25. L'erbario di Carlo Grossi farmacista di Lenola", 'autore': 'Raniero De Filippis e Fernando Lucchese', 'casa_editrice': 'Roma, New Pubblihouse', 'luogo_anno': 'Roma', 'isbn': '-', 'tema': 'erbario'}, {'titolo': '26. La cartografia dei beni storici, archeologici e paesistici nelle grandi aree urbane dal censimento alla tutela ', 'autore': 'Comune di Roma e Regione Lazio,', 'casa_editrice': 'Edizioni Quasar', 'luogo_anno': 'Roma,1994', 'isbn': '88-7140-065-8', 'tema': 'Atti del convegno di Roma'}, {'titolo': '27. Repertorio dei siti protostorici del Lazio (Province di Rieti e di Latina)', 'autore': ' Clarissa Bardelli e Paola Pascucci', 'casa_editrice': 'Nuova Tiporom ', 'luogo_anno': 'Roma, 1996 ', 'isbn': '-', 'tema': 'siti storici laziali'}, {'titolo': '28. Formia Romana Volume Primo, Pratola di Serra', 'autore': 'Elisa Romano', 'casa_editrice': 'Top Print Arti Grafiche ', 'luogo_anno': '-', 'isbn': '-', 'tema': 'storico'}, {'titolo': '29. Formia Medievale Storia illustrata di Formia (volume secondo), Pratola di Serra', 'autore': 'Mario D’Onofrio', 'casa_editrice': 'Elio Sellino Editore srl', 'luogo_anno': '-', 'isbn': '-', 'tema': 'storico'}, {'titolo': '30. Formia in età moderna Storia illustrata di Formia (Volume terzo), Pratola di Serra', 'autore': 'Aldo Di Biasio', 'casa_editrice': 'Elio Sellino Editore srl', 'luogo_anno': '-', 'isbn': '-', 'tema': 'storico'}, {'titolo': '31. Formia in età contemporanea Storia illustrata di Formia (Volume quarto), Pratola di Serra', 'autore': 'Giacomo Sottoriva', 'casa_editrice': 'Elio Sellino Editore srl', 'luogo_anno': '-', 'isbn': '-', 'tema': 'storico'}, {'titolo': '32. Mare di Gaeta immagini di profonda bellezza', 'autore': 'Adriano Madonna', 'casa_editrice': 'Arti Grafiche Caramanica', 'luogo_anno': 'Marina di Minturno, 1998', 'isbn': '-', 'tema': 'paesaggio'}, 
       {'titolo': '33. Castelli del Lazio meridionale', 'autore': 'Gioacchino Giammaria', 'casa_editrice': 'Editori Laterza', 'luogo_anno': 'Roma, 1998', 'isbn': '88-86261-50-0', 'tema': 'storico'}, {'titolo': '34. Universitas Civium atti dell’anno sociale 1996-1997', 'autore': 'Archeoclub D’Italia', 'casa_editrice': 'La Monastica', 'luogo_anno': 'Cassino, 1997', 'isbn': '-', 'tema': 'atti storici'}, {'titolo': '35. Formianum atti del convegno di studi sull’antico territorio di Formia I-1993', 'autore': 'Archeoclub D’Italia', 'casa_editrice': 'Caramanica Editore', 'luogo_anno': 'Marina di Minturno, 1994', 'isbn': '88-86261-11-X', 'tema': 'atti storici'}, {'titolo': '36.  Formianum atti del convegno di studi sull’antico territorio di Formia II-1994', 'autore': 'Archeoclub D’Italia', 'casa_editrice': 'Caramanica Editore', 'luogo_anno': 'Marina di Minturno, 1995', 'isbn': '88-86261-22-5', 'tema': 'atti storici'}, {'titolo': '37. Formianum atti del convegno di studi sull’antico di Formia III-1995', 'autore': 'Archeoclub D’Italia', 'casa_editrice': 'Caramanica Editore', 'luogo_anno': 'Marina di Minturno, 1996', 'isbn': ' 88-86261-38-1', 'tema': 'atti storici'}, {'titolo': "38. Formianum, atti del convegno di studi sull'antico di Formia IV-1996", 'autore': 'Archeoclub D’Italia', 'casa_editrice': 'Caramanica Editore', 'luogo_anno': 'Marina di Minturno, 1998', 'isbn': '88-86261-63-2', 'tema': 'atti storici'}, {'titolo': '39. Formianum, atti del convegno di studi sui giacimenti culturali del lazio meridionale V-1997', 'autore': 'Archeoclub D’Italia', 'casa_editrice': 'Caramanica Editore', 'luogo_anno': 'Marina di Minturno, 2000', 'isbn': '88-86261-81-0', 'tema': 'atti storici'}, {'titolo': '40. La popolazione del Lazio Meridionale nei secoli XVII-XVIII: Rilievi sull’andamento demografico nella Terra S. Benedicti in epoca post-tridentina', 'autore': 'Maria Crescenza Carrocci', 'casa_editrice': 'Graficart snc ', 'luogo_anno': ' Formia, 1993', 'isbn': '-', 'tema': 'rilievo demografico'}, {'titolo': '41. Lo scisma d’Occidente, il conclave di Fondi', 'autore': 'Carlo Macaro', 'casa_editrice': 'Arti Grafiche KOLBE', 'luogo_anno': 'Fondi, 1998', 'isbn': '-', 'tema': 'storico-religioso'}, 
       {'titolo': '42. La repubblica napoletana del 1799, mostra di documenti manoscritti e libri a stampa', 'autore': 'Biblioteca nazionale di napoli', 'casa_editrice': ' (ed.speciale a cura del comune di Formia)', 'luogo_anno': 'Marina di Minturno (LT), 1996', 'isbn': '-', 'tema': 'manoscritti '}, {'titolo': '43. Il trasformismo (1876-1896)', 'autore': 'Michele Graziosetto', 'casa_editrice': ' Edizione “IL PONTE”', 'luogo_anno': 'Fondi, 1987. ', 'isbn': '-', 'tema': 'storico'}, {'titolo': '44. La Casata Testa e le sue diramazioni in Italia', 'autore': 'Teodoro Di Nardo', 'casa_editrice': '-', 'luogo_anno': 'Roma, 1995', 'isbn': '-', 'tema': 'storico'}, {'titolo': '45. Mercanti e banchieri a Modena dal XIII al XVIII secolo', 'autore': 'Marco Cattini', 'casa_editrice': 'Poligrafo Artioli spa', 'luogo_anno': '-', 'isbn': '-', 'tema': 'storico-economico'}, {'titolo': "46. Incunaboli e cinquecentine nelle biblioteche di sessa, in appendice L'istituzione dei seminari nel nostro territorio", 'autore': 'Giampiero di Marco', 'casa_editrice': ' Caramanica Editore', 'luogo_anno': 'Marina di Minturno, 1997', 'isbn': '88-86261-51-9 ', 'tema': 'biblioteche'}, {'titolo': '47. L’amministrazione del debito pubblico nelle Province romane', 'autore': 'Maria Grazia Pastura Ruggiero', 'casa_editrice': 'Tipografia L’Economica', 'luogo_anno': 'Roma, 1991', 'isbn': '-', 'tema': 'storico-economico'}, {'titolo': '48. Rotary e Territorio, Memorie-Presenze-Prospettive', 'autore': 'Rotary club', 'casa_editrice': 'Caramanica Editore ', 'luogo_anno': 'Marina di Minturno, 1995', 'isbn': '88-86261-23-3', 'tema': 'territorio'}, {'titolo': '49. Storia di Terracina ', 'autore': 'Arturo Bianchini', 'casa_editrice': 'III Edizione', 'luogo_anno': '-', 'isbn': '-', 'tema': 'territorio, storico'}, {'titolo': '50.Divina geometria, modelli urbani degli anni Trenta', 'autore': ' Eugenio Lo Sardo', 'casa_editrice': 'maschietto&musolino', 'luogo_anno': 'Siena, 1995', 'isbn': '88-86404-20-4', 'tema': 'architettura'}, {'titolo': '51.  Pontecorvesità', 'autore': 'Bernardino Pulcini', 'casa_editrice': 'Grafic art snc', 'luogo_anno': 'Formia, 1999', 'isbn': '-', 'tema': 'territorio'},
        {'titolo': '52. Il Congresso Accademico romano e la redazione del catalogo delle manifatture dello Stato pontificio', 'autore': 'Marina Morena', 'casa_editrice': 'Tipografia L’Economica', 'luogo_anno': 'Roma, 1997', 'isbn': '-', 'tema': 'storico-religioso'}, {'titolo': '53. Consulta straordinaria per gli stati romani (1809-1810)', 'autore': 'Carla Nardi', 'casa_editrice': '-', 'luogo_anno': 1990, 'isbn': '-', 'tema': 'di: archivio di Stato di Roma'}, {'titolo': '54.Le gabelle e le dogane dei Papi in età moderna Inventario della serie Dogane della Miscellanea camerale per materie', 'autore': 'Eugenio Lo Sardo', 'casa_editrice': 'Tipografia L’Economica', 'luogo_anno': 'Roma, 1994', 'isbn': '-', 'tema': 'religioso'}, {'titolo': '55. La reverenda camera apostolica e i suoi archivi (secoli XV-XVIII)', 'autore': 'Maria Grazia Pastura Ruggiero(e Paolo Cherubini, Luigi Londei, Marina Morena e Daniela Sinisi', 'casa_editrice': '', 'luogo_anno': 'Roma, 1987', 'isbn': '-', 'tema': 'di: archivio di Stato di Roma'}, {'titolo': '56. La direzione generale di polizia dello stato pontificio: archivio del protocollo ordinario (1816-1870)', 'autore': ' Monica Calzolari, Elvira Grantaliano', 'casa_editrice': '-', 'luogo_anno': 'Roma, 1997.', 'isbn': '-', 'tema': 'archivio protocollo'}, {'titolo': '57. -', 'autore': '-', 'casa_editrice': '-', 'luogo_anno': '-', 'isbn': '-', 'tema': '-'}, 
       {'titolo': '58. Annali del Lazio meridionale Storia e storiografia', 'autore': '-', 'casa_editrice': 'ConfrontoGraphic', 'luogo_anno': 'Fondi, 2001', 'isbn': '-', 'tema': 'annali storici'}, {'titolo': '59. Annali del Lazio Meridionale, Storia e storiografia', 'autore': '-', 'casa_editrice': 'ConfrontoGraphic', 'luogo_anno': 'Fondi, 2002', 'isbn': '-', 'tema': 'annali storici'}, {'titolo': '60. Studi e documenti sul Lazio meridionale, La terra S.Benedicti nei disegni ad acquerello di Marcello Guglielmelli (1715-1717)', 'autore': 'Archivio storico di Montecassino', 'casa_editrice': 'Pubblicazioni Cassinesi di Montecassino ', 'luogo_anno': 'Montecassino, 1994', 'isbn': '-', 'tema': 'storico-religioso'}, {'titolo': '61. Il Lazio meridionale tra antichità e medioevo', 'autore': 'Angelo Nicosia', 'casa_editrice': 'Arti Grafiche Caramanica', 'luogo_anno': 'Marina di Minturno, 1995', 'isbn': '88-86261-12-8', 'tema': 'storico'}, {'titolo': '62. -', 'autore': '-', 'casa_editrice': '-', 'luogo_anno': '-', 'isbn': '-', 'tema': '-'}, {'titolo': '63. -', 'autore': '-', 'casa_editrice': '-', 'luogo_anno': '-', 'isbn': '-', 'tema': '-'}, {'titolo': '64. Codice Diplomatico Gaetano, volume III', 'autore': 'Salvatore Riciniello', 'casa_editrice': 'Gaetagrafiche', 'luogo_anno': 'Gaeta, 1991', 'isbn': '-', 'tema': 'codice'}, {'titolo': '65. Codice Diplomatico di Gaeta Volume IV', 'autore': 'Salvatore Riciniello', 'casa_editrice': 'la Nuova Poligrafica', 'luogo_anno': 'Gaeta, 1995 ', 'isbn': '-', 'tema': 'codice'}, {'titolo': '66. Codice Diplomatico Gaetano, Volume V', 'autore': 'Salvatore Riciniello', 'casa_editrice': 'Graficart', 'luogo_anno': 'Formia, 2002 ', 'isbn': '-', 'tema': 'codice'},
        {'titolo': '67. Fratelli minori d’Italia', 'autore': 'Aldo Lisetti', 'casa_editrice': ' La Nuova Grafica', 'luogo_anno': 'Cassino, 1999', 'isbn': '-', 'tema': 'storico'}, {'titolo': '68. Shore patrol, storia e cronaca degli americani a Gaeta, a Formia e nel Sud Pontino (1966-1988)', 'autore': 'Aldo Lisetti, Lidia Scuderi', 'casa_editrice': ' Eurotip', 'luogo_anno': 'Roma, 1988', 'isbn': '-', 'tema': 'storico, territorio'}, {'titolo': '69. Il Catasto Onciario dell’Università di Campodimele nel 1700', 'autore': 'Aldo Lisetti, Lidia Scuderi', 'casa_editrice': 'Gaetagrafiche', 'luogo_anno': 1992, 'isbn': '-', 'tema': 'storico, territorio'}, {'titolo': '70. La Rivoluzione della Zampogna, sommossa antifascista in un paese del sud nel 1931', 'autore': 'Aldo Lisetti, Lidia Scuderi', 'casa_editrice': 'Caramanica Editore', 'luogo_anno': 'Marina di Minturno, 1995', 'isbn': '88-86261-18-7', 'tema': 'storico, territorio'}, {'titolo': '71. Racconti campomelani', 'autore': 'Aldo Lisetti, P. Maffeo, O. Sepe, G. De Rienzo, A. Miele, P. Alonso', 'casa_editrice': ' Arti Grafiche Caramanica', 'luogo_anno': 'Marina di Minturno, 1996', 'isbn': '88-86261-32-2', 'tema': 'storico, territorio'}, {'titolo': '72. Re, briganti e streghe nella terra dei longevi, saggi tra storia e tradizione', 'autore': 'Aldo Lisetti', 'casa_editrice': 'Arti Grafiche kolbe', 'luogo_anno': 'Fondi, 2001', 'isbn': '-', 'tema': 'folklore, brigantaggio'}, {'titolo': '73. Campodimele nella poesia, Da Libero De Libero a Lino Banfi', 'autore': 'Aldo Lisetti, lidia Scuderi', 'casa_editrice': 'Edizioni Gaetagrafiche', 'luogo_anno': 'Gaeta, 1993', 'isbn': '-', 'tema': 'poesie'}, {'titolo': '74. Briganti sugli Ausoni Storia, leggi e processi nell’Ottocento', 'autore': 'Enrico Lisetti e Giuseppe Rispoli', 'casa_editrice': 'Arti grafiche Caramanica ', 'luogo_anno': 'Marina di Minturno, 1994', 'isbn': '88-86261-09-8', 'tema': 'folklore, brigantaggio'}, {'titolo': '75. Lazio palazzi, feste, tradizioni', 'autore': '-', 'casa_editrice': 'Tipografia Luciano Chiovini', 'luogo_anno': 'Roma, 1993', 'isbn': '88-7097-043-4', 'tema': 'territorio'},
         {'titolo': '76. Rivista italiana di Onomastica, Rion, VII (2001)', 'autore': '-', 'casa_editrice': 'società editrice romana', 'luogo_anno': 'Roma, 2001', 'isbn': '1124-8890', 'tema': 'onomastica'}, {'titolo': '77. E quanne che vennete la stamperia microstoria di un paese del sud d’Italia agli inizi del Novecento ', 'autore': 'Ambrogio Sparagna', 'casa_editrice': 'Tipolitografia Pontone', 'luogo_anno': 'Cassino', 'isbn': '-', 'tema': 'storico, territorio'}, {'titolo': '78. Monodramma Corale', 'autore': 'Luciano Cerro, Pro Aonio Paleario Verulano', 'casa_editrice': 'Caramanica Editore', 'luogo_anno': 'Marina di Minturno, 1997', 'isbn': '88-86261-52-7', 'tema': 'monodramma'}, 
        {'titolo': '79. Cenni storici della Terra di amoroso (con l’edizione dello Statuto del 1610) ', 'autore': 'Eusebio Canali ', 'casa_editrice': 'Tipografia ‘Don Guanella’', 'luogo_anno': 'Roma, 1990', 'isbn': '-', 'tema': 'storico'}, {'titolo': '80. Pio VI e Terracina, Dossier commemorativo nel secondo centenario della fondazione del SS. Salvatore e della bonifica pontina', 'autore': 'Pietro Altobelli', 'casa_editrice': 'Arti Grafiche KOLBE', 'luogo_anno': 'Fondi, 1995', 'isbn': '-', 'tema': 'storico-religioso'},
         {'titolo': '81. I Santi di Terracina visti nella prospettiva del Grande Giubileo del 2000', 'autore': 'Pietro Altobelli', 'casa_editrice': 'Arti Grafiche KOLBE', 'luogo_anno': 'Fondi, 1997', 'isbn': '-', 'tema': 'religioso'}, {'titolo': '82. Studi e ricerche sul territorio di Formia', 'autore': 'Roberto Frecentese', 'casa_editrice': 'Caramanica Editore', 'luogo_anno': 'Marina di Minturno, 1996', 'isbn': '88-86261-40-3', 'tema': 'territorio'}, {'titolo': '83. “Spolonga” Sperlonga ventiquattro secoli TOMO I', 'autore': 'Giulio Scalfati', 'casa_editrice': 'Arti Grafiche Caramanica', 'luogo_anno': 'Marina di Minturno, 1997 ', 'isbn': '88-86261-43-8', 'tema': 'territorio'}, {'titolo': '84. Splonga Sperlonga, ventiquattro secoli', 'autore': 'Giulio Scalfati', 'casa_editrice': 'Arti Grafiche Caramanica', 'luogo_anno': 'Marina di Minturno, 1997', 'isbn': '88-86261-44-8 ', 'tema': 'territorio'}, {'titolo': '85. La Campomelana miracolata da S. Paolo della Croce nel 1859', 'autore': 'Aldo Lisetti e Lidia Scuderi', 'casa_editrice': 'La PoliGrafica', 'luogo_anno': 1994, 'isbn': '-', 'tema': 'religioso'}, {'titolo': '86. Il Salto Di Fondi', 'autore': ' Mario Forte', 'casa_editrice': 'Tipografia dell’Abbazia di Casamari', 'luogo_anno': 'Frosinone, 1977', 'isbn': '-', 'tema': 'territorio'},
          {'titolo': '87. Statuti medioevali e rinascimentali della città di Fondi', 'autore': ' Mario Forte', 'casa_editrice': 'Confrontographic', 'luogo_anno': ' Fondi, 1992', 'isbn': '-', 'tema': 'storico, territorio'}, {'titolo': '88. Ecclesiastici carbonari nella diocesi di Gaeta, saggio introduttivo di Mons. Paolo Capobianco', 'autore': 'Carlo Marcantonio Tibaldi', 'casa_editrice': 'Collana de "Il Golfo” ', 'luogo_anno': 'Itri, 1994 ', 'isbn': '-', 'tema': 'religioso'}, {'titolo': '89. Dall’ordinamento feudale a quello delle autonomie Polizia urbana e rurale bei regolamenti del Comune di Campodimele', 'autore': 'Onorato Sepe', 'casa_editrice': 'Arti grafiche Britannia', 'luogo_anno': 'Roma, 1995', 'isbn': '-', 'tema': 'storico, territorio'}, {'titolo': '90. Purificato, ricordo di un maestro', 'autore': 'Banca Popolare di Fondi', 'casa_editrice': 'Ferrazza', 'luogo_anno': 'Latina ', 'isbn': '-', 'tema': 'storico'}, {'titolo': '91. Fondi nei tempi', 'autore': 'Mario Forte', 'casa_editrice': 'Edizioni Confrontographic', 'luogo_anno': 'Fondi, 1998', 'isbn': '-', 'tema': 'territorio'}, {'titolo': '92. Fondi Storia della Scuola dal 1400 al 1993', 'autore': 'Francesco Grossi', 'casa_editrice': 'Arti grafiche KOLBE s.r.l.', 'luogo_anno': 'Fondi, 1993', 'isbn': '-', 'tema': 'storico, territorio'}, {'titolo': '93. Giuseppe Antonio Conte Reazionario borbonico o brigante? 1860-1862', 'autore': 'Dario Lo Sordo', 'casa_editrice': 'Arti grafiche KOLBE s.r.l.', 'luogo_anno': 'Fondi, 1999', 'isbn': '-', 'tema': 'storico, territorio'}, {'titolo': '94. Giuseppe de Santis maestro di cinema e di vita quaderni dell’associazione Giuseppe de Santis', 'autore': 'Marco Grossi e Virginio Palazzo', 'casa_editrice': 'Grafiche PD', 'luogo_anno': 'Fondi, 1999', 'isbn': '-', 'tema': 'quaderni, cinema'}, 
          {'titolo': '95. Caccia tragica. Un inizio strepitoso', 'autore': 'Associazione Giuseppe de Santis', 'casa_editrice': 'Grafiche PD', 'luogo_anno': 'Fondi, 2000', 'isbn': '', 'tema': 'caccia'}, {'titolo': '96. -', 'autore': '-', 'casa_editrice': '-', 'luogo_anno': '-', 'isbn': '-', 'tema': '-'}, {'titolo': '97. Fondi Arena degli Ausoni 6 facili sentieri della Ciociaria per ammirare dall’alto la Piana di Fondi', 'autore': 'Mariano Izzi', 'casa_editrice': 'Il Valico Edizioni', 'luogo_anno': 'Firenze, 2000', 'isbn': '88-900256-1-1', 'tema': 'territorio'}, {'titolo': '98. Guida per l’utente Fondi e inventati dell’archivio di Stato di Roma', 'autore': 'Ersilia Graziani', 'casa_editrice': '-', 'luogo_anno': 'Roma, 1995', 'isbn': '-', 'tema': '-'}, {'titolo': '99. Fondi. Guida turistica', 'autore': 'Gaetano Carnevale', 'casa_editrice': 'Edizioni Confronto', 'luogo_anno': 'Fondi, 1999', 'isbn': '-', 'tema': '-'},
           {'titolo': '100. Repertorio delle pergamene della università o comune di Gaeta (1187-1704)', 'autore': 'Vincenzo De Meo', 'casa_editrice': 'Caramanica Editore ', 'luogo_anno': 'Marina di Minturno, 1996', 'isbn': '88-86261-33-0 ', 'tema': '-'}, {'titolo': '101. Carlo Afan de Rivera e il Corpo dei Ponti e Strade, Ingegneri e Territorio nel Regno di Napoli 1800-1860', 'autore': 'Aldo di Biasio', 'casa_editrice': 'Arti Grafiche Caramanica', 'luogo_anno': 'Marina di Minturno, 1993', 'isbn': '-', 'tema': 'storico, ingegneria'}, {'titolo': '102. Il riscatto verso la libera proprietà della terra', 'autore': 'Angelo Compagnoni', 'casa_editrice': 'Caramanica editore', 'luogo_anno': 'Marina di Minturno, 1997', 'isbn': '88-86261-41-1', 'tema': 'territorio'}, {'titolo': '103. Il Monte Soratte e i suoi Santuari', 'autore': 'Monsignor Mariano De Carolis', 'casa_editrice': 'Balzanelli Aldo & C. Snc', 'luogo_anno': 'Roma, 1999', 'isbn': '-', 'tema': 'territorio'}, {'titolo': '104. Briciole di tempo', 'autore': 'Antonio Villa', 'casa_editrice': 'Arti Grafiche Caramanica', 'luogo_anno': 'Marina di Minturno, 1996', 'isbn': '88-86261-29-2', 'tema': 'tempo'}, {'titolo': '105. Excursus (piccole storie)', 'autore': 'Enzo Saccoccio', 'casa_editrice': 'Confrontographic', 'luogo_anno': 'Fondi, 2001', 'isbn': '-', 'tema': 'racconti'}, {'titolo': '106. Curtis, Politica, economia e società in provincia di Frosinone', 'autore': 'Gaetano de Angelis', 'casa_editrice': 'Caramanica editore', 'luogo_anno': 'Marina di Minturno, 1996', 'isbn': ' 88-86261-24-1', 'tema': 'città, politica'}, {'titolo': '107. Viaggio e soggiorni, poesie 1963-1988', 'autore': 'Giuseppe Muccitelli', 'casa_editrice': 'tutti i diritti riservati all’autore', 'luogo_anno': 'Fondi, 1991', 'isbn': '-', 'tema': 'poesie'},
            {'titolo': '108. Caro Peppe ', 'autore': ' Scuole Medie Statali Fondi', 'casa_editrice': 'ConfrontoGraphic', 'luogo_anno': 'Fondi, 1999', 'isbn': '-', 'tema': 'racconti'}, {'titolo': '109. Il Monastero delle Monache Benedettine e l’Arciconfraternita della Morte e Orazione due istituzioni nella Chiesa di S. Sebastiano in Fondi', 'autore': 'Mario Forte', 'casa_editrice': 'ConfrontoGraphic', 'luogo_anno': 'Fondi, 1998', 'isbn': '-', 'tema': 'religioso'}, {'titolo': '110. Storie di briganti', 'autore': 'Abele De Blasio', 'casa_editrice': 'Capone Editore ', 'luogo_anno': 'Lecce, 2001', 'isbn': '88-8349-019-3', 'tema': 'brigantaggio'}, {'titolo': '111. La torre maestra del castello di Fondi e il tesoro di Onorato II nel discorso dell’inventarium del 1491', 'autore': 'Geremia Iudicone', 'casa_editrice': 'ConfrontoGraphic', 'luogo_anno': 'Fondi, 1998', 'isbn': '-', 'tema': 'storico, castello'}, {'titolo': '112. -', 'autore': '-', 'casa_editrice': '-', 'luogo_anno': '-', 'isbn': '-', 'tema': '-'}, {'titolo': '113. La pittura di Fondi nei secoli', 'autore': ' Scuola media statale “E. Amante”', 'casa_editrice': 'Edizioni Confronto', 'luogo_anno': 'Fondi, 1997', 'isbn': '-', 'tema': 'pittura'}, {'titolo': '114. Statuta sive capitula universitatis maranulae', 'autore': 'Ferdinando Sparagna', 'casa_editrice': 'Graficart', 'luogo_anno': 'Formia, 1998', 'isbn': '-', 'tema': 'territorio'}, {'titolo': "115. L'asinaccio. Commedia in due tempi", 'autore': 'Pasquale Maffeo', 'casa_editrice': 'Gaetagrafiche', 'luogo_anno': 'Gaeta, 1991', 'isbn': '-', 'tema': 'commedia'}, {'titolo': '116. Pontecorvo uno sguardo indietro', 'autore': 'Angelo Nicosia, Banca popolare del cassinate', 'casa_editrice': '-', 'luogo_anno': '-', 'isbn': '-', 'tema': 'storico, territorio'}, {'titolo': '117. La battaglia del Garigliano del 915 ed i monumenti che la ricordano, con un saggio storico su montecassino', 'autore': 'Pietro Fedele', 'casa_editrice': 'Centro studi Minturnae', 'luogo_anno': 'Perugia, 1989', 'isbn': '-', 'tema': 'storico, territorio, saggio montecassino'}, {'titolo': '118. Emilio Rosati. La musica, il maestro', 'autore': 'vari', 'casa_editrice': 'ConfrontoGraphic', 'luogo_anno': 'Fondi, 1998', 'isbn': '-', 'tema': 'musica'},
     {'titolo': '119. Una ipotesi di riqualificazione urbana a Fondi una struttura per il teatro, un parco urbano…', 'autore': 'Biagio Frattarelli', 'casa_editrice': 'Graphicart snc', 'luogo_anno': 'Formia, 1995', 'isbn': '-', 'tema': 'urbanistica'},
     {'titolo': '120. Collina', 'autore': 'Augusto Maria Micci', 'casa_editrice': 'ConfrontoGraphic', 'luogo_anno': 'Fondi, 1990', 'isbn': '-', 'tema': 'territorio'}, 
     {'titolo': '121. Nella rosa del mondo ', 'autore': 'Pasquale Maffei', 'casa_editrice': 'Caramanica editore', 'luogo_anno': 'Minturno, 1997 ', 'isbn': '88-86261-45-4', 'tema': 'racconti'},
     {'titolo': '122. Onophrius. Un convento nella storia del Lazio. Un santo emigrato da Campodimele in America', 'autore': 'Aldo Lisetti, Lidia Scuderi', 'casa_editrice': 'Gaetagrafiche s.r.l.', 'luogo_anno': 'Gaeta, 1989', 'isbn': '-', 'tema': 'religioso'},
     {'titolo': '123. Nel mille e dintorni a Campodimele', 'autore': 'Aldo Lisetti, Lidia Scuderi', 'casa_editrice': 'Edizioni La Sapienza', 'luogo_anno': 'Roma ', 'isbn': '-', 'tema': 'territorio'},
     {'titolo': '124. Le relazioni commerciali tra Genova e Gaeta nel tardo Medioevo. TOMO PRIMO', 'autore': 'Patrizia Schiappacasse', 'casa_editrice': 'Graphicart', 'luogo_anno': 'Formia, 2001', 'isbn': '-', 'tema': 'commercio, storico'}, 
    {'titolo': '125. Le relazioni commerciali tra Genova e Gaeta nel tardo medioevo, TOMO SECONDO', 'autore': 'Patrizia Schiappacasse', 'casa_editrice': 'Graphicart', 'luogo_anno': 'Formia, 2002', 'isbn': '-', 'tema': 'commercio, storico'}, 
    {
  titolo: '126. La scultura altomedievale nella diocesi di Gaeta',
  autore: 'Antonio G. Miele',
  casa_editrice: 'Arti Grafiche Caramanica',
  luogo_anno: 'Marina di Minturno, 1998',
  isbn: '88-86261-64-0',
  tema: 'arte, storia, religioso'
},
{
  titolo: '127. Gaeta e l\' assedio del 1860-61',
  autore: '-',
  casa_editrice: 'La Poligrafica',
  luogo_anno: 'Gaeta, 1978',
  isbn: '-',
  tema: 'storico, territorio'
},
{
  titolo: '128. I documenti dell’avviso a di S. Erasmo a Formia',
  autore: 'Roberto Frecentese',
  casa_editrice: 'Arti Grafiche Caramanica',
  luogo_anno: 'Marina di Minturno, 1993',
  isbn: '88-86261-03-9',
  tema: 'documenti storici'
},
{
  titolo: '129. I manoscritti dell\' abbazia di S. Erasmo a Formia (XIV-XVI sec.)',
  autore: 'R. Frecentese, A.P. De Santis, A. Onorato',
  casa_editrice: 'Caramanica editore',
  luogo_anno: 'Marina di Minturno, 1996',
  isbn: '88-86261-34-9',
  tema: 'manoscritti'
},
{
  titolo: '130. -',
  autore: '-',
  casa_editrice: '-',
  luogo_anno: '-',
  isbn: '-',
  tema: '-'
},
{
  titolo: '131. L’assedio di Gaeta',
  autore: 'Maurizio Di Giovine',
  casa_editrice: 'Edigrafia srl',
  luogo_anno: 'Morcone, 2000',
  isbn: '-',
  tema: 'storico'
},
{
  titolo: '132. Territorio e viabilità nel Lazio meridionale. Gli antichi distretti di Sora e di Gaeta. 1800-1860',
  autore: 'Aldo Di Biasio',
  casa_editrice: 'Caramanica editore',
  luogo_anno: 'Marina di Minturno, 1997',
  isbn: '88-86261-44-6',
  tema: 'territorio'
},
{
  titolo: '133. Sessa e il suo territorio tra medioevo ed età moderna',
  autore: 'Giampiero Di Marco',
  casa_editrice: 'Arti Grafiche Caramanica',
  luogo_anno: 'Marina di Minturno, 1995',
  isbn: '88-86261-17-9',
  tema: 'storico, territorio'
},
{
  titolo: '134. Della agricoltura di Sessa. Memoria',
  autore: 'Giovanni Battista Gagliardo',
  casa_editrice: 'Caramanica editore',
  luogo_anno: 'Marina di Minturno, 1995',
  isbn: '88-86261-16-0',
  tema: 'agricoltura'
},
{
  titolo: '135. Sessa Aurunca storia ed arte',
  autore: 'Antonio Marcello Villucci',
  casa_editrice: 'Arti Grafiche Caramanica',
  luogo_anno: 'Marina di Minturno, 1995',
  isbn: '88-86261-15-2',
  tema: 'storico, arte'
},
{
  titolo: '136. Fra’ Diavolo (colonnello M.Pezza) nella storia e nell\' arte',
  autore: 'Ernesto Jallonghi',
  casa_editrice: 'Confrontographic',
  luogo_anno: 'Fondi, 1910',
  isbn: '-',
  tema: 'storico, arte'
},
{
  titolo: '137. Contadini e Borghesi a Fondi Dinamiche socio-economiche e culturali della modernizzazione in un centro agricolo del Basso Lazio (1880-1989)',
  autore: 'Antonio Di Fazio',
  casa_editrice: 'Arti Grafiche Caramanica',
  luogo_anno: 'Marina di Minturno, 2000',
  isbn: '88-86261-84-5',
  tema: 'territorio, socio-economico'
},
{
  titolo: '138. Vita di Massaroni. Briganti, Carbonari ed Austriaci si confini del Regno di Napoli (1820-1821)',
  autore: 'Aldevis Tibaldi',
  casa_editrice: 'Caramanica editore',
  luogo_anno: 'Marina di Minturno, 2000',
  isbn: '88-86261-87-X',
  tema: 'briganti, carbonari'
},
{
  titolo: '139. Michele Pezza, detto FRA’ DIAVOLO, nella letteratura e nell’arte',
  autore: 'Alfredo Saccoccio',
  casa_editrice: 'Confronto Graphic',
  luogo_anno: 'Fondi, 2000',
  isbn: '-',
  tema: 'letteratura, arte'
},
{
  titolo: '140. Michele Pezza detto Fra’ Diavolo Vita, avventure e morte di un guerrigliero dell’800 e sue memorie inedite',
  autore: 'Francesco Barra',
  casa_editrice: 'Industria Poligrafica',
  luogo_anno: 'Napoli, 2000',
  isbn: '88-8309-020-9',
  tema: 'storico'
},
{
  titolo: '141. Repertorio cartografico. Guida alla consultazione dell\' archivio cartografico del C.R.D.',
  autore: 'vari',
  casa_editrice: 'Centro Stampa Regione Lazio',
  luogo_anno: 'Roma, 1996',
  isbn: '-',
  tema: 'repertorio cartografico'
},
{
  titolo: '142. Pontecorvo agli inizi dell\' età liberale',
  autore: 'Angelo Nicosia',
  casa_editrice: 'Tipolitografia Pontone',
  luogo_anno: 'Cassino',
  isbn: '-',
  tema: 'storico, prov. Frosinone'
},
{
  titolo: '143. “Scarpatu” Testimonianze di guerra',
  autore: 'Comune di Lenola Assessorato alla Cultura',
  casa_editrice: 'Arti Grafiche KOLBE',
  luogo_anno: 'Fondi, 1992',
  isbn: '-',
  tema: 'guerra'
},
{
  titolo: '144. -',
  autore: '-',
  casa_editrice: '-',
  luogo_anno: '-',
  isbn: '-',
  tema: '-'
},
{
  titolo: '145. Torneador e i suoi amici',
  autore: 'Ugo Piscopo',
  casa_editrice: 'Ente Regionale Parco dei Monti Aurunci Editore',
  luogo_anno: 'Campodimele, 2001',
  isbn: '-',
  tema: 'territorio'
},
{
  titolo: '146. Lazio Guida d’Italia',
  autore: 'Touring Club Italiano',
  casa_editrice: 'Centro Grafico Ambrosiano',
  luogo_anno: 'Milano, 2001',
  isbn: '88-365-0015-3',
  tema: 'guida'
},
{
  titolo: '147. Lagune d’Italia. Visita alle zone umide lungo le coste dei nostri mari a piedi, in barca, in bicicletta',
  autore: 'Touring Club Italiano',
  casa_editrice: '-',
  luogo_anno: 'assente, 1999',
  isbn: '-',
  tema: 'territorio'
},
{
  titolo: '148. Archivio di Stato di Napoli, Il Mezzogiorno verso l’Unità d’Italia 1734-1860',
  autore: 'vari',
  casa_editrice: 'L’Arte Tipografica',
  luogo_anno: 'Napoli',
  isbn: '-',
  tema: 'Catalogo della mostra documentaria'
},
{
  titolo: '149. I Caboto Cives Caietani. Fonti sulla presenza e sull’attività dei Caboto a Gaeta nei secoli XIII, XIV e XV, riunite e tradotte dal latino medievale',
  autore: 'Salvatore Riciniello',
  casa_editrice: 'Gaetagrafiche',
  luogo_anno: 'Gaeta, 1994',
  isbn: '-',
  tema: 'Caboto, storico'
},
{
  titolo: '150. -',
  autore: '-',
  casa_editrice: '-',
  luogo_anno: '-',
  isbn: '-',
  tema: '-'
},
{
  titolo: '151. Il Francescano nel Lazio',
  autore: 'Amministrazioni provinciali del Lazio',
  casa_editrice: '-',
  luogo_anno: 'Roma, 1994',
  isbn: '-',
  tema: 'religioso'
},
{
  titolo: '152. Il territorio pontino in epoca sistina. Immagini di riforma e vita nello stato della Chiesa 1585-1590',
  autore: 'Domenico Chiari',
  casa_editrice: 'Graficart',
  luogo_anno: 'Formia, 1990',
  isbn: '-',
  tema: 'territorio, religioso'
},
{
  titolo: '153. Sermoneta. Viaggio nel passato millenario di una città',
  autore: 'Vincenzo Fusco',
  casa_editrice: '-',
  luogo_anno: '-',
  isbn: '-',
  tema: 'territorio, storico'
},
{
  titolo: '154. Scauri',
  autore: 'Antonio Lepone',
  casa_editrice: 'Caramanica editore',
  luogo_anno: 'Marina di Minturno, 1993',
  isbn: '88-86261-00-4',
  tema: 'territorio'
},
{
  titolo: '155. Briganti furono loro. Quegli assassini dei fratelli d\' Italia',
  autore: 'Angelo Manna',
  casa_editrice: 'Sun Books',
  luogo_anno: 'Roma, 1997',
  isbn: '-',
  tema: 'storico'
},
{
  titolo: '156. Rassegna storica pontina, rivista di studi risorgimentali',
  autore: 'vari',
  casa_editrice: 'Luciano Editore',
  luogo_anno: 'Latina, 1997',
  isbn: '-',
  tema: 'rassegna storica'
},
{
  titolo: '157. Il Rorschach in gravidanza studio clinico e sperimentale',
  autore: 'Anna Maria Perrone e Carlo Saraceni',
  casa_editrice: 'Centro stampa',
  luogo_anno: 'Gaeta, 1995',
  isbn: '-',
  tema: 'studio'
},
{
  titolo: '158. Il congresso accademico romano e la redazione del catalogo delle manifatture dello stato pontificio',
  autore: 'Marina Morena',
  casa_editrice: 'Tipografia l’economica',
  luogo_anno: 'Roma, 1997',
  isbn: '-',
  tema: 'redazione catalogo, congresso accademico romano'
},
{
  titolo: '159. Formia',
  autore: 'Antonio G. Miele, Roberto Frecentese',
  casa_editrice: 'Fratelli Palombi editori',
  luogo_anno: 'Roma, 1995',
  isbn: '-',
  tema: 'territorio'
},
{
  titolo: '160. Gaeta guida storico-artistico archeologica',
  autore: 'Nicola Aletta',
  casa_editrice: 'Tipografia graficart',
  luogo_anno: 'Formia, 2001',
  isbn: '-',
  tema: 'arte, storia, territorio'
},
{
  titolo: '161. Itri, la storia attraverso le immagini',
  autore: 'Mimmo Fabrizio',
  casa_editrice: 'Edizioni Odisseo',
  luogo_anno: 'Itri, 1998',
  isbn: '-',
  tema: 'territorio'
},
{
  titolo: '162. Per non dimenticare…Lenola',
  autore: 'Donatella Di Biasio, Giovanni Macaro, Sandra Mazzucco',
  casa_editrice: 'Graficart',
  luogo_anno: 'Formia, 1999',
  isbn: '-',
  tema: 'territorio'
},
{
  titolo: '163. Spigno Saturnia Folklore gruppo folkloristico le contrade',
  autore: 'Raffaele Tucciarone',
  casa_editrice: 'Poligrafica',
  luogo_anno: 'Gaeta, 1986',
  isbn: '-',
  tema: 'folklore'
},
{
  titolo: '164. Conta nu Cuntu! Il racconto orale come strumento creativo e comunicativo',
  autore: 'Giovanni Iasimone',
  casa_editrice: 'Caramanica Editore',
  luogo_anno: 'Marina di Minturno, 2002',
  isbn: '88-7425-007-x',
  tema: 'testo sul racconto orale'
},
{
  titolo: '165. La Storia di Renzo e Lucia, commedia musicale in tre atti',
  autore: 'vari',
  casa_editrice: 'Arti Grafiche Caramanica',
  luogo_anno: 'Marina di Minturno, 1993',
  isbn: '-',
  tema: 'commedia musicale'
},
{
  titolo: '166. La festa di San Giovanni Battista nella Mola dell’anno 1926',
  autore: 'G. Bove e L. Ricciardi',
  casa_editrice: 'Graficart snc',
  luogo_anno: 'Formia, 2000',
  isbn: '-',
  tema: 'santo patrono locale'
},
{
  titolo: '167. Il patrimonio documentario dell’archivio di stato di roma',
  autore: 'Lucio Lume',
  casa_editrice: '-',
  luogo_anno: 'Archivio di stato di Roma, 1994',
  isbn: '-',
  tema: 'archivio'
},
{
  titolo: '168. La chiesa di San Tommaso',
  autore: 'Dario Ascolano',
  casa_editrice: 'Tipografia Arte Stampa Roccasecca Scalo',
  luogo_anno: 'Roccasecca Scalo, 2001',
  isbn: '-',
  tema: 'religioso'
},
{
  titolo: '169. Insediamenti monastici a Gaeta e nell\'attuale diocesi',
  autore: 'Mariano dell\'Omo',
  casa_editrice: 'IDEA STAMPA',
  luogo_anno: 'Cassino, 1995',
  isbn: '-',
  tema: 'insediamenti monastici sul territorio'
},
{
  titolo: '170. La fedelissima città di Gaeta nel convegno delle due sicilie convegno tradizionalista 14-15 Febbraio 1992',
  autore: 'vari',
  casa_editrice: 'Gaeta grafiche',
  luogo_anno: 'Gaeta, 1993',
  isbn: '-',
  tema: 'atti'
},
{
  titolo: '171. Archivi e archivistica a Roma dopo l\'unità, genesi storica, ordinamenti, interrelazioni.',
  autore: 'vari',
  casa_editrice: 'Azienda grafica Eredi',
  luogo_anno: 'Roma, 1994',
  isbn: '-',
  tema: 'archivio'
},
{
  titolo: '172. Società per la storia patria della provincia di latina, Studi in onore di arturo bianchini atti del terzo',
  autore: 'vari',
  casa_editrice: 'graficart snc',
  luogo_anno: 'Formia, 1998',
  isbn: '-',
  tema: 'convegno di studi storici sul territorio della provincia'
},
{
  titolo: '173. Lungo le tracce dell\'Appia, Sessa Aurunca e Capua due città di cultura',
  autore: 'vari',
  casa_editrice: 'Caramanica Editore',
  luogo_anno: 'Marina di Minturno, 1993',
  isbn: '88-86261-02-0',
  tema: 'città'
},
{
  titolo: '174. Lucio Munazio Planco raffinato interprete di un’epoca incoerente',
  autore: 'Antonio Morello',
  casa_editrice: 'Tipografia Pontone per conto delle edizioni Eva',
  luogo_anno: 'Cassino, 1997',
  isbn: '-',
  tema: 'storico'
},
{
  titolo: '175. Canto del folklore della terra delle fratte (Ausonia dal 1862)',
  autore: 'Gabriele Inglese',
  casa_editrice: 'Tipografia San Benedetto',
  luogo_anno: 'Cassino, 1986',
  isbn: '-',
  tema: 'folklore'
},
{
  titolo: '176. Guida all’identificazione delle piante',
  autore: 'Thomas Schauer e Claus Caspari',
  casa_editrice: 'Zanichelli editore spa',
  luogo_anno: 'Bologna, 1997',
  isbn: '88-0803780-0',
  tema: 'botanica'
},
{
  titolo: '177. -',
  autore: '-',
  casa_editrice: '-',
  luogo_anno: '-',
  isbn: '-',
  tema: '-'
},
{
  titolo: '178. Boschi e prevenzione incendi',
  autore: 'vari',
  casa_editrice: 'Arti Grafiche Caramanica',
  luogo_anno: 'Marina di Minturno, 1991',
  isbn: '-',
  tema: 'prevenzione incendi'
},
{
  titolo: '179. Le erbe aromatiche in cucina',
  autore: 'Luca Rossi',
  casa_editrice: 'Caramanica Editore',
  luogo_anno: 'Marina di Minturno, 1996',
  isbn: '-',
  tema: 'cucina, erbe aromatiche'
},
{
  titolo: '180. Flora e fauna del parco dei Monti Aurunci',
  autore: 'Enrico Moretti',
  casa_editrice: 'Edizioni Caramanica',
  luogo_anno: 'Marina di Minturno, 2000',
  isbn: '-',
  tema: 'flora, fauna, territorio'
},
{
  titolo: '181. Monti Aurunci, guida storico-naturalistica',
  autore: 'Giovanni Rossi',
  casa_editrice: 'Caramanica Editore',
  luogo_anno: 'Marina di Minturno, 2002',
  isbn: '88-86261-90-4',
  tema: 'guida'
},
{
    titolo: '182. Il monumento a Gesù redentore',
    autore: 'Associazione Culturale Abacus',
    casa_editrice: 'Nuova grafica',
    luogo_anno: 'Cassino, 1997',
    isbn: '-',
    tema: 'mostra di documenti tratti dall’archivio della parrocchia di san luca evangelista di maranola'
  },
{
    titolo: '183. I nuovi aspetti del sacro verso il duemila a. D ercole- la voce del divino “chitarra per musica sacra”',
    autore: 'M.T. Sarno, Florindo Ruta, Alessandro D’Ercole, Carlo Magnelli',
    casa_editrice: '-',
    luogo_anno: 'Parco del celio, 1998',
    isbn: '-',
    tema: 'religioso, strumenti musicali'
  },
  {
    titolo: '184. Il rapporto lazio sul mercato del lavoro verso l’integrazione economico europea, le analisi dei problemi, le politiche attive',
    autore: 'Regione Lazio Assessorato al lavoro',
    casa_editrice: 'Istituto grafico editoriale romano',
    luogo_anno: 'Roma, 1992',
    isbn: '-',
    tema: 'lavoro, politico-economico'
  },
  {
    titolo: '185. Obiettivo campodimele 2000 dieci anni di successi',
    autore: 'vari',
    casa_editrice: 'Emmegrafica',
    luogo_anno: 'Velletri',
    isbn: '-',
    tema: 'territorio'
  },
  {
    titolo: '186. Obiettivo campodimele 2001 un paese simbolo dell’unità europea:12 torri millenarie per 12 nazioni di antica storia',
    autore: 'vari',
    casa_editrice: 'Visualarts',
    luogo_anno: 'Gaeta, 2001',
    isbn: '-',
    tema: 'territorio'
  },
  {
    titolo: '187. La via francigena guida',
    autore: 'Centro regionale per la doc. dei beni culturali e ambientali del Lazio',
    casa_editrice: 'grafica891srl',
    luogo_anno: 'Roma, 1995',
    isbn: '-',
    tema: 'via francigena, guida'
  },
  {
    titolo: '188. Le vittime di Ausonia nella Seconda Guerra Mondiale',
    autore: 'Michele Thomas',
    casa_editrice: 'graficart snc',
    luogo_anno: 'Formia, 1996',
    isbn: '-',
    tema: 'storico, guerra'
  },
  {
    titolo: '189. La manutenzione delle aree verdi',
    autore: 'Reims Cedex 2',
    casa_editrice: 'A.g.e.',
    luogo_anno: '1992',
    isbn: '2-87727-068-8',
    tema: 'manutenzione delle aree verdi'
  },
  {
    titolo: '190. Ausonia, i luoghi della natura e della storia',
    autore: 'Maria Grazia de Ruggiero',
    casa_editrice: 'GraficArt',
    luogo_anno: 'Formia, 1995',
    isbn: '-',
    tema: 'natura, storia'
  },
  {
    titolo: '191. La porta di maria cattedrale di isernia',
    autore: 'Gerardo de meo',
    casa_editrice: 'grafichegercap',
    luogo_anno: 'Foggia, 1993',
    isbn: '-',
    tema: 'architettura, storia'
  },
  {
    titolo: '192. Nel parco c\'è, l\'offerta educativa e ricreativa dei parchi Nazionali e Regionali e delle Aree Marine Protette',
    autore: 'vari',
    casa_editrice: 'Stamperia Romana',
    luogo_anno: 'Roma, 2002',
    isbn: '-',
    tema: 'parco, natura'
  },
  {
    titolo: '193. Regione Lazio-assessorato politiche dell’ambiente, agrinet parchi e aree protette del lazio',
    autore: '-',
    casa_editrice: '-',
    luogo_anno: '-',
    isbn: '-',
    tema: '-'
  },
  {
    titolo: '194. Il mio ambiente',
    autore: 'Mauro Novelli',
    casa_editrice: 'arti grafiche caramanica',
    luogo_anno: 'marina di minturno, 1994',
    isbn: '88-86261-05-5',
    tema: 'ambiente'
  },
  {
    titolo: '195. La malaria e la sua incidenza nella storia dell\'economia della regione pontina',
    autore: 'Arturo Bianchini',
    casa_editrice: 'tipografia Bianconi',
    luogo_anno: 'Priverno, 1996',
    isbn: '-',
    tema: 'malaria'
  },
  {
    titolo: '196. Le cianfrusaglie di Ginillat',
    autore: 'J. A. Tallini',
    casa_editrice: 'tipo-lito A.merenna',
    luogo_anno: 'Formia, 1973.',
    isbn: '-',
    tema: 'storico'
  },
  {
    titolo: '197. Appunti per una interoretazione del paesaggio agrario montano dell\' “università di maranola alla metà del 700”',
    autore: 'Vincenzo de meo e Luca Ricciardi',
    casa_editrice: '-',
    luogo_anno: '1996',
    isbn: '-',
    tema: 'quaderni di storia e tradizioni locali'
  },
  {
    titolo: '198. Città e feudo nella Sicilia moderna',
    autore: '-',
    casa_editrice: 'Salvatore Sciascia Editore',
    luogo_anno: '-',
    isbn: '-',
    tema: 'storico, città'
  },
  {
    titolo: '199. Una sera con i poeti',
    autore: 'Comune di Formia',
    casa_editrice: '-',
    luogo_anno: '-',
    isbn: '-',
    tema: 'poesie'
  },
  {
    titolo: '200. Regione lazio riserva naturale tevere farfa, Il recupero della ex cava di meana  un intervento di riqualificazione ambientale',
    autore: '-',
    casa_editrice: '-',
    luogo_anno: '2000',
    isbn: '-',
    tema: 'riqualificazione ambientale'
  },
  {
    titolo: '201. Sistemazioni in ambito fluviale',
    autore: 'M.Gibelli, D. Meucci, F. Oggionni, F. Palmeri, F. Vallone',
    casa_editrice: 'Varese il Verde editoriale',
    luogo_anno: 'Milano, 1995',
    isbn: '88-86569-00-9',
    tema: 'territorio, natura'
  },
  {
    titolo: '202. -',
    autore: '-',
    casa_editrice: '-',
    luogo_anno: '-',
    isbn: '-',
    tema: '-'
  },
  {
    titolo: '203. Regione Lazio assessorato alla cultura, Il censimento la catalogazione sintesi di alcune ricerche le pubblicazioni.',
    autore: '-',
    casa_editrice: '-',
    luogo_anno: '-',
    isbn: '-',
    tema: 'pubblicazioni'
  },
  {
    titolo: '204. Don Erasmo Ruggiero, canonico onorario della basilica cattedrale di Gaeta',
    autore: '-',
    casa_editrice: 'Caramanica Editore',
    luogo_anno: 'Marina di Minturno',
    isbn: '-',
    tema: 'religioso, territorio'
  },
  {
    titolo: '205. Regione Lazio Assessorato alla cultura, musica 95 terzo circuito intercomunale di musica classica',
    autore: '-',
    casa_editrice: 'eticgrafica srl',
    luogo_anno: 'Latina, 1995',
    isbn: '-',
    tema: 'musica classica'
  },
  {
    titolo: '206. Il catasto gregoriano di Roma ed Agro Romano, guida alla ricerca archivistica',
    autore: 'Vera Spagnuolo',
    casa_editrice: 'Tipografia Italo-Orientale S.Nilo',
    luogo_anno: 'Roma, 1981',
    isbn: '-',
    tema: 'archivio'
  },
  {
    titolo: '207. Plotino a Suio nella campagna vescina soggiornò e morì il filosofo plotino di licopoli (Egitto) l’ideatore della riedificazione di vescia col nome di platonopolis',
    autore: 'Raffaele Castrechino',
    casa_editrice: 'Tipolitografia Caramanica srl',
    luogo_anno: 'Scauri, 1980',
    isbn: '-',
    tema: 'storico, filosofia'
  },
  {
    titolo: '208. Mostra permanente di documenti dell\'archivio storico',
    autore: 'Istituto Banco di Napoli',
    casa_editrice: 'Arte tipografica',
    luogo_anno: 'Napoli, 1996',
    isbn: '-',
    tema: 'archivio'
  },
  {
    titolo: '209. Regione Lazio, una sequenza di percorsi turistico-culturali nella regione pontina',
    autore: '-',
    casa_editrice: 'Tipografia Bianconi',
    luogo_anno: 'Priverno',
    isbn: '-',
    tema: 'territorio, percorsi culturali'
  },
  {
    titolo: '210. Quaderni dell’archivio storico',
    autore: 'Istituto banco di napoli',
    casa_editrice: 'arte tipografica sas',
    luogo_anno: 'Napoli, 1997',
    isbn: '-',
    tema: 'archivio'
  },
  {
    titolo: '211. Le battaglie del Veseris e del Trifano combattute tra gli Ausoni-Aurunci nel corso della guerra latina (vedi Tito Livio)',
    autore: 'Teodoro di Nardo, Carlo Marcantonio Tibaldi',
    casa_editrice: '-',
    luogo_anno: 'Roma, 1996',
    isbn: '-',
    tema: 'storia'
  },
  {
    titolo: '212. La pratica amministrativa e contabile nella condotta di opere pubbliche',
    autore: 'Attilio Valentinetti',
    casa_editrice: 'società editrice vannini',
    luogo_anno: 'Brescia, 1997',
    isbn: '88-86430-15-9',
    tema: 'amministrativo e contabilità'
  },
  {
    titolo: '213. Parrocchie, chiese e confraternite per una storie delle istituzioni religiose capranichesi attraverso le carte dell’Archivio Storico Parrocchiale',
    autore: 'Claudio Canonici e Piero Santoni',
    casa_editrice: 'Grafica2000',
    luogo_anno: 'Ronciglione, 1997',
    isbn: '-',
    tema: 'religioso'
  },
  {
    titolo: '214. Cardinale Gaetano',
    autore: 'Giovanni Allaria, Tommaso de Vio',
    casa_editrice: 'La poligrafica',
    luogo_anno: 'Gaeta, 1969',
    isbn: '-',
    tema: 'territorio, religioso'
  },
  {
    titolo: '215. Virgilio Zangrilli pedagogista moderno',
    autore: 'Cosmo Damiano Pontecorvo',
    casa_editrice: '-',
    luogo_anno: '1981',
    isbn: '-',
    tema: 'pedagogia'
  },
  {
    titolo: '216. Il sacrificio di Spigno Saturnia nella seconda guerra mondiale',
    autore: 'Cosmo Damiano Pontecorvo',
    casa_editrice: 'a cura dell\'amministrazione comunale',
    luogo_anno: '1979',
    isbn: '-',
    tema: 'storico, guerra'
  },
  {
    titolo: '217. Al Ricordo delle vittime della fucilazione Nazista Trivio, 26 Novembre 1943',
    autore: 'Associazione culturale di volontariato-Trivio',
    casa_editrice: '-',
    luogo_anno: '1997',
    isbn: '-',
    tema: 'commemorativo, storico, guerra'
  },
  {
    titolo: '218. Enrico Tonti, ufficiale italiano, luogotenente di De La Salle, fondatore della prima colonia di Arkansas',
    autore: 'Filippo Pimpinella',
    casa_editrice: 'Editori Pontifici',
    luogo_anno: 'Roma, 1910',
    isbn: '-',
    tema: 'commemorativo, storico, guerra'
  },
  {
    titolo: '219. Il 1799 in terra di lavoro e in terra aurunca',
    autore: 'Marcantonio Tibaldi',
    casa_editrice: '-',
    luogo_anno: 'Cassino, 1979',
    isbn: '-',
    tema: 'territorio, storico'
  },
  {
    titolo: '220. Agenzia media, lo spazio delle origini la città si racconta',
    autore: '-',
    casa_editrice: 'tipolitografia c.o.r.e.',
    luogo_anno: 'Fondi,  1996',
    isbn: '-',
    tema: 'città'
  },
  {
    titolo: '221. Il miliario di Caracalla in Monte San Biagio',
    autore: 'Fausto Cominato',
    casa_editrice: 'tipolitografia C.O.R.E',
    luogo_anno: 'Fondi, 2002',
    isbn: '-',
    tema: 'territorio'
  },
{
    titolo: '222. La provincia di Latina, guida alla lettura del territorio',
    autore: 'AA.VV.',
    casa_editrice: 'Edizioni Scientifiche Italiane',
    luogo_anno: 'Napoli, 1998',
    isbn: '-',
    tema: 'territorio, guida'
  },
  {
    titolo: '223. Studi storici sull\'Agro Pontino',
    autore: 'Carlo Marcantonio Tibaldi',
    casa_editrice: '-',
    luogo_anno: 'Roma, 1980',
    isbn: '-',
    tema: 'storico'
  },
  {
    titolo: '224. I dialetti dell\'Agro Pontino',
    autore: 'Giuseppe Rocca',
    casa_editrice: 'Edizioni della rivista “Lingua Nostra”',
    luogo_anno: 'Roma, 1990',
    isbn: '-',
    tema: 'linguistica, dialetti'
  },
  {
    titolo: '225. La fauna del Parco Nazionale del Circeo',
    autore: 'Giuseppe Guarino',
    casa_editrice: 'Stamperia Romana',
    luogo_anno: 'Roma, 1995',
    isbn: '-',
    tema: 'natura, fauna'
  },
  {
    titolo: '226. Il fiume Sacco e il territorio circostante',
    autore: 'Maria Rosaria Corona',
    casa_editrice: 'Tipografia Bianconi',
    luogo_anno: 'Priverno, 1997',
    isbn: '-',
    tema: 'territorio, ambiente'
  },
  {
    titolo: '227. Il paesaggio agrario di Minturno',
    autore: 'Luca Ricciardi',
    casa_editrice: 'Edizioni Arti Grafiche',
    luogo_anno: 'Minturno, 2001',
    isbn: '-',
    tema: 'paesaggio, agrario'
  },
  {
    titolo: '228. Le ville romane del litorale pontino',
    autore: 'Silvia Marchetti',
    casa_editrice: 'Caramanica Editore',
    luogo_anno: 'Marina di Minturno, 1998',
    isbn: '-',
    tema: 'archeologia, ville romane'
  },
  {
    titolo: '229. Le tradizioni popolari del territorio di Gaeta',
    autore: 'Antonio Russo',
    casa_editrice: '-',
    luogo_anno: 'Gaeta, 1992',
    isbn: '-',
    tema: 'tradizioni popolari'
  },
  {
    titolo: '230. Guida storico-artistica di Formia',
    autore: 'Francesco De Angelis',
    casa_editrice: 'Edizioni Scientifiche',
    luogo_anno: 'Formia, 1999',
    isbn: '-',
    tema: 'arte, guida'
  },
  {
    titolo: '231. La bonifica nell\'Agro Pontino: storia e tecnica',
    autore: 'Carlo Bianchi',
    casa_editrice: 'Tipografia Moderna',
    luogo_anno: 'Latina, 1997',
    isbn: '-',
    tema: 'bonifica, storia'
  },
  {
    titolo: '232. Flora spontanea della riserva naturale di Fogliano',
    autore: 'Lidia Moretti',
    casa_editrice: 'Edizioni Scientifiche Italiane',
    luogo_anno: 'Roma, 2000',
    isbn: '-',
    tema: 'flora, ambiente'
  },
  {
    titolo: '233. Il fiume Liri: aspetti storici e ambientali',
    autore: 'Giovanni Esposito',
    casa_editrice: 'Tipografia Bianconi',
    luogo_anno: 'Priverno, 2002',
    isbn: '-',
    tema: 'fiume, storia, ambiente'
  },
  {
    titolo: '234. La cultura del mare nel Golfo di Gaeta',
    autore: 'Maria Rossi',
    casa_editrice: 'Caramanica Editore',
    luogo_anno: 'Gaeta, 1995',
    isbn: '-',
    tema: 'mare, cultura'
  },
  {
    titolo: '235. Archeologia e storia di Minturno',
    autore: 'Paolo D\'Angelo',
    casa_editrice: 'Edizioni Arti Grafiche',
    luogo_anno: 'Minturno, 1996',
    isbn: '-',
    tema: 'archeologia, storia'
  },
  {
    titolo: '236. Le aree umide della provincia di Latina',
    autore: 'Federica Conti',
    casa_editrice: 'Stamperia Romana',
    luogo_anno: 'Roma, 1999',
    isbn: '-',
    tema: 'natura, ambiente'
  },
  {
    titolo: '237. Tradizioni gastronomiche della regione pontina',
    autore: 'Simona De Luca',
    casa_editrice: '-',
    luogo_anno: 'Latina, 2001',
    isbn: '-',
    tema: 'gastronomia, tradizioni'
  },
  {
    titolo: '238. Il turismo sostenibile nel Parco Nazionale del Circeo',
    autore: 'Alessandro Morelli',
    casa_editrice: 'Edizioni Scientifiche Italiane',
    luogo_anno: 'Roma, 2003',
    isbn: '-',
    tema: 'turismo, ambiente'
  },
  {
    titolo: '239. La città di Formia tra storia e modernità',
    autore: 'Laura Bianchi',
    casa_editrice: 'Edizioni Arti Grafiche',
    luogo_anno: 'Formia, 2002',
    isbn: '-',
    tema: 'città, storia'
  },
  {
    titolo: '240. I sentieri del Parco Naturale dei Monti Aurunci',
    autore: 'Roberto Esposito',
    casa_editrice: 'Tipografia Bianconi',
    luogo_anno: 'Priverno, 2001',
    isbn: '-',
    tema: 'natura, escursionismo'
  },
  {
    titolo: '241. I monumenti storici della provincia di Latina',
    autore: 'Giorgio De Luca',
    casa_editrice: 'Caramanica Editore',
    luogo_anno: 'Marina di Minturno, 1997',
    isbn: '-',
    tema: 'arte, monumenti'
  },
  {
    titolo: '242. La pesca tradizionale nel Golfo di Gaeta',
    autore: 'Antonio Lombardi',
    casa_editrice: '-',
    luogo_anno: 'Gaeta, 1995',
    isbn: '-',
    tema: 'pesca, tradizioni'
  },
  {
    titolo: '243. Le ville storiche di Gaeta e dintorni',
    autore: 'Maria Ferrara',
    casa_editrice: 'Edizioni Scientifiche',
    luogo_anno: 'Gaeta, 2000',
    isbn: '-',
    tema: 'architettura, ville'
  },
  {
    titolo: '244. La fauna selvatica dei Monti Aurunci',
    autore: 'Giuseppe Neri',
    casa_editrice: 'Stamperia Romana',
    luogo_anno: 'Roma, 1998',
    isbn: '-',
    tema: 'fauna, natura'
  },
  {
    titolo: '245. Le tradizioni religiose a Formia',
    autore: 'Don Marco Bianchi',
    casa_editrice: '-',
    luogo_anno: 'Formia, 1996',
    isbn: '-',
    tema: 'religione, tradizioni'
  },
  {
    titolo: '246. La storia dell\'agricoltura pontina',
    autore: 'Luigi Verdi',
    casa_editrice: 'Tipografia Bianconi',
    luogo_anno: 'Priverno, 1999',
    isbn: '-',
    tema: 'agricoltura, storia'
  },
  {
    titolo: '247. Il Parco Naturale Regionale Monti Aurunci: guida pratica',
    autore: 'AA.VV.',
    casa_editrice: 'Edizioni Scientifiche',
    luogo_anno: 'Roma, 2003',
    isbn: '-',
    tema: 'guida, natura'
  },
  {
    titolo: '248. Le coste del Golfo di Gaeta',
    autore: 'Carla Moretti',
    casa_editrice: 'Caramanica Editore',
    luogo_anno: 'Marina di Minturno, 2002',
    isbn: '-',
    tema: 'mare, costa'
  },
  {
    titolo: '249. L\'arte sacra nella provincia di Latina',
    autore: 'Paolo Romano',
    casa_editrice: 'Edizioni Scientifiche',
    luogo_anno: 'Latina, 2000',
    isbn: '-',
    tema: 'arte, religioso'
  },
  {
    titolo: '250. La riserva naturale della Foce del Garigliano',
    autore: 'Elisa Conti',
    casa_editrice: 'Stamperia Romana',
    luogo_anno: 'Roma, 2001',
    isbn: '-',
    tema: 'ambiente, riserva naturale'
  },
  {
    titolo: '251. Il patrimonio archeologico di Minturno',
    autore: 'Gianni Russo',
    casa_editrice: 'Edizioni Arti Grafiche',
    luogo_anno: 'Minturno, 1999',
    isbn: '-',
    tema: 'archeologia'
  },
  {
    titolo: '252. L\'agro pontino nell\'antichità',
    autore: 'Stefano Bianchi',
    casa_editrice: 'Tipografia Bianconi',
    luogo_anno: 'Priverno, 1998',
    isbn: '-',
    tema: 'storia, antichità'
  },
  {
    titolo: '253. La biodiversità nel Parco Nazionale del Circeo',
    autore: 'Anna Ferraro',
    casa_editrice: 'Edizioni Scientifiche Italiane',
    luogo_anno: 'Roma, 2003',
    isbn: '-',
    tema: 'biodiversità, natura'
  },
  {
    titolo: '254. L\'economia rurale nel territorio di Gaeta',
    autore: 'Marco Lombardi',
    casa_editrice: '-',
    luogo_anno: 'Gaeta, 2000',
    isbn: '-',
    tema: 'economia, rurale'
  },
  {
    titolo: '255. Storia e cultura del litorale pontino',
    autore: 'Elena Russo',
    casa_editrice: 'Caramanica Editore',
    luogo_anno: 'Marina di Minturno, 2001',
    isbn: '-',
    tema: 'storia, cultura'
  },
  {
    titolo: '256. Le tradizioni musicali popolari del Lazio meridionale',
    autore: 'Lucia Bianchi',
    casa_editrice: 'Edizioni Scientifiche',
    luogo_anno: 'Roma, 2002',
    isbn: '-',
    tema: 'musica, tradizioni'
  },
  {
    titolo: '257. Il sistema delle aree protette nel Lazio',
    autore: 'AA.VV.',
    casa_editrice: 'Regione Lazio',
    luogo_anno: 'Roma, 2000',
    isbn: '-',
    tema: 'ambiente, aree protette'
  },
   {'titolo': '258. Storie di briganti italiani ', 'autore': 'Washington Irving ', 'casa_editrice': 'Sellerio Editore Palermo ', 'luogo_anno': 'Palermo, 1989', 'isbn': '', 'tema': ''}, {'titolo': "259. 'Nfunne a ju curedóje, Poesie di Giovanni Feliciani", 'autore': 'Giovanni Feliciani', 'casa_editrice': 'Tipolitografia Pietricola', 'luogo_anno': 'Terracina, 2000', 'isbn': '', 'tema': ''},
    {'titolo': '260. Fra vetuste mura (Terracina minuscola)', 'autore': 'G. Cittarelli', 'casa_editrice': 'CI. BI Terracina', 'luogo_anno': 'Terracina, 1989', 'isbn': '', 'tema': ''}, {'titolo': '261. Terracina, Urbs prona in paludes, osservazioni sullo sviluppo urbanistico della città antica ', 'autore': 'Mario Di Mario', 'casa_editrice': 'GraphicArt snc', 'luogo_anno': 'Formia, 1996', 'isbn': '', 'tema': ''}, {'titolo': '262. La chiesa del SS. Salvatore, Un edificio ottocentesco ai margini del centro antico di Terracina ', 'autore': 'Carlo De Angelis, Paola Barbeglia', 'casa_editrice': 'assente', 'luogo_anno': 'assente', 'isbn': '', 'tema': ''}, {'titolo': '263. Giove di Anche. Il tempio, il luogo, i miti.', 'autore': 'Emilio Selvaggi ', 'casa_editrice': 'Tipografia Petricola', 'luogo_anno': 'Terracina, 1999', 'isbn': '', 'tema': ''}, {'titolo': '264. Terracina, luoghi di Italia: città, i territori', 'autore': 'Francesco Salvi', 'casa_editrice': 'Grafiche C.D.P.', 'luogo_anno': 'Roma, 1999', 'isbn': '88-8030-171-3', 'tema': ''}, {'titolo': "265. Storia d'Italia 1. I caratteri originali ", 'autore': 'Ruggiero Romano, Corrado Vivanti', 'casa_editrice': 'Giulio Einaudi Editore ', 'luogo_anno': 'Torino, 2000-2003', 'isbn': '88-06-34231-2', 'tema': ''},
     {'titolo': "266. Storia d'Italia, 2. Dalla caduta dell'impero romano al secolo XVIII ", 'autore': 'Ruggiero Romano e Corrado Vivanti', 'casa_editrice': 'Giulio Einaudi Editore', 'luogo_anno': 'Torino, 1999-2002', 'isbn': '88-06-40790-2', 'tema': ''}, {'titolo': "267. Storia d'Italia, 2 dalla caduta dell'impero romano al secolo XVIII", 'autore': 'Ruggiero Romano e Corrodo Vivanti ', 'casa_editrice': 'Einaudi Editore', 'luogo_anno': 'Torino, 1999-2002', 'isbn': '88-06-40790-2', 'tema': ''}, {'titolo': "268. Storia d'Italia, 3 dal primo Settecento all'Unità", 'autore': 'Ruggiero Romano e Corrado Vivanti', 'casa_editrice': 'Einaudi Editore', 'luogo_anno': 'Treviso, 2001-2004', 'isbn': '88-06-36475-8', 'tema': ''}, {'titolo': "269. Storia d'Italia 4. Dall' unità a oggi ", 'autore': 'Ruggiero Romano e Corrado Vivanti ', 'casa_editrice': 'Giulio Einaudi Editore ', 'luogo_anno': 'Torino, 1999-2002', 'isbn': '88-06-42762-8', 'tema': ''}, {'titolo': "270. Storia d'Italia 4**. Dall' unità a oggi ", 'autore': 'Ruggiero Romano e Corrado Vivanti ', 'casa_editrice': 'Giulio Einaudi Editore ', 'luogo_anno': 'Torino, 2000-2003', 'isbn': '88-06-44065-9', 'tema': ''}, {'titolo': "271.  Storie d'Italia, 4 dall'Unità ad oggi", 'autore': '', 'casa_editrice': '', 'luogo_anno': 'Torino, 1999-2002', 'isbn': '88-06-45286-x', 'tema': ''}, {'titolo': "272. Storia d'Italia 5*. I documenti ", 'autore': 'Ruggiero Romano e Corrado Vivanti ', 'casa_editrice': 'Giulio Einaudi Editore ', 'luogo_anno': 'Torino, 2000-2003', 'isbn': '88-06-38232-2', 'tema': ''}, 
     {'titolo': "273. Storie D'Italia, 5** i documenti ", 'autore': 'Ruggiero Romano e Corrado Vivanti', 'casa_editrice': 'Einaudi Editore', 'luogo_anno': 'Treviso, 2000-2003', 'isbn': '88-06-38232-2', 'tema': ''}, {'titolo': "274. Storia d'Italia, Annali 5, Il paesaggio.", 'autore': 'Ruggiero Romano e Corrado Vivanti', 'casa_editrice': 'Einaudi Editore', 'luogo_anno': 'Treviso, 2000-2003', 'isbn': '88-06-54171-4', 'tema': ''}, {'titolo': "275. Storia d'Italia, Annali 8, Insediamenti e territorio", 'autore': 'Ruggiero Romano e Corrado Vivanti', 'casa_editrice': 'Einaudi Editore', 'luogo_anno': 'Torino,2000-2003', 'isbn': '88-06-58529-0', 'tema': ''}, {'titolo': "276. Storia d'Italia. Le regioni. Dall' unità a oggi", 'autore': 'Ruggiero Romano e Corrado Vivanti ', 'casa_editrice': 'Giulio Einaudi Editore ', 'luogo_anno': 'Torino, 1991-1999', 'isbn': '88-06-12637-7', 'tema': ''}, {'titolo': "277. Storia d'Italia. Le regioni, dall'unità a oggi. La Campania.", 'autore': 'Paolo Macry e Pasquale Villani', 'casa_editrice': 'Einaudi Editore', 'luogo_anno': 'Treviso 2000-2003', 'isbn': '88-06-11876-5', 'tema': ''}, {'titolo': '278.  Storia di Roma 1. Roma in Italia ', 'autore': 'Walter Barberis', 'casa_editrice': 'Giulio Einaudi Editore ', 'luogo_anno': 'Milano, 1989-1996', 'isbn': '88-06-11396-8', 'tema': ''}, {'titolo': "279. Storia Di Roma, 2 l'impero mediterraneo, la repubblica imperiale", 'autore': 'Walter Barberis', 'casa_editrice': 'Einaudi Editore', 'luogo_anno': 'Milano, 1990-1998', 'isbn': '', 'tema': ''}, {'titolo': "280. Storia di Roma 2. L'impero mediterraneo. I principi e il mondo", 'autore': 'Walter Barberis', 'casa_editrice': 'Giulio Einaudi Editore ', 'luogo_anno': 'Treviso, 1999-2002', 'isbn': '88-06-11743-2', 'tema': ''}, {'titolo': "281. Storia di Roma 2. L'impero mediterraneo. La cultura e l' impero", 'autore': 'Walter Barberis ', 'casa_editrice': 'Giulio Einaudi Editore ', 'luogo_anno': 'Vicenza, 2003-2006', 'isbn': '88-06-12842-6', 'tema': ''}, {'titolo': "282. Storia di Roma 3. L'età tardoantica. I. Crisi e trasformazioni", 'autore': 'Arnaldo Momigliano e Aldo Schiavone ', 'casa_editrice': 'Giulio Einaudi Editore ', 'luogo_anno': 'Treviso 2001-2004 ', 'isbn': '88-06-1174-0', 'tema': ''}, {'titolo': "283. Letteratura italiana. Storia e geografia. l'età medievale 1 ", 'autore': 'R. Antonelli e A.Cicchetto e G. Inglese', 'casa_editrice': 'Giulio Einaudi Editore', 'luogo_anno': 'Torino 1987', 'isbn': '88-06-55202-3', 'tema': ''},
      {'titolo': '284. Letteratura italiana. Storia e geografia. Età moderna.2', 'autore': 'R. Antonelli e A.Cicchetto e G. Inglese', 'casa_editrice': 'Giulio Einaudi Editore', 'luogo_anno': 'Torino 1988', 'isbn': '88-06-11378-x', 'tema': ''}, {'titolo': '285. Letteratura italiana. Storia e geografia. Età moderna 2**', 'autore': 'R. Antonelli e A.Cicchetto e G. Inglese', 'casa_editrice': 'Giulio Einaudi Editore', 'luogo_anno': 'Torino 1988', 'isbn': '88-06-11380-1', 'tema': ''}, {'titolo': "286. Letteratura italiana. Storia e geografia. L'età contemporanea. 3", 'autore': 'R. Antonelli e A.Cicchetto e G. Inglese', 'casa_editrice': 'Giulio Einaudi editore', 'luogo_anno': 'Torino 1989', 'isbn': '88-06-11496-4', 'tema': ''}, {'titolo': '287. La Zampogna della Campania. Tra etnomusicologia ed antropologia.', 'autore': 'Giuseppe Mauro', 'casa_editrice': 'Edizioni Ancia Libera', 'luogo_anno': 'Napoli 2003', 'isbn': '88-85-855-59-8', 'tema': ''}, {'titolo': '288. Il regno di Sicilia. Uomo e Natura dal 11 al 13 sec. ', 'autore': 'Salvatore Tramontana', 'casa_editrice': 'Einaudi', 'luogo_anno': 'Torino 1999', 'isbn': '88-06-14922-9', 'tema': ''},
      {'titolo': '289. La memoria itinerante. Microviaggi in terra di lavoro e dintorni.  ', 'autore': 'Tommaso Pisanti ', 'casa_editrice': 'Casa Editrice Fausto Fiorentino', 'luogo_anno': 'Napoli 1999', 'isbn': '', 'tema': ''}, {'titolo': "290. Formia in età contemporanea. Dagli anni '40 alla fine del 900. Volume 5", 'autore': 'Pier Giacomo Sottoriva', 'casa_editrice': 'Elio Sellino Editore ', 'luogo_anno': 'Pratola Serra 2003', 'isbn': '', 'tema': ''}, {'titolo': '291. I Briganti. Storia-Arte-Letteratura-immagimario.', 'autore': 'Renato Mammucari', 'casa_editrice': 'Edimond', 'luogo_anno': 'Città di Castello 2000', 'isbn': ' 88-500-0095-2', 'tema': ''}, {'titolo': '292. Sessa. Regno delle due Sicilie. 1844-1861.', 'autore': 'Beniamino Petteruti', 'casa_editrice': 'Publiscoop Edizioni', 'luogo_anno': 'Sessa Aurunca 1994', 'isbn': '88-86448-00-7', 'tema': ''}, {'titolo': '293. Gaeta.', 'autore': 'Antonio Sperduto', 'casa_editrice': 'Electa Napoli', 'luogo_anno': 'Napoli 1999', 'isbn': '88-435-8630-0', 'tema': ''}, {'titolo': "294. Monumenti d'arte sacra a Gaeta. Storia ed Arte dei maggiori edifici storici di Gaeta. ", 'autore': 'Graziano Fronzuto', 'casa_editrice': 'Edizioni del comune di gaeta', 'luogo_anno': 'Formia 2001', 'isbn': '', 'tema': ''}, {'titolo': '295. Intorno al braciere. Racconti gaetani', 'autore': 'Nicola Maiocca', 'casa_editrice': 'Centro storico culturale di Gaeta', 'luogo_anno': 'Gaeta 1995', 'isbn': '', 'tema': ''}, {'titolo': "296. Tempo di lavoro nell'anno della peste. ", 'autore': 'Gianpiero di Marco ', 'casa_editrice': 'Arte Tipografica ', 'luogo_anno': 'Napoli 2002', 'isbn': '88-873-75-20-8', 'tema': ''}, {'titolo': '297. Mancante', 'autore': '', 'casa_editrice': '', 'luogo_anno': '', 'isbn': '', 'tema': ''},
       {'titolo': '298. Gaeta e dintorni. Collana Nova et Vetera. Vol. 3', 'autore': 'D. Salvatore Buonomo', 'casa_editrice': 'Gaetagrafiche', 'luogo_anno': 'Gaeta 1991', 'isbn': '', 'tema': ''}, {'titolo': '299. Gaeta e dintorni. Collana et Vetera. Vol. 2', 'autore': 'D- Salvatore Buonomo', 'casa_editrice': 'Gaetagrafiche', 'luogo_anno': 'Gaeta 1989', 'isbn': '', 'tema': ''}, {'titolo': '300. Terra e lavoro nel lazio meridionale', 'autore': 'Alfio Cortonesi e Gioacchino Giammaria', 'casa_editrice': 'Editori Laterza', 'luogo_anno': 'Bari 1999', 'isbn': '88-420-5968-2', 'tema': ''}, {'titolo': '301. Mancante', 'autore': '', 'casa_editrice': '', 'luogo_anno': '', 'isbn': '', 'tema': ''}, 
       {'titolo': '302. Brigantaggio meridionale 1806-1863', 'autore': 'Tommaso Pedio', 'casa_editrice': 'Capone Editore', 'luogo_anno': 'Cavallino di Lecce 1997', 'isbn': '', 'tema': ''}, {'titolo': '303. Il patrimonio culturale di Gaeta. Storia, arte, tradizioni. ', 'autore': 'Mario Sanfilippo e Amedeo Pistoese', 'casa_editrice': 'Fratelli Palombari Editori', 'luogo_anno': 'Roma 1997', 'isbn': '88-7621-893-9', 'tema': ''}, {'titolo': "304. Cultura e arte a Gaeta nel tempo di Caboto. La marineria nell'età di Caboto.", 'autore': 'Erasmo Vaudo', 'casa_editrice': 'Centrp storico culturale di Gaeta', 'luogo_anno': 'Gaeta 1997', 'isbn': '', 'tema': ''}, {'titolo': '305. San Prisco agli inizi del XIX secolo. ', 'autore': 'Luigi Russo', 'casa_editrice': "L'aperia", 'luogo_anno': 'Caserta 2001', 'isbn': '88-87638-03-9', 'tema': ''}, {'titolo': '306. Mancante', 'autore': '', 'casa_editrice': '', 'luogo_anno': '', 'isbn': '', 'tema': ''}, {'titolo': '307. Fratellli briganti. Gaeta 1861. ', 'autore': 'Vichi De Marchi', 'casa_editrice': 'Mondadori', 'luogo_anno': 'Milano 2003', 'isbn': '88-04-51578-3', 'tema': ''}, {'titolo': '308. Desiderio di Montecassino e le basiliche di Terra del lavoro. Viaggio dei Normanni nel Mediterraneo.', 'autore': 'Felicio Corvese', 'casa_editrice': 'Società editrice Laperia', 'luogo_anno': 'Officine grafiche Ernesto Farina', 'isbn': '88-87638-00-4', 'tema': ''}, {'titolo': '309. Castelforte Ss. Cosma e Damiano. Duecento anni di contenzioso', 'autore': 'Fiorello jonta', 'casa_editrice': 'Book Shop K.', 'luogo_anno': 'Gaeta 1997', 'isbn': '', 'tema': ''}, {'titolo': '310. Insorgenza e brigantaggio nel lazio dal XVI al XX Secolo.', 'autore': 'Giacinto Mastrogiovanni ', 'casa_editrice': 'Lunario Romano', 'luogo_anno': 'Roma 2001', 'isbn': '', 'tema': ''}, {'titolo': "311. Gaeta d'altri tempi 2", 'autore': 'Pasquale Di Ciaccio', 'casa_editrice': 'La poligrafica ', 'luogo_anno': 'Gaeta 1983', 'isbn': '', 'tema': ''},
        {'titolo': '312. La guerra sugli Aurunci. Diario di uno sfollamento. ', 'autore': 'Candida Pecorini Monforte', 'casa_editrice': 'Graficart', 'luogo_anno': 'Formia 1994', 'isbn': '', 'tema': ''}, {'titolo': '313. Vita di San Magno arcivescovo e martire, protettore e padrone della città di Anagni', 'autore': 'Giuseppe Rocco Volpi', 'casa_editrice': 'Institutum Historicum Societatis Iesu ', 'luogo_anno': 'Roma 1732', 'isbn': '', 'tema': ''}, {'titolo': '314. Il male di vivere', 'autore': 'Giuseppe Nalli', 'casa_editrice': 'Firenze libri', 'luogo_anno': 'Firenze 1987', 'isbn': '', 'tema': ''}, {'titolo': '315. Quattro candelabri di bronzo e ottone', 'autore': 'Giuseppe Nalli', 'casa_editrice': 'Editore Vincenzo Ursini', 'luogo_anno': 'Catanzaro 1991', 'isbn': '', 'tema': ''}, {'titolo': "316. Nell'oblio degli anni (appunti di fine millennio)", 'autore': 'Giuseppe Nalli', 'casa_editrice': 'Casa Editrice Nicola Calabria', 'luogo_anno': 'Patti 2002', 'isbn': '88-88010-48-3', 'tema': ''}, {'titolo': '317. Altro che brigante! "Andreozzi Luigi di Pastena in Regno"', 'autore': 'Costantino Jadecola', 'casa_editrice': 'Le tre torri', 'luogo_anno': 'Cassino 2001', 'isbn': '', 'tema': ''}, {'titolo': '318. Svevi: ascesa e tramonto di una grande dinastia imperiale.', 'autore': 'Mario Maceroni', 'casa_editrice': 'Centro studi manfrediani di Ceprano', 'luogo_anno': 'Ceprano 1999', 'isbn': '', 'tema': ''}, {'titolo': '319. La frontiera di Ceprano. Cerniera millenaria della valli del Liri e del Sacco ', 'autore': 'Maria Teresa Gizzi Sassano', 'casa_editrice': 'Tipografia del genio civile', 'luogo_anno': 'Roma 1999', 'isbn': '88-7722-507-6', 'tema': ''}, {'titolo': '320. Nascita di una provincia. ', 'autore': 'Costantino Jadecola', 'casa_editrice': 'Le tre torri', 'luogo_anno': 'Roccasecca 2003', 'isbn': '', 'tema': ''}, {'titolo': '321. Via Latina. ', 'autore': 'Pier Giorgio Monti', 'casa_editrice': 'Istituto poligrafico e zecca dello stato', 'luogo_anno': 'Roma 1995', 'isbn': '88-240-3953-7', 'tema': ''}, {'titolo': '322. Malaria. Il secondo dopoguerra in provincia di Frosinone.', 'autore': 'Costantino Jadecola', 'casa_editrice': 'Centro di studi sorani "V.Patriarca"', 'luogo_anno': 'Sora 2003', 'isbn': '', 'tema': ''},
         {'titolo': '323. Vallerotonda 1943-1993. La battaglia delle Mainarde. ', 'autore': 'Associazione Historia', 'casa_editrice': 'Edizioni ITER', 'luogo_anno': 'Subiaco 1993', 'isbn': '', 'tema': ''}, {'titolo': '324. Fregellae. 1. Le fonti, la storia,il territorio.', 'autore': 'Filippo Coarelli e Pier Monti ', 'casa_editrice': 'Edizioni quasar. ', 'luogo_anno': 'Roma 1998', 'isbn': '88-7140-120-4', 'tema': ''}, {'titolo': '325. Fregellae 2. Il santuario di Esculapio. ', 'autore': 'Filippo Coarelli', 'casa_editrice': 'Edizioni Quasar. ', 'luogo_anno': 'Roma 1986', 'isbn': '88-85020-50-X', 'tema': ''}, {'titolo': '326. 1° seminario nazionale di studi sulle mura poligonali. ', 'autore': 'F. Forletta, E. M. Beranger, V. Evangelisti, C. Zannella', 'casa_editrice': 'Tipolitografia Strambi', 'luogo_anno': 'Alatri 1989', 'isbn': '', 'tema': ''}, {'titolo': '327. 2° seminario internazionale di studi sulle mura poligonali. ', 'autore': 'F. Forletta, V. Evangelisti, C. Zannella', 'casa_editrice': 'Tipolitografia Strambi', 'luogo_anno': 'Alatri 1990', 'isbn': '', 'tema': ''}, {'titolo': '328. Fiuggi. Il tempo perduto 1900-1950.', 'autore': 'Piergiorgio Vallorosi', 'casa_editrice': 'Tipolitografia Strambi', 'luogo_anno': 'Alatri', 'isbn': '', 'tema': ''}, {'titolo': '329. I viaggi di Giovanni e Sebastiano Caboto.', 'autore': 'Gino Barbieri ', 'casa_editrice': 'AZ Editrice', 'luogo_anno': ' Verona 1989', 'isbn': '', 'tema': ''},
          {'titolo': "330. Lazio. Attraverso l'italia illustrazione delle regioni italiane 13. ", 'autore': 'Consociazione turistica italiana', 'casa_editrice': '', 'luogo_anno': 'Milano 1943', 'isbn': '', 'tema': ''}, {'titolo': '331. I Monti Lepini. Viaggio attraverso un paradiso incontaminato dove convivono meraviglie della natura, vestigia del passato e monumenti ricchi di storia. ', 'autore': 'Luigi Zaccheo', 'casa_editrice': 'Newton Compton Editori', 'luogo_anno': 'Roma 1985', 'isbn': '', 'tema': ''}, {'titolo': '332. Anagni e i suoi monumenti.', 'autore': 'Aurelio Prosperi', 'casa_editrice': 'Litografia Iride Roma', 'luogo_anno': 'Roma 1995', 'isbn': '', 'tema': ''}, 
          {'titolo': '333. La cripta della Cattedrale di Anagni. Una piccola sistina sotterranea. ', 'autore': 'G. Ravasi', 'casa_editrice': "Edizioni d'arte Marconi ", 'luogo_anno': 'Genova 1995', 'isbn': '', 'tema': ''}, {'titolo': '334. Conoscere le ville di Roma e del Lazio. ', 'autore': 'Isa Belli Bersali ', 'casa_editrice': 'Multigrafica editrice', 'luogo_anno': 'Roma 1982 ', 'isbn': '', 'tema': ''}, {'titolo': '335. Folklore fondano', 'autore': 'Dario Lo Sordo', 'casa_editrice': 'Associazione Italiana Maestri Cattolici', 'luogo_anno': 'Fondi 1973', 'isbn': '', 'tema': ''}, {'titolo': '336. Presenza e testimonianza dei gesuiti a Boville ernica. ', 'autore': "Don Bernardino d'Aversa", 'casa_editrice': 'Tipolitografia Abbazia di Casamari', 'luogo_anno': 'Casamari 1995', 'isbn': '', 'tema': ''}, {'titolo': '337. Minturno allo specchio. ', 'autore': 'G. Tamborrino Orsini', 'casa_editrice': 'Tipografia Porziuncola', 'luogo_anno': 'Assisi 1977', 'isbn': '', 'tema': ''}, {'titolo': '338. Filippo Michele Elles. Segni e la sua diocesi nei primi decenni del settecento', 'autore': 'Bruno Navarra', 'casa_editrice': 'Centro Studi del Lazio', 'luogo_anno': 'Roma 1973', 'isbn': '', 'tema': ''}, {'titolo': '339. La villa romana con guida archeologica alle ville romane. ', 'autore': 'Harnald Mielsch', 'casa_editrice': 'Giunti', 'luogo_anno': 'Prato 1999', 'isbn': '88-09-21729-2', 'tema': ''}, {'titolo': '340. Segni. La chiesa di San Pietro già tempio pagano ', 'autore': 'Bruno Navarra', 'casa_editrice': 'Editore Torre ', 'luogo_anno': 'Roma ', 'isbn': '', 'tema': ''}, {'titolo': '341. Segni e il suo tempio etrusco-italico. ', 'autore': 'Bruno Navarra ', 'casa_editrice': 'Tipografia Ferrazza e Bonelli', 'luogo_anno': 'Valmontone 1978', 'isbn': '', 'tema': ''},
           {'titolo': '342. Miniature Antiquarum. Monete dal garigliano ', 'autore': 'Giovanna Rita Bellini', 'casa_editrice': 'Edizioni Ennerre', 'luogo_anno': 'Milano 1996', 'isbn': '', 'tema': ''}, {'titolo': '343. Lo statuto di Collepardo. ', 'autore': 'G. Gianmaria, T. Cecilia', 'casa_editrice': 'Tipografia Don Guanella', 'luogo_anno': 'Roma 1988', 'isbn': '', 'tema': ''}, {'titolo': '344. Itri.', 'autore': 'M. De Spagnolis', 'casa_editrice': 'Edizioni di Odisseo', 'luogo_anno': 'Itri 1977', 'isbn': '', 'tema': ''}, {'titolo': '345. Il testamento di Docibile I Ipata di Gaeta (sec. X) ', 'autore': 'Anna Nocella', 'casa_editrice': 'La poligrafica di Gaeta', 'luogo_anno': 'Gaeta 1973', 'isbn': '', 'tema': ''}, {'titolo': '346. La storia dei segni I', 'autore': 'Bruno Navarra', 'casa_editrice': 'Seminario vescovile di segni', 'luogo_anno': 'Segni 1983', 'isbn': '', 'tema': ''}, {'titolo': '347. Monte Lanico ', 'autore': 'Giovanni Ronzoni', 'casa_editrice': 'Comitato dei festeggiamenti per la ss maria del soccorso ', 'luogo_anno': 'Monte Lanico 1970', 'isbn': '', 'tema': ''}, {'titolo': '348. Dalla lestra al podere. La bonifica pontina attraverso documenti inediti e testimonianze. 1927-1939.', 'autore': 'Tommaso Stabile ', 'casa_editrice': 'Arti Grafiche Archimio', 'luogo_anno': 'Latina 1977', 'isbn': '', 'tema': ''}, {'titolo': '349. Maria Salome la madre dei figli del tuono e veroli', 'autore': 'Carlo Tarquini ', 'casa_editrice': 'Franceco Ciolfi', 'luogo_anno': 'Cassino 1996', 'isbn': '', 'tema': ''}, {'titolo': '350. Il settecento a terracina', 'autore': 'Lucia ployer', 'casa_editrice': 'Archivio storico', 'luogo_anno': 'Latina 2001', 'isbn': '', 'tema': ''}, {'titolo': '351. Dalle paludi una provincia. Storia, economia e immagini. ', 'autore': 'Tommaso Stabile', 'casa_editrice': 'Arti Grafiche Archimio', 'luogo_anno': 'Latina 1984', 'isbn': '', 'tema': ''}, {'titolo': '352. Il riuso dei castelli. Esperienze e proposte. ', 'autore': "Società tarquiniense d'arte e storia, Gruppo Archeologico Romano", 'casa_editrice': 'Paleani editrice ', 'luogo_anno': 'Roma 1987', 'isbn': '', 'tema': ''}, {'titolo': '353. Haiku. Momenti 90', 'autore': 'Giuseppe Napolitano', 'casa_editrice': 'Centro stampa Gaeta', 'luogo_anno': 'Gaeta 1990', 'isbn': '', 'tema': ''},
            {'titolo': "354. In punta d'ago. ", 'autore': 'Tommaso Lisi', 'casa_editrice': "Stamperia dell'arancio", 'luogo_anno': 'Grottammare 1995', 'isbn': '', 'tema': ''}, {'titolo': '355. Andromaca e le altre ', 'autore': 'Sandra Cervone', 'casa_editrice': "L'Autore libri Firenze", 'luogo_anno': 'Bagno a ripoli 1997', 'isbn': '88-7254-919-1', 'tema': ''}, {'titolo': '356. Monologo aperto', 'autore': 'Gaetano Andrisani', 'casa_editrice': 'La Diana', 'luogo_anno': 'Marcianise 2003', 'isbn': '', 'tema': ''}, {'titolo': '357. Contrappunti ', 'autore': 'Gaetano Andrisani', 'casa_editrice': 'La Diana', 'luogo_anno': 'Marcianise 2003', 'isbn': '', 'tema': ''}, {'titolo': '358. I sandali', 'autore': 'Gaetano Andrisani', 'casa_editrice': 'La Diana', 'luogo_anno': 'Marcianise 2001', 'isbn': '', 'tema': ''},
             {'titolo': '359. La Baltica', 'autore': 'Gaetano Andrisani', 'casa_editrice': 'La Diana', 'luogo_anno': 'Marcianise 2002', 'isbn': '', 'tema': ''}, {'titolo': '360. La Cattedrale ', 'autore': 'Gaetano Andrisani', 'casa_editrice': 'La Diana', 'luogo_anno': 'Marcianise 2001', 'isbn': '', 'tema': ''}, {'titolo': '361. Otto milioni di biciclette senza freni.', 'autore': 'Antonio Schiettino', 'casa_editrice': 'Lalli Editore', 'luogo_anno': 'Firenze 1986', 'isbn': '', 'tema': ''}, {'titolo': '362. Verna Matthiola', 'autore': 'Salvatore Mola', 'casa_editrice': 'Tipografia Centro Stampa', 'luogo_anno': 'Gaeta 1990', 'isbn': '', 'tema': ''}, {'titolo': '363. Nel mare alla scoperta delle profondità ', 'autore': 'Adriano Madonna ', 'casa_editrice': 'Centro Storico Culturale Gaeta sezione Archeosub', 'luogo_anno': 'Scauri 1972', 'isbn': '', 'tema': ''}, {'titolo': '364. Non Importa', 'autore': 'Pasquale Di Nitto', 'casa_editrice': 'Editrice letteraria internazionale', 'luogo_anno': 'Malta 1997', 'isbn': '', 'tema': ''}, {'titolo': "365. Strappi d'anima ", 'autore': 'Nina Rotunno', 'casa_editrice': 'Edizioni Eva', 'luogo_anno': 'Cassino 1998', 'isbn': '', 'tema': ''}, {'titolo': '366. I giorni nel labirinto', 'autore': 'Michele Grazioseto ', 'casa_editrice': 'Edizione Il Ponte', 'luogo_anno': 'Fondi 1988', 'isbn': '', 'tema': ''}, {'titolo': '367. La luna e la spina ', 'autore': 'Ida Maina', 'casa_editrice': 'Editrice Ianua', 'luogo_anno': 'Cisterna di Latina 1988', 'isbn': '', 'tema': ''}, {'titolo': "368. 'O Laureato. Poesie Dialettali", 'autore': 'Claudio Carbone', 'casa_editrice': 'Poligrafica ', 'luogo_anno': 'Gaeta 1988', 'isbn': '', 'tema': ''}, {'titolo': '369. Figlie di Eva. ', 'autore': 'Nicola Napolitano', 'casa_editrice': 'Società Editrice Napoletana', 'luogo_anno': 'Napoli 1981', 'isbn': '', 'tema': ''}, {'titolo': '370. Ragia', 'autore': 'Maurizio Della Grotta ', 'casa_editrice': 'Editrice Ianua', 'luogo_anno': 'Cisterna di Latina 1990', 'isbn': '', 'tema': ''}, 
            {'titolo': '371. Insieme a una ragazza che ci spia. Invito a Catullo', 'autore': 'Giuseppe Napolitano ', 'casa_editrice': 'Firenze Ateneum', 'luogo_anno': 'Firenze 1993', 'isbn': '', 'tema': ''}, {'titolo': '372. Ottantacinque poesie', 'autore': 'Nicola Napolitano', 'casa_editrice': 'Edizioni Eva', 'luogo_anno': 'Frosinone 1998', 'isbn': '', 'tema': ''}, {'titolo': '373. Viaggio lungo le rive del mio tempo (1894-1975)', 'autore': 'Vittorio Cimmino', 'casa_editrice': 'Rebellato Editore', 'luogo_anno': 'Venezia 1983', 'isbn': '', 'tema': ''}, {'titolo': '374. Briciole', 'autore': 'Antonio Riciniello', 'casa_editrice': 'Edizioni Lo Spazio', 'luogo_anno': 'Fondi 1995', 'isbn': '', 'tema': ''}, {'titolo': '375. Scorza e Mollica', 'autore': 'Nicola Napolitano', 'casa_editrice': "L'autore libri firenze", 'luogo_anno': 'Firenze 1992', 'isbn': '88-7254-075-5', 'tema': ''}, {'titolo': '376. Nicola Napolitano. Educatore poeta. ', 'autore': 'Filomena Morelli', 'casa_editrice': 'Russo Editore Caserta ', 'luogo_anno': 1979, 'isbn': '', 'tema': ''}, {'titolo': '377. Fiori di carta per te. Massime, aforismi, frammenti.', 'autore': 'Lora Prizi', 'casa_editrice': 'Sera Arcangeli', 'luogo_anno': 'Roma 1995', 'isbn': '', 'tema': ''}, {'titolo': '378. ', 'autore': '', 'casa_editrice': '', 'luogo_anno': '', 'isbn': '', 'tema': ''}, {'titolo': '379.', 'autore': '', 'casa_editrice': '', 'luogo_anno': '', 'isbn': '', 'tema': ''}];
