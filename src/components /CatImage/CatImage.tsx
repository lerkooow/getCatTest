import s from "./CatImage.module.scss";

type CatImageProps = {
  catUrl: string;
};

export const CatImage = ({ catUrl }: CatImageProps) => {
  return (
    <div className={s.container}>
      {!catUrl ? <p className={s.loading}>Loading...</p> : <img src={catUrl} alt="cute cat" className={s.image} />}
    </div>
  );
};
