# MedOnym Studio

Pseudonymisation réversible de dossiers patients avant envoi à une IA (ChatGPT, Claude, Gemini…), **100 % dans le navigateur**.

**→ [Ouvrir l'application](https://jonat14.github.io/medonym-studio/)**

## Ce que fait l'outil

- Remplace noms, prénoms, NIR, IPP/RPPS, téléphones, e-mails, adresses, établissements et soignants par des balises (`[PATIENT]`, `[MÉDECIN_1]`, `[ÉTABLISSEMENT_2]`…).
- Convertit la date de naissance en âge, et les dates d'examens en mois/année ou en décalage temporel cohérent.
- Protège plus de 300 acronymes médicaux français (HTA, BPCO, FEVG, DFG…) pour éviter les faux positifs.
- Ajoute une consigne clinique (synthèse, diagnostic différentiel, STOPP/START, courrier, MDPH) avant copie.
- **Mode Retour IA** : colle la réponse de l'IA, les balises sont remplacées par les vraies valeurs.
- Import PDF / TXT local (pdf.js), mode sombre, export .txt.

## Confidentialité

Aucune donnée patient n'est envoyée sur un serveur : le texte et la table de correspondance restent en mémoire dans l'onglet. Seuls les polices et le lecteur PDF sont chargés depuis un CDN.

La détection repose sur des règles : **relisez toujours le texte anonymisé avant de l'envoyer.**

## Utilisation locale

Ouvrir `index.html` dans un navigateur. Aucun build nécessaire.
