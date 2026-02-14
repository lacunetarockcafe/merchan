import React from 'react';

const App: React.FC = () => {
  return (
    <div className="main-container">
      {/* Main Logo (Styled via CSS to be white) */}
      <img src="./assets/logo.png" alt="La Cuneta Rock-Café Logo" className="logo-main" />

      <div className="rock-subtitle">
        AHORRA TUS TARJETAS Y CAMBIA POR MERCHAN
      </div>

      {/* Main Wood Frame Display */}
      <div className="wood-frame">
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="./assets/mug.jpg"
              alt="La Cuneta Mug"
              style={{ width: '320px', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
            />
          </div>

          <div style={{ textAlign: 'left' }}>
            <div className="rock-subtitle" style={{ fontSize: '2.5rem' }}>3 TARJETAS = 1 JARRA</div>
          </div>
        </div>

        {/* Sealed Loyalty Card Implementation */}
        <div style={{ maxWidth: '650px', margin: '3rem auto' }}>
          <img
            src="./assets/card_sealed.jpg"
            alt="Tarjeta de Fidelización Sellada"
            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 15px 35px rgba(0,0,0,0.8)' }}
          />
        </div>
      </div>

      {/* Chalkboard Secondary Panel */}
      <div className="metal-panel">
        <div className="red-glow">
          ¡PRÓXIMAMENTE MÁS MERCHAN!
        </div>
        <div className="chalk-text" style={{ fontSize: '1.4rem', marginTop: '1.2rem' }}>
          ¡Estad atentos a nuestras redes para nuevos lanzamientos y sorpresas rockeras!
        </div>
      </div>

      <a
        href="https://www.instagram.com/lacunetarockcafe/?hl=es"
        target="_blank"
        rel="noopener noreferrer"
        className="insta-btn"
      >
        Síguenos en Instagram
      </a>

      <div style={{ marginTop: '3rem', color: '#888', fontFamily: 'monospace', letterSpacing: '1px' }}>
        C/ Pintor Velazquez nº12 Granada
      </div>
    </div>
  );
};

export default App;
