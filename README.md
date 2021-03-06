# App desenvolvido com React-Native

#### Para rodar o projeto em sua máquina, certifique-se de ter um emulador para android ou Xcode instalado. Siga os passos:

```npm i```

```react-native run-android / react-native run-ios```


#### Alteranativa para quem possui processadores AMD ou que possuem pouco recurso de hardware. (apenas para android).

Abra o Android Studio e abra o diretorio do projeto, aguarde até que o gradle faça todas as verificações e se ele pedir para corrigir algum erro, corrija-os clicando no link fornecido pelo gradlew no android studio.

Tenha um celular android conectado via USB em seu computador.

Navegue até a raiz do projeto pelo terminal do windows ou linux e siga para o diretorio `/android` lá insira o comando:

```gradlew assembleDebug```

Abra uma segunda janela do terminal e siga para a raiz do projeto e digite o seguinte comando:

```react-native start```

Volte ao terminal anterior e partindo do diretorio `/android` vá até o diretorio `app/build/outputs/apk` e rode o seguinte comando no terminal:

```adb reverse tcp:8081 tcp:8081```

Digite o proximo comando para instalar o `app-debug.apk` em seu dispisitivo android:

```adb install app-debug.apk```

Isso fará com que apareça um icone com o nome do app em seu dispisitivo, basta abri-lo e esperar pelo carregamento total do app.

_Para recarregar a tela do app quando precisar digite o seguinte comando no terminal:_

```adm shell input keyevent 46 46```

_Para abrir o menu de desenvolvedor digite o seguinte comando:_

```adb shell input keyevent 82```
