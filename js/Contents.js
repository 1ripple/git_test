
import Insta from "es6/trc/Insta";

//$(document).ready(function() {
//
//  //let insta = new Insta()
//  //let insta = Insta.instance
//
//
//});

window.ATARASHIKU = window.ATARASHIKU || {};

window.ATARASHIKU.TripleCool = (function() {
  return {

    /**
     * DOMContentLoaded で一度だけ呼ばれる
     * ここでDOMの取得等初期化
     */
    init: function () {
      //window.console.info('INIT');

      Insta.instance
    },

    /**
     * コンテンツ表示前に呼び出される
     * @param {Object} params 何かパラメーターの受け渡しが必要な際にここに入れて渡す
     */
    willShow: function (params) {
      //window.console.info('WILL SHOW >> ', params);
      //Insta.instance.loopStart();
    },

    /**
     * コンテンツ表示後に呼び出される
     * @param {Object} params 何かパラメーターの受け渡しが必要な際にここに入れて渡す
     */
    didShow: function (params) {
      //window.console.info('DID SHOW >> ', params);
      Insta.instance.loopStart();

    },

    /**
     * コンテンツが非表示前に呼び出される
     * @param {Object} params 何かパラメーターの受け渡しが必要な際にここに入れて渡す
     */
    willHide: function (params) {
      //window.console.info('WILL HIDE >> ', params);
      //Insta.instance.loopStop();
    },

    /**
     * コンテンツが非表示後に呼び出される
     * @param {Object} params 何かパラメーターの受け渡しが必要な際にここに入れて渡す
     */
    didHide: function (params) {
      //window.console.info('DID HIDE >> ', params);
      Insta.instance.loopStop();

    }
  }
}());