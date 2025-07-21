const wordDictionary = {
    easy: [
      'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
      'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
      'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take',
      'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also',
      'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us',
      'is', 'are', 'was', 'were', 'been', 'being', 'has', 'had', 'does', 'did', 'should', 'may', 'might', 'must', 'am',
      'cat', 'dog', 'run', 'big', 'small', 'red', 'blue', 'green', 'yellow', 'black', 'white', 'hot', 'cold', 'fast', 'slow', 'high', 'low', 'old',
      'bad', 'happy', 'sad', 'tall', 'short', 'long', 'wide', 'narrow', 'thick', 'thin', 'heavy', 'light', 'strong', 'weak', 'rich', 'poor', 'clean', 'dirty',
      'open', 'close', 'start', 'stop', 'begin', 'end', 'walk', 'jump', 'sit', 'stand', 'sleep', 'wake', 'eat', 'drink', 'read', 'write', 'play',
      'box', 'car', 'bus', 'sun', 'moon', 'fish', 'hat', 'book', 'pen', 'cup', 'ball', 'door', 'tree', 'bed', 'shoe', 'sock', 'toy', 'boy', 'girl', 'man',
      'woman', 'mom', 'dad', 'rain', 'snow', 'wind', 'fire', 'ice', 'job', 'coin', 'rice', 'soup', 'sky', 'sea', 'sand', 'milk'
    ],
  
    medium: [
      'through', 'important', 'together', 'children', 'everyone', 'school', 'world', 'problem', 'hand', 'part', 'place', 'live', 'last', 'ask', 'need', 'feel',
      'become', 'between', 'another', 'something', 'nothing', 'everything', 'anything', 'someone', 'anyone', 'nobody', 'somebody', 'anybody', 'everybody', 'somewhere', 'anywhere', 'everywhere', 'nowhere',
      'thought', 'brought', 'fought', 'caught', 'taught', 'bought', 'sought', 'wrought', 'daughter', 'laughter', 'slaughter', 'water', 'better', 'letter', 'matter', 'pattern', 'modern', 'southern', 'northern', 'western',
      'eastern', 'central', 'natural', 'cultural', 'personal', 'national', 'international', 'traditional', 'educational', 'professional', 'environmental', 'governmental', 'developmental', 'experimental', 'fundamental',
      'computer', 'internet', 'software', 'hardware', 'network', 'system', 'program', 'database', 'website', 'email', 'online', 'digital', 'virtual', 'electronic', 'automatic', 'mechanical', 'electrical', 'chemical',
      'physical', 'biological', 'psychological', 'sociological', 'philosophical', 'mathematical', 'statistical', 'analytical', 'theoretical', 'practical', 'technical', 'logical', 'critical', 'creative', 'active',
      'positive', 'negative', 'relative', 'absolute', 'complete', 'perfect', 'excellent', 'powerful', 'successful', 'peaceful', 'careful', 'helpful', 'useful', 'harmful', 'painful', 'joyful',
      'colorful', 'meaningful', 'purposeful', 'thoughtful', 'respectful', 'grateful', 'faithful', 'hopeful', 'graceful', 'skillful',
      'library', 'history', 'science', 'subject', 'teacher', 'student', 'project', 'picture', 'dinner', 'feeling', 'message', 'journey', 'monster', 'capital', 'citizen', 'culture',
      'country', 'border', 'promise', 'receive', 'prepare', 'whisper', 'thunder', 'window', 'battle', 'mirror', 'silver', 'castle', 'tunnel', 'costume', 'shadow', 'planet', 'canyon', 'valley', 'desert', 'forest'
    ],
  
    hard: [
      'extraordinary', 'incredible', 'astonishing', 'magnificent', 'spectacular', 'phenomenal', 'remarkable', 'marvelous', 'fabulous', 'tremendous', 'enormous', 'gigantic', 'colossal', 'massive',
      'comprehensive', 'understanding', 'knowledgeable', 'intelligent', 'brilliant', 'genius', 'expertise', 'specialist', 'technician', 'scientist', 'researcher', 'investigator', 'explorer', 'adventurer',
      'anthropological', 'archaeological', 'geological', 'metaphysical', 'phenomenological', 'hermeneutical', 'deconstructionist', 'postmodernist', 'structuralist',
      'revolutionary', 'evolutionary', 'constitutional', 'institutional', 'organizational', 'operational', 'functional', 'multinational', 'transnational', 'intercontinental', 'interdisciplinary',
      'multidisciplinary', 'transdisciplinary', 'intergenerational', 'multicultural', 'transcultural', 'interpersonal',
      'communication', 'collaboration', 'cooperation', 'coordination', 'organization', 'administration', 'management', 'leadership', 'partnership', 'relationship', 'friendship', 'citizenship', 'membership',
      'scholarship', 'fellowship', 'ownership', 'authorship', 'readership', 'viewership', 'listenership', 'followership', 'stewardship', 'guardianship', 'sponsorship', 'mentorship',
      'parliament', 'jurisdiction', 'accountability', 'sustainability', 'infrastructure', 'entrepreneurship', 'philanthropist', 'jurisprudence', 'transcendental', 'quintessential', 'dichotomy', 'hegemony', 'paradigm', 'bureaucracy'
    ],
  
    expert: [
      'supercalifragilisticexpialidocious', 'pneumonoultramicroscopicsilicovolcanoconioses', 'floccinaucinihilipilification', 'antidisestablishmentarianism', 'hippopotomonstrosesquippedaliophobia',
      'pseudopseudohypoparathyroidism', 'electroencephalographically', 'immunoelectrophoretically', 'radioimmunoelectrophoresis', 'psychophysicotherapeutics', 'thyroparathyroidectomized', 'pneumoencephalographically',
      'otorhinolaryngologist', 'triskaidekaphobia', 'deinstitutionalization', 'counterrevolutionaries', 'psychoneuroendocrinological', 'dichlorodiphenyltrichloroethane',
      'hexakosioihexekontahexaphobia', 'spectrophotofluorometrically', 'thyrocalcitonin', 'psychopharmacological'
    ],

    technical: [
        'algorithm', 'database', 'framework', 'interface', 'protocol', 'syntax', 'semantics', 'compiler', 'interpreter', 'debugger', 'profiler', 'optimizer', 'validator', 'parser', 'lexer',
        'tokenizer', 'serializer', 'deserializer', 'encapsulation', 'inheritance', 'polymorphism', 'abstraction', 'modularity', 'scalability', 'maintainability', 'reusability', 'portability',
        'compatibility', 'interoperability', 'extensibility', 'configurability', 'customizability', 'accessibility', 'usability', 'reliability', 'availability', 'durability', 'stability',
        'performance', 'efficiency', 'effectiveness', 'productivity', 'functionality', 'capability', 'capacity', 'potential', 'possibility', 'probability', 'statistics', 'analytics',
        'visualization', 'representation', 'presentation', 'implementation', 'deployment', 'integration', 'migration', 'upgrade', 'downgrade', 'rollback', 'fallback', 'backup',
        'recovery', 'restoration', 'replication', 'synchronization', 'coordination', 'orchestration', 'automation', 'mechanization', 'digitization', 'virtualization', 'containerization'
    ],

    scientific: [
        'hypothesis', 'theory', 'experiment', 'observation', 'analysis', 'synthesis', 'catalysis', 'metabolism', 'photosynthesis', 'respiration', 'digestion', 'circulation', 'excretion',
        'reproduction', 'evolution', 'adaptation', 'mutation', 'variation', 'selection', 'speciation', 'extinction', 'biodiversity', 'ecosystem', 'biosphere', 'atmosphere', 'hydrosphere',
        'lithosphere', 'geosphere', 'cryosphere', 'stratosphere', 'troposphere', 'mesosphere', 'thermosphere', 'exosphere', 'magnetosphere', 'ionosphere', 'ozonosphere', 'photosphere',
        'chromosphere', 'corona', 'solar', 'stellar', 'galactic', 'cosmic', 'astronomical', 'astrophysical', 'cosmological', 'quantum', 'relativistic', 'thermodynamic', 'electromagnetic',
        'gravitational', 'nuclear', 'atomic', 'molecular', 'cellular', 'organic', 'inorganic', 'biochemical', 'geochemical', 'atmospheric', 'oceanographic', 'meteorological', 'climatological'
    ],

    literary: [
        'metaphor', 'simile', 'allegory', 'symbolism', 'irony', 'satire', 'parody', 'hyperbole', 'understatement', 'euphemism', 'oxymoron', 'paradox', 'alliteration', 'assonance',
        'consonance', 'onomatopoeia', 'personification', 'anthropomorphism', 'pathetic', 'fallacy', 'foreshadowing', 'flashback', 'stream', 'consciousness', 'narrative', 'perspective',
        'point', 'view', 'omniscient', 'limited', 'objective', 'subjective', 'reliable', 'unreliable', 'protagonist', 'antagonist', 'characterization', 'development', 'motivation',
        'conflict', 'resolution', 'climax', 'denouement', 'exposition', 'rising', 'action', 'falling', 'action', 'plot', 'structure', 'theme', 'tone', 'mood', 'atmosphere',
        'setting', 'background', 'context', 'environment', 'surroundings', 'landscape', 'scenery', 'backdrop', 'stage', 'scene', 'act', 'chapter', 'section', 'paragraph', 'sentence'
    ],

    phrases: [
        'in the beginning', 'once upon a time', 'happily ever after', 'the end', 'thank you', 'you are welcome', 'excuse me', 'i am sorry', 'how are you', 'nice to meet you',
        'see you later', 'good morning', 'good afternoon', 'good evening', 'good night', 'have a nice day', 'take care', 'be careful', 'drive safely', 'stay safe',
        'get well soon', 'feel better', 'take it easy', 'no problem', 'of course', 'absolutely', 'definitely', 'certainly', 'surely', 'obviously', 'clearly', 'evidently',
        'apparently', 'seemingly', 'supposedly', 'allegedly', 'reportedly', 'purportedly', 'ostensibly', 'superficially', 'outwardly', 'externally', 'internally', 'inherently',
        'intrinsically', 'fundamentally', 'essentially', 'basically', 'primarily', 'mainly', 'chiefly', 'principally', 'predominantly', 'largely', 'mostly', 'generally'
    ]
    };

    // function to get a random word from a specific difficulty level
    export const getRandomWords = (difficulty = 'medium', count = 10) => {
        const words = wordDictionary[difficulty] || wordDictionary.medium;
        const shuffled = [...words].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    // TO-DO: Add a function to get a random phrase
    export const getRandomPhrases = (count = 10) => {
      const phrases = wordDictionary.phrases;
      const shuffled = [...phrases].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    }

    // TO-DO: Add a function to get a random quote
    export const getRandomQuotes = (source = 'quotes') => {
       const phrases = wordDictionary.quotes;
       const randomIndex = Math.floor(Math.random() * phrases.length);
       return phrases[randomIndex];
    }

    // TO-DO: Add a function to get from a random category

export default wordDictionary;