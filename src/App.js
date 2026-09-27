import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/*Dein Code unter dieser Zeile  */}

      {/* Titel */}
      <h1 className="titel">Fachhochschule Nordwestschweiz</h1>

      {/* Container für Text und Box */}
      <section className="container">
        {/* Text */}
        <p className="einleitung">
          Dieser <b className="text_fett">Text</b> ist absoluter Schwachsinn und dient nur als <a href="https://de.wikipedia.org/wiki/Test" target="_blank" title="Test">Test</a>. Doch dieses Text ist noch zu kurz, also schreiben wir noch mehr <b className="gugus_fett">Gugus</b>. Gugus gsii, Gugus geblieben. Alle meine Entchen schwimmen auf dem See, schwimmen auf dem See, das Köpfchen haben sie im Wasser, das Schwänzchen in der Höhe.       
        </p>

        {/* Box */}
        <div className="box">
          {/* Box-Titel */}
          <h2 className="box_titel">Fachhochschule Nordwestschweiz</h2>
          {/* Bild */}
          <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/FHNW_Logo.svg/500px-FHNW_Logo.svg.png"
          alt="Logo der FHNW"
          width={200} height={46}/>
          {/* Tabelle */}
          <table>
            <tr>
              <td className="label">Gründung</td>
              <td>01. Januar 2006</td>
            </tr>
            <tr>
              <td className="label">Trägerschaft</td>
              <td><a href="https://de.wikipedia.org/wiki/Kanton_Aargau" target="_blank">Aargau</a>, <a href="https://de.wikipedia.org/wiki/Kanton_Basel-Landschaft" target="_blank">Basel-Landschaft</a>, ...</td>
            </tr>
            <tr>
              <td className="label">Ort</td>
              <td><a href="https://de.wikipedia.org/wiki/Klingnau" target="_blank">Klingau oder auch KC "Klingnau City"</a></td>
            </tr>
          </table>
        </div>
      </section>





        {/*Dein Code über dieser Zeile  */}
    </div>
  );
}
