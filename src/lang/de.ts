

export const languageGerman = {
    formating:{
        'main': "Hauptaufforderung",
        'jailbreak': "Jailbreak Aufforderung",
        'chats': "Vergangene Chats",
        'lorebook': "Lore-Buch",
        'globalNote': "Globale Notiz",
        'authorNote': "Anmerkungen des Autors",
        'lastChat': "Letzter Chat",
        "description": "Charakterbeschreibung",
        'personaPrompt':'Aufforderung zur Persona',
        'plain': "Einfache Aufforderung",
    },
    errors:{
        toomuchtoken: 'Fehler: Die angegebene Größe der minimal benötigten Token ist größer als die maximal mögliche Kontextgröße.',
        unknownModel: 'Fehler: Unbekanntes Modell ausgewählt',
        httpError: 'Fehler: Es ist ein Fehler bei der Anfrage aufgetreten:',
        noData: 'Es befinden sich keine Daten in der Datei oder die Datei ist beschädigt',
        onlyOneChat: 'Es muss mindestens ein Chat vorhanden sein',
        alreadyCharInGroup: "Es gibt bereits einen Charakter mit dem gleichen Namen in der Gruppe.",
        noUserIcon: "Sie müssen zuerst Ihr Icon festlegen.",
    },
    showHelp: "Hilfe anzeigen",
    help: {
        model: "Model-Option ist das Hauptmodell, das im Chat verwendet wird.",
        submodel: "Nebenmodell ist ein Modell, das zur Analyse von Emotionsbildern und automatischen Vorschlägen usw. verwendet wird. gpt3.5 wird empfohlen.",
        oaiapikey: "API-Schlüssel für OpenAI. Sie können ihn unter https://platform.openai.com/account/api-keys erhalten.",
        mainprompt: "Die Option für den Hauptanstoß legt das Standardverhalten des Modells fest.",
        jailbreak: "Die Option für NSFW/Jailbreak-Prompts wird aktiviert, wenn der NSFW/Jailbreak-Umschalter im Charakter eingeschaltet ist.",
        globalNote: "Eine Notiz, die das Modellverhalten stark beeinflusst, auch bekannt als UJB. Funktioniert bei allen Charakteren.",
        autoSuggest: "Prompts, die verwendet werden, um Optionen zur automatischen Vorschlagsgenerierung für Benutzerantworten zu generieren.",
        formatOrder: "Formatierungsreihenfolge des Anstoßes. Niedrigere Blöcke wirken sich stärker auf das Modell aus.",
        forceUrl: "Wenn es nicht leer ist, wird die Anfrage an die eingegebene URL gesendet.",
        tempature: "Niedrigere Werte führen dazu, dass der Charakter den Anweisungen eng folgt, aber eher maschinenähnlich reagiert.\nHöhere Werte führen zu kreativem Verhalten, aber die Antwort des Charakters kann leichter zusammenbrechen.",
        frequencyPenalty: "Höhere Werte verhindern die Verwendung von doppelten Wörtern in der Antwort, aber die Antwort des Charakters kann leichter zusammenbrechen.",
        presensePenalty: "Höhere Werte verhindern die Verwendung von doppelten Wörtern im gesamten Kontext, aber die Antwort des Charakters kann leichter zusammenbrechen.",
        sdProvider: "Anbieter für die Bildgenerierung.",
        msgSound: "Spielt den *ding* Sound ab, wenn der Charakter antwortet",
        charDesc: "Kurzbeschreibung des Charakters. Dies beeinflusst die Antwort des Charakters.",
        charFirstMessage: "Erste Nachricht des Charakters. Dies beeinflusst die Antwort des Charakters stark.",
        charNote: "Eine Notiz, die das Modellverhalten stark beeinflusst. Eingebettet in den aktuellen Charakter, auch bekannt als UJB.",
        toggleNsfw: "Aktiviert/deaktiviert NSFW/Jailbreak-Prompts.",
        lorebook: "Lorebook ist ein vom Benutzer erstelltes Wörterbuch für KI. Die KI sieht es nur, wenn es Aktivierungsschlüssel im Kontext gibt.",
        loreName: "Name des Lore. Es wirkt sich nicht auf die KI aus.",
        loreActivationKey: "Wenn einer der Aktivierungsschlüssel im Kontext vorhanden ist, wird das Lore aktiviert und der Prompt wird gestartet. Durch Kommas getrennt.",
        loreorder: "Wenn die Insert-Reihenfolge höher ist, wirkt sie sich stärker auf das Modell aus und wird weniger stark beeinträchtigt, wenn viele Lore aktiviert sind.",
        bias: "Bias ist ein Schlüssel-Wert-Datum, das die Wahrscheinlichkeit des Erscheinens einer Zeichenfolge ändert.\nEs kann -100 bis 100 sein. Höhere Werte treten häufiger auf und niedrigere Werte treten seltener auf.\nWarnung: Wenn der Tokenizer falsch ist, funktioniert er nicht ordnungsgemäß.",
        emotion: "Die Option Emotion Images zeigt ein Bild abhängig von der Emotion des Charakters, die anhand der Antwort des Charakters analysiert wird. Sie müssen den Emotionsnamen als Wörter eingeben *(wie Freude, Glück, Angst usw.)*. Die Emotion mit dem Namen **neutral** wird als Standardemotio verwendet, sofern sie vorhanden ist. Es müssen mindestens 3 Bilder vorhanden sein, damit es ordnungsgemäß funktioniert.",
        imggen: "Die Option Image Generation generiert und zeigt ein Bild aus einem externen Programm an. Das Bild wird anhand des aktuellen Chats generiert, der durch den Bildanstoß analysiert wird.\n\n Die Bildgenerierung basiert auf konfigurierbaren Schlüsselwertargumenten darunter." 
                + "\n\n Der Schlüssel **'always'** gilt immer und ändert sich nicht. Der Schlüssel '**negative**' gilt immer negativ für die Bildgenerierung."
                + "\n\nObjekte mit dem Wert eines anderen Schlüssels ändern sich entsprechend dem Namen des Schlüssels, während der Chat fortschreitet."
                + "\n\nWenn ein Schlüssel ein Sonderzeichen am Anfang seines Namens hat, hat er eine besondere Wirkung."
                + "\n- Wenn der Schlüssel mit **|** beginnt, ändert sich der Wert des Schlüssels nicht."
                + "\n- Wenn der Schlüssel mit **$** beginnt, ändert sich der Wert des Schlüssels höchstwahrscheinlich."
                + "\n\nWenn das Bild zum ersten Mal generiert wird, können Sie es nur ändern, indem Sie 'Aktuelle Bilddatengenerierung' unten modifizieren.",

        regexScript: "RegEx-Skript ist ein benutzerdefiniertes Skript, das Zeichenfolgen,\n\ndie IN entsprechen, durch OUT ersetzt.Es gibt vier Optionstypen."
                + "\n\n- **Eingabe ändern** ändert die Eingabe des Benutzers"
                + "\n\n- **Ausgabe ändern** ändert die Ausgabe des Charakters"
                + "\n\n- **Anforderungsdaten ändern** ändert die aktuellen Chat-Daten beim Senden."
                + "\n\n- **Anzeige ändern** ändert nur den Text bei der Anzeige, ohne Chat-Daten zu ändern."
                + "\n\nIN muss ein RegEx ohne Flags und ohne Schrägstriche am Anfang und Ende sein.\n\nOUT ist eine Zeichenfolge, die Ersetzungsmuster enthalten kann. Dies sind die Muster:"
                + "\n\n- $$\n\n    - fügt $ ein"
                + "\n\n- $&\n\n    - fügt den übereinstimmenden Teilstring ein."
                + "\n\n- $`\n\n    - fügt den Teil der Zeichenfolge ein, der dem übereinstimmenden Teilstring vorausgeht."
                + "\n\n- $1\n\n    - fügt die erste übereinstimmende Gruppe ein. funktioniert mit anderen Nummern wie 2, 3..."
                + "\n\n- $(name)\n\n    - fügt die benannte Gruppe ein\n\nWenn OUT mit **@@** beginnt, ersetzt es nicht die Zeichenfolge, sondern führt stattdessen eine spezielle Wirkung aus, wenn eine übereinstimmende Zeichenfolge gefunden wird."
                + "\n\n- @@emo (Emotionsname)\n\n    - wenn der Charakter den Emotion Images Modus verwendet, wird (Emotionsname) als Emotion festgelegt und die Standardoption verhindert.",
        experimental: "Dies ist ein experimentelles Feature. Es könnte instabil sein.",
        oogaboogaURL: "Wenn Ihre WebUI eine ältere Version der API unterstützt, sollte Ihre URL *wie https:.../run/textgen* aussehen."
                + "\n\nWenn Ihre WebUI die neue Version der API unterstützt, sollte Ihre URL wie *https://.../api/v1/generate* aussehen und den API-Server als Host verwenden und --api zu den Argumenten hinzufügen.",
        exampleMessage: "Beispielgespräche, die die Ausgabe des Charakters beeinflussen. Es werden keine Tokens dauerhaft verwendet."
                + "\n\nBeispielformat von Gesprächen:"
                + "\n\n```\n<START>\n{{user}}: hi\n{{char}}: hallo\n<START>\n{{user}}: hi\nHaruhi: hallo\n```"
                + "\n\n```<START>``` markiert den Beginn eines neuen Gesprächs.",

        creatorQuotes: "Beachten Sie, dass die Darstellung oberhalb der ersten Nachricht angezeigt wird. Es wird verwendet, um die Benutzer über diesen Charakter zu informieren. Es geht nicht in die Eingabeaufforderung ein.",
        systemPrompt: "Eine Eingabeaufforderung, die die Hauptaufforderung in den Einstellungen ersetzt, wenn sie nicht leer ist.",
        chatNote: "Eine Notiz, die das Verhalten des Modells stark beeinflusst. In den aktuellen Chat eingebettet. Auch bekannt als Memory oder ujb.",
        personality: "Eine kurze Beschreibung der Persönlichkeit des Charakters. \n\n**Es wird nicht empfohlen, diese Option zu nutzen. Beschreiben Sie sie stattdessen in der Charakterbeschreibung.**",
        scenario: "Eine kurze Beschreibung des Szenarios des Charakters. \n\n**Es wird nicht empfohlen, diese Option zu nutzen. Beschreiben Sie sie stattdessen in der Charakterbeschreibung.**",
        utilityBot: "Wenn aktiviert, ignoriert es die Hauptaufforderung. \n\n**Es wird nicht empfohlen, diese Option zu nutzen. Modifizieren Sie stattdessen die Systemaufforderung.**",
        loreSelective: "Wenn der selektive Modus aktiviert ist, müssen sowohl Schlüssel als auch Sekundärschlüssel übereinstimmen, um die Überlieferung zu aktivieren.",
        loreRandomActivation: "Wenn die Bedingung 'Wahrscheinlichkeit verwenden' aktiviert ist, wird die Überlieferung mit einer festgelegten Wahrscheinlichkeit, die durch 'Wahrscheinlichkeit' festgelegt wird, jedes Mal aktiviert, wenn eine Chat-Nachricht gesendet wird und die anderen Bedingungen der Überlieferung alle erfüllt sind.",
        additionalAssets: "Zusätzliche Assets, die in Ihrem Chat angezeigt werden sollen. \n\n - verwenden Sie `{{raw::<asset name>}}` um als Pfad zu verwenden.\n - verwenden Sie `{{img::<asset name>}}` um als Bild zu verwenden\n - verwenden Sie `{{video::<asset name>}}` um als Video zu verwenden\n - verwenden Sie `{{audio::<asset name>}}` um als Audio zu verwenden\n    - es wird empfohlen, dies in den Hintergrund HTML einzufügen",
        superMemory: "SuperMemory ermöglicht es Ihrem Charakter, sich mehr zu merken, indem es der KI zusammengefasste Daten gibt.\n\n"
        + "Das SuperMemory-Modell ist ein Modell, das diesen Text zusammenfasst. Davinci wird empfohlen, und Hilfsmodelle werden nicht empfohlen, es sei denn, es handelt sich um ein ungefiltertes Modell mit über 2000 Tokens und großer Zusammenfassungsfähigkeit.\n\n"
        + "Die SuperMemory-Aufforderung entscheidet, welche Aufforderung zur Zusammenfassung gesendet werden soll. Wenn Sie es leer lassen, wird die Standardaufforderung verwendet. Es wird empfohlen, es leer zu lassen.\n\n"
        + "Nachdem alles eingerichtet ist, können Sie es in den Einstellungen eines Charakters aktivieren.",
        replaceGlobalNote: "Wenn es nicht leer ist, wird die aktuelle globale Notiz damit ersetzt.",
        backgroundHTML: "Ein Markdown/HTML-Datenblock, der in den Hintergrund des Chat-Bildschirms eingefügt wird.\n\n Sie können auch zusätzliche Assets verwenden. Zum Beispiel können Sie `{{audio::<Asset-Name}}` für Hintergrundmusik verwenden."
            + "\n\n Zusätzlich können Sie dies mit zusätzlichen Assets verwenden:"
            + "\n - `{{bg::<Asset-Name>}}`: Das Hintergrundbild als Asset einfügen"
    },
    setup: {
        chooseProvider: "AI-Anbieter wählen",
        openaikey: "OpenAI mit API-Schlüssel (Empfohlen)",
        openaiProxy: "OpenAI Reverse-Proxy",
        setupmodelself: "Andere / Ich werde es selbst einrichten",
        inputApiKey: "API-Schlüssel hier eingeben",
        apiKeyhelp: "Sie können den API-Schlüssel erhalten von: ",
        setupSelfHelp: "Richten Sie sich nach dem Willkommensbildschirm selbst ein",
        theme: "Wählen Sie Ihr Thema",
        themeDescWifulike: "Nicht geeignet für Mobilgeräte",
        themeDescWifuCut: "Geeignet für Mobilgeräte",
        themeDescClassic: "Geeignet für alle Geräte",
        texttheme: "Wählen Sie Ihre Textfarbe",
        inputName: "Geben Sie abschließend Ihren Spitznamen ein."
    },
    confirm: "Bestätigen",
    goback: "Zurück",
    botSettings: "Bot-Einstellungen",
    model: "Modell",
    apiKey: "API-Schlüssel",
    providerURL: "Anforderungs-URL",
    providerJSON: "Anforderungsbody JSON",
    mainPrompt: "Hauptanfrage",
    jailbreakPrompt: "NSFW/Jailbreak-Anfrage",
    globalNote: "Globale Notiz",
    autoSuggest: "Automatische Vorschläge",
    tokens: "Tokens",
    maxContextSize: "Maximale Kontextgröße",
    maxResponseSize: "Maximale Antwortgröße",
    temperature: "Temperatur",
    frequencyPenalty: "Häufigkeitsstrafe",
    presencePenalty: "Anwesenheitsstrafe",
    advancedSettings: "Erweiterte Einstellungen",
    advancedSettingsWarn: "Warnung: Ändern Sie die Option nicht, wenn Sie nicht wissen, was sie bewirkt!",
    formattingOrder: "Formatierungsreihenfolge",
    authorNote: "Autorenhinweis",
    firstMessage: "Erste Nachricht",
    description: "Beschreibung",
    jailbreakToggle: "NSFW/Jailbreak umschalten",
    charIcon: "Charakter-Icon",
    characterDisplay: "Charakterdarstellung",
    viewScreen: "Zusätzlicher Charakterbildschirm",
    none: "Keine",
    emotionImage: "Emotionsbilder",
    noImages: "Keine Bilder",
    noBias: "Keine Voreingenommenheit",
    image: "Bild",
    name: "Name",
    emotion: "Emotionsname",
    value: "Wert",
    reroll: "Neu generieren",
    chatList: "Chat-Liste",
    removeChat: "Diese Nachricht entfernen?",
    loreBook: "Lorebook",
    character: "Charakter",
    chat: "Chat",
    globalLoreInfo: "Character Lorebook gilt für alle Chats im Charakter.",
    group: "Gruppe",
    groupLoreInfo: "Gruppen-Lorebook gilt für alle Chats in der Gruppe.",
    localLoreInfo: "Chat-Lorebook gilt nur für den aktuellen Chat.",
    removeConfirm: "Möchten Sie dies wirklich entfernen:",
    "removeConfirm2": "Möchtest du DAS WIRKLICH entfernen:",
    exportConfirm: "Möchten Sie dies exportieren?",
    insertOrder: "Einfügereihenfolge",
    activationKeys: "Aktivierungsschlüssel",
    activationKeysInfo: "Durch Komma getrennt",
    prompt: "Eingabeaufforderung",
    loreBookDepth: "Lorebook-Suchtiefe",
    loreBookToken: "Maximale Anzahl an Tokens im Lorebook",
    removeCharacter: "Charakter entfernen",
    removeGroup: "Gruppe entfernen",
    exportCharacter: "Charakter exportieren",
    userSetting: "Benutzereinstellungen",
    username: "Dein Name",
    userIcon: "Dein Icon",
    successExport: "Erfolgreich exportiert und in Ihren Download-Ordner heruntergeladen",
    successImport: "Erfolgreich importiert",
    importedCharacter: "Importierter Charakter",
    alwaysActive: "Immer aktiv",
    additionalPrompt: "Zusätzliche Aufforderung",
    descriptionPrefix: "Beschreibungsprefix",
    forceReplaceUrl: "Reverse Proxy",
    emotionWarn: "Zusätzliches Modell wird verwendet.",
    plugin: "Plugin",
    language: "Sprache",
    UiLanguage: "UI-Sprache",
    createfromScratch: "Aus dem Nichts erstellen",
    importCharacter: "Charakter importieren",
    translator: "Übersetzer",
    disabled: "Deaktiviert",
    noPluginSelected: "Modell als Plugin ausgewählt, aber kein Plugin ausgewählt.",
    text: "Text",
    UISize: "Textgröße im Chat",
    newVersion: "Update gefunden, möchten Sie es installieren?",
    display: "Anzeige & Audio",
    useCustomBackground: "Benutzerdefinierten Hintergrund verwenden",
    translateInput: "Eingabe übersetzen",
    autoTranslation: "Automatische Übersetzung",
    fullscreen: "Vollbild",
    playMessage: "Nachrichten-Audio abspielen",
    iconSize: "Icon-Größe",
    createGroup: "Gruppen-Chat erstellen",
    groupIcon: "Gruppen-Icon",
    single: "Einzel",
    multiple: "Mehrere",
    useCharLorebook: "Lores in Charakteren verwenden",
    selectChar: "Charakter auswählen",
    askLoadFirstMsg: "Sollen wir die erste Nachricht laden?",
    theme: "Design",
    editOrder: "Reihenfolge bearbeiten",
    autoMode: "Automatikmodus",
    submodel: "Nebenmodell",
    timeOutinSec: "Timeout (in Sekunden)",
    emotionPrompt: "Emotionsanfrage",
    singleView: "Einzelansicht",
    spacedView: "Mehrere Charakteransicht",
    emphasizedView: "Doppelte Charakteransicht",
    pluginWarn: "Plugins laufen in einer isolierten Umgebung, aber das Installieren bösartiger Plugins kann Probleme verursachen.",
    createGroupImg: "Gruppen-Icon generieren",
    waifuWidth: "Waifu-Chat-Breite",
    savebackup: "Backup in Google Drive speichern",
    loadbackup: "Backup aus Google Drive laden",
    files: "Dateien",
    backupConfirm: "Möchten Sie wirklich ein Backup erstellen?",
    backupLoadConfirm: "Möchten Sie wirklich ein Backup laden? Alle Daten gehen verloren!",
    "backupLoadConfirm2": "Möchten Sie wirklich ein Backup laden? Dabei gehen alle Daten verloren!",
    pasteAuthCode: "Bitte kopieren Sie den Autorisierungscode aus dem Popup-Fenster und fügen Sie ihn hier ein:",
    others: "Andere",
    presets: "Voreinstellungen",
    imageGeneration: "Bildgenerierung",
    provider: "Anbieter",
    key: "Schlüssel",
    noData: "Keine Daten",
    currentImageGeneration: "Aktuelle Daten zur Bildgenerierung",
    promptPreprocess: "Prompt-Vorverarbeitung verwenden",
    SwipeRegenerate: "Swipe zur Regenerierung verwenden",
    instantRemove: "Nachricht bei Entfernung sofort löschen",
    instantRemoveConfirm: "Möchten Sie nur eine Nachricht entfernen? Wenn Sie Nein wählen, wird auch die Nachricht danach entfernt.",
    textColor: "Textfarbe",
    classicRisu: "Klassischer Risu",
    highcontrast: "Hoher Kontrast",
    quickPreset: "Sie können das Voreinstellung schnell ändern mit Strg + (Index der Voreinstellung)",
    requestretrys: "Anforderungs-Wiederholungsversuche bei Fehlern",
    utilityBot: "Nützlichkeits-Bot",
    ShowLog: "Anforderungsprotokolle anzeigen",
    "waifuWidth2": "Größe des Waifu-Charakters",
    sayNothing: "Eingabe 'sag nichts', wenn kein Text eingegeben",
    regexScript: "Regex-Skript",
    type: "Typ",
    editInput: "Eingabe bearbeiten",
    editOutput: "Ausgabe bearbeiten",
    editProcess: "Anforderungsdaten bearbeiten",
    loadLatest: "Neuestes Backup laden",
    loadOthers: "Andere Backups laden",
    exampleMessage: "Beispiel-Nachricht",
    creatorNotes: "Anmerkungen des Erstellers",
    systemPrompt: "Systemanfrage",
    characterNotes: "Hinweise zum Charakter",
    personality: "Persönlichkeit",
    scenario: "Szenario",
    alternateGreetings: "Alternative Begrüßungen",
    unrecommended: "Nicht empfohlen",
    chatNotes: "Chat-Notizen",
    showUnrecommended: "Unempfohlene Einstellungen anzeigen",
    altGreet: "Alternative erste Nachrichten",
    scripts: "Skripte",
    settings: "Einstellungen",
    selective: "Selektiv",
    secondaryKeys: "Sekundäre Schlüssel",
    useGlobalSettings: "globale Einstellungen verwenden",
    recursiveScanning: "Rekursive Suche",
    creator: "Ersteller",
    charVersion: "Charakterversion",
    speech: "Sprache",
    toggleSuperMemory: "SupaMemory umschalten",
    superMemory: "SupaMemory",
    useExperimental: "Experimentelle Funktionen aktivieren",
    showMemoryLimit: "Speicherlimit anzeigen",
    roundIcons: "Runde Icons",
    streaming: "Streaming",
    chatBot: "Chat-Bot",
    otherBots: "Andere Bots",
    user: "Benutzer",
    additionalAssets: "Zusätzliche Ressourcen",
    editDisplay: "Anzeige bearbeiten",
    community: "Community",
    textBackgrounds: "Benutzerdefinierte Textbildschirmfarbe",
    textBorder: "Textumrandungen",
    textScreenRound: "Runder Textbildschirm",
    textScreenBorder: "Textbildschirmränder",
    ttsReadOnlyQuoted: "Nur als Read-Only zitieren",
    ttsStop: "TTS anhalten",
    askRemoval: "Entfernung bestätigen",
    replaceGlobalNote: "Globale Notiz ersetzen",
    charLoreBook: "Charakter-Lorebook",
    globalLoreBook: "Globales Lorebook",
    globalRegexScript: "Globales Regex",
    accessibility: "Barrierefreiheit",
    sendWithEnter: "Mit der Eingabetaste senden",
    clickToEdit: "Text zum Bearbeiten anklicken",
    setNodePassword: "Passwort festlegen",
    inputNodePassword: "Geben Sie Ihr Passwort ein. Wenn Sie es vergessen haben, entfernen Sie save/__password.txt in Ihren Serverdateien und starten Sie den Server neu.",
    simple: "Einfach",
    advanced: "Erweitert",
    askReRollAutoSuggestions: "Auto-Vorschläge neu generieren",
    creatingSuggestions: "Vorschläge erstellen...",
    orderByOrder: "Nach Reihenfolge sprechen",
    removeFromGroup: "Möchten Sie {{char}} wirklich aus der Gruppe entfernen?",
    talkness: "Redseligkeit",
    active: "Aktiv",
    loreRandomActivation: "Wahrscheinlichkeitsbedingung verwenden",
    activationProbability: "Wahrscheinlichkeit",
    shareCloud: "In RisuRealm teilen",
    hub: "RisuRealm",
    tags: "Tags",
    backgroundHTML: "Hintergrund einbetten",
    copied: "Kopiert",
    useChatCopy: "Chat-Nachricht kopieren",
    useChatSticker: "Chat-Sticker verwenden",
    useAdditionalAssetsPreview: "Vorschau der zusätzlichen Ressourcen verwenden",
    autoTranslateInput: "Eingabe automatisch übersetzen",
    enterMessageForTranslateToEnglish: "Geben Sie die Nachricht ein, die ins Englische übersetzt werden soll",
    recent: "Aktuell",
    downloads: "Downloads",
    trending: "Trends",
    imageCompression: "Bildkompression",
    notLoggedIn: "Nicht bei Risu Account angemeldet",
    googleDriveInfo: "Verbinden Sie sich mit Google Drive, um Ihre Daten zu synchronisieren.",
    googleDriveConnection: "Google Drive-Verbindung",
    googleDriveConnected: "Google Drive verbunden",
    saveDataInAccount: "Daten im Account speichern",
    dataSavingInAccount: "Daten werden im Account gespeichert",
    logout: "Abmelden",
    loadDataFromAccount: "Daten aus dem Account laden",
    saveCurrentDataToAccount: "Aktuelle Daten im Account speichern",
    chatAssumed: "",
    proxyAPIKey: "Proxy-Schlüssel/Passwort",
    proxyRequestModel: "Proxy-Anforderungsmodell",
    officialWiki: "Offizielles Wiki",
    officialWikiDesc: "Offizielles Wiki für RisuAI. Schauen Sie gerne vorbei.",
    officialDiscord: "Offizieller Discord",
    officialDiscordDesc: "Offizieller Discord zum Austausch über RisuAI",
    confirmRecommendedPreset: "Es gibt eine empfohlene Einstellung für dieses Modell. Möchten Sie die Einstellungen darauf ändern? (Sie können die Fragestellung auch in den Barrierefreiheitseinstellungen deaktivieren)",
    toggleConfirmRecommendedPreset: "Nach empfohlener Einstellung fragen, wenn das Modell geändert wird",
    recommendedPreset: "Auf empfohlene Einstellungen setzen",
    persona: "Person",
    icon: "Icon",
    account: "Account",
    remove: "Entfernen",
    creationSuccess: "Erstellung erfolgreich",
    noweb: "Diese Funktion kann in der Webversion nicht verwendet werden.",
    createBotInternet: "Bot aus dem Internet mit KI erstellen",
    createBotInternetAlert: "Geben Sie bitte den Namen des Charakters und die entsprechende Serie/Spiel an.",
    able: "Fähig",
    assetWidth: "Maximale Breite der Asset-Bilder",
    animationSpeed: "Animationsgeschwindigkeit",
    screenshot: "Screenshot",
    screenshotSaved: "Screenshot gespeichert",
    inputBotGenerationPrompt: "Eingabe der Bot-Generierungsanfrage",
    createBotAI: "OC Bot aus KI erstellen",
    createBotwithAI: "Bot aus KI erstellen",
    changeFolderName: "Geben Sie den neuen Ordnernamen ein (leer lassen, um abzubrechen)",
    cancel: "Abbrechen",
    renameFolder: "Ordner umbenennen",
    changeFolderColor: "Ordnerfarbe ändern",
    fullWordMatching: "Vollständige Wortübereinstimmung",
    botSettingAtStart: "Bot-Menü beim Start",
    triggerStart: "Beim Senden in den Chat",
    triggerInput: "Bei der Ausgabe des Benutzers",
    triggerOutput: "Bei der Ausgabe des Charakters",
    triggerManual: "Nur manuelle Auslösung",
    triggerCondVar: "Wenn Variable",
    triggerCondExists: "Wenn Text im Chat vorhanden ist",
    triggerScript: "Trigger-Skript",
    triggerMatchRegex: "Mit Regex übereinstimmen",
    triggerMatchLoose: "Locker übereinstimmen",
    triggerMatchStrict: "Strikt übereinstimmen",
    searchDepth: "Suchtiefe",
    equal: "Gleich",
    notEqual: "Ungleich",
    greater: "Größer als",
    less: "Kleiner als",
    greaterEqual: "Größer oder gleich",
    lessEqual: "Kleiner oder gleich",
    triggerEffSysPrompt: "Systemanfrage hinzufügen",
    triggerEffSetVar: "Variable ändern",
    triggerEffImperson: "Chat senden",
    varableName: "Variablenname",
    role: "Rolle",
    location: "Ort",
    promptStart: "Beginn der Anfrage",
    promptEnd: "Ende der Anfrage",
    historyEnd: "Ende des Verlaufs",
    always: "Immer",
    noEffect: "Keine Auswirkung",
    invalidTriggerEffect: "Diese Wirkung funktioniert nicht für diesen Auslösertyp.",
    operator: "Operator",
    triggerSetToVar: "Auf Variable setzen",
    triggerAddToVar: "Zur Variable hinzufügen",
    triggerSubToVar: "Von Variable abziehen",
    triggerMulToVar: "Mit Variable multiplizieren",
    triggerDivToVar: "Durch Variable teilen",
    isNull: "ist nicht gesetzt",
    ifChatIndex: "Wenn Chat-Index",
    ifRandom: "Wenn zufällig",
    hideRealm: "RisuRealm ausblenden",
    popularityLevel: "{} Popularität",
    colorScheme: "Farbschema",
    rangeStart: "Bereichsstart",
    rangeEnd: "Bereichsende",
    untilChatEnd: "Bis Chat-Ende",
    usePromptTemplate: "Prompt-Vorlage verwenden",
    specialType: "Spezieller Typ",
    noSpecialType: "Kein spezieller Typ",
    forceProxyAsOpenAI: "Proxy-Format als OpenAI erzwingen",
    promptTemplate: "Prompt-Vorlage",
    customInnerFormat: "Benutzerdefiniertes Inneres Format",
    innerFormat: "Inneres Format",
    hypaMemory: "HypaMemory",
    toggleHypaMemory: "HypaMemory umschalten",
    resetPromptTemplateConfirm: "Möchten Sie die Prompt-Vorlage wirklich zurücksetzen?",
    emotionMethod: "Emotionsmethode",
    continueResponse: "Fortlaufende Antwort",
    showMenuChatList: "Chat-Liste anzeigen",
    translatorLanguage: "Übersetzer-Sprache",
    translatorType: "Übersetzer-Typ",
    deeplKey: "deepL API-Schlüssel",
    deeplFreeKey: "deepL kostenloser API-Schlüssel",
    exportPersona: "Person exportieren",
    importPersona: "Person importieren",
    export: "Exportieren",
    import: "Importieren",
    supporterThanks: "Dank für die Unterstützung",
    supporterThanksDesc: "Danke für deine Unterstützung!",
    donatorPatreonDesc: "Standardmäßig wird es in der Liste nicht angezeigt. Wenn Sie Ihren Spitznamen anzeigen möchten, gehen Sie zur Risu-Patreon-Seite und drücken Sie die Link-Taste.",
    useNamePrefix: "Name Präfix verwenden",
    textAdventureNAI: "Als Textabenteuer laufen",
    appendNameNAI: "Namen an NAI anhängen",
    customStopWords: "Benutzerdefinierte Stoppwörter",
}
