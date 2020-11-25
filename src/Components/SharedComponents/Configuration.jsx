import { useRef } from 'react';
import { animatePara } from '../../helpers';
import '../../CSS/Configuration.css';

function Configuration() {
  const para = useRef(null);

  window.addEventListener('scroll', () => {
    if (para.current) animatePara(para.current);
  });

  return (
    <div className="configuration">
      <h2 className="configuration__title">Sample Title</h2>
      <p className="configuration__para" ref={para}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
        autem dicta dolor cum obcaecati tempora. Debitis eum, eligendi ab
        voluptatum rem quae sunt a neque, aliquam, accusamus esse consectetur
        aliquid.
      </p>
      <button className="configuration__btn btn-primary">
        Pogledajte Konfiguracije
      </button>
    </div>
  );
}

export default Configuration;
