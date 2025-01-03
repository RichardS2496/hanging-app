const words: string[] = [
  "ANTAGONISMO",
  "APOTEOSIS",
  "ARMONIA",
  "ASCENDENCIA",
  "ASIMILACION",
  "AUTORIDAD",
  "BENEVOLENCIA",
  "BIFURCACION",
  "CALIGRAFIA",
  "CATARSIS",
  "COHERENCIA",
  "COLATERAL",
  "COMPETENCIA",
  "COMPLEJIDAD",
  "CONDESCENDENCIA",
  "CONJUNTURA",
  "CONSOLIDACION",
  "CONTINGENCIA",
  "CONVERGENCIA",
  "CORRELACION",
  "CREDIBILIDAD",
  "CUALITATIVO",
  "CUANTIFICABLE",
  "DECLINACION",
  "DESINTEGRACION",
  "DETERIORO",
  "DIVERGENCIA",
  "EFICIENCIA",
  "ELUCIDACION",
  "EMANCIPACION",
  "ENIGMA",
  "ENTROPIA",
  "EPIFANIA",
  "ESCALABILIDAD",
  "ESCRUPULOSO",
  "ESTABILIDAD",
  "ESTRATEGIA",
  "EXCENTRICIDAD",
  "EXPANSION",
  "EXTINCION",
  "FACULTAD",
  "FENOMENOLOGIA",
  "FILOSOFIA",
  "FRAGMENTACION",
  "FUNDAMENTACION",
  "HETEROGENEIDAD",
  "HIPOTESIS",
  "HOMOGENEIDAD",
  "IMPONDERABLE",
  "IMPREVISTO",
  "IMPROVISACION",
  "INCERTIDUMBRE",
  "INCONMENSURABLE",
  "INHERENTE",
  "INNOVACION",
  "INSOSLAYABLE",
  "INTERDEPENDENCIA",
  "INTERSECCION",
  "INTRINSECO",
  "INTEGRACION",
  "LATERALIDAD",
  "LEGISLATIVO",
  "LINEALIDAD",
  "MANIFIESTO",
  "MATERIALIZACION",
  "METAFISICA",
  "MICROSCOPICO",
  "MULTIDIMENSIONAL",
  "NARRATIVA",
  "NOCIVIDAD",
  "OMNIPRESENTE",
  "PARADIGMA",
  "PERCEPCION",
  "PERPETUIDAD",
  "PERTINENCIA",
  "PRAGMATICO",
  "PRESUPOSICION",
  "PROCRASTINACION",
  "PROLIFERACION",
  "PROMISORIO",
  "QUANTITATIVO",
  "RELEVANCIA",
  "REPERCUSION",
  "RESILIENCIA",
  "RETRIBUCION",
  "SATISFACTORIO",
  "SIMETRIA",
  "SINGULARIDAD",
  "SOBERANIA",
  "SOBRESALIENTE",
  "SUBORDINACION",
  "SUBSISTENCIA",
  "SUPERFLUO",
  "SUSTENTABILIDAD",
  "TANGIBILIDAD",
  "TENDENCIA",
  "TRANSFORMACION",
  "TRANSCENDENCIA",
  "UNILATERAL",
  "UTILITARISMO",
  "VANGUARDIA",
  "VIABILIDAD",
  "VICISITUD",
  "VOLATIL",
  "VOLUNTARIEDAD",
  "ABSOLUTO",
  "ABSTRACTO",
  "ALCANCE",
  "ALTERNATIVA",
  "ANOMALIA",
  "ANTAGONICO",
  "ANTITESIS",
  "ARCAICO",
  "ARTIFICIO",
  "ASTROLOGIA",
  "ATMOSFERA",
  "ATRIBUTO",
  "AUSTERIDAD",
  "AVERSION",
  "BIPOLAR",
  "BRUSCO",
  "CACOFONIA",
  "CAPACIDAD",
  "CIRCUNSTANCIA",
  "CLARIVIDENCIA",
  "COEXISTENCIA",
  "COMPLEMENTO",
  "COMPROMISO",
  "CONCEPCION",
  "CONFLICTO",
  "CONQUISTA",
  "CONSECUENCIA",
  "CONTEMPLACION",
  "CONTRADICCION",
  "CONVICCION",
  "COSMICO",
  "CRITERIO",
  "CUALIDAD",
  "CURVATURA",
  "DEAMBULAR",
  "DECORO",
  "DECREPITO",
  "DEDUCCION",
  "DEFICIENCIA",
  "DEGENERACION",
  "DEMARCACION",
  "DEMOCRATICO",
  "DENSIDAD",
  "DEPURACION",
  "DESAFIO",
  "DESCONCIERTO",
  "DESESTRUCTURACION",
  "DESTREZA",
  "DETERMINACION",
  "DIALECTICO",
  "DICOTOMIA",
  "DIMENSION",
  "DISCERNIMIENTO",
  "DISPERSION",
  "DISPONIBILIDAD",
  "DISTINCION",
  "DIVERSIDAD",
  "DOMINIO",
  "DRAMATICO",
  "ECLECTICO",
  "ECOLOGICO",
  "EFIMERO",
  "ELABORACION",
  "ELEGANCIA",
  "ELEMENTAL",
  "EMPIRICO",
  "ENERGIA",
  "ENFOQUE",
  "ENTELEQUIA",
  "ENUMERACION",
  "EPIGRAMA",
  "EQUILIBRIO",
  "EQUIVOCIDAD",
  "ERUDICION",
  "ESCISION",
  "ESPECTRO",
  "ESPLENDOR",
  "ESPONTANEO",
  "ESTATICO",
  "ESTRUCTURAL",
  "EVOLUCION",
  "EXHAUSTIVO",
  "EXPEDICION",
  "EXPERIMENTACION",
  "EXTRAVAGANTE",
  "FACILIDAD",
  "FATALIDAD",
  "FLEXIBILIDAD",
  "FORMULACION",
  "FRAGILIDAD",
  "FUNDAMENTO",
  "GENEROSIDAD",
  "GRAVITACION",
  "HABITUAL",
  "HARMONICO",
  "HEURISTICO",
  "HIBRIDO",
  "HIPOCRITA",
  "HISTORICO",
  "HOLOGRAFIA",
  "ICONICO",
  "IDEALISMO",
  "IDENTIDAD",
  "ILUSION",
  "IMPACTO",
  "IMPLANTACION",
  "IMPORTANCIA",
  "IMPRESCINDIBLE",
  "IMPRODUCTIVO",
  "INALTERABLE",
  "INDEPENDIENTE",
  "INDISCUTIBLE",
  "INELUDIBLE",
  "INERTE",
  "INESTABLE",
  "INFLEXIBLE",
  "INMUTABLE",
  "INNATO",
  "INOPERANTE",
  "INQUISITIVO",
  "INSATISFACCION",
  "INSINUACION",
  "INSTANTANEO",
  "INTELIGENCIA",
  "INTERPRETACION",
  "INVENCION",
  "INVISIBLE",
  "IRREVERSIBLE",
  "IRRUPCION",
  "ITINERARIO",
  "LEGITIMIDAD",
  "LEXICO",
  "LITERALIDAD",
  "LUMINOSIDAD",
  "MAGNETISMO",
  "MAGNITUD",
  "MANIPULACION",
  "MATEMATICO",
  "MEANDRO",
  "MECANISMO",
  "MEDIBLE",
  "MELANCOLIA",
  "MEMORIA",
  "METAFORICO",
  "MODULAR",
  "MONUMENTAL",
  "MORFOLOGICO",
  "MUTACION",
  "NITIDEZ",
  "NUCLEO",
  "NUMERICO",
  "OBSOLETO",
  "OPACIDAD",
  "OPTIMIZACION",
  "ORIENTACION",
  "PERSISTENCIA",
  "POLARIDAD",
  "PRECEDENTE",
  "PRESENCIA",
  "PRIVACION",
  "PRODIGIOSO",
  "PROVISIONAL",
  "PROYECCION",
  "RADICAL",
  "REDUNDANTE",
  "REFLEXION",
  "REGISTRO",
  "REITERACION",
  "RELATIVIDAD",
  "REMANENTE",
  "REPLICA",
  "REVELACION",
  "RIGIDEZ",
  "ROMANTICISMO",
  "SEGMENTACION",
  "SELECCION",
  "SEMANTICO",
  "SINTESIS",
  "SUBJETIVIDAD",
  "SUSCEPTIBLE",
  "SUTIL",
  "TACTICA",
  "TEOLOGIA",
  "TERMINOLOGIA",
  "TOPOGRAFIA",
  "TRASTORNO",
  "TRIANGULO",
  "UNIVERSAL",
  "VECTORIAL",
  "VERTICALIDAD",
  "VERSATIL",
  "VIGENCIA",
  "VINCULO",
  "VISIONARIO",
  "ZENIT",
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
