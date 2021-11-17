export default class HtmlDesign {
  getHtml(
    empresa: string,
    codigo: string,
    direccion: string
  ) {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Código De Verificación</title>
    <style type="text/css">
      body {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        -webkit-text-size-adjust: 100% !important;
        -ms-text-size-adjust: 100% !important;
        -webkit-font-smoothing: antialiased !important;
      }
      .tableContent img {
        border: 0 !important;
        display: block !important;
        outline: none !important;
      }
      a {
        color: #382f2e;
      }
      p,
      h1 {
        color: #382f2e;
        margin: 0;
      }
      div,
      p,
      ul,
      h1 {
        margin: 0;
      }
      p {
        font-size: 13px;
        color: #99a1a6;
        line-height: 19px;
      }
      h2,
      h1 {
        color: #444444;
        font-weight: normal;
        font-size: 22px;
        margin: 0;
      }
      a.link2 {
        padding: 15px;
        font-size: 13px;
        text-decoration: none;
        background: #2d94df;
        color: #ffffff;
        border-radius: 6px;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
      }
      .bgBody {
        background: #f6f6f6;
      }
      .bgItem {
        background: #2c94e0;
      }
      @media only screen and (max-width: 480px) {
        table[class="MainContainer"],
        td[class="cell"] {
          width: 100% !important;
          height: auto !important;
        }
        td[class="specbundle"] {
          width: 100% !important;
          float: left !important;
          font-size: 13px !important;
          line-height: 17px !important;
          display: block !important;
        }
        td[class="specbundle1"] {
          width: 100% !important;
          float: left !important;
          font-size: 13px !important;
          line-height: 17px !important;
          display: block !important;
          padding-bottom: 20px !important;
        }
        td[class="specbundle2"] {
          width: 90% !important;
          float: left !important;
          font-size: 14px !important;
          line-height: 18px !important;
          display: block !important;
          padding-left: 5% !important;
          padding-right: 5% !important;
        }
        td[class="specbundle3"] {
          width: 90% !important;
          float: left !important;
          font-size: 14px !important;
          line-height: 18px !important;
          display: block !important;
          padding-left: 5% !important;
          padding-right: 5% !important;
          padding-bottom: 20px !important;
        }
        td[class="specbundle4"] {
          width: 100% !important;
          float: left !important;
          font-size: 13px !important;
          line-height: 17px !important;
          display: block !important;
          padding-bottom: 20px !important;
          text-align: center !important;
        }
        td[class="spechide"] {
          display: none !important;
        }
        img[class="banner"] {
          width: 100% !important;
          height: auto !important;
        }
        td[class="left_pad"] {
          padding-left: 15px !important;
          padding-right: 15px !important;
        }
      }
      @media only screen and (max-width: 540px) {
        table[class="MainContainer"],
        td[class="cell"] {
          width: 100% !important;
          height: auto !important;
        }
        td[class="specbundle"] {
          width: 100% !important;
          float: left !important;
          font-size: 13px !important;
          line-height: 17px !important;
          display: block !important;
        }
        td[class="specbundle1"] {
          width: 100% !important;
          float: left !important;
          font-size: 13px !important;
          line-height: 17px !important;
          display: block !important;
          padding-bottom: 20px !important;
        }
        td[class="specbundle2"] {
          width: 90% !important;
          float: left !important;
          font-size: 14px !important;
          line-height: 18px !important;
          display: block !important;
          padding-left: 5% !important;
          padding-right: 5% !important;
        }
        td[class="specbundle3"] {
          width: 90% !important;
          float: left !important;
          font-size: 14px !important;
          line-height: 18px !important;
          display: block !important;
          padding-left: 5% !important;
          padding-right: 5% !important;
          padding-bottom: 20px !important;
        }
        td[class="specbundle4"] {
          width: 100% !important;
          float: left !important;
          font-size: 13px !important;
          line-height: 17px !important;
          display: block !important;
          padding-bottom: 20px !important;
          text-align: center !important;
        }
        td[class="spechide"] {
          display: none !important;
        }
        img[class="banner"] {
          width: 100% !important;
          height: auto !important;
        }
        td[class="left_pad"] {
          padding-left: 15px !important;
          padding-right: 15px !important;
        }
        .font {
          font-size: 15px !important;
          line-height: 19px !important;
        }
      }
    </style>
    <script type="colorScheme" class="swatch active">
      {
        "name":"Default",
        "bgBody":"f6f6f6",
        "link":"ffffff",
        "color":"99A1A6",
        "bgItem":"2C94E0",
        "title":"444444"
      }
    </script>
  </head>
  <body
    paddingwidth="0"
    paddingheight="0"
    bgcolor="#d1d3d4"
    style="
      margin-left: 5px;
      margin-right: 5px;
      margin-bottom: 0px;
      margin-top: 0px;
      padding-top: 0;
      padding-bottom: 0;
      background-repeat: repeat;
      width: 100% !important;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
    "
    offset="0"
    toppadding="0"
    leftpadding="0"
  >
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      class="tableContent bgBody"
      align="center"
      style="font-family: Helvetica, Arial, serif"
    >
      <!-- =============================== Header ====================================== -->
      <tr>
        <td class="movableContentContainer">
          <div
            class="movableContent"
            style="border: 0px; padding-top: 0px; position: relative"
          >
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              align="center"
              valign="top"
            >
              <tr>
                <td height="25" colspan="3"></td>
              </tr>
              <tr>
                <td valign="top" colspan="3">
                  <table
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    valign="top"
                    class="MainContainer"
                  >
                    <tr>
                      <td align="left" valign="middle" width="200">
                        <div
                          class="contentEditableContainer contentImageEditable"
                        >
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
          <div
            class="movableContent"
            style="border: 0px; padding-top: 0px; position: relative"
          >
          </div>
          <div
            class="movableContent"
            style="border: 0px; padding-top: 0px; position: relative"
          >
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              align="center"
              valign="top"
            >
              <tr>
                <td>
                  <table
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    valign="top"
                    class="MainContainer"
                  >
                    <tr>
                      <td colspan="3" height="25"></td>
                    </tr>
                    <tr>
                      <td width="50"></td>
                      <td width="500">
                        <table
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          align="center"
                          valign="top"
                        >
                          <tr>
                            <td align="center">
                              <div
                                class="
                                  contentEditableContainer
                                  contentTextEditable
                                "
                              >
                                <div class="contentEditable">
                                  <h1 style="font-size: 32px">
                                    Tienda Online App (BETA)
                                  </h1>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td height="20"></td>
                          </tr>
                          <tr>
                            <td align="center">
                              <div
                                class="
                                  contentEditableContainer
                                  contentTextEditable
                                "
                              >
                                <div class="contentEditable">
                                  <!--<p >Benefits for users.<br>
                                Available on (when is it available?) on (platform? Chrome store? Desktop? PC? Mac? iPhone?)
                              </p>-->
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="50"></td>
                    </tr>
                    <tr>
                      <td colspan="3" height="45"></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
          <div
            class="movableContent"
            style="border: 0px; padding-top: 0px; position: relative"
          >
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              align="center"
              valign="top"
            >
              <tr>
                <td>
                  <table
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    class="MainContainer"
                  >
                    <tr>
                      <td height="10">&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="border-bottom: 1px solid #dddddd"></td>
                    </tr>
                    <tr>
                      <td height="10">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
          <div
            class="movableContent"
            style="border: 0px; padding-top: 0px; position: relative"
          >
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              align="center"
              valign="top"
            >
              <tr>
                <td>
                  <table
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    valign="top"
                    class="MainContainer"
                  >
                    <tr>
                      <td colspan="3" height="10"></td>
                    </tr>
                    <tr>
                      <td width="50"></td>
                      <td width="500">
                        <table
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          align="center"
                          valign="top"
                        >
                          <tr>
                            <td align="center">
                              <div
                                class="
                                  contentEditableContainer
                                  contentTextEditable
                                "
                              >
                                <div class="contentEditable">
                                  <p>Código De Acceso</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td height="30"></td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                class="
                                  contentEditableContainer
                                  contentTextEditable
                                "
                              >
                                <div class="contentEditable">
                                  <table
                                    width="100%"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tr>
                                      <td class="specbundle2">
                                        <table
                                          width="100%"
                                          border="0"
                                          cellspacing="1"
                                          cellpadding="20"
                                        >
                                          <tr>
                                            <td
                                              align="center"
                                              bgcolor="#444444"
                                              style="
                                                border-radius: 6px;
                                                -moz-border-radius: 6px;
                                                -webkit-border-radius: 6px;
                                                color: #ffffff;
                                                font-size: 18px;
                                              "
                                            >
                                              ${codigo}
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <td valign="top" class="specbundle3">
                                        <table
                                          width="100%"
                                          border="0"
                                          cellspacing="1"
                                          cellpadding="20"
                                        ></table>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td height="45"></td>
                          </tr>
                          <tr>
                            <td align="center">
                              <div
                                class="
                                  contentEditableContainer
                                  contentTextEditable
                                "
                              ></div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="50"></td>
                    </tr>
                    <tr>
                      <td colspan="3" height="45"></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
          <div
            class="movableContent"
            style="border: 0px; padding-top: 0px; position: relative"
          >
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              align="center"
              valign="top"
            >
              <tr>
                <td>
                  <table
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    valign="top"
                    class="MainContainer"
                  >
                    <tr>
                      <td>
                        <table
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          align="center"
                          valign="top"
                        >
                          <tr>
                            <td>
                              <table
                                width="600"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                align="center"
                                class="MainContainer"
                              >
                                <tr>
                                  <td height="10">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td
                                    style="border-bottom: 1px solid #dddddd"
                                  ></td>
                                </tr>
                                <tr>
                                  <td height="10">&nbsp;</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td valign="top" align="center">
                              <div
                                class="
                                  contentEditableContainer
                                  contentTextEditable
                                "
                              >
                                <div class="contentEditable">
                                  <p
                                    style="
                                      font-weight: bold;
                                      font-size: 13px;
                                      line-height: 30px;
                                    "
                                  >
                                    ${empresa}
                                  </p>
                                </div>
                              </div>
                              <div
                                class="
                                  contentEditableContainer
                                  contentTextEditable
                                "
                              >
                                <div class="contentEditable">
                                  <p
                                    style="
                                      color: #a8b0b6;
                                      font-size: 13px;
                                      line-height: 15px;
                                    "
                                  >
                                    ${direccion}
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td height="28">&nbsp;</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
  }
}