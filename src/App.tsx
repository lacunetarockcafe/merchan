import React from 'react';

const App: React.FC = () => {
  return (
    <div className="main-container">
      {/* Main Logo */}
      <img src="assets/logo.png" alt="La Cuneta Rock-Café Logo" className="logo-main" />

      <div className="rock-subtitle">
        AHORRA TUS TARJETAS Y CAMBIA POR MERCHAN
      </div>

      {/* Main Wood Frame Display */}
      <div className="wood-frame">
        {/* Rewards Row */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {/* MUG Section */}
          <div style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
            <img
              src="assets/mug.jpg"
              alt="La Cuneta Mug"
              style={{ width: '100%', maxWidth: '280px', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)', marginBottom: '1rem' }}
            />
            <div className="rock-subtitle" style={{ fontSize: '1.8rem' }}>3 TARJETAS = 1 TAZA</div>
          </div>

          {/* T-SHIRT Section */}
          <div style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
            <img
              src="assets/tshirt.png"
              alt="La Cuneta T-Shirt"
              style={{ width: '100%', maxWidth: '280px', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)', marginBottom: '1rem' }}
            />
            <div className="rock-subtitle" style={{ fontSize: '1.8rem' }}>5 TARJETAS = 1 CAMISETA</div>
          </div>
        </div>

        {/* Sealed Loyalty Card Implementation */}
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <img
            src="assets/card_sealed.jpg"
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
