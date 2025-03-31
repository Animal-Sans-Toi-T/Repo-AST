import React from "react";

const MobileMap = () => {
return (
<div>
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2407.9103653544666!2d5.267472299999999!3d50.64962489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1041b4be4b731%3A0x1e8aac14195e5e44!2sAnimal%20Sans%20Toit!5e1!3m2!1sfr!2sbe!4v1743161047076!5m2!1sfr!2sbe"
    width="250"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Carte"
    ></iframe>
</div>
);
};

export default MobileMap;
