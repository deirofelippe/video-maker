# video-maker

> **Nota:** Projeto criado por [Filipe Deschamps](https://www.youtube.com/playlist?list=PLMdYygf53DP4YTVeu0JxVnWq01uXrLwHi)

Feito por Filipe Deschamps. Robô que busca imagens sobre algo, busca textos e junta tudo em um vídeo e upa para o YouTube. 

# Credentials format
## Algorithmia
File: `algorithmia.json`
```
{
  "apiKey": "sim8As72h56j3mBYqEOSHfLE4k81"
}
```

## Watson Natural Language Understanding

File: `watson-nlu.json`

```
{
  "apikey": "Qynm-JBOd9m7JqEAFSvSt4feydYO4Pt0xYvAfaNEY2LW",
  "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:natural-language-understanding:us-south:a/ffcb2c250e19bc335de2e9f1533711c8:4423b565-1e77-4d4c-a56e-656b3af7ac0d::",
  "iam_apikey_name": "auto-generated-apikey-27b6655f-6a69-40ba-a46a-60ae25b6d10a",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/ffcb2c250e19bc335de2e9f1533711c8::serviceid:ServiceId-3b990ca3-62e6-4445-b303-84239f956d01",
  "url": "https://gateway.watsonplatform.net/natural-language-understanding/api"
}
```


  /*
    "algorithmia": "^0.3.10",
    "express": "^4.16.4",
    "gm": "^1.23.1",
    "googleapis": "^38.0.0",
    "image-downloader": "^3.4.2",
    "readline-sync": "^1.4.9",
    "sbd": "^1.0.14",
    "watson-developer-cloud": "^3.18.2"
  */

  pegar as credenciais (google, ibm)
  baixar o image magick
  baixar o after effects e colocar o script na pasta