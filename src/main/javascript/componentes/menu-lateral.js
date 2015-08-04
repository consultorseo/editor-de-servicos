'use strict';

var slugify = require('slugify');

var scrollTo = function (seletor) {
  return function (element, isInitialized) {
    if (isInitialized) {
      return;
    }

    jQuery(element).click(function (e) {
      console.log(seletor); //jshint ignore:line
      jQuery(window).scrollTo(seletor, 250, {
        offset: -60
      });
      e.stopPropagation();
      return false;
    });
  };

};

var item = function (texto, extra) {
  return m('li', {
    config: scrollTo('#' + slugify(texto)),
    style: {
      cursor: 'pointer',
      textTransform: 'uppercase',
      fontFamily: '"open_sansextrabold"',
      lineHeight: '4em'
    }
  }, [
    m('span.fa.fa-check', {
      style: {
        color: '#33ba7c',
        marginRight: '1em'
      }
    }), texto, extra
  ]);
};

var etapas = function (lista) {
  return lista.map(function (e) {
    return m('li', {
        style: {
          fontFamily: '"open_sansregular"',
          textTransform: 'none',
          marginLeft: '2em'
        }
      },
      m('a', {
        config: scrollTo('#' + e.id)
      }, [
        m('span.fa.fa-check', {
          style: {
            color: '#33ba7c',
            marginRight: '1em'
          }
        }),
        e.titulo() ? e.titulo() : m('i', '(sem título)')
      ])
    );
  });
};

module.exports = {

  controller: function (args) {
    this.servico = args.servico;
  },

  view: function (ctrl) {
    return m('nav', [
      m('ul', [
        item('Dados básicos'),
        item('Solicitantes'),
        item('Etapas do Serviço', m('ul', etapas(ctrl.servico().etapas()))),
        item('Outras Informações'),
      ]),
    ]);
  }

};
