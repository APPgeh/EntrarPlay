(function () {
    var script = document.createElement('script');
    script.src = 'https://groleegni.net/401/9474483';
    script.defer = true;
    script.onload = function () {
      console.log('Script carregado com sucesso');
    };
    script.onerror = function () {
      console.error('Erro ao carregar o script');
    };
    document.head.appendChild(script);
  })();