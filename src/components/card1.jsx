import React, { useEffect } from 'react';

const Card1 = ({ image, title, text, dynamicStyle }) => {
  useEffect(() => {
    // Importa dinámicamente la hoja de estilo CSS
    const importStyles = async () => {
      try {
        const styles = await import(`../styles/${dynamicStyle}.css`);
        styles.default.use();
      } catch (error) {
        console.error(`Error importing styles for ${dynamicStyle}:`, error);
      }
    };

    // Llama a la función de importación dinámica
    importStyles();

    // Limpia la hoja de estilo al desmontar el componente
    return () => {
      // Encuentra y deshabilita los estilos asociados al archivo CSS específico
      const styleElements = document.head.querySelectorAll(`link[href*="${dynamicStyle}.css"]`);
      styleElements.forEach((styleElement) => {
        styleElement.disabled = true;
      });
    };
  }, [dynamicStyle]);

  return (
    <div className={`triangle-container1 ${dynamicStyle}`}>
      <div className='containerglobal1'>
        <div className="text-container1">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="image-container1">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Card1;
