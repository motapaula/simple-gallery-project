export interface PhotoCard {
    title: {
      titlePic: string;
    };
    
    picture: {
      large: string;
    };
  }

const SinglePhoto = ({title, picture}: PhotoCard) => {
  return (
    <div>
        <img src={picture.large} alt={title.titlePic} />
        <h2>{title.titlePic}</h2>

    </div>
  )
}

export default SinglePhoto