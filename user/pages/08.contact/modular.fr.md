---
title: Contact
published: true
taxonomy:
    tag:
        - 'e-pay space'
        - EPS
        - 'contacter un conseiller fintech'
        - 'conseiller fintech'
process:
    markdown: true
    twig: true
twig_first: true
routable: true
visible: true
googledesc: 'Afin de mettre en place votre programme de paiement sur-mesure, notre équipe est à votre disposition pour répondre à toutes vos questions.'
twittercardoptions: summary
articleenabled: false
musiceventenabled: false
orgaenabled: false
orga:
    ratingValue: 2.5
orgaratingenabled: false
eventenabled: false
personenabled: false
restaurantenabled: false
restaurant:
    acceptsReservations: 'yes'
    priceRange: $
form:
    name: contact-form
    fields:
        -
            name: business-name
            label: 'Nom de votre entreprise'
            placeholder: 'Entrez le nom de votre entreprise'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: name
            label: Nom
            placeholder: 'Entrez votre nom'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: first-name
            label: Prénom
            placeholder: 'Entrez votre prénom'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: email
            label: Email
            placeholder: 'Entrez votre adresse email'
            type: email
            validate:
                required: true
        -
            name: mobile
            label: Téléphone
            placeholder: 'Entrez votre numéro de téléphone'
            type: number
            validate:
                required: false
        -
            name: message
            label: 'Description de votre projet'
            placeholder: 'Entrez votre question, les détails de votre projet...'
            type: textarea
            validate:
                required: true
        -
            name: g-recaptcha-response
            label: Captcha
            type: captcha
            recaptcha_site_key: 6LfLxW4UAAAAAH39FMK48y0LTZG7Y8yPBszfDQtC
            recaptcha_not_validated: 'Captcha not valid!'
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Envoyer
    process:
        -
            captcha:
                recaptcha_secret: 6LfLxW4UAAAAAB9pnmJkPCFPPh8qJ97nDmeAn9Ys
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ config.plugins.email.to }}'
                subject: '[Site Contact Form] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: contact-
                dateformat: Ymd-His-u
                extension: txt
        -
            display: /thankyou
twitterenable: true
facebookenable: true
module_curvature:
    curvature_bottom: true
    curvature_top: false
content:
    items: '@self.modular'
---

