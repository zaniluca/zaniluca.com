import classNames from "classnames";

type DisclaimerProps = {
  className?: string;
};

const Disclaimer: React.FC<DisclaimerProps> = ({ className }) => {
  return (
    <p
      className={classNames(
        className,
        "max-w-screen-sm text-center text-xs font-normal text-neutral-400"
      )}
    >
      Autorizzo il trattamento dei miei dati personali presenti nel CV ai sensi
      dell’art. 13 d. lgs. 30 giugno 2003 n. 196 - “Codice in materia di
      protezione dei dati personali” e dell’art. 13 GDPR 679/16 - “Regolamento
      europeo sulla protezione dei dati personali”
    </p>
  );
};

export default Disclaimer;
