
   src='//libtl.com/sdk.js' data-zone='9516151' data-sdk='show_9516151'></script>

  <!-- Espera o SDK carregar para chamar a função -->
  <script>
    window.addEventListener('load', function () {
      // Verifica se a função foi carregada
      function tryRunInterstitial() {
        if (typeof show_9516151 === 'function') {
          show_9516151({
            type: 'inApp',
            inAppSettings: {
              frequency: 2,
              capping: 0.1,
              interval: 30,
              timeout: 5,
              everyPage: false
            }
          });
        } else {
          // Tenta novamente após 100ms se a função ainda não estiver disponível
          setTimeout(tryRunInterstitial, 100);
        }
      }

      tryRunInterstitial();
    });
  

